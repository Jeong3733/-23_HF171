package com.prototype.app_springboot.data.entity;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class PageInfo {
    @Id
    private String pageId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "file_id")
    private FileInfo fileInfo;

    private String pageNum;

    private String startIndex;

    @Column(columnDefinition = "TEXT")
    private String summary;

    @Builder
    public PageInfo(String pageId, FileInfo fileInfo, String pageNum, String startIndex, String summary) {
        this.pageId = pageId;
        this.fileInfo = fileInfo;
        this.pageNum = pageNum;
        this.startIndex = startIndex;
        this.summary = summary;
    }
}
