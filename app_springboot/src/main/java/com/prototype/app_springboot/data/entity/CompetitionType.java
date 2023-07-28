package com.prototype.app_springboot.data.entity;

import com.prototype.app_springboot.data.idClass.CompetitionTypeId;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@IdClass(CompetitionTypeId.class)
public class CompetitionType {
    @Id
    @ManyToOne
    @JoinColumn(name = "competition_id")
    private CompetitionInfo competitionInfo;
    @Id
    private String type;

    @Builder
    public CompetitionType(CompetitionInfo competitionInfo, String type) {
        this.competitionInfo = competitionInfo;
        this.type = type;
    }
}
