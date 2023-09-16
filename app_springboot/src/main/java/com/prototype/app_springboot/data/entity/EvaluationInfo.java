package com.prototype.app_springboot.data.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class EvaluationInfo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "evaluation_id")
    private int id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "post_id")
    private PostInfo postInfo;

    private String name;

    @Setter
    private int max;

    @OneToMany(mappedBy = "evaluationInfo")
    private final List<EvaluationDetailInfo> evaluationDetailInfoList = new ArrayList<EvaluationDetailInfo>();

    @Builder
    public EvaluationInfo(int id, PostInfo postInfo, String name, int max) {
        this.id = id;
        this.postInfo = postInfo;
        this.name = name;
        this.max = max;
    }
}
