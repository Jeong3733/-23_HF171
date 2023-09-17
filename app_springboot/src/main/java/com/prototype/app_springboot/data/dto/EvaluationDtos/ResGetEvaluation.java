package com.prototype.app_springboot.data.dto.EvaluationDtos;

import com.prototype.app_springboot.data.entity.EvaluationInfo;
import lombok.Builder;
import lombok.Getter;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Getter
public class ResGetEvaluation {
    private final List<EvaluationInfoDto> evaluation_info_list;
    private final Map<Integer,List< EvaluationDetailInfoDto>> evaluation_detail_info_list;

    @Builder
    public ResGetEvaluation(List<EvaluationInfo> evaluation_info_list) {
        this.evaluation_info_list = evaluation_info_list.stream()
                .map(EvaluationInfoDto::new)
                .toList();

        this.evaluation_detail_info_list = evaluation_info_list.stream()
                .collect(Collectors.toMap(
                        EvaluationInfo::getId,
                        evaluationInfo -> evaluationInfo.getEvaluationDetailInfoList().stream()
                                .map(EvaluationDetailInfoDto::new)
                                .collect(Collectors.toList())
                ));
    }
}
