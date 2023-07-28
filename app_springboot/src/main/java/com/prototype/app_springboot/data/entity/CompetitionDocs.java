package com.prototype.app_springboot.data.entity;

import com.prototype.app_springboot.data.idClass.CompetitionDocsId;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@IdClass(CompetitionDocsId.class)
public class CompetitionDocs {
    @Id
    @ManyToOne
    @JoinColumn(name = "competition_id")
    private CompetitionInfo competitionInfo;
    @Id
    private UUID docsPath;
    private String fileTitle;

    @Builder
    public CompetitionDocs(CompetitionInfo competitionInfo, String fileTitle, UUID docsPath) {
        this.competitionInfo = competitionInfo;
        this.fileTitle = fileTitle;
        this.docsPath = docsPath;
    }
}
