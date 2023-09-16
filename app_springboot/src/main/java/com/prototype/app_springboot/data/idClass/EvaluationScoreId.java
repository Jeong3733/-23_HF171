package com.prototype.app_springboot.data.idClass;

import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.UUID;

@EqualsAndHashCode
@NoArgsConstructor
public class EvaluationScoreId implements Serializable {
    private UUID judgeInfo;
    private int postInfo;
    private int evaluationDetailInfo;
    private String userInfo;
}
