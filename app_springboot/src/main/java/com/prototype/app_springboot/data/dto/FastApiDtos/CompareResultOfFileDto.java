package com.prototype.app_springboot.data.dto.FastApiDtos;

import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@NoArgsConstructor
public class CompareResultOfFileDto {

    private String fileSummary;

    private List<PageInfo> pageInfo;

    private List<PageResultInfo> pageResultInfo;

    private List<FileResultInfo> fileResultInfo;

    @Getter
    public static class PageInfo {
        private String fileId;
        private String pageId;
        private int pageNum;
        private int startIndex;
        private String summary;
    }

    @Getter
    public static class PageResultInfo {
        private String pageId;
        private String compPageId;
        private double score;
        private String report;
    }

    @Getter
    public static class FileResultInfo {
        private int fileId;
        private int compFileId;
        private double score;
        private String report;
    }
}
