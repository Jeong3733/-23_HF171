package com.prototype.app_springboot.data.dto.JudgeDtos;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class ReqCheckJudgePost {
    private String judgeId;
    private int postId;
}
