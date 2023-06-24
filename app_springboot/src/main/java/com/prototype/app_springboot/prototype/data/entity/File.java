package com.prototype.app_springboot.prototype.data.entity;

import com.prototype.app_springboot.prototype.data.type.ExtensionType;
import com.prototype.app_springboot.prototype.data.type.ProgressStatusType;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class File {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int file_id;

    private String file_title;

    @Enumerated(EnumType.STRING)
    private ExtensionType file_extension;

    private String path;

    private Timestamp upload_datetime;

    @Enumerated(EnumType.STRING)
    private ProgressStatusType progressStatusType;

    @OneToMany(mappedBy = "file")
    private final List<UserFile> userList = new ArrayList<UserFile>();

    @OneToMany(mappedBy = "file")
    private final List<CheckInfo> checkList = new ArrayList<CheckInfo>();

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "competition_id")
    private CompetitionInfo competitionInfo;

    @Builder
    public File(int file_id, String file_title, ExtensionType file_extension, String path, Timestamp upload_datetime, ProgressStatusType progressStatusType, CompetitionInfo competitionInfo) {
        this.file_id = file_id;
        this.file_title = file_title;
        this.file_extension = file_extension;
        this.path = path;
        this.upload_datetime = upload_datetime;
        this.progressStatusType = progressStatusType;
        this.competitionInfo = competitionInfo;
    }
}
