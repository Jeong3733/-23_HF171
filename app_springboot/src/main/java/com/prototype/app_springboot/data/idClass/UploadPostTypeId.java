package com.prototype.app_springboot.data.idClass;

import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@EqualsAndHashCode
@NoArgsConstructor
public class UploadPostTypeId implements Serializable {
    private int postInfo;
    private String uploadType;
}
