package com.prototype.app_springboot.data.entity;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@EntityListeners(AuditingEntityListener.class)
public class FileInfo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "file_id")
    private int id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private UserInfo userInfo;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "post_id")
    private PostInfo postInfo;

    private String fileTitle;

    private String fileExtension;

    private UUID path;

    @Setter
    @Column(columnDefinition = "TEXT")
    private String summary;

    @CreatedDate
    private LocalDateTime uploadDatetime;

    @OneToMany(mappedBy = "fileInfo")
    private final List<PageInfo> pageInfoList = new ArrayList<PageInfo>();

    @OneToMany(mappedBy = "fileInfo")
    private final List<FileResultInfo> fileResultInfoList = new ArrayList<FileResultInfo>();

    @Builder
    public FileInfo(int id, UserInfo userInfo, String fileTitle, String fileExtension, UUID path, LocalDateTime uploadDatetime, PostInfo postInfo, String summary) {
        this.id = id;
        this.userInfo = userInfo;
        this.fileTitle = fileTitle;
        this.fileExtension = fileExtension;
        this.path = path;
        this.uploadDatetime = uploadDatetime;
        this.postInfo = postInfo;
        this.summary = summary;
    }
}
