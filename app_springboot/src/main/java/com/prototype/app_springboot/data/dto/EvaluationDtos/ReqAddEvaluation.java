package com.prototype.app_springboot.data.dto.EvaluationDtos;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class ReqAddEvaluation {
    private int post_id;
    private String name;
    private int max;
}
