package com.prototype.app_springboot.data.entity;

import com.prototype.app_springboot.data.type.CompetitionType;
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
public class CompetitionInfo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int competition_id;

    private String competition_name;

    private CompetitionType competition_type;

    @OneToMany(mappedBy = "competitionInfo")
    private final List<TeamInfo> teamInfoList = new ArrayList<TeamInfo>();

    @OneToMany(mappedBy = "competitionInfo")
    private final List<UserCompetition> userByCompetitionList = new ArrayList<UserCompetition>();

    @OneToMany(mappedBy = "competitionInfo")
    private final List<ScheduleInfo> scheduleInfoList = new ArrayList<ScheduleInfo>();

    @Builder
    public CompetitionInfo(int competition_id, String competition_name, CompetitionType competition_type) {
        this.competition_id = competition_id;
        this.competition_name = competition_name;
        this.competition_type = competition_type;
    }
}
