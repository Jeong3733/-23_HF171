package com.prototype.app_springboot.service;

import com.prototype.app_springboot.data.dto.FileDtos.CompFileAddRequestDto;
import com.prototype.app_springboot.data.dto.FastApiDtos.CompareResultOfFileDto;
import com.prototype.app_springboot.data.dto.FastApiDtos.PageInfoOfCompFileDto;
import com.prototype.app_springboot.data.entity.*;
import com.prototype.app_springboot.data.repository.*;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.io.FilenameUtils;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.net.URISyntaxException;
import java.util.List;
import java.util.Objects;
import java.util.UUID;

@Service
@Slf4j
public class FileService {
    private final AwsService awsService;
    private final FileInfoRepository fileInfoRepository;
    private final CompFileInfoRepository compFileInfoRepository;
    private final UserInfoRepository userInfoRepository;
    private final PostInfoRepository postInfoRepository;
    private final PageInfoRepository pageInfoRepository;
    private final CompPageInfoRepository compPageInfoRepository;
    private final FileResultInfoRepository fileResultInfoRepository;
    private final PageResultInfoRepository pageResultInfoRepository;
    private final FastApiService fastApiService;

    public FileService(AwsService awsService, FileInfoRepository fileInfoRepository, CompFileInfoRepository compFileInfoRepository, UserInfoRepository userInfoRepository, PostInfoRepository postInfoRepository, PageInfoRepository pageInfoRepository, CompPageInfoRepository compPageInfoRepository, FileResultInfoRepository fileResultInfoRepository, PageResultInfoRepository pageResultInfoRepository, FastApiService fastApiService) {
        this.awsService = awsService;
        this.fileInfoRepository = fileInfoRepository;
        this.compFileInfoRepository = compFileInfoRepository;
        this.userInfoRepository = userInfoRepository;
        this.postInfoRepository = postInfoRepository;
        this.pageInfoRepository = pageInfoRepository;
        this.compPageInfoRepository = compPageInfoRepository;
        this.fileResultInfoRepository = fileResultInfoRepository;
        this.pageResultInfoRepository = pageResultInfoRepository;
        this.fastApiService = fastApiService;
    }

    @Transactional
    public FileResultInfo getFileResultInfoListByFileId(int fileId) {
        return fileResultInfoRepository.findByFileInfoId(fileId);
    }

    @Transactional
    public FileInfo getFileInfoById(int fileId) {
        return fileInfoRepository.findById(fileId).orElseThrow(() -> {
            log.error("FileId의 : {}의 파일이 존재하지 않습니다.", fileId);
            throw new EntityNotFoundException("해당 FileId의 파일이 존재하지 않습니다.");
        });
    }

    @Transactional
    public void saveCompFile(MultipartFile compFile, CompFileAddRequestDto compFileAddRequestDto, String userId) throws URISyntaxException {
        UUID path = awsService.uploadFileListToS3(compFile);

        UserInfo userInfo = userInfoRepository.findById(userId)
                .orElseThrow(() -> {
                    log.error("UserId : {}의 유저가 존재하지 않습니다.", userId);
                    throw new UsernameNotFoundException("해당 유저를 찾을 수 없습니다.");
                });

        CompFileInfo compFileInfo = CompFileInfo.builder()
                .competitionName(compFileAddRequestDto.getCompetitionName())
                .link(compFileAddRequestDto.getLink())
                .depth1(compFileAddRequestDto.getDepth1())
                .depth2(compFileAddRequestDto.getDepth2())
                .depth3(compFileAddRequestDto.getDepth3())
                .depth4(compFileAddRequestDto.getDepth4())
                .userInfo(userInfo)
                .path(path)
                .fileExtension(Objects.requireNonNull(FilenameUtils.getExtension(compFile.getOriginalFilename())).toUpperCase())
                .fileTitle(FilenameUtils.getBaseName(compFile.getOriginalFilename()))
                .build();

        compFileInfoRepository.save(compFileInfo);

        PageInfoOfCompFileDto pageInfoOfCompFileDto = fastApiService.getPageInfoOfCompFile(compFileInfo);

        pageInfoOfCompFileDto.getPageInfo().forEach(pageInfoDto -> {
            CompPageInfo compPageInfo = CompPageInfo.builder()
                    .compFileInfo(compFileInfo)
                    .pageId(pageInfoDto.getPageId())
                    .pageNum(pageInfoDto.getPageNum())
                    .startIndex(pageInfoDto.getStartIndex())
                    .build();

            compPageInfoRepository.save(compPageInfo);
        });
    }

