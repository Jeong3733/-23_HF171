package com.prototype.app_springboot.data.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class VectorDbInfo {
    @Id
    private int dbVersion;

    private String dbPath;

    private LocalDateTime createdDate;

    @OneToMany(mappedBy = "vectorDBInfo")
    private final List<CheckFile> checkInfoList = new ArrayList<CheckFile>();

    @Builder
    public VectorDbInfo(int dbVersion, String dbPath, LocalDateTime createdDate) {
        this.dbVersion = dbVersion;
        this.dbPath = dbPath;
        this.createdDate = createdDate;
    }
}
