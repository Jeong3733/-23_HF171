package com.prototype.app_springboot.service;

import com.prototype.app_springboot.data.dto.PostDtos.AddPostRequestDto;
import com.prototype.app_springboot.data.entity.CompetitionInfo;
import com.prototype.app_springboot.data.entity.PostDocs;
import com.prototype.app_springboot.data.entity.PostInfo;
import com.prototype.app_springboot.data.entity.UserInfo;
import com.prototype.app_springboot.data.repository.PostDocsRepository;
import com.prototype.app_springboot.data.repository.PostInfoRepository;
import com.prototype.app_springboot.data.repository.UserInfoRepository;
import com.prototype.app_springboot.data.repository.competition.CompetitionInfoRepository;
import com.prototype.app_springboot.data.type.BoardType;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import org.apache.commons.io.FilenameUtils;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Objects;

@Service
public class PostService {
    private final PostInfoRepository postInfoRepository;
    private final UserInfoRepository userInfoRepository;
    private final CompetitionInfoRepository competitionInfoRepository;
    private final PostDocsRepository postDocsRepository;
    private final AwsService awsService;

    public PostService(PostInfoRepository postInfoRepository, UserInfoRepository userInfoRepository, CompetitionInfoRepository competitionInfoRepository, PostDocsRepository postDocsRepository, AwsService awsService) {
        this.postInfoRepository = postInfoRepository;
        this.userInfoRepository = userInfoRepository;
        this.competitionInfoRepository = competitionInfoRepository;
        this.postDocsRepository = postDocsRepository;
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
        return postInfoRepository.findByIdAndUserInfoUserId(postId, userId);
    }

    @Transactional
    public List<PostInfo> getPostInfoListByCompetitionIdAndBoardType(int competitionId, String boardType) {
        return postInfoRepository.findAllByCompetitionInfoIdAndBoardType(competitionId, BoardType.valueOf(boardType.toUpperCase()));
    }

    @Transactional
    public void addPostInfoAndPostDocs(MultipartFile multipartFile, AddPostRequestDto addPostRequestDto, String userId) {
        PostInfo postInfo = addPostInfo(addPostRequestDto, userId);
        addPostDocs(multipartFile, postInfo);
    }

    @Transactional
    public PostInfo addPostInfo(AddPostRequestDto addPostRequestDto, String userId) {
        CompetitionInfo competitionInfo = competitionInfoRepository.findById(addPostRequestDto.getCompetitionId())
                .orElseThrow(() ->
                        new EntityNotFoundException("해당 CompetitionId의 대회가 존재하지 않습니다.")
                );
        UserInfo userInfo = userInfoRepository.findByUserId(userId);
        PostInfo postInfo = PostInfo.builder()
                .competitionInfo(competitionInfo)
                .userInfo(userInfo)
                .boardType(BoardType.valueOf(addPostRequestDto.getBoardType()))
                .contents(addPostRequestDto.getTitle())
                .title(addPostRequestDto.getTitle())
                .build();

        postInfoRepository.save(postInfo);
        return postInfo;
    }

    @Transactional
    public void addPostDocs(MultipartFile multipartfile, PostInfo postInfo) {
        PostDocs postDocs = PostDocs.builder()
                .postInfo(postInfo)
                .path(awsService.uploadFileListToS3(multipartfile))
                .fileExtension(Objects.requireNonNull(FilenameUtils.getExtension(multipartfile.getOriginalFilename())).toUpperCase())
                .fileTitle(multipartfile.getName())
                .build();

        postDocsRepository.save(postDocs);
    }
}
