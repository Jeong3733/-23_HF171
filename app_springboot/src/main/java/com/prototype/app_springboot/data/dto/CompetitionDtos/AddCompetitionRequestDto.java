package com.prototype.app_springboot.data.dto.CompetitionDtos;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonSetter;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Getter
@NoArgsConstructor
@ToString
public class AddCompetitionRequestDto {
    private String competitionName;
    private Map<String, Boolean> competitionType;
    private String competitionDescription;
    private String competitionDateStart;
    private String competitionDateEnd;
    private String competitionReadme;
    @JsonIgnore
    private List<String> competitionTypeList;

    @JsonSetter("competitionType")
    public void setCompetitionType(Map<String, Boolean> competitionType) {
        this.competitionTypeList = competitionType.entrySet().stream()
                // true 인 것들만 get
                .filter(Map.Entry::getValue)
                // true 인 것들의 key 들을 get
                .map(Map.Entry::getKey)
                .collect(Collectors.toList());
    }
}
