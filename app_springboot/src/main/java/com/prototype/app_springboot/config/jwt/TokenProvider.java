package com.prototype.app_springboot.config.jwt;

import com.prototype.app_springboot.config.auth.PrincipalDetails;
import com.prototype.app_springboot.data.type.TokenType;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.time.ZonedDateTime;
import java.util.Date;

@Slf4j
@Component
public class TokenProvider {

    @Value("${app.jwt.secret}")
    private String jwtSecret;

    @Value("${app.jwt.accessToken.expiration.minutes}")
    private Long accessTokenExpirationSeconds;

    @Value("${app.jwt.refreshToken.expiration.days}")
    private Long refreshTokenExpirationDays;

    public static final String TOKEN_TYPE = "JWT";

    /**
     * Access 토큰 생성
     *
     * @param principalDetails
     * @return
     */
    public String generateAccessToken(PrincipalDetails principalDetails) {
        byte[] signingKey = jwtSecret.getBytes();

        return Jwts.builder()
                .signWith(Keys.hmacShaKeyFor(signingKey), SignatureAlgorithm.HS512)
                .setExpiration(Date.from(ZonedDateTime.now().plusMinutes(accessTokenExpirationSeconds).toInstant()))
                .setSubject(principalDetails.getUsername())
                .claim("type", TokenType.ACCESS)
                .compact();
    }

    /**
     * Refresh 토큰 생성
     *
     * @param principalDetails
     * @return
     */

    public String generateRefreshToken(PrincipalDetails principalDetails) {
        byte[] signingKey = jwtSecret.getBytes();

        return Jwts.builder()
                .signWith(Keys.hmacShaKeyFor(signingKey), SignatureAlgorithm.HS512)
                .setExpiration(Date.from(ZonedDateTime.now().plusDays(refreshTokenExpirationDays).toInstant()))
                .setSubject(principalDetails.getUsername())
                .claim("type", TokenType.REFRESH)
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

    public String getTokenTypeByToken(String token) {
        byte[] signingKey = jwtSecret.getBytes();

        return Jwts.parserBuilder()
                .setSigningKey(signingKey)
                .build()
                .parseClaimsJws(token)
                .getBody()
                .get("type")
                .toString();
    }

    /**
     * 토큰 검증
     *
     * @param token
     * @return
     */
    public boolean validateToken(String token) {
        log.info("===== JWT Token validating - TokenProvider ======");
        byte[] signingKey = jwtSecret.getBytes();
        Jwts.parserBuilder()
                .setSigningKey(signingKey)
                .build()
                .parseClaimsJws(token);
        return true;

    }
}
