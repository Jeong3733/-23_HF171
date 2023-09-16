package com.prototype.app_springboot.data.entity;

import com.prototype.app_springboot.data.idClass.EvaluationCommentInfoId;
import jakarta.persistence.*;
import lombok.Getter;

@Entity
@Getter
@IdClass(EvaluationCommentInfoId.class)
public class EvaluationCommentInfo {
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
    @JoinColumn(name = "user_id")
    private UserInfo userInfo;

    @Column(columnDefinition = "TEXT")
    String comment;

    public EvaluationCommentInfo(JudgeInfo judgeInfo, PostInfo postInfo, UserInfo userInfo, String comment) {
        this.judgeInfo = judgeInfo;
        this.postInfo = postInfo;
        this.userInfo = userInfo;
        this.comment = comment;
    }
}
