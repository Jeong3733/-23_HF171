package com.prototype.app_springboot.data.dto.JudgeDtos;

import com.prototype.app_springboot.data.entity.JudgeInfo;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Getter
@NoArgsConstructor
public class JudgeInfoDto {
    private UUID judge_id;
    private int post_id;
    public JudgeInfoDto(JudgeInfo judgeInfo) {
        this.judge_id = judgeInfo.getId();
        this.post_id = judgeInfo.getPostInfo().getId();
    }
}
