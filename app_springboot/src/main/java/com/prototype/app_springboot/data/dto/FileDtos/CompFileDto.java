package com.prototype.app_springboot.data.dto.FileDtos;

import com.prototype.app_springboot.data.entity.CompFileInfo;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
public class CompFileDto {
    private int comp_file_id;
    private String competition_name;
    private String file_extension;
    private String file_title;
    private String user_id;
    private String depth1;
    private String depth2;
    private String depth3;
    private String depth4;
    private String link;
    private String path;
    private LocalDateTime upload_datetime;

    public CompFileDto(CompFileInfo compFileInfo) {
        this.comp_file_id = compFileInfo.getId();
        this.competition_name = compFileInfo.getCompetitionName();
        this.file_extension = compFileInfo.getFileExtension();
        this.file_title = compFileInfo.getFileTitle();
        this.user_id = compFileInfo.getUserInfo().getUserId();
        this.depth1 = compFileInfo.getDepth1();
        this.depth2 = compFileInfo.getDepth2();
        this.depth3 = compFileInfo.getDepth3();
        this.depth4 = compFileInfo.getDepth4();
        this.link = compFileInfo.getLink();
        this.path = compFileInfo.getPath().toString();
        this.upload_datetime = compFileInfo.getUploadDatetime();
    }
}
