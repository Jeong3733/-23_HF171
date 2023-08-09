package com.prototype.app_springboot.data.dto.CompetitionDtos;

import com.prototype.app_springboot.data.entity.UserByCompetition;
import com.prototype.app_springboot.data.type.RoleType;
import lombok.Getter;

@Getter
public class UserByCompetitionDto {
    private int competition_id;
    private int team_id;
    private String user_id;
    private RoleType role_type;

    public UserByCompetitionDto(UserByCompetition userByCompetition) {
        this.competition_id = userByCompetition.getCompetitionInfo().getId();
        this.team_id = userByCompetition.getTeamInfo() != null ? userByCompetition.getTeamInfo().getId() : -1;
        this.user_id = userByCompetition.getUserInfo().getUserId();
        this.role_type = userByCompetition.getRoleType();
    }
}
