package com.prototype.app_springboot.controller;

import com.prototype.app_springboot.data.dto.CompFileDto;
import com.prototype.app_springboot.data.dto.FileInfoDto;
import com.prototype.app_springboot.data.entity.FileInfo;
import com.prototype.app_springboot.service.FileService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
public class FileController {
    private final FileService fileService;

    public FileController(FileService fileService) {
        this.fileService = fileService;
    }

    @GetMapping("/get/compFileInfo")
    public ResponseEntity<List<CompFileDto>> getAllCompFileInfoList() {
        List<CompFileDto> compFileDtoList = fileService.getAllCompFileInfoList().stream()
                .map(CompFileDto::new)
                .toList();
        return new ResponseEntity<>(compFileDtoList, HttpStatus.OK);
    }

    @PostMapping("/get/fileInfo/postId")
    public ResponseEntity<List<FileInfoDto>> getFileInfoListByPostId(@RequestBody Map<String, String> postIdMap) {
        int postId = Integer.parseInt(postIdMap.get("postId"));
        List<FileInfo> fileInfoList = fileService.getFileInfoListByPostId(postId);
        List<FileInfoDto> fileInfoDtoList = fileInfoList.stream()
                .map(FileInfoDto::new)
                .toList();
        return new ResponseEntity<>(fileInfoDtoList, HttpStatus.OK);
    }
}
