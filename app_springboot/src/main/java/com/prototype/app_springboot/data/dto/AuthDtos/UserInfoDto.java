package com.prototype.app_springboot.data.dto.AuthDtos;

import com.prototype.app_springboot.data.dto.CompetitionDtos.UserByCompetitionDto;
import com.prototype.app_springboot.data.dto.EvaluationDtos.EvaluationScoreDto;
import com.prototype.app_springboot.data.dto.FileDtos.FileInfoDto;
import com.prototype.app_springboot.data.dto.PostDtos.PostInfoDto;
import com.prototype.app_springboot.data.entity.UserInfo;
import com.prototype.app_springboot.data.type.SocialType;
import com.prototype.app_springboot.data.type.SystemRoleType;
import lombok.Getter;

import java.util.List;

@Getter
public class UserInfoDto {
    private String user_id;
    private String user_name;
    private String password;
    private String email;
    private SocialType social;
    private SystemRoleType role;
    private List<FileInfoDto> file_list;
    private List<EvaluationScoreDto> evaluation_score_list;
    private List<UserByCompetitionDto> user_by_competition_list;
    private List<PostInfoDto> post_info_list;

    public UserInfoDto(UserInfo userInfo) {
        this.user_id = userInfo.getUserId();
        this.user_name = userInfo.getUserName();
        this.password = userInfo.getPassword();
        this.email = userInfo.getEmail();
        this.social = userInfo.getSocial();
        this.role = userInfo.getRole();
        this.file_list = userInfo.getFileInfoList()
                .stream()
                .map(FileInfoDto::new)
                .toList();
        this.evaluation_score_list = userInfo.getEvaluationScoreList()
                .stream()
                .map(EvaluationScoreDto::new)
                .toList();
        this.user_by_competition_list = userInfo.getUserByCompetitionList()
                .stream()
                .map(UserByCompetitionDto::new)
                .toList();
        this.post_info_list = userInfo.getPostInfoList()
                .stream()
                .map(PostInfoDto::new)
                .toList();
    }
}
