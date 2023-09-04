package com.prototype.app_springboot.data.dto.FastApiDtos;

import lombok.Getter;

import java.util.List;

@Getter
public class ResGetFileQNA {
    private String result;
    private List<String> source;
}
