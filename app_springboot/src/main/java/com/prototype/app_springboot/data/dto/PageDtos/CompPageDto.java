package com.prototype.app_springboot.data.dto.PageDtos;

import com.prototype.app_springboot.data.entity.CompPageInfo;
import lombok.Getter;

@Getter
public class CompPageDto {
    private String page_id;
    private int comp_file_id;
    private int page_num;
    private int start_index;

    public CompPageDto(CompPageInfo compPageInfo) {
        this.page_id = compPageInfo.getPageId();
        this.page_num = compPageInfo.getPageNum();
        this.start_index = compPageInfo.getStartIndex();
        this.comp_file_id = compPageInfo.getCompFileInfo().getId();
    }
}
