package com.prototype.app_springboot.data.repository;

import com.prototype.app_springboot.data.entity.EvaluationCommentInfo;
import com.prototype.app_springboot.data.idClass.EvaluationCommentInfoId;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EvaluationCommentInfoRepository extends JpaRepository<EvaluationCommentInfo, EvaluationCommentInfoId> {
}
