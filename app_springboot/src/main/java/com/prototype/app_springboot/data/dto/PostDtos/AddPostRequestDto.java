package com.prototype.app_springboot.data.dto.PostDtos;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonSetter;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Getter
@NoArgsConstructor
@ToString
public class AddPostRequestDto {
    private int competitionId;
    private Map<String, Boolean> fileType;
    private String boardType;
    private String title;
    private String contents;
    @JsonIgnore
    private List<String> fileTypeList;

    @JsonSetter("fileType")
    public void setFileType(Map<String, Boolean> fileType) {
        this.fileTypeList = fileType.entrySet().stream()
                // true 인 것들만 get
                .filter(Map.Entry::getValue)
                // true 인 것들의 key 들을 get
                .map(Map.Entry::getKey)
                .collect(Collectors.toList());
    }
}

