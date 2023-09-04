package com.prototype.app_springboot.config.auth;

import com.prototype.app_springboot.data.entity.UserInfo;
import com.prototype.app_springboot.data.repository.UserInfoRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Slf4j
@Service
public class PrincipalDetailsService implements UserDetailsService {

    private final UserInfoRepository userInfoRepository;

    public PrincipalDetailsService(UserInfoRepository userInfoRepository) {
        this.userInfoRepository = userInfoRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserInfo userEntity = userInfoRepository.findById(username)
                .orElseThrow(() -> {
                    log.error("UserId : {}의 유저가 존재하지 않습니다.", username);
                    throw new UsernameNotFoundException("해당 유저를 찾을 수 없습니다.");
                });

        if (userEntity != null) {
            return new PrincipalDetails(userEntity);
        }

        return null;
    }
}
