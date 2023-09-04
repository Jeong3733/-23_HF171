package com.prototype.app_springboot.data.dto.PostDtos;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonSetter;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.Map;

@Getter
@NoArgsConstructor
@ToString
public class AddPostRequestDto {
    private int competitionId;
    private Map<String, Boolean> fileType;
    private int postId;
    private String boardType;
    private String title;
    private String content;
    @JsonIgnore
    private String fileTypeList;
    @JsonSetter("fileType")
    public void setFileType(Map<String, Boolean> fileType) {
        this.fileTypeList = fileType.entrySet().stream()
                // true 인 것들만 get
                .filter(Map.Entry::getValue)
                // true 인 것들의 key 들을 get
                .map(Map.Entry::getKey)
                .findFirst()
                .orElse(null);
    }
}

