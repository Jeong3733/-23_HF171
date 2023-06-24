package com.prototype.app_springboot.prototype.data.entity;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class CheckInfo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int check_id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "file_id")
    private File file;

    private Timestamp check_date;


    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "faiss_version")
    private Faiss faiss;

    @Builder
    public CheckInfo(int check_id, File file, Timestamp check_date, Faiss faiss) {
        this.check_id = check_id;
        this.file = file;
        this.check_date = check_date;
        this.faiss = faiss;
    }
}
