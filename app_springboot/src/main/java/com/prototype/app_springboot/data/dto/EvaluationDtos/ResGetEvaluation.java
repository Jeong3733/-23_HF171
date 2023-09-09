package com.prototype.app_springboot.data.dto.EvaluationDtos;

import com.prototype.app_springboot.data.entity.EvaluationInfo;
import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Getter
public class ResGetEvaluation {
    private final List<EvaluationInfoDto> evaluation_info_list;

    @Builder
    public ResGetEvaluation(List<EvaluationInfo> evaluation_info_list) {
        this.evaluation_info_list = evaluation_info_list.stream()
                .map(EvaluationInfoDto::new)
                .toList();
    }
}
