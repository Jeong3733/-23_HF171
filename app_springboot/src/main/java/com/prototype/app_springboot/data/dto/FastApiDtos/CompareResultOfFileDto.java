package com.prototype.app_springboot.data.dto.FastApiDtos;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.List;

@Getter
@NoArgsConstructor
@ToString
public class CompareResultOfFileDto {

    private String fileSummary;

    private List<PageInfo> pageInfo;

    private List<PageResultInfo> pageResultInfo;

    private List<FileResultInfo> fileResultInfo;

    @Getter
    @ToString
    public static class PageInfo {
        private int fileId;
        private String pageId;
        private int pageNum;
        private int startIndex;
        private String summary;
    }

    @Getter
    @ToString
    public static class PageResultInfo {
        private String pageId;
        private String compPageId;
        private double score;
        private String report;
    }

    @Getter
    @ToString
    public static class FileResultInfo {
        private int fileId;
        private int compFileId;
        private double score;
        private String report;
    }
}
