package com.prototype.app_springboot.data.dto.FileDtos;

import com.prototype.app_springboot.data.entity.FileInfo;
import lombok.Getter;

import java.time.LocalDateTime;
import java.util.UUID;

@Getter
public class FileInfoDto {
    private int file_info_id;
    private int post_id;
    private String user_info_id;
    private UUID path;
    private String file_title;
    private String summary;
    private String file_extension;
    private LocalDateTime upload_datetime;

    public FileInfoDto(FileInfo fileInfo) {
        file_info_id = fileInfo.getId();
        post_id = fileInfo.getPostInfo().getId();
        user_info_id = fileInfo.getUserInfo().getUserId();
        path = fileInfo.getPath();
        file_title = fileInfo.getFileTitle();
        summary = fileInfo.getSummary();
        upload_datetime = fileInfo.getUploadDatetime();
        file_extension = fileInfo.getFileExtension();
    }
}
