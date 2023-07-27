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
import java.util.UUID;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class CheckFileInfo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int file_id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private UserInfo userInfo;

    private String link;

    private String fileTitle;

    private UploadType fileExtension;

    private UUID path;

    @CreatedDate
    private LocalDateTime uploadDatetime;

    @OneToMany(mappedBy = "standardFileInfo")
    private final List<CheckFile> checkFileList = new ArrayList<CheckFile>();

    @Builder
    public CheckFileInfo(int file_id, UserInfo userInfo, String link, String fileTitle, UploadType fileExtension, UUID path, LocalDateTime uploadDatetime) {
        this.file_id = file_id;
        this.userInfo = userInfo;
        this.link = link;
        this.fileTitle = fileTitle;
        this.fileExtension = fileExtension;
        this.path = path;
        this.uploadDatetime = uploadDatetime;
    }
}
