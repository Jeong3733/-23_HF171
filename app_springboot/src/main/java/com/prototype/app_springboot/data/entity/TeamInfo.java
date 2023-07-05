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
    private int team_id;

    private String team_name;

    @OneToMany(mappedBy = "teamInfo")
    private final List<UserCompetition> userByCompetitionList = new ArrayList<>();

    @ManyToOne
    @JoinColumn(name = "competition_id")
    private CompetitionInfo competitionInfo;

    @Builder
    public TeamInfo(int team_id, String team_name, CompetitionInfo competitionInfo) {
        this.team_id = team_id;
        this.team_name = team_name;
        this.competitionInfo = competitionInfo;
    }
}
