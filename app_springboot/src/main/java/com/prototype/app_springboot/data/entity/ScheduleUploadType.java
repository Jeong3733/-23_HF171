package com.prototype.app_springboot.data.entity;

import com.prototype.app_springboot.data.type.UploadType;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class ScheduleUploadType {
    @Id
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "schedule_id")
    private ScheduleInfo scheduleInfo;

    private UploadType uploadType;

    @Builder
    public ScheduleUploadType(ScheduleInfo scheduleInfo, UploadType uploadType) {
        this.scheduleInfo = scheduleInfo;
        this.uploadType = uploadType;
    }
}
