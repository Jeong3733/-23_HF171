package com.prototype.app_springboot.data.dto.request;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class SignUpRequestDto {
    private String username;
    private String password;
    private String nickname;
    private String email;
}
