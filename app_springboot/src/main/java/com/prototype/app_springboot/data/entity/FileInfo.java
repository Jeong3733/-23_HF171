package com.prototype.app_springboot.data.entity;

import com.prototype.app_springboot.data.type.ProgressStatusType;
import com.prototype.app_springboot.data.type.UploadType;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class FileInfo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int file_id;

    private String file_title;

    @Enumerated(EnumType.STRING)
    private UploadType file_extension;

    private String path;

    private LocalDateTime upload_datetime;

    @Enumerated(EnumType.STRING)
    private ProgressStatusType progressStatusType;

    @OneToMany(mappedBy = "userUploadedFileInfo")
    private final List<CheckFile> checkUserUploadedFileList = new ArrayList<>();

    @OneToMany(mappedBy = "standardFileInfo")
    private final List<CheckFile> checkStandardFileList = new ArrayList<>();

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private UserInfo userInfo;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "schedule_id")
    private ScheduleInfo scheduleInfo;

    @Builder
    public FileInfo(int file_id, String file_title, UploadType file_extension, String path, LocalDateTime upload_datetime, ProgressStatusType progressStatusType, UserInfo userInfo) {
        this.file_id = file_id;
        this.file_title = file_title;
        this.file_extension = file_extension;
        this.path = path;
        this.upload_datetime = upload_datetime;
        this.progressStatusType = progressStatusType;
        this.userInfo = userInfo;
    }
}
