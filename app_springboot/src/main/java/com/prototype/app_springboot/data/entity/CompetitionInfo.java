package com.prototype.app_springboot.data.entity;

import com.prototype.app_springboot.data.type.CompetitionState;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class CompetitionInfo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int competitionId;

    private String competitionName;

    private UUID competitionImage;

    private UUID competitionReadme;

    private String competitionDescription;

    @Enumerated(EnumType.STRING)
    private CompetitionState competitionState;

    private LocalDateTime competitionStartDate;

    private LocalDateTime competitionEndDate;

    @OneToMany(mappedBy = "competitionInfo")
    private final List<CompetitionType> competitionTypeList = new ArrayList<CompetitionType>();

    @OneToMany(mappedBy = "competitionInfo")
    private final List<CompetitionDocs> competitionDocsList = new ArrayList<CompetitionDocs>();

    @OneToMany(mappedBy = "competitionInfo")
    private final List<TeamInfo> teamInfoList = new ArrayList<TeamInfo>();

    @OneToMany(mappedBy = "competitionInfo")
    private final List<UserByCompetition> userByCompetitionList = new ArrayList<UserByCompetition>();

    @OneToMany(mappedBy = "competitionInfo")
    private final List<PostInfo> postInfoList = new ArrayList<PostInfo>();

    @Builder
    public CompetitionInfo(int competitionId, String competitionName, UUID competitionImage, UUID competitionReadme, String competitionDescription, CompetitionState competitionState, LocalDateTime competitionStartDate, LocalDateTime competitionEndDate) {
        this.competitionId = competitionId;
        this.competitionName = competitionName;
        this.competitionImage = competitionImage;
        this.competitionReadme = competitionReadme;
        this.competitionDescription = competitionDescription;
        this.competitionState = competitionState;
        this.competitionStartDate = competitionStartDate;
        this.competitionEndDate = competitionEndDate;
    }
}
