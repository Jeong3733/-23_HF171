package com.prototype.app_springboot.data.dto;

import com.prototype.app_springboot.data.entity.PostInfo;
import com.prototype.app_springboot.data.type.BoardType;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
public class PostInfoDto {
    private int post_info_id;
    private String user_info_id;
    private int competition_info_id;
    private BoardType board_type;
    private String title;
    private String contents;
    private LocalDateTime created_date;

    public PostInfoDto(PostInfo postInfo) {
        this.post_info_id = postInfo.getId();
        this.user_info_id = postInfo.getUserInfo().getUserId();
        this.competition_info_id = postInfo.getCompetitionInfo().getId();
        this.board_type = postInfo.getBoardType();
        this.title = postInfo.getTitle();
        this.contents = postInfo.getContents();
        this.created_date = postInfo.getCreatedDate();
    }
}