    @Transactional
    public void saveFile(MultipartFile file, int postId) throws URISyntaxException {
        PostInfo postInfo = postInfoRepository.findById(postId).orElseThrow(() -> {
            log.error("PostId의 : {}의 게시글이 존재하지 않습니다.", postId);
            throw new EntityNotFoundException("해당 PostId의 게시글이 존재하지 않습니다.");
        });

        UUID path = awsService.uploadFileListToS3(file);

        FileInfo fileInfo = FileInfo.builder()
                .postInfo(postInfo)
                .path(path)
                .fileExtension(Objects.requireNonNull(FilenameUtils.getExtension(file.getOriginalFilename())).toUpperCase())
                .fileTitle(FilenameUtils.getBaseName(file.getOriginalFilename()))
                .userInfo(postInfo.getUserInfo())
                .build();

        fileInfoRepository.save(fileInfo);

        CompareResultOfFileDto compareResultOfFileDto = fastApiService.getCompareResultOfFile(fileInfo);
        System.out.println(compareResultOfFileDto);
        compareResultOfFileDto.getPageInfo().forEach(pageInfo -> {
            System.out.println("PageInfo 에서의 pageId : " + pageInfo.getPageId());
        });
        compareResultOfFileDto.getPageResultInfo().forEach(pageResultInfoDto -> {
            System.out.println("PageResultInfo 에서의 pageId : " +pageResultInfoDto.getPageId());
        });

        FileInfo savedFileInfo = fileInfoRepository.findById(fileInfo.getId()).orElseThrow(() -> {
            log.error("FileId의 : {}의 FileInfo 가 존재하지 않습니다.", fileInfo.getId());
            throw new EntityNotFoundException("해당 FileId 의 FileInfo 가 존재하지 않습니다.");
        });
        savedFileInfo.setSummary(compareResultOfFileDto.getFileSummary());

        compareResultOfFileDto.getPageInfo().forEach(pageInfoDto -> {
                    PageInfo pageInfo = PageInfo.builder()
                            .pageId(pageInfoDto.getPageId())
                            .fileInfo(savedFileInfo)
                            .pageNum(pageInfoDto.getPageNum())
                            .startIndex(pageInfoDto.getStartIndex())
                            .summary(pageInfoDto.getSummary())
                            .build();

                    pageInfoRepository.save(pageInfo);
                }
        );

        compareResultOfFileDto.getPageResultInfo().forEach(pageResultInfoDto -> {
            PageInfo pageInfo = pageInfoRepository.findByPageId(pageResultInfoDto.getPageId()).orElseThrow(() -> {
                log.error("PageId의 : {}의 PageInfo 가 존재하지 않습니다.", pageResultInfoDto.getPageId());
                throw new EntityNotFoundException("해당 PageId의 PageInfo 가 존재하지 않습니다.");
            });
            CompPageInfo compPageInfo = compPageInfoRepository.findByPageId(pageResultInfoDto.getCompPageId()).orElseThrow(() -> {
                log.error("CompPageId의 : {}의 CompPageInfo 가 존재하지 않습니다.", pageResultInfoDto.getCompPageId());
                throw new EntityNotFoundException("해당 CompPageId의 CompPageInfo 가 존재하지 않습니다.");
            });

            PageResultInfo pageResultInfo = PageResultInfo.builder()
                    .pageInfo(pageInfo)
                    .compPageInfo(compPageInfo)
                    .score(pageResultInfoDto.getScore())
                    .report(pageResultInfoDto.getReport())
                    .build();

            pageResultInfoRepository.save(pageResultInfo);
        });

//        compareResultOfFileDto.getFileResultInfo().forEach(fileResultInfoDto -> {
//            CompFileInfo compFileInfo = compFileInfoRepository.findById(fileResultInfoDto.getCompFileId()).orElseThrow(() -> {
//                log.error("CompFileId : {} 의 CompFileInfo 가 존재하지 않습니다.", fileResultInfoDto.getCompFileId());
//                throw new EntityNotFoundException("해당 CompFileId의 CompFileInfo 가 존재하지 않습니다.");
//            });
//
//            FileResultInfo fileResultInfo = FileResultInfo.builder()
//                    .fileInfo(savedFileInfo)
//                    .compFileInfo(compFileInfo)
//                    .score(fileResultInfoDto.getScore())
//                    .report(fileResultInfoDto.getReport())
//                    .build();
//
//            fileResultInfoRepository.save(fileResultInfo);
//        });
    }

    @Transactional
    public List<FileInfo> getFileInfoListByPostId(int postId) {
        return fileInfoRepository.findAllByPostInfoId(postId)
                .orElseThrow(() -> {
                    log.error("PostId의 : {}의 파일이 존재하지 않습니다.", postId);
                    throw new EntityNotFoundException("해당 PostId의 파일이 존재하지 않습니다.");
                });
    }

    @Transactional
    public List<CompFileInfo> getAllCompFileInfoList() {
        return compFileInfoRepository.findAll();
    }
}
