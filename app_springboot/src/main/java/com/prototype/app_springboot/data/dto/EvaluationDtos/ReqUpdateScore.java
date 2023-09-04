package com.prototype.app_springboot.data.dto.EvaluationDtos;

import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@NoArgsConstructor
public class ReqUpdateScore {
    private List<EvaluationScoreDto> evaluation_score_list;
}
