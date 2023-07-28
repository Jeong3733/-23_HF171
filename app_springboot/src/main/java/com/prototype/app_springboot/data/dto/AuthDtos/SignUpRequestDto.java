package com.prototype.app_springboot.data.dto.AuthDtos;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class SignUpRequestDto {
    private String userName;
    private String email;
    private String userId;
    private String password;
    private String checkPassword;
}
