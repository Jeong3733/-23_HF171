package com.prototype.app_springboot.data.idClass;

import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@EqualsAndHashCode
@NoArgsConstructor
public class CheckFileId implements Serializable {
    private int checkInfo;
    private int userUploadedFileInfo;
    private int standardFileInfo;
}
