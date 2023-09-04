package com.prototype.app_springboot.data.entity;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class PageInfo {
    @Id
    private String pageId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "file_id")
    private FileInfo fileInfo;

    private int pageNum;

    private int startIndex;

    @Column(columnDefinition = "TEXT")
    private String summary;

    @OneToMany(mappedBy = "pageInfo")
    private final List<PageResultInfo> pageResultInfoList = new java.util.ArrayList<PageResultInfo>();

    @Builder
    public PageInfo(String pageId, FileInfo fileInfo, int pageNum, int startIndex, String summary) {
        this.pageId = pageId;
        this.fileInfo = fileInfo;
        this.pageNum = pageNum;
        this.startIndex = startIndex;
        this.summary = summary;
    }
}
