package com.prototype.app_springboot.data.dto.EvaluationDtos;

import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Getter
@NoArgsConstructor
public class ReqGetScoreByFileAndJudge {
    private UUID judgeId;
    private int fileId;
}
