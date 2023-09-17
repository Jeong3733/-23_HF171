package com.prototype.app_springboot.data.dto.EvaluationDtos;

import com.prototype.app_springboot.data.entity.EvaluationCommentInfo;
import lombok.Getter;

import java.util.UUID;

@Getter
public class EvaluationCommentInfoDto {
    private UUID judge_id;
    private int post_id;
    private String user_id;
    private String comment;

    public EvaluationCommentInfoDto(EvaluationCommentInfo evaluationCommentInfo) {
        this.judge_id = evaluationCommentInfo.getJudgeInfo().getId();
        this.post_id = evaluationCommentInfo.getPostInfo().getId();
        this.user_id = evaluationCommentInfo.getUserInfo().getUserId();
        this.comment = evaluationCommentInfo.getComment();
    }
}
