package com.prototype.app_springboot.data.entity;

import jakarta.persistence.*;
import lombok.AccessLevel;
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
    private int db_version;

    private String db_path;

    private LocalDateTime created_date;

    @OneToMany(mappedBy = "vectorDBInfo")
    private final List<CheckInfo> checkInfoList = new ArrayList<CheckInfo>();
}
