package com.prototype.app_springboot.data.entity;

import com.prototype.app_springboot.data.idClass.FileResultInfoId;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@IdClass(FileResultInfoId.class)
public class FileResultInfo {
    @Id
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="file_id")
    private FileInfo fileInfo;

    @Id
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="comp_file_id")
    private CompFileInfo compFileInfo;

    private double score;

    @Column(columnDefinition = "TEXT")
    private String report;

    @Builder
    public FileResultInfo(FileInfo fileInfo, CompFileInfo compFileInfo, double score, String report) {
        this.fileInfo = fileInfo;
        this.compFileInfo = compFileInfo;
        this.score = score;
        this.report = report;
    }
}
