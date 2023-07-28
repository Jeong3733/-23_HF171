package com.prototype.app_springboot.data.entity;

import com.prototype.app_springboot.data.type.UploadType;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class UploadPostType {
    @Id
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "post_id")
    PostInfo postInfo;
    @Enumerated(EnumType.STRING)
    UploadType uploadType;

    @Builder
    public UploadPostType(PostInfo postInfo, UploadType uploadType) {
        this.postInfo = postInfo;
        this.uploadType = uploadType;
    }
}
