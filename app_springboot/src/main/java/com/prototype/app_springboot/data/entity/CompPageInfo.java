package com.prototype.app_springboot.data.entity;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class CompPageInfo {
    @Id
    private String pageId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "file_id")
    private CompFileInfo compFileInfo;

    private int pageNum;

    private int startIndex;

    @OneToMany(mappedBy = "compPageInfo")
    private final List<PageResultInfo> pageResultInfoList = new ArrayList<PageResultInfo>();

    @Builder
    public CompPageInfo(String pageId, CompFileInfo compFileInfo, int pageNum, int startIndex) {
        this.pageId = pageId;
        this.compFileInfo = compFileInfo;
        this.pageNum = pageNum;
        this.startIndex = startIndex;
    }
}
