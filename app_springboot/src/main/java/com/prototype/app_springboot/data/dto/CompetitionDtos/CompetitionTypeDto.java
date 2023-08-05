package com.prototype.app_springboot.data.dto.CompetitionDtos;

import com.prototype.app_springboot.data.entity.CompetitionType;
import lombok.Getter;

@Getter
public class CompetitionTypeDto {
    private int competition_info_id;
    private String type;

    public CompetitionTypeDto(CompetitionType competitionType) {
        competition_info_id = competitionType.getCompetitionInfo().getId();
        type = competitionType.getType();
    }
}
