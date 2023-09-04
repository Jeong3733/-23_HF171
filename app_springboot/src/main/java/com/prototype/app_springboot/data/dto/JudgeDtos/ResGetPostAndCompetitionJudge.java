package com.prototype.app_springboot.data.dto.JudgeDtos;

import com.prototype.app_springboot.data.entity.JudgeInfo;
import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Getter
public class ResGetPostAndCompetitionJudge {
    private final List<JudgeInfo> judge_info_list;
    @Builder
    public ResGetPostAndCompetitionJudge(List<JudgeInfo> judge_info_list) {
        this.judge_info_list = judge_info_list;
    }
}
