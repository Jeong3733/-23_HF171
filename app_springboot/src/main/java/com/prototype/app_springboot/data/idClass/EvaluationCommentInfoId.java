package com.prototype.app_springboot.data.idClass;

import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.UUID;

@EqualsAndHashCode
@NoArgsConstructor
public class EvaluationCommentInfoId implements Serializable {
    private UUID judgeInfo;
    private int postInfo;
    private String userInfo;
}
