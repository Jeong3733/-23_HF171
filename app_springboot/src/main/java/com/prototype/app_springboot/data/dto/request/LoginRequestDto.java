package com.prototype.app_springboot.data.dto.request;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class LoginRequestDto {
    private String email;
    private String password;
    private String formBasicCheckbox;
}
