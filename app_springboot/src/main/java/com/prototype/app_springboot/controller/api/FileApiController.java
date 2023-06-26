package com.prototype.app_springboot.controller.api;

import com.prototype.app_springboot.service.FileService;
import org.springframework.http.ResponseEntity;
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

    private final FileService fileService;

    public FileApiController(FileService fileService) {
        this.fileService = fileService;
    }

    // api 주소 바꾸기
    @PostMapping("/upload/file")
    public void sendFile(@RequestParam("file") MultipartFile file) {
        fileService.send(file);
    }

    // 테스트용
    @PostMapping("/store/file")
    public String getFile(MultipartFile file) {
        Path testLocation = Paths.get("C:\\Users\\정재욱\\Desktop");
        Path destinationFile = testLocation.resolve(Paths.get(file.getOriginalFilename())).normalize().toAbsolutePath();

        try (InputStream inputStream = file.getInputStream()) {
            Files.copy(inputStream, destinationFile,
                    StandardCopyOption.REPLACE_EXISTING);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        return "잘됫으";
    }

}
