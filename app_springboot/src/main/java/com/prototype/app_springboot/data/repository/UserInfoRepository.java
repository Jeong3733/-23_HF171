package com.prototype.app_springboot.data.repository;

import com.prototype.app_springboot.data.entity.UserInfo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserInfoRepository extends JpaRepository<UserInfo, Integer> {
     UserInfo findByUsername(String username);
}
