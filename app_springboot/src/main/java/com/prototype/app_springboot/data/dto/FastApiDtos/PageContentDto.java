package com.prototype.app_springboot.data.dto.FastApiDtos;

import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@NoArgsConstructor
public class PageContentDto {
    private List<PageInfo> pageInfo;

    @Getter
    private static class PageInfo {
        private String pageId;
        private String pageContent;
    }

}
