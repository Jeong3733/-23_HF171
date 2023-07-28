package com.prototype.app_springboot.service;

import com.prototype.app_springboot.config.auth.PrincipalDetails;
import com.prototype.app_springboot.config.jwt.TokenProvider;
import com.prototype.app_springboot.data.dto.AuthDtos.TokenResponseDto;
import com.prototype.app_springboot.data.entity.UserInfo;
import com.prototype.app_springboot.data.repository.UserInfoRepository;
import jakarta.transaction.Transactional;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;

import java.util.concurrent.TimeUnit;

@Service
@Slf4j
public class AuthService {

    private final RedisTemplate<String, String> redisTemplate;
    private final UserInfoRepository userInfoRepository;
    private final TokenProvider tokenProvider;

    @Value("${app.jwt.refreshToken.expiration.days}")
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
    public TokenResponseDto generateTokens (PrincipalDetails principalDetails)
 {
        String accessToken = tokenProvider.generateAccessToken(principalDetails);
        String refreshToken = tokenProvider.generateRefreshToken(principalDetails);

        // Redis에 저장 - 만료 시간 설정을 통해 자동 삭제 처리
        redisTemplate.opsForValue().set(
                principalDetails.getUsername(),
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
