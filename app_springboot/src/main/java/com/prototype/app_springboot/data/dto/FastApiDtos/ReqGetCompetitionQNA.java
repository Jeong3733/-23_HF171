package com.prototype.app_springboot.data.dto.FastApiDtos;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class ReqGetCompetitionQNA {
    private int competition_id;
    private String query;
}
