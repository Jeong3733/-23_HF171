package com.prototype.app_springboot.data.entity;

import com.prototype.app_springboot.data.idClass.CheckFileId;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@IdClass(CheckFileId.class)
public class CheckFile {
    @Id
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "check_id")
    private CheckInfo checkInfo;

    @Id
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "file_id")
    private FileInfo userUploadedFileInfo;

    @Id
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "file_id")
    private FileInfo standardFileInfo;

    private double score;

    @Builder
    public CheckFile(CheckInfo checkInfo, FileInfo userUploadedFileInfo, FileInfo standardFileInfo, double score) {
        this.checkInfo = checkInfo;
        this.userUploadedFileInfo = userUploadedFileInfo;
        this.standardFileInfo = standardFileInfo;
        this.score = score;
    }
}
