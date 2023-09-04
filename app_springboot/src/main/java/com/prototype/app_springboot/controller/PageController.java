package com.prototype.app_springboot.controller;

import com.prototype.app_springboot.data.dto.PageDtos.CompPageDto;
import com.prototype.app_springboot.service.PageService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class PageController {

    private final PageService pageService;

    public PageController(PageService pageService) {
        this.pageService = pageService;
    }

    @GetMapping("/get/compPageInfo")
    public ResponseEntity<List<CompPageDto>> getAllCompPageInfoList() {
        List<CompPageDto> compPageDtoList = pageService.getAllCompPageInfoList().stream()
                .map(CompPageDto::new)
                .toList();
        return new ResponseEntity<>(compPageDtoList, HttpStatus.OK);
    }
}
