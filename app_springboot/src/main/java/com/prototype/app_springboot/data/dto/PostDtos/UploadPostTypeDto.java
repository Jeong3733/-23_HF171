package com.prototype.app_springboot.data.dto.PostDtos;

import com.prototype.app_springboot.data.entity.UploadPostType;
import lombok.Getter;

@Getter
public class UploadPostTypeDto {
    private int post_info_id;
    private String upload_type;

    public UploadPostTypeDto(UploadPostType uploadPostType) {
        this.post_info_id = uploadPostType.getPostInfo().getId();
        this.upload_type = uploadPostType.getUploadType();
    }
}
