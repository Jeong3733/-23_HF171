package com.prototype.app_springboot.data.entity;

import com.prototype.app_springboot.data.type.SocialType;
import com.prototype.app_springboot.data.type.SystemRoleType;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

// TODO : 모든 엔터티 생성자 @builder 붙여서 다시 만들어주기
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
    private SystemRoleType role;

    @OneToMany(mappedBy = "userInfo")
    private final List<FileInfo> fileList = new ArrayList<FileInfo>();

    @OneToMany(mappedBy = "userInfo")
    private final List<UserCompetition> userByCompetitions = new ArrayList<>();

    @Builder
    public UserInfo(int user_id, String username, String password, String nickname, String email, SocialType social, SystemRoleType role) {
        this.user_id = user_id;
        this.username = username;
        this.password = password;
        this.nickname = nickname;
        this.email = email;
        this.social = social;
        this.role = role;
    }
}
