package com.prototype.app_springboot.data.dto.EvaluationDtos;

import com.prototype.app_springboot.data.entity.EvaluationScore;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Getter
@NoArgsConstructor
public class EvaluationScoreDto {
    private int evaluation_detail_id;
    private int post_id;
    private UUID judge_id;
    private String user_id;
    private int score;

    public EvaluationScoreDto(EvaluationScore evaluationScore) {
        this.evaluation_detail_id = evaluationScore.getEvaluationDetailInfo().getId();
        this.post_id = evaluationScore.getPostInfo().getId();
        this.judge_id = evaluationScore.getJudgeInfo().getId();
        this.user_id = evaluationScore.getUserInfo().getUserId();
        this.score = evaluationScore.getScore();
    }
}
