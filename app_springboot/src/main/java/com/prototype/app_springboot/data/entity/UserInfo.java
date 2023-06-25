package com.prototype.app_springboot.data.entity;

import com.prototype.app_springboot.data.type.RoleType;
import com.prototype.app_springboot.data.type.SocialType;
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
public class UserInfo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int user_id;

    private String username;

    private String password;

    private String nickname;

    private String email;

    @Enumerated(EnumType.STRING)
    private SocialType social;

    @Enumerated(EnumType.STRING)
    private RoleType role;

    @OneToMany(mappedBy = "userInfo")
    private final List<UserFile> fileList = new ArrayList<UserFile>();

    @Builder
    public UserInfo(int user_id, String username, String password, String nickname, String email, SocialType social, RoleType role) {
        this.user_id = user_id;
        this.username = username;
        this.password = password;
        this.nickname = nickname;
        this.email = email;
        this.social = social;
        this.role = role;
    }
}
