package com.prototype.app_springboot.data.dto;

import com.prototype.app_springboot.data.entity.FileInfo;
import com.prototype.app_springboot.data.type.ProgressStatusType;
import com.prototype.app_springboot.data.type.UploadType;
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
    private ProgressStatusType file_type;
    private UploadType file_extension;
    private LocalDateTime upload_datetime;

    public FileInfoDto(FileInfo fileInfo) {
        file_info_id = fileInfo.getId();
        post_id = fileInfo.getPostInfo().getId();
        user_info_id = fileInfo.getUserInfo().getUserId();
        path = fileInfo.getPath();
        file_title = fileInfo.getFileTitle();
        file_type = fileInfo.getProgressStatusType();
        upload_datetime = fileInfo.getUploadDatetime();
        file_extension = fileInfo.getFileExtension();
    }
}
