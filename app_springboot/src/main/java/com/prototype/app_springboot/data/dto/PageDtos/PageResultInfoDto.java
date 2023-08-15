package com.prototype.app_springboot.data.dto.PageDtos;

import com.prototype.app_springboot.data.entity.PageResultInfo;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Getter
@NoArgsConstructor
@ToString
public class PageResultInfoDto {
    private String page_id;
    private String comp_page_id;
    private double score;
    private String report;

    public PageResultInfoDto(PageResultInfo pageResultInfo) {
        this.page_id = pageResultInfo.getPageInfo().getPageId();
        this.comp_page_id = pageResultInfo.getCompPageInfo().getPageId();
        this.score = pageResultInfo.getScore();
        this.report = pageResultInfo.getReport();
    }
}
