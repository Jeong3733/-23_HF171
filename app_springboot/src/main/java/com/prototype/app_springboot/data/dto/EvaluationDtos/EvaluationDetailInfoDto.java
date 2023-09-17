package com.prototype.app_springboot.data.dto.EvaluationDtos;

import com.prototype.app_springboot.data.entity.EvaluationDetailInfo;
import lombok.Getter;

import java.util.List;
import java.util.stream.Collectors;

@Getter
public class EvaluationDetailInfoDto {
    private int evaluation_detail_id;
    private int evaluation_id;
    private String name;
    private int max;
    private List<EvaluationScoreDto> evaluation_score_list;

    public EvaluationDetailInfoDto(EvaluationDetailInfo evaluationDetailInfo) {
        this.evaluation_detail_id = evaluationDetailInfo.getId();
        this.evaluation_id = evaluationDetailInfo.getEvaluationInfo().getId();
        this.name = evaluationDetailInfo.getName();
        this.max = evaluationDetailInfo.getMax();
        this.evaluation_score_list = evaluationDetailInfo.getEvaluationScoreList().stream()
                .map(EvaluationScoreDto::new)
                .collect(Collectors.toList());
    }
}
