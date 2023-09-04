package com.prototype.app_springboot.data.repository;

import com.prototype.app_springboot.data.entity.EvaluationInfo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EvaluationInfoRepository extends JpaRepository<EvaluationInfo, Integer> {
    List<EvaluationInfo> findAllByPostInfoId(int postId);
}
