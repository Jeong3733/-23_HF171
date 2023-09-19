package com.prototype.app_springboot.service;

import com.prototype.app_springboot.data.dto.PostDtos.AddPostRequestDto;
import com.prototype.app_springboot.data.entity.*;
import com.prototype.app_springboot.data.repository.*;
import com.prototype.app_springboot.data.type.BoardType;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.io.FilenameUtils;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Objects;

@Slf4j
@Service
public class PostService {
    private final PostInfoRepository postInfoRepository;
    private final UserInfoRepository userInfoRepository;
    private final UploadPostTypeRepository uploadPostTypeRepository;
    private final CompetitionInfoRepository competitionInfoRepository;
    private final PostDocsRepository postDocsRepository;
    private final UserByCompetitionRepository userByCompetitionRepository;
    private final AwsService awsService;

    public PostService(PostInfoRepository postInfoRepository, UserInfoRepository userInfoRepository, UploadPostTypeRepository uploadPostTypeRepository, CompetitionInfoRepository competitionInfoRepository, PostDocsRepository postDocsRepository, UserByCompetitionRepository userByCompetitionRepository, AwsService awsService) {
        this.postInfoRepository = postInfoRepository;
        this.userInfoRepository = userInfoRepository;
        this.uploadPostTypeRepository = uploadPostTypeRepository;
        this.competitionInfoRepository = competitionInfoRepository;
        this.postDocsRepository = postDocsRepository;
        this.userByCompetitionRepository = userByCompetitionRepository;
        this.awsService = awsService;
    }

    @Transactional
    public PostInfo getPostInfoByPostId(int postId) {
        return postInfoRepository.findById(postId)
                .orElseThrow(() ->
                        new IllegalArgumentException("해당 PostId의 게시글이 존재하지 않습니다.")
                );
    }

    @Transactional
    public PostInfo getPostInfoByPostIdAndUserId(int postId, String userId) {
        PostInfo postInfo = postInfoRepository.findById(postId)
                .orElseThrow(() -> {
                    log.error("PostId : {}의 게시글이 존재하지 않습니다.", postId);
                    throw new EntityNotFoundException("해당 PostId의 게시글이 존재하지 않습니다.");
                });

        int competitionId = postInfo.getCompetitionInfo().getId();

        boolean isExists = userByCompetitionRepository.existsByUserInfo_UserIdAndCompetitionInfoId(userId, competitionId);
        if (isExists) {
            return postInfo;
        } else {
            log.error("UserId : {}의 유저가 CompetitionId : {}의 대회에 참가하지 않았습니다.", userId, competitionId);
            return null;
        }
    }

    @Transactional
    public List<PostInfo> getPostInfoListByCompetitionIdAndBoardType(int competitionId, String boardType) {
        return postInfoRepository.findAllByCompetitionInfoIdAndBoardTypeOrderByCreatedDateDesc(competitionId, BoardType.valueOf(boardType.toUpperCase()));
    }

    @Transactional
    public void addPostInfoAndPostDocs(MultipartFile multipartFile, AddPostRequestDto addPostRequestDto, String userId) {
        PostInfo postInfo = addPostInfo(addPostRequestDto, userId);
        if (multipartFile != null) {
            addPostDocs(multipartFile, postInfo);
        }
    }

    @Transactional
    public PostInfo addPostInfo(AddPostRequestDto addPostRequestDto, String userId) {
        CompetitionInfo competitionInfo = competitionInfoRepository.findById(addPostRequestDto.getCompetitionId())
                .orElseThrow(() ->
                        new EntityNotFoundException("해당 CompetitionId의 대회가 존재하지 않습니다.")
                );

        UserInfo userInfo = userInfoRepository.findById(userId)
                .orElseThrow(() -> {
                    log.error("UserId : {}의 유저가 존재하지 않습니다.", userId);
                    throw new UsernameNotFoundException("해당 유저를 찾을 수 없습니다.");
                });

        PostInfo postInfo = PostInfo.builder()
                .competitionInfo(competitionInfo)
                .userInfo(userInfo)
                .boardType(BoardType.valueOf(addPostRequestDto.getBoardType()))
                .contents(addPostRequestDto.getContents())
                .title(addPostRequestDto.getTitle())
                .build();

        postInfoRepository.save(postInfo);

        addPostRequestDto.getFileTypeList().forEach(fileType -> {
            UploadPostType uploadPostType = UploadPostType.builder()
                    .postInfo(postInfo)
                    .uploadType(fileType)
                    .build();

            uploadPostTypeRepository.save(uploadPostType);
        });

        return postInfo;
    }

    @Transactional
    public void addPostDocs(MultipartFile multipartfile, PostInfo postInfo) {
        PostDocs postDocs = PostDocs.builder()
                .postInfo(postInfo)
                .path(awsService.uploadFileListToS3(multipartfile))
                .fileExtension(Objects.requireNonNull(FilenameUtils.getExtension(multipartfile.getOriginalFilename())).toUpperCase())
                .fileTitle(multipartfile.getOriginalFilename())
                .build();

        postDocsRepository.save(postDocs);
    }
}
