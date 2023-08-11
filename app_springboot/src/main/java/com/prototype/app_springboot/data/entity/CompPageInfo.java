package com.prototype.app_springboot.data.entity;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class CompPageInfo {
    @Id
    private String pageId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "file_id")
    private CompFileInfo compFileInfo;

    private String pageNum;

    private String startIndex;

    @Builder
    public CompPageInfo(String pageId, CompFileInfo compFileInfo, String pageNum, String startIndex) {
        this.pageId = pageId;
        this.compFileInfo = compFileInfo;
        this.pageNum = pageNum;
        this.startIndex = startIndex;
    }
}