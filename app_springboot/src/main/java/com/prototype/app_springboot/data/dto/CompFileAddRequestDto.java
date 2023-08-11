package com.prototype.app_springboot.data.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Getter
@NoArgsConstructor
@ToString
public class CompFileAddRequestDto {
    private String competitionName;
    private String link;
    private String depth1;
    private String depth2;
    private String depth3;
    private String depth4;
}
