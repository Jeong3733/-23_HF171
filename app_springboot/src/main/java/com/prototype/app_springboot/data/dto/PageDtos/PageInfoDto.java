package com.prototype.app_springboot.data.dto.PageDtos;

import com.prototype.app_springboot.data.entity.PageInfo;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.List;

@Getter
@NoArgsConstructor
@ToString
public class PageInfoDto {
    private String page_id;
    private int file_id;
    private int page_num;
    private int start_index;
    private String summary;
    private List<PageResultInfoDto> page_result_info_list;

    public PageInfoDto(PageInfo pageInfo) {
        this.page_id = pageInfo.getPageId();
        this.file_id = pageInfo.getFileInfo().getId();
        this.page_num = pageInfo.getPageNum();
        this.start_index = pageInfo.getStartIndex();
        this.summary = pageInfo.getSummary();
        this.page_result_info_list = pageInfo.getPageResultInfoList().stream()
                .map(PageResultInfoDto::new)
                .toList();
    }
}
