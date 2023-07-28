package com.prototype.app_springboot.data.entity;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class PostDocs {
    @Id
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "post_id")
    PostInfo postInfo;
    private String fileTitle;
    private UUID docsPath;
    @Builder
    public PostDocs(PostInfo postInfo, String fileTitle, UUID docsPath) {
        this.postInfo = postInfo;
        this.fileTitle = fileTitle;
        this.docsPath = docsPath;
    }
}
