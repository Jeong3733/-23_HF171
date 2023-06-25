package com.prototype.app_springboot.config.oauth.provider;

import com.prototype.app_springboot.data.type.SocialType;

import java.util.Map;

public class GoogleUserInfo implements Oauth2UserInfo {

    private Map<String, Object> attributes; // oAuth2User.getAttributes()

    public GoogleUserInfo(Map<String, Object> attributes) {
        this.attributes = attributes;
    }

    @Override
    public String getProviderId() {
        return (String) attributes.get("sub");
    }

    @Override
    public SocialType getProvider() {
        return SocialType.GOOGLE;
    }

    @Override
    public String getEmail() {
        return (String) attributes.get("email");
    }

    @Override
    public String getNickname() {
        return (String) attributes.get("name");
    }

}
