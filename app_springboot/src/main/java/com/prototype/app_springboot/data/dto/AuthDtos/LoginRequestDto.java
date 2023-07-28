package com.prototype.app_springboot.data.dto.AuthDtos;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class LoginRequestDto {
    private String userId;
    private String password;
    private String formBasicCheckbox;
}
