package com.prototype.app_springboot.controller;

import com.amazonaws.services.s3.model.S3Object;
import com.amazonaws.util.IOUtils;
import com.prototype.app_springboot.service.AwsService;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

@RestController
public class AwsController {
    private final AwsService awsService;

    public AwsController(AwsService awsService) {
        this.awsService = awsService;
    }

    // TODO: POST 로 바꾸기
    @GetMapping("/aws/{uuid}")
    public ResponseEntity<?> getS3FileByUUID(@PathVariable String uuid) {
        S3Object s3Object = null;
        byte[] file = null;

        try {
//            s3Object = awsService.downloadFileFromS3(uuidMap.get("uuid"));
            s3Object = awsService.downloadFileFromS3(uuid);
            file = IOUtils.toByteArray(s3Object.getObjectContent());
        } catch (IOException e) {
            // TODO: 알맞은 예외 코드 작성하기
            throw new RuntimeException(e);
        }

        String contentType = s3Object.getObjectMetadata().getContentType();
        System.out.println(MediaType.parseMediaType(contentType));
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.setContentType(MediaType.parseMediaType(contentType));
        httpHeaders.setContentLength(file.length);

        return new ResponseEntity<>(file, httpHeaders, HttpStatus.OK);
    }
}
