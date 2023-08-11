package com.prototype.app_springboot.data.dto.CompetitionDtos;

import com.prototype.app_springboot.data.entity.CompetitionDocs;
import lombok.Getter;

import java.util.UUID;

@Getter
public class CompetitionDocsDto {
    private int competition_info_id;
    private UUID docs_path;
    private String file_title;

    public CompetitionDocsDto(CompetitionDocs competitionDocs) {
        competition_info_id = competitionDocs.getCompetitionInfo().getId();
        docs_path = competitionDocs.getPath();
        file_title = competitionDocs.getFileTitle();
    }
}
