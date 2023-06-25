package com.prototype.app_springboot.data.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class UserJoinDto {
    private String username;
    private String password;
    private String nickname;
    private String email;
}
