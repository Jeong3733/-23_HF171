package com.prototype.app_springboot.controller.api;

import com.prototype.app_springboot.data.dto.UserJoinDto;
import com.prototype.app_springboot.service.UserInfoService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserApiController {

    private final UserInfoService userInfoService;

    public UserApiController(UserInfoService userInfoService) {
        this.userInfoService = userInfoService;
    }

    @PostMapping("/join")
    public String join(UserJoinDto userJoinDto) {
        userInfoService.join(userJoinDto);
        return "redirect:/";
    }
}
