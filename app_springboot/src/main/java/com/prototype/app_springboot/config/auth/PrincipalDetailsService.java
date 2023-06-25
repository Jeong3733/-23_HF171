package com.prototype.app_springboot.config.auth;

import com.prototype.app_springboot.data.entity.UserInfo;
import com.prototype.app_springboot.data.repository.UserInfoRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class PrincipalDetailsService implements UserDetailsService {

    private final UserInfoRepository userInfoRepository;

    public PrincipalDetailsService(UserInfoRepository userInfoRepository) {
        this.userInfoRepository = userInfoRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserInfo userEntity = userInfoRepository.findByUsername(username);

        if (userEntity != null) {
            return new PrincipalDetails(userEntity);
        }

        return null;
    }
}
