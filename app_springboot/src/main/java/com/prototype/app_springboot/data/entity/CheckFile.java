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
    @JoinColumn(name = "file_id")
    private FileInfo userUploadedFileInfo;

    @Id
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "check_file_id")
    private CheckFileInfo standardFileInfo;

    @Id
    @ManyToOne
    @JoinColumn(name = "db_version")
    private VectorDbInfo vectorDBInfo;

    private double score;

    @Builder
    public CheckFile(FileInfo userUploadedFileInfo, CheckFileInfo standardFileInfo, VectorDbInfo vectorDBInfo, double score) {
        this.userUploadedFileInfo = userUploadedFileInfo;
        this.standardFileInfo = standardFileInfo;
        this.vectorDBInfo = vectorDBInfo;
        this.score = score;
    }
}