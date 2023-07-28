package com.prototype.app_springboot.data.dto.request;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class SignUpRequestDto {
    private String user_name;
    private String email;
    private String user_id;
    private String password;
    private String check_password;
}
