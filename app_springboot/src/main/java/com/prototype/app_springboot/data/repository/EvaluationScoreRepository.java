package com.prototype.app_springboot.data.repository;

import com.prototype.app_springboot.data.entity.EvaluationScore;
import com.prototype.app_springboot.data.idClass.EvaluationScoreId;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface EvaluationScoreRepository extends JpaRepository<EvaluationScore, EvaluationScoreId> {
    List<EvaluationScore> findAllByPostInfoId(int postId);
    List<EvaluationScore> findAllByPostInfoIdAndJudgeInfoId(int postId, UUID judgeId);
    Optional<EvaluationScore> findByPostInfoIdAndEvaluationInfoIdAndJudgeInfoId(int postId, int evalId, UUID judgeId);
}
