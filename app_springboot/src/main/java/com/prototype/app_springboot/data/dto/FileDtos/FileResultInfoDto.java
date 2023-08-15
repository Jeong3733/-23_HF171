package com.prototype.app_springboot.data.dto.FileDtos;

import com.prototype.app_springboot.data.entity.FileResultInfo;

public class FileResultInfoDto {
    private int file_id;
    private int comp_file_id;
    private double score;
    private String report;

    public FileResultInfoDto(FileResultInfo fileResultInfo) {
        this.file_id = fileResultInfo.getFileInfo().getId();
        this.comp_file_id = fileResultInfo.getCompFileInfo().getId();
        this.score = fileResultInfo.getScore();
        this.report = fileResultInfo.getReport();
    }
}
