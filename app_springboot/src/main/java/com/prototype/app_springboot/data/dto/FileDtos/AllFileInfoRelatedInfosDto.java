package com.prototype.app_springboot.data.dto.FileDtos;

import com.prototype.app_springboot.data.dto.FastApiDtos.PageContentDto;
import com.prototype.app_springboot.data.dto.PageDtos.PageInfoDto;
import com.prototype.app_springboot.data.entity.FileInfo;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.List;
import java.util.UUID;

@Getter
@NoArgsConstructor
@ToString
public class AllFileInfoRelatedInfosDto {
    private int file_id;
    private String user_id;
    private String file_title;
    private String file_extension;
    private UUID path;
    private String summary;
    private String upload_datetime;
    private List<FileResultInfoDto> file_result_info_list;
    private List<PageInfoDto> page_info_list;
    private PageContentDto page_content_list;

    public AllFileInfoRelatedInfosDto(FileInfo fileInfo, PageContentDto pageContentDto) {
        this.file_id = fileInfo.getId();
        this.user_id = fileInfo.getUserInfo().getUserId();
        this.file_title = fileInfo.getFileTitle();
        this.file_extension = fileInfo.getFileExtension();
        this.path = fileInfo.getPath();
        this.summary = fileInfo.getSummary();
        this.upload_datetime = fileInfo.getUploadDatetime().toString();
        this.file_result_info_list = fileInfo.getFileResultInfoList().stream()
                .map(FileResultInfoDto::new)
                .toList();
        this.page_info_list = fileInfo.getPageInfoList().stream()
                .map(PageInfoDto::new)
                .toList();
        this.page_content_list = pageContentDto;
    }
}
