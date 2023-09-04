package com.prototype.app_springboot.data.idClass;

import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.UUID;

@EqualsAndHashCode
@NoArgsConstructor
public class PostDocsId implements Serializable {
    private int postInfo;
    private UUID path;
}
