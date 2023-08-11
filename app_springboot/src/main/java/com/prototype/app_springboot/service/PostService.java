package com.prototype.app_springboot.service;

import com.prototype.app_springboot.data.entity.PostInfo;
import com.prototype.app_springboot.data.repository.PostInfoRepository;
import com.prototype.app_springboot.data.type.BoardType;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostService {
    private final PostInfoRepository postInfoRepository;

    public PostService(PostInfoRepository postInfoRepository) {
        this.postInfoRepository = postInfoRepository;
    }

    public PostInfo getPostInfoByPostId(int postId) {
        return postInfoRepository.findById(postId)
                .orElseThrow(() ->
                        new IllegalArgumentException("해당 PostId의 게시글이 존재하지 않습니다.")
                );
    }

    public PostInfo getPostInfoByPostIdAndUserId(int postId, String userId) {
        return postInfoRepository.findByIdAndUserInfoUserId(postId, userId);
    }

    public List<PostInfo> getPostInfoListByCompetitionIdAndBoardType(int competitionId, String boardType) {
        return postInfoRepository.findAllByCompetitionInfoIdAndBoardType(competitionId, BoardType.valueOf(boardType.toUpperCase()));
    }
}
