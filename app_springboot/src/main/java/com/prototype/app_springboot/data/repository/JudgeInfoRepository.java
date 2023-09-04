package com.prototype.app_springboot.data.repository;

import com.prototype.app_springboot.data.entity.JudgeInfo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface JudgeInfoRepository extends JpaRepository<JudgeInfo, UUID> {
    List<JudgeInfo> findAllByPostInfoId(int postId);
}
