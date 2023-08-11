package com.prototype.app_springboot.data.repository;

import com.prototype.app_springboot.data.entity.PostInfo;
import com.prototype.app_springboot.data.type.BoardType;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PostInfoRepository extends JpaRepository<PostInfo, Integer> {
    List<PostInfo> findAllByCompetitionInfoIdAndBoardType(int competitionId, BoardType boardType);

    PostInfo findByIdAndUserInfoUserId(int postId, String userId);
}
