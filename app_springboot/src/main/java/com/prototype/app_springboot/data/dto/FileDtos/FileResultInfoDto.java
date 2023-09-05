package com.prototype.app_springboot.data.dto.FileDtos;

import com.prototype.app_springboot.data.entity.FileResultInfo;
import lombok.Getter;

@Getter
public class FileResultInfoDto {
    private int file_id;
    private CompFileDto comp_file;
    private double score;
    private String report;

    public FileResultInfoDto(FileResultInfo fileResultInfo) {
        this.file_id = fileResultInfo.getFileInfo().getId();
        this.comp_file = new CompFileDto(fileResultInfo.getCompFileInfo());
        this.score = fileResultInfo.getScore();
        this.report = fileResultInfo.getReport();
    }
}
