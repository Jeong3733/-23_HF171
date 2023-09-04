package com.prototype.app_springboot.data.dto.EvaluationDtos;

import com.prototype.app_springboot.data.entity.EvaluationScore;
import lombok.Getter;

import java.util.List;
import java.util.stream.Collectors;

@Getter
public class ResGetScore {
    private final List<EvaluationScoreDto> evaluation_score_list;

    public ResGetScore(List<EvaluationScore> evaluation_score_list) {
        this.evaluation_score_list = evaluation_score_list.stream()
                .map(EvaluationScoreDto::new)
                .collect(Collectors.toList());
    }
}
