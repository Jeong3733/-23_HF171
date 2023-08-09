package com.prototype.app_springboot.data.dto.CompetitionDtos;

import com.prototype.app_springboot.data.entity.UserByCompetition;
import com.prototype.app_springboot.data.type.RoleType;
import com.prototype.app_springboot.data.type.SocialType;
import com.prototype.app_springboot.data.type.SystemRoleType;
import lombok.Getter;

@Getter
public class UserInfoWithUserByCompDto {
    private int competition_id;
    private int team_id;
    private String user_id;
    private RoleType role_type;
    private String email;
    private String user_name;
    private SocialType social;
    private SystemRoleType system_role_type;
    public UserInfoWithUserByCompDto(UserByCompetition userByCompetition) {
        this.competition_id = userByCompetition.getCompetitionInfo().getId();
        this.team_id = userByCompetition.getTeamInfo() != null ? userByCompetition.getTeamInfo().getId() : -1;
        this.user_id = userByCompetition.getUserInfo().getUserId();
        this.role_type = userByCompetition.getRoleType();
        this.email = userByCompetition.getUserInfo().getEmail();
        this.user_name = userByCompetition.getUserInfo().getUserName();
        this.social = userByCompetition.getUserInfo().getSocial();
        this.system_role_type = userByCompetition.getUserInfo().getRole();
    }
}
