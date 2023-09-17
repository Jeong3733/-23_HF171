package com.prototype.app_springboot.data.dto.EvaluationDtos;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class ReqUpdateComment {
    private String user_id;
    private String judge_id;
    private int post_id;
    private String comment;
}