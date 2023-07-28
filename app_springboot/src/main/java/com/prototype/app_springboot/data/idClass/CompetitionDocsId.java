package com.prototype.app_springboot.data.idClass;

import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.UUID;

@EqualsAndHashCode
@NoArgsConstructor
public class CompetitionDocsId  implements Serializable {
    private int competitionInfo;
    private UUID docsPath;
}
