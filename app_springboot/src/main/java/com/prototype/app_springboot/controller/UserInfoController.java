package com.prototype.app_springboot.controller;

import com.prototype.app_springboot.data.entity.UserInfo;
import com.prototype.app_springboot.service.UserInfoService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserInfoController {

    private final UserInfoService userInfoService;

    public UserInfoController(UserInfoService userInfoService) {
        this.userInfoService = userInfoService;
    }

    @GetMapping("/user")
    public ResponseEntity<UserInfo> getUserInfo() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String username = authentication.getName();
        UserInfo userInfo = userInfoService.userInfo(username);
        return new ResponseEntity<UserInfo>(userInfo, HttpStatus.OK);
    }

//    @GetMapping("/user/username")
//    public ResponseEntity<?> usernameCheck(@RequestBody UsernameCheckRequestDto usernameCheckRequestDto) {
//        String requestUsername = usernameCheckRequestDto.getUsername();
//
//    }
}
