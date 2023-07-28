package com.prototype.app_springboot.data.repository.userInfo;

import com.prototype.app_springboot.data.entity.UserInfo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserInfoRepository extends JpaRepository<UserInfo, String> {
     UserInfo findByUserId(String username);
}
