package com.prototype.app_springboot.service;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.client.MultipartBodyBuilder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.reactive.function.BodyInserters;
import org.springframework.web.reactive.function.client.WebClient;

import java.io.FileNotFoundException;
import java.net.URI;
import java.net.URISyntaxException;

@Slf4j
@Service
public class FileService {

    public void send(MultipartFile file) {
        try {
            if (file.isEmpty()) {
                throw new FileNotFoundException("File is empty");
            }

            WebClient webClient = WebClient.create();

            MultipartBodyBuilder builder = new MultipartBodyBuilder();
            builder.part("file", file.getResource());

            String response = webClient.post()
                    .uri(new URI("http://localhost:8080/store/file"))
                    .contentType(MediaType.MULTIPART_FORM_DATA)
                    .body(BodyInserters.fromMultipartData(builder.build()))
                    .retrieve()
                    .bodyToMono(String.class)
                    .block();
            
            // 예외처리 추가하기
            
        } catch (FileNotFoundException | URISyntaxException e) {
            throw new RuntimeException(e);
        }
    }
}
