package com.prototype.app_springboot.data.entity;

import com.prototype.app_springboot.data.idClass.CompetitionDocsId;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;

import java.time.LocalDateTime;
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
    private UUID path;

    private String fileTitle;

    private String fileExtension;

    @CreatedDate
    private LocalDateTime uploadDatetime;

    @Builder
    public CompetitionDocs(CompetitionInfo competitionInfo, UUID path, String fileTitle, String fileExtension, LocalDateTime uploadDatetime) {
        this.competitionInfo = competitionInfo;
        this.path = path;
        this.fileTitle = fileTitle;
        this.fileExtension = fileExtension;
        this.uploadDatetime = uploadDatetime;
    }
}
