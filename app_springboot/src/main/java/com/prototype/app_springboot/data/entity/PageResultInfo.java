package com.prototype.app_springboot.data.entity;

import com.prototype.app_springboot.data.idClass.PageResultInfoId;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@IdClass(PageResultInfoId.class)
public class PageResultInfo {
    @Id
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="page_id")
    private PageInfo pageInfo;

    @Id
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="comp_page_id")
    private CompPageInfo compPageInfo;

    private double score;

    @Column(columnDefinition = "TEXT")
    private String report;

    @Builder
    public PageResultInfo(PageInfo pageInfo, CompPageInfo compPageInfo, double score, String report) {
        this.pageInfo = pageInfo;
        this.compPageInfo = compPageInfo;
        this.score = score;
        this.report = report;
    }
}
