package com.prototype.app_springboot.data.idClass;

import lombok.*;

import java.io.Serializable;

@EqualsAndHashCode
@NoArgsConstructor
@AllArgsConstructor
public class PageResultInfoId implements Serializable {
    private String pageInfo;
    private String compPageInfo;
}
