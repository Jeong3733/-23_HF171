package com.prototype.app_springboot.controller;

import com.prototype.app_springboot.service.UserInfoService;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserInfoController {

    private final UserInfoService userInfoService;

    public UserInfoController(UserInfoService userInfoService) {
        this.userInfoService = userInfoService;
    }

//    @GetMapping("/user/username")
//    public ResponseEntity<?> usernameCheck(@RequestBody UsernameCheckRequestDto usernameCheckRequestDto) {
//        String requestUsername = usernameCheckRequestDto.getUsername();
//
//    }
}
