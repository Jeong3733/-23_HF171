package com.prototype.app_springboot.data.entity;

import jakarta.persistence.*;
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
public class CheckInfo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int check_id;

    private LocalDateTime check_date;

    private int top_num;

    @OneToMany(mappedBy = "checkInfo")
    private final List<CheckFile> checkFileList = new ArrayList<CheckFile>();

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "db_version")
    private VectorDbInfo vectorDBInfo;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "schedule_id")
    private ScheduleInfo scheduleInfo;

    @Builder
    public CheckInfo(int check_id, LocalDateTime check_date, int top_num, VectorDbInfo vectorDBInfo, ScheduleInfo scheduleInfo) {
        this.check_id = check_id;
        this.check_date = check_date;
        this.top_num = top_num;
        this.vectorDBInfo = vectorDBInfo;
        this.scheduleInfo = scheduleInfo;
    }
}
