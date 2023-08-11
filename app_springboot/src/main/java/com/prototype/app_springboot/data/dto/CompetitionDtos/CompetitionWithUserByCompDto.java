package com.prototype.app_springboot.data.dto.CompetitionDtos;

import com.prototype.app_springboot.data.entity.CompetitionInfo;
import com.prototype.app_springboot.data.entity.UserByCompetition;
import com.prototype.app_springboot.data.type.CompetitionState;
import com.prototype.app_springboot.data.type.RoleType;
import lombok.Getter;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Getter
public class CompetitionWithUserByCompDto {
    private int competition_info_id;
    private String competition_name;
    private UUID competition_image;
    private String competition_readme;
    private String competition_description;
    private CompetitionState competition_state;
    private LocalDateTime competition_start_date;
    private LocalDateTime competition_end_date;
    private List<CompetitionTypeDto> competition_type_list;
    private List<CompetitionDocsDto> competition_docs_list;
    private String user_id;
    private Integer team_id;
    private RoleType role_type;

    public CompetitionWithUserByCompDto(CompetitionInfo competitionInfo, UserByCompetition userByCompetition) {
        competition_info_id = competitionInfo.getId();
        competition_name = competitionInfo.getCompetitionName();
        competition_image = competitionInfo.getCompetitionImage();
        competition_readme = competitionInfo.getCompetitionReadme();
        competition_description = competitionInfo.getCompetitionDescription();
        competition_state = competitionInfo.getCompetitionState();
        competition_start_date = competitionInfo.getCompetitionStartDate();
        competition_end_date = competitionInfo.getCompetitionEndDate();
        competition_type_list = competitionInfo.getCompetitionTypeList().stream()
                .map(CompetitionTypeDto::new)
                .collect(Collectors.toList());
        competition_docs_list = competitionInfo.getCompetitionDocsList().stream()
                .map(CompetitionDocsDto::new)
                .collect(Collectors.toList());

        if (userByCompetition == null) {
            user_id = null;
            team_id = null;
            role_type = null;
            return;
        }
        user_id = userByCompetition.getUserInfo().getUserId();

        if (team_id == null){
            team_id = null;
        } else {
            team_id = userByCompetition.getTeamInfo().getId();
        }
        role_type = userByCompetition.getRoleType();
    }
}
