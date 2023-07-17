package com.prototype.app_springboot.config;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Configuration;

// http://localhost:8080/swagger-ui/index.html
@OpenAPIDefinition(
        info = @Info(title = "app_springboot 명세서",
                description = "ICT 택관 컴퍼니"))
@RequiredArgsConstructor
@Configuration
public class SwaggerConfig {

}
