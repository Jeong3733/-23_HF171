package com.prototype.app_springboot.controller.api;

import com.prototype.app_springboot.service.AmazonS3Service;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

@RestController
public class FileApiController {

    private final AmazonS3Service amazonS3Service;

    public FileApiController(AmazonS3Service amazonS3Service) {
        this.amazonS3Service = amazonS3Service;
    }

    // TODO : ppt, word, pdf, hwp 이외의 파일 예외 처리하기, 폴더 이름 받는 로직 추가
    @PostMapping("/competition/files")
    public void uploadFileToAmazonS3(@RequestParam("files") MultipartFile[] multipartFiles, @RequestParam("competitionName") String competitionName) {
        if (multipartFiles.length != 0) {
            amazonS3Service.uploadFileList(multipartFiles, competitionName);
        }
    }


}
