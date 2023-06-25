package com.prototype.app_springboot.service;

import com.prototype.app_springboot.data.entity.UserInfo;
import com.prototype.app_springboot.data.repository.UserInfoRepository;
import com.prototype.app_springboot.data.dto.UserJoinDto;
import com.prototype.app_springboot.data.type.RoleType;
import com.prototype.app_springboot.data.type.SocialType;
import jakarta.transaction.Transactional;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserInfoService {
    private final UserInfoRepository userInfoRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    public UserInfoService(UserInfoRepository userInfoRepository, BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.userInfoRepository = userInfoRepository;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }

    @Transactional
    public void join(UserJoinDto userJoinDto) {
        String encpassword = bCryptPasswordEncoder.encode(userJoinDto.getPassword());
        UserInfo user = UserInfo.builder()
                .username(userJoinDto.getUsername())
                .password(encpassword)
                .email(userJoinDto.getEmail())
                .nickname(userJoinDto.getNickname())
                .role(RoleType.USER)
                .social(SocialType.NONE)
                .build();

        userInfoRepository.save(user);
    }
}
