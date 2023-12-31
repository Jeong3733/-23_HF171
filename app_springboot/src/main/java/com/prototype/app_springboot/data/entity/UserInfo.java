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

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class UserInfo {
    @Id
    private String userId;

    @Column(name = "user_name")
    private String userName;

    private String password;

    private String email;

    @Enumerated(EnumType.STRING)
    private SocialType social;

    @Enumerated(EnumType.STRING)
    private SystemRoleType role;

    @OneToMany(mappedBy = "userInfo")
    private final List<FileInfo> fileInfoList = new ArrayList<FileInfo>();

    @OneToMany(mappedBy = "userInfo")
    private final List<EvaluationScore> evaluationScoreList = new ArrayList<EvaluationScore>();

    @OneToMany(mappedBy = "userInfo")
    private final List<UserByCompetition> userByCompetitionList = new ArrayList<UserByCompetition>();

    @OneToMany(mappedBy = "userInfo")
    private final List<PostInfo> postInfoList = new ArrayList<PostInfo>();

    @OneToMany(mappedBy = "userInfo")
    private final List<EvaluationCommentInfo> evaluationCommentInfoList = new ArrayList<EvaluationCommentInfo>();

    @Builder
    public UserInfo(String userId, String userName, String password, String email, SocialType social, SystemRoleType role) {
        this.userId = userId;
        this.userName = userName;
        this.password = password;
        this.email = email;
        this.social = social;
        this.role = role;
    }
}
