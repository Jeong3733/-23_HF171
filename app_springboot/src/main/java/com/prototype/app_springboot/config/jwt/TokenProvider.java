package com.prototype.app_springboot.config.jwt;

import com.prototype.app_springboot.config.auth.PrincipalDetails;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import java.time.ZonedDateTime;
import java.util.Date;

@Slf4j
@Component
public class TokenProvider {

    @Value("${app.jwt.secret}")
    private String jwtSecret;

    @Value("${app.jwt.accessToken.expiration.seconds}")
    private Long accessTokenExpirationSeconds;

    @Value("${app.jwt.refreshToken.expiration.minutes}")
    private Long refreshTokenExpirationMinutes;

    public static final String TOKEN_TYPE = "JWT";

    /**
     * Access 토큰 생성
     * @param authentication
     * @return
     */
    public String generateAccessToken(Authentication authentication) {
        PrincipalDetails user = (PrincipalDetails) authentication.getPrincipal();

        byte[] signingKey = jwtSecret.getBytes();

        return Jwts.builder()
                .signWith(Keys.hmacShaKeyFor(signingKey), SignatureAlgorithm.HS512)
                .setExpiration(Date.from(ZonedDateTime.now().plusSeconds(accessTokenExpirationSeconds).toInstant()))
                .setSubject(authentication.getName())
                .claim("nickname", user.getNickname())
                .compact();
    }

    /**
     * Refresh 토큰 생성
     * @param authentication
     * @return
     */
    public String generateRefreshToken(Authentication authentication) {
        byte[] signingKey = jwtSecret.getBytes();

        return Jwts.builder()
                .signWith(Keys.hmacShaKeyFor(signingKey), SignatureAlgorithm.HS512)
                .setExpiration(Date.from(ZonedDateTime.now().plusMinutes(refreshTokenExpirationMinutes).toInstant()))
                .setSubject(authentication.getName())
                .compact();
    }

    public String getUsernameByToken(String token) {
        byte[] signingKey = jwtSecret.getBytes();

        return Jwts.parserBuilder()
                .setSigningKey(signingKey)
                .build()
                .parseClaimsJws(token)
                .getBody()
                .getSubject();
    }

    /**
     * 토큰 검증
     * @param token
     * @return
     */
    public boolean validateToken(String token) {
        try {
            log.info("===== JWT Token validating - TokenProvider ======");
            byte[] signingKey = jwtSecret.getBytes();
            Jwts.parserBuilder()
                    .setSigningKey(signingKey)
                    .build()
                    .parseClaimsJws(token);
            return true;
        } catch (JwtException exception) {
            return false;
        }
    }
}