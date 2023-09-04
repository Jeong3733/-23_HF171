package com.prototype.app_springboot.data.dto.FastApiDtos;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class ReqFileReport {
    private int file_id;
    private String page_id;
    private String comp_page_id;
}
