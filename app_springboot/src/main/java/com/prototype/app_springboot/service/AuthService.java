package com.prototype.app_springboot.service;

import com.prototype.app_springboot.config.jwt.TokenProvider;
import com.prototype.app_springboot.data.dto.response.TokenResponseDto;
import com.prototype.app_springboot.data.entity.UserInfo;
import com.prototype.app_springboot.data.repository.UserInfoRepository;
import jakarta.transaction.Transactional;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import java.util.concurrent.TimeUnit;

@Service
@Slf4j
public class AuthService {

    private final RedisTemplate<String, String> redisTemplate;
    private final UserInfoRepository userInfoRepository;
    private final TokenProvider tokenProvider;

    @Value("${app.jwt.refreshToken.expiration.minutes}")
    private Long refreshTokenExpirationMinutes;

    public AuthService(RedisTemplate<String, String> redisTemplate, UserInfoRepository userInfoRepository, TokenProvider tokenProvider) {
        this.redisTemplate = redisTemplate;
        this.userInfoRepository = userInfoRepository;
        this.tokenProvider = tokenProvider;
    }

    @Transactional
    public void join(UserInfo user) {
        userInfoRepository.save(user);
    }

    @Transactional
    public TokenResponseDto generateTokens (Authentication authentication) {
        String accessToken = tokenProvider.generateAccessToken(authentication);
        String refreshToken = tokenProvider.generateRefreshToken(authentication);

        // Redis에 저장 - 만료 시간 설정을 통해 자동 삭제 처리
        redisTemplate.opsForValue().set(
                authentication.getName(),
                refreshToken,
                refreshTokenExpirationMinutes,
                TimeUnit.MINUTES
        );

        return TokenResponseDto.builder()
                .accessToken(accessToken)
                .refreshToken(refreshToken)
                .build();
    }

    @Transactional
    public String getSavedRefreshToken(String username) {
        return redisTemplate.opsForValue().get(username);
    }

}
