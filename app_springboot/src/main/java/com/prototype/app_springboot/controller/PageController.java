package com.prototype.app_springboot.controller;

import com.prototype.app_springboot.data.dto.FastApiDtos.ReqFileReport;
import com.prototype.app_springboot.data.dto.FastApiDtos.ResFileReport;
import com.prototype.app_springboot.data.dto.PageDtos.CompPageInfoDto;
import com.prototype.app_springboot.data.dto.PageDtos.PageResultInfoDto;
import com.prototype.app_springboot.service.FastApiService;
import com.prototype.app_springboot.service.PageService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.net.URISyntaxException;
import java.util.List;
import java.util.Map;

@RestController
public class PageController {

    private final PageService pageService;
    private final FastApiService fastApiService;

    public PageController(PageService pageService, FastApiService fastApiService) {
        this.pageService = pageService;
        this.fastApiService = fastApiService;
    }

    @GetMapping("/get/compPageInfo")
    public ResponseEntity<List<CompPageInfoDto>> getAllCompPageInfoList() {
        List<CompPageInfoDto> compPageDtoList = pageService.getAllCompPageInfoList().stream()
                .map(CompPageInfoDto::new)
                .toList();
        return new ResponseEntity<>(compPageDtoList, HttpStatus.OK);
    }

    @PostMapping("/add/page/report")
    public ResponseEntity<ResFileReport> getFileReport(@RequestBody ReqFileReport reqFileReport) throws URISyntaxException {
        ResFileReport resFileReport = fastApiService.getFileReport(reqFileReport);
        pageService.updatePageResultInfoReport(reqFileReport.getPage_id(), reqFileReport.getComp_page_id(), resFileReport.getReport());
        return new ResponseEntity<>(resFileReport, HttpStatus.OK);
    }

    @PostMapping("/get/pageResult")
    public ResponseEntity<PageResultInfoDto> getPageResultInfoByPageIdAndCompPageId(@RequestBody Map<String, String> pageIdsMap) {
        String pageId = pageIdsMap.get("pageId");
        String compPageId = pageIdsMap.get("compPageId");

        PageResultInfoDto pageResultInfoDto = new PageResultInfoDto(pageService.getPageResultByPageIdAndCompPageId(pageId, compPageId));
        return new ResponseEntity<>(pageResultInfoDto, HttpStatus.OK);
    }
}
