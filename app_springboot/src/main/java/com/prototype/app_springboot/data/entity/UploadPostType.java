package com.prototype.app_springboot.data.entity;

import com.prototype.app_springboot.data.idClass.UploadPostTypeId;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@IdClass(UploadPostTypeId.class)
public class UploadPostType {
    @Id
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "post_id")
    private PostInfo postInfo;

    @Id
    private String uploadType;

    @Builder
    public UploadPostType(PostInfo postInfo, String uploadType) {
        this.postInfo = postInfo;
        this.uploadType = uploadType;
    }
}
