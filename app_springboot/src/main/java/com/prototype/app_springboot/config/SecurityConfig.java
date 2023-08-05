package com.prototype.app_springboot.config;

import com.prototype.app_springboot.config.jwt.JWTTokenAuthenticationFilter;
import com.prototype.app_springboot.config.oauth.PrincipalOauth2UserService;
import jakarta.xml.bind.annotation.XmlAccessorType;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
@XmlAccessorType
public class SecurityConfig {

    private final PrincipalOauth2UserService principalOauth2UserService;
    private final JWTTokenAuthenticationFilter jwtTokenAuthenticationFilter;

    public SecurityConfig(PrincipalOauth2UserService principalOauth2UserService, JWTTokenAuthenticationFilter jwtTokenAuthenticationFilter) {
        this.principalOauth2UserService = principalOauth2UserService;
        this.jwtTokenAuthenticationFilter = jwtTokenAuthenticationFilter;
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .csrf(AbstractHttpConfigurer::disable)
                .cors(Customizer.withDefaults())
                .sessionManagement(sessionManagement -> sessionManagement.sessionCreationPolicy(SessionCreationPolicy.STATELESS))

                .addFilterBefore(jwtTokenAuthenticationFilter, UsernamePasswordAuthenticationFilter.class)

                .formLogin(formLogin ->
                        formLogin.loginPage("/loginForm")
                                .loginProcessingUrl("/login")
                                .defaultSuccessUrl("/")
                                .failureUrl("/loginForm")
                )

                .logout(logout ->
                        logout.logoutUrl("/logout")
                                .logoutSuccessUrl("/")
                )

                .oauth2Login(oauth2 ->
                        oauth2.loginPage("/loginForm")
                                .defaultSuccessUrl("/")
                                .failureUrl("/loginForm")
                                .userInfoEndpoint(userInfoEndpointConfig ->
                                    userInfoEndpointConfig.userService(principalOauth2UserService)
                                )
                )

                .authorizeHttpRequests(authorize ->
                        authorize.anyRequest().permitAll()
//                                .requestMatchers("/h2-console/**").permitAll()
                )

                .headers(headerConfig ->
                        headerConfig.frameOptions(frameOptionsConfig ->
                                frameOptionsConfig.disable()
                        )
                );

        return http.build();
    }
}
