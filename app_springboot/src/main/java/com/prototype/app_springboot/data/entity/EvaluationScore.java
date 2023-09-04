package com.prototype.app_springboot.data.entity;


import com.prototype.app_springboot.data.idClass.EvaluationScoreId;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@IdClass(EvaluationScoreId.class)
public class EvaluationScore {
    @Id
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "judge_id")
    private JudgeInfo judgeInfo;

    @Id
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "post_id")
    private PostInfo postInfo;

    @Id
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "evaluation_id")
    private EvaluationInfo evaluationInfo;

    @Id
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private UserInfo userInfo;

    private int score;

    private String comment;

    @Builder
    public EvaluationScore(JudgeInfo judgeInfo, PostInfo postInfo, EvaluationInfo evaluationInfo, UserInfo userInfo, int score, String comment) {
        this.judgeInfo = judgeInfo;
        this.postInfo = postInfo;
        this.evaluationInfo = evaluationInfo;
        this.userInfo = userInfo;
        this.score = score;
        this.comment = comment;
    }
}
