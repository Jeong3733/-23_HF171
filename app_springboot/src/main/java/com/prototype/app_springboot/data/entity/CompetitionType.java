package com.prototype.app_springboot.data.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class CompetitionType {
    @Id
    @ManyToOne
    @JoinColumn(name = "competition_id")
    private CompetitionInfo competitionInfo;
    private String type;

    @Builder
    public CompetitionType(CompetitionInfo competitionInfo, String type) {
        this.competitionInfo = competitionInfo;
        this.type = type;
    }
}
