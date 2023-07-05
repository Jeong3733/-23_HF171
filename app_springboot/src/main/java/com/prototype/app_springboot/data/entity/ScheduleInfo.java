package com.prototype.app_springboot.data.entity;

import com.prototype.app_springboot.data.type.ScheduleType;
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
public class ScheduleInfo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int schedule_id;
    private String schedule_name;
    private ScheduleType schedule_type;
    private LocalDateTime start_datetime;
    private LocalDateTime end_datetime;
    @OneToMany(mappedBy = "scheduleInfo")
    private final List<CheckInfo> checkInfoList = new ArrayList<>();
    @OneToMany(mappedBy = "scheduleInfo")
    private final List<FileInfo> fileInfoList = new ArrayList<>();
    @OneToMany(mappedBy = "scheduleInfo")
    private final List<ScheduleUploadType> scheduleUploadTypeList = new ArrayList<>();
    @ManyToOne
    @JoinColumn(name = "competition_id")
    private CompetitionInfo competitionInfo;

    @Builder
    public ScheduleInfo(int schedule_id, String schedule_name, ScheduleType schedule_type, LocalDateTime start_datetime, LocalDateTime end_datetime, CompetitionInfo competitionInfo) {
        this.schedule_id = schedule_id;
        this.schedule_name = schedule_name;
        this.schedule_type = schedule_type;
        this.start_datetime = start_datetime;
        this.end_datetime = end_datetime;
        this.competitionInfo = competitionInfo;
    }
}
