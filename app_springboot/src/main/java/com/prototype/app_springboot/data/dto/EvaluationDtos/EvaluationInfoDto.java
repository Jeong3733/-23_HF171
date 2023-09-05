package com.prototype.app_springboot.data.dto.EvaluationDtos;

import com.prototype.app_springboot.data.entity.EvaluationInfo;
import lombok.Getter;

@Getter
public class EvaluationInfoDto {
    private int evaluation_id;
    private int post_id;
    private String name;
    private int max;
    public EvaluationInfoDto(EvaluationInfo evaluationInfo) {
        this.evaluation_id = evaluationInfo.getId();
        this.post_id = evaluationInfo.getPostInfo().getId();
        this.name = evaluationInfo.getName();
        this.max = evaluationInfo.getMax();
    }
}
