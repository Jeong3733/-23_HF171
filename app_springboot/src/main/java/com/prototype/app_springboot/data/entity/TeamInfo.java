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
public class TeamInfo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int teamId;

    private String teamName;

    @ManyToOne
    @JoinColumn(name = "competition_id")
    private CompetitionInfo competitionInfo;

    @OneToMany(mappedBy = "teamInfo")
    private final List<UserByCompetition> userByCompetitionList = new ArrayList<UserByCompetition>();

    @Builder
    public TeamInfo(int teamId, String teamName, CompetitionInfo competitionInfo) {
        this.teamId = teamId;
        this.teamName = teamName;
        this.competitionInfo = competitionInfo;
    }
}
