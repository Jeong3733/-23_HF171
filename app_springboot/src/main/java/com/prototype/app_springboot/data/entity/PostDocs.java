package com.prototype.app_springboot.data.entity;

import com.prototype.app_springboot.data.idClass.PostDocsId;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@EntityListeners(AuditingEntityListener.class)
@IdClass(PostDocsId.class)
public class PostDocs {
    @Id
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "post_id")
    PostInfo postInfo;

    @Id
    private UUID path;

    private String fileExtension;

    private String fileTitle;

    @CreatedDate
    private LocalDateTime uploadDatetime;

    @Builder
    public PostDocs(PostInfo postInfo, String fileExtension, UUID path, String fileTitle, LocalDateTime uploadDatetime) {
        this.postInfo = postInfo;
        this.fileExtension = fileExtension;
        this.path = path;
        this.fileTitle = fileTitle;
        this.uploadDatetime = uploadDatetime;
    }
}