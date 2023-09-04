package com.prototype.app_springboot.data.repository;

import com.prototype.app_springboot.data.entity.JudgeInfo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface JudgeInfoRepository extends JpaRepository<JudgeInfo, UUID> {
    List<JudgeInfo> findAllByPostInfoId(int postId);
    Boolean existsByIdAndPostInfoId(UUID judgeId, int postId);
}
