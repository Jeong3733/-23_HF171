package com.prototype.app_springboot.controller;

import com.prototype.app_springboot.config.jwt.TokenProvider;
import com.prototype.app_springboot.data.dto.request.LoginRequestDto;
import com.prototype.app_springboot.data.dto.request.SignUpRequestDto;
import com.prototype.app_springboot.data.entity.UserInfo;
import com.prototype.app_springboot.data.type.SocialType;
import com.prototype.app_springboot.data.type.SystemRoleType;
import com.prototype.app_springboot.service.UserInfoService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    private final UserInfoService userInfoService;
    private final TokenProvider tokenProvider;

    private final AuthenticationManager authenticationManager;

    public UserController(BCryptPasswordEncoder bCryptPasswordEncoder, UserInfoService userInfoService, TokenProvider tokenProvider, AuthenticationManager authenticationManager) {
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
        this.userInfoService = userInfoService;
        this.tokenProvider = tokenProvider;
        this.authenticationManager = authenticationManager;
    }

    @PostMapping("/user/signUp")
    public ResponseEntity<String> signUp(@RequestBody SignUpRequestDto signUpRequestDto) {
        String encPassword = bCryptPasswordEncoder.encode(signUpRequestDto.getPassword());
        UserInfo user = UserInfo.builder()
                .username(signUpRequestDto.getUsername())
                .password(encPassword)
                .email(signUpRequestDto.getEmail())
                .nickname(signUpRequestDto.getNickname())
                .role(SystemRoleType.USER)
                .social(SocialType.NONE)
                .build();

        userInfoService.join(user);

        return new ResponseEntity<>("회원가입 완료", HttpStatus.OK);
    }

    // 로그인 성공 : 200, jwtToken 반환
    // 로그인 실패 : 401, "잘못된 아이디 혹은 비밀번호 입니다."
    @PostMapping("/user/login")
    public ResponseEntity<String> login(@RequestBody LoginRequestDto loginRequestDto) {
        String jwtToken = null;
        try {
            Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginRequestDto.getUsername(), loginRequestDto.getPassword()));
            jwtToken = tokenProvider.generate(authentication);
        } catch (BadCredentialsException e) {
            return new ResponseEntity<>("잘못된 아이디 혹은 비밀번호 입니다.", HttpStatus.UNAUTHORIZED);
        }
        return new ResponseEntity<>(jwtToken, HttpStatus.OK);
    }
}
