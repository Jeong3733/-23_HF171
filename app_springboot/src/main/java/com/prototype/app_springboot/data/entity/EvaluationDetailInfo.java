package com.prototype.app_springboot.data.entity;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class EvaluationDetailInfo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "evaluation_detail_id")
    private int id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "evaluation_id")
    private EvaluationInfo evaluationInfo;

    private String name;

    private int score;

    private int max;

    @OneToMany(mappedBy = "evaluationDetailInfo")
    private final List<EvaluationScore> evaluationScoreList = new ArrayList<EvaluationScore>();

    @PostPersist
    @PostUpdate
    public void updateEvaluationInfoMax() {
        EvaluationInfo evaluationInfo = getEvaluationInfo();
        if (evaluationInfo != null) {
            int totalMax = evaluationInfo.getEvaluationDetailInfoList().stream()
                    .mapToInt(EvaluationDetailInfo::getMax)
                    .sum();
            evaluationInfo.setMax(totalMax);
        }
    }

    @Builder
    public EvaluationDetailInfo(int id, EvaluationInfo evaluationInfo, String name, int score, int max) {
        this.id = id;
        this.evaluationInfo = evaluationInfo;
        this.name = name;
        this.score = score;
        this.max = max;
    }
}
