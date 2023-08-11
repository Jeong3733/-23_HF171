package com.prototype.app_springboot.service;

import com.prototype.app_springboot.data.dto.CompFileAddRequestDto;
import com.prototype.app_springboot.data.entity.CompFileInfo;
import com.prototype.app_springboot.data.entity.FileInfo;
import com.prototype.app_springboot.data.entity.PostInfo;
import com.prototype.app_springboot.data.repository.CompFileInfoRepository;
import com.prototype.app_springboot.data.repository.FileInfoRepository;
import com.prototype.app_springboot.data.repository.PostInfoRepository;
import com.prototype.app_springboot.data.repository.UserInfoRepository;
import jakarta.transaction.Transactional;
import org.apache.commons.io.FilenameUtils;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Objects;

@Service
public class FileService {
    private final AwsService awsService;
    private final FileInfoRepository fileInfoRepository;
    private final CompFileInfoRepository compFileInfoRepository;
    private final UserInfoRepository userInfoRepository;
    private final PostInfoRepository postInfoRepository;

    public FileService(AwsService awsService, FileInfoRepository fileInfoRepository, CompFileInfoRepository compFileInfoRepository, UserInfoRepository userInfoRepository, PostInfoRepository postInfoRepository) {
        this.awsService = awsService;
        this.fileInfoRepository = fileInfoRepository;
        this.compFileInfoRepository = compFileInfoRepository;
        this.userInfoRepository = userInfoRepository;
        this.postInfoRepository = postInfoRepository;
    }

    @Transactional
    public void saveCompFile(MultipartFile compFile, CompFileAddRequestDto compFileAddRequestDto, String userId) {
        CompFileInfo compFileInfo = CompFileInfo.builder()
                .competitionName(compFileAddRequestDto.getCompetitionName())
                .link(compFileAddRequestDto.getLink())
                .depth1(compFileAddRequestDto.getDepth1())
                .depth2(compFileAddRequestDto.getDepth2())
                .depth3(compFileAddRequestDto.getDepth3())
                .depth4(compFileAddRequestDto.getDepth4())
                .userInfo(userInfoRepository.findByUserId(userId))
                .path(awsService.uploadFileListToS3(compFile))
                .fileExtension(Objects.requireNonNull(FilenameUtils.getExtension(compFile.getOriginalFilename())).toUpperCase())
                .fileTitle(FilenameUtils.getBaseName(compFile.getOriginalFilename()))
               .build();

        compFileInfoRepository.save(compFileInfo);
    }

    @Transactional
    public void saveFile(MultipartFile file, int postId) {
        PostInfo postInfo = postInfoRepository.findById(postId).orElseThrow(() ->
                new IllegalArgumentException("해당 PostId의 게시글이 존재하지 않습니다.")
        );

        // TODO: 나중에 summary 도 받아와야한다.
        FileInfo fileInfo = FileInfo.builder()
                .postInfo(postInfo)
                .path(awsService.uploadFileListToS3(file))
                .fileExtension(Objects.requireNonNull(FilenameUtils.getExtension(file.getOriginalFilename())).toUpperCase())
                .fileTitle(FilenameUtils.getBaseName(file.getOriginalFilename()))
                .userInfo(postInfo.getUserInfo())
                .build();

        fileInfoRepository.save(fileInfo);
    }

    @Transactional
    public List<FileInfo> getFileInfoListByPostId(int postId) {
        return fileInfoRepository.findAllByPostInfoId(postId)
                .orElseThrow(() ->
                        new IllegalArgumentException("해당 PostId의 파일이 존재하지 않습니다.")
                );
    }

    @Transactional
    public List<CompFileInfo> getAllCompFileInfoList() {
        return compFileInfoRepository.findAll();
    }
}
