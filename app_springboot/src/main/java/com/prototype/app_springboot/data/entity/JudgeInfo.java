package com.prototype.app_springboot.data.entity;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class JudgeInfo {
    @Id
    @Column(name = "judge_id")
    private UUID id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "post_id")
    private PostInfo postInfo;

    @Builder
    public JudgeInfo(UUID id, PostInfo postInfo) {
        this.id = id;
        this.postInfo = postInfo;
    }
}
