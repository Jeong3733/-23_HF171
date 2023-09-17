package com.prototype.app_springboot.data.dto.EvaluationDtos;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class ReqAddEvaluationDetail {
    private int evaluationId;
    private String name;
    private int max;
}
