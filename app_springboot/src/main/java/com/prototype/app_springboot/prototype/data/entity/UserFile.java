package com.prototype.app_springboot.prototype.data.entity;

import com.prototype.app_springboot.prototype.data.idClass.UserFileId;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@IdClass(UserFileId.class)
public class UserFile {
    @Id
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private UserInfo userInfo;

    @Id
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "file_id")
    private File file;

    @Builder
    public UserFile(UserInfo userInfo, File file) {
        this.userInfo = userInfo;
        this.file = file;
    }
}
