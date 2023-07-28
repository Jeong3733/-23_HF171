package com.prototype.app_springboot.data.entity;

import com.prototype.app_springboot.data.idClass.UserByCompetitionId;
import com.prototype.app_springboot.data.type.RoleType;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@IdClass(UserByCompetitionId.class)
public class UserByCompetition {
    @Id
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private UserInfo userInfo;

    @Id
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "competition_id", nullable = false)
    private CompetitionInfo competitionInfo;

    @Id
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "team_id")
    private TeamInfo teamInfo;

    @Enumerated(EnumType.STRING)
    private RoleType roleType;

    @Builder
    public UserByCompetition(UserInfo userInfo, CompetitionInfo competitionInfo, TeamInfo teamInfo, RoleType roleType) {
        this.userInfo = userInfo;
        this.competitionInfo = competitionInfo;
        this.teamInfo = teamInfo;
        this.roleType = roleType;
    }
}
