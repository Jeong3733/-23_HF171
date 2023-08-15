package com.prototype.app_springboot.data.dto.PostDtos;

import com.prototype.app_springboot.data.dto.FileDtos.FileInfoDto;
import com.prototype.app_springboot.data.entity.PostInfo;
import com.prototype.app_springboot.data.type.BoardType;
import lombok.Getter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
public class PostInfoWithPostTypeDto {
    private int post_info_id;
    private String user_info_id;
    private int competition_id;
    private BoardType board_type;
    private String title;
    private String contents;
    private LocalDateTime created_date;
    private List<UploadPostTypeDto> upload_post_type_list;
    private List<FileInfoDto> file_info_list;

    public PostInfoWithPostTypeDto(PostInfo postInfo) {
        this.post_info_id = postInfo.getId();
        this.user_info_id = postInfo.getUserInfo().getUserId();
        this.competition_id = postInfo.getCompetitionInfo().getId();
        this.board_type = postInfo.getBoardType();
        this.title = postInfo.getTitle();
        this.contents = postInfo.getContents();
        this.created_date = postInfo.getCreatedDate();
        this.upload_post_type_list = postInfo.getUploadPostTypeList().stream()
                .map(UploadPostTypeDto::new)
                .toList();
        this.file_info_list = postInfo.getFileInfoList().stream()
                .map(FileInfoDto::new)
                .toList();
    }

}
