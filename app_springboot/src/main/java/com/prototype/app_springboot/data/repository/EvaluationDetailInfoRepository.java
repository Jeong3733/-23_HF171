package com.prototype.app_springboot.data.repository;

import com.prototype.app_springboot.data.entity.EvaluationDetailInfo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EvaluationDetailInfoRepository extends JpaRepository<EvaluationDetailInfo, Integer> {
    List<EvaluationDetailInfo> findAllByEvaluationInfoPostInfoId(int postId);
}
