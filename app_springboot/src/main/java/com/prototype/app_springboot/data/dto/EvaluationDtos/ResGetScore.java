package com.prototype.app_springboot.data.dto.EvaluationDtos;

import com.prototype.app_springboot.data.dto.AuthDtos.UserInfoDto;
import com.prototype.app_springboot.data.dto.JudgeDtos.JudgeInfoDto;
import com.prototype.app_springboot.data.entity.*;
import lombok.Getter;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Getter
public class ResGetScore {
    private final List<UserInfoDto> user_info_list;
    private final List<EvaluationInfoDto> evaluation_info_list;
    private final Map<Integer, List<EvaluationDetailInfoDto>> evaluation_detail_info_list;
    private final List<JudgeInfoDto> judge_info_list;
    private final List<EvaluationCommentInfoDto> comment_list;
    private final List<EvaluationScoreDto> evaluation_score_list;

    public ResGetScore(PostInfo postInfo, List<EvaluationScore> evaluation_score_list) {
        this.user_info_list = evaluation_score_list.stream()
                .map(evaluationScore ->
                    new UserInfoDto(evaluationScore.getUserInfo())
                )
                .distinct()
                .toList();

        this.evaluation_info_list = postInfo.getEvaluationInfoList().stream()
                .map(EvaluationInfoDto::new)
                .toList();

        this.evaluation_detail_info_list = postInfo.getEvaluationInfoList().stream()
                .collect(Collectors.toMap(
                        EvaluationInfo::getId,
                        evaluationInfo -> evaluationInfo.getEvaluationDetailInfoList().stream()
                                .map(EvaluationDetailInfoDto::new)
                                .collect(Collectors.toList())
                ));

        this.judge_info_list = evaluation_score_list.stream()
                .map(evaluationScore ->
                        new JudgeInfoDto(evaluationScore.getJudgeInfo())
                )
                .distinct()
                .toList();

        this.comment_list = postInfo.getEvaluationCommentInfoList().stream()
                .map(EvaluationCommentInfoDto::new)
                .distinct()
                .toList();

        this.evaluation_score_list = evaluation_score_list.stream()
                .map(EvaluationScoreDto::new)
                .toList();
    }
}
