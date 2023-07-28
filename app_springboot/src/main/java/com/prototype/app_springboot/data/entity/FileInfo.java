package com.prototype.app_springboot.data.entity;

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

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class FileInfo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int fileId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private UserInfo userInfo;

    private String fileTitle;

    @Enumerated(EnumType.STRING)
    private UploadType fileExtension;

    private String path;

    @CreatedDate
    private LocalDateTime uploadDatetime;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "post_id")
    private PostInfo postInfo;

    @OneToMany(mappedBy = "userUploadedFileInfo")
    private List<CheckFile> checkFileList = new ArrayList<CheckFile>();

    @Builder
    public FileInfo(int fileId, UserInfo userInfo, String fileTitle, UploadType fileExtension, String path, LocalDateTime uploadDatetime, PostInfo postInfo, List<CheckFile> checkFileList) {
        this.fileId = fileId;
        this.userInfo = userInfo;
        this.fileTitle = fileTitle;
        this.fileExtension = fileExtension;
        this.path = path;
        this.uploadDatetime = uploadDatetime;
        this.postInfo = postInfo;
        this.checkFileList = checkFileList;
    }
}
