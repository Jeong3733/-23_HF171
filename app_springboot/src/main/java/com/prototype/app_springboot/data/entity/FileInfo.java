package com.prototype.app_springboot.data.entity;

import com.prototype.app_springboot.data.type.ProgressStatusType;
import com.prototype.app_springboot.data.type.UploadType;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class FileInfo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "file_id")
    private int id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private UserInfo userInfo;

    private String fileTitle;

    @Enumerated(EnumType.STRING)
    private UploadType fileExtension;

    private UUID path;
    @CreatedDate
    private LocalDateTime uploadDatetime;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "post_id")
    private PostInfo postInfo;

    private ProgressStatusType progressStatusType;

    @OneToMany(mappedBy = "userUploadedFileInfo")
    private List<CheckFile> checkFileList = new ArrayList<CheckFile>();

    @Builder
    public FileInfo(int id, UserInfo userInfo, String fileTitle, UploadType fileExtension, UUID path, LocalDateTime uploadDatetime, PostInfo postInfo, ProgressStatusType progressStatusType, List<CheckFile> checkFileList) {
        this.id = id;
        this.userInfo = userInfo;
        this.fileTitle = fileTitle;
        this.fileExtension = fileExtension;
        this.path = path;
        this.uploadDatetime = uploadDatetime;
        this.postInfo = postInfo;
        this.progressStatusType = progressStatusType;
        this.checkFileList = checkFileList;
    }
}
