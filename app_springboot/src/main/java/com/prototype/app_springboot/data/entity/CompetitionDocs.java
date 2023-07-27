package com.prototype.app_springboot.data.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class CompetitionDocs {
    @Id
    @ManyToOne
    @JoinColumn(name = "competition_id")
    private CompetitionInfo competitionInfo;

    private UUID docsPath;

    @Builder
    public CompetitionDocs(CompetitionInfo competitionInfo, UUID docsPath) {
        this.competitionInfo = competitionInfo;
        this.docsPath = docsPath;
    }
}
