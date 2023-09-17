package com.prototype.app_springboot.data.repository;

import com.prototype.app_springboot.data.entity.EvaluationDetailInfo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EvaluationDetailInfoRepository extends JpaRepository<EvaluationDetailInfo, Integer> {
}
