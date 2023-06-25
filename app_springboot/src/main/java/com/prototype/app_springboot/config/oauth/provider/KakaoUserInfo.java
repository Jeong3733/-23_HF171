package com.prototype.app_springboot.config.oauth.provider;

import com.prototype.app_springboot.data.type.SocialType;

import java.util.Map;

public class KakaoUserInfo implements Oauth2UserInfo {
    private Map<String, Object> attributes; // oAuth2User.getAttributes()
    private Map<String, Object> attributesKakao; // oAuth2User.getAttributes()
    private Map<String, Object> attributesProfile; // oAuth2User.getAttributes()

    public KakaoUserInfo(Map<String, Object> attributes) {
        this.attributes = attributes;
        this.attributesKakao = (Map<String, Object>) attributes.get("kakao_account");
        this.attributesProfile = (Map<String, Object>) attributesKakao.get("profile");
    }

    @Override
    public String getProviderId() {
        return Long.toString((Long) attributes.get("id"));
    }

    @Override
    public SocialType getProvider() {
        return SocialType.KAKAO;
    }

    @Override
    public String getEmail() {
        return (String) attributesKakao.get("email");
    }

    @Override
    public String getNickname() {
        return (String) attributesProfile.get("nickname");
    }
}
