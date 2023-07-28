package com.prototype.app_springboot.service;

import com.prototype.app_springboot.data.entity.UserInfo;
import com.prototype.app_springboot.data.repository.userInfo.UserInfoRepository;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

@Service
public class UserInfoService {
    private final UserInfoRepository userInfoRepository;

    public UserInfoService(UserInfoRepository userInfoRepository) {
        this.userInfoRepository = userInfoRepository;
    }

    @Transactional
    public void join(UserInfo user) {
        userInfoRepository.save(user);
    }

    @Transactional
    public UserInfo userInfo(String user_id) {
        return userInfoRepository.findByUserId(user_id);
    }
}
