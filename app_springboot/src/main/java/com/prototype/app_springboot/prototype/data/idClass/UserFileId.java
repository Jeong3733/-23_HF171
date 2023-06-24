package com.prototype.app_springboot.prototype.data.idClass;

import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@EqualsAndHashCode
@NoArgsConstructor
public class UserFileId implements Serializable {

    private int userInfo;
    private int file;
}
