package com.prototype.app_springboot.prototype.data.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Faiss {
    @Id
    private int faiss_version;

    private String path;

    private Timestamp created_date;

    @OneToMany(mappedBy = "faiss")
    private final List<CheckInfo> checkList = new ArrayList<CheckInfo>();

    @Builder
    public Faiss(int faiss_version, String path, Timestamp created_date) {
        this.faiss_version = faiss_version;
        this.path = path;
        this.created_date = created_date;
    }
}
