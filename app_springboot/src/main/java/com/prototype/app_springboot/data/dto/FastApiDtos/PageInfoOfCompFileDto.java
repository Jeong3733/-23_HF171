package com.prototype.app_springboot.data.dto.FastApiDtos;

import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@NoArgsConstructor
public class PageInfoOfCompFileDto {
    private List<PageInfo> pageInfo;

    @Getter
    public static class PageInfo {
        private int fileId;
        private String pageId;
        private int pageNum;
        private int startIndex;
    }
}
