package com.prototype.app_springboot.data.dto.FastApiDtos;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class ReqGetQNA {
    private int file_id;
    private String query;
}
