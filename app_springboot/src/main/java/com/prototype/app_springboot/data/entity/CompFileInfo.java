package com.prototype.app_springboot.data.entity;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@EntityListeners(AuditingEntityListener.class)
public class CompFileInfo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "file_id")
    private int id;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private UserInfo userInfo;

    private String depth1;

    private String depth2;

    private String depth3;

    private String depth4;

    private String competitionName;

    private String link;

    private String fileTitle;

    private String fileExtension;

    private UUID path;

    @CreatedDate
    private LocalDateTime uploadDatetime;

    @OneToMany(mappedBy = "compFileInfo")
    private final List<FileResultInfo> fileResultInfoList = new ArrayList<FileResultInfo>();

    @Builder
    public CompFileInfo(int id, UserInfo userInfo, String depth1, String depth2, String depth3, String depth4, String competitionName, String link, String fileTitle, String fileExtension, UUID path, LocalDateTime uploadDatetime) {
        this.id = id;
        this.userInfo = userInfo;
        this.depth1 = depth1;
        this.depth2 = depth2;
        this.depth3 = depth3;
        this.depth4 = depth4;
        this.competitionName = competitionName;
        this.link = link;
        this.fileTitle = fileTitle;
        this.fileExtension = fileExtension;
        this.path = path;
        this.uploadDatetime = uploadDatetime;
    }
}
