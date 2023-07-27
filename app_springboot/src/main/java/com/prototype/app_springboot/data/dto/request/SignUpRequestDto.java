package com.prototype.app_springboot.data.dto.request;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class SignUpRequestDto {
    private String userId;
    private String password;
    private String userName;
    private String email;
}
