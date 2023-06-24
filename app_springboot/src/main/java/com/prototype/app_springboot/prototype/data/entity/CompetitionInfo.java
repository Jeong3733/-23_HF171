package com.prototype.app_springboot.prototype.data.entity;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class CompetitionInfo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int competition_id;

    private String competition_name;

    @OneToMany(mappedBy = "competitionInfo")
    private final List<File> fileList = new ArrayList<File>();

    @Builder
    public CompetitionInfo(int competition_id, String competition_name) {
        this.competition_id = competition_id;
        this.competition_name = competition_name;
    }
}
