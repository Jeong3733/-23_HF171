package com.prototype.app_springboot.config.oauth.provider;

import com.prototype.app_springboot.data.type.SocialType;

public interface Oauth2UserInfo {
    String getProviderId();
    SocialType getProvider();
    String getEmail();
    String getNickname();
}
