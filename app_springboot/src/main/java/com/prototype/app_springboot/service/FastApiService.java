package com.prototype.app_springboot.service;

import com.prototype.app_springboot.data.dto.FastApiDtos.CompareResultOfFileDto;
import com.prototype.app_springboot.data.dto.FastApiDtos.PageContentDto;
import com.prototype.app_springboot.data.dto.FastApiDtos.PageInfoOfCompFileDto;
import com.prototype.app_springboot.data.entity.CompFileInfo;
import com.prototype.app_springboot.data.entity.FileInfo;
import com.prototype.app_springboot.data.repository.PageInfoRepository;
import com.prototype.app_springboot.data.repository.PageResultInfoRepository;
import jakarta.transaction.Transactional;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@Slf4j
public class FastApiService {
    @Value("${app.fast-api.url}")
    private String FastApiUrl;

    private final PageInfoRepository pageInfoRepository;
    private final PageResultInfoRepository pageResultInfoRepository;

    public FastApiService(PageInfoRepository pageInfoRepository, PageResultInfoRepository pageResultInfoRepository) {
        this.pageInfoRepository = pageInfoRepository;
        this.pageResultInfoRepository = pageResultInfoRepository;
    }

    @Transactional
    public CompareResultOfFileDto getCompareResultOfFile(FileInfo fileInfo) throws URISyntaxException {
        WebClient webClient = WebClient.create();

        Map<String, String> body = new HashMap<>();
        body.put("file_id", String.valueOf(fileInfo.getId()));
        body.put("file_extension", fileInfo.getFileExtension());
        body.put("path", fileInfo.getPath().toString());

        return webClient.post()
                .uri(new URI(FastApiUrl + "/function/fileInfo/update"))
                .bodyValue(body)
                .retrieve()
                .bodyToMono(CompareResultOfFileDto.class)
                .block();
    }

    @Transactional
    public PageInfoOfCompFileDto getPageInfoOfCompFile(CompFileInfo compFileInfo) throws URISyntaxException {
        WebClient webClient = WebClient.create();

        Map<String, String> body = new HashMap<>();
        body.put("file_id", String.valueOf(compFileInfo.getId()));
        body.put("file_extension", compFileInfo.getFileExtension());
        body.put("path", compFileInfo.getPath().toString());

        return webClient.post()
                .uri(new URI(FastApiUrl + "/function/compFileInfo/update"))
                .bodyValue(body)
                .retrieve()
                .bodyToMono(PageInfoOfCompFileDto.class)
                .block();
    }

    @Transactional
    public PageContentDto getPageContentByPageId(FileInfo fileInfo) throws URISyntaxException {
        WebClient webClient = WebClient.create();
        List<String> pageIdList = new ArrayList<>();

        pageInfoRepository.findAllByFileInfo(fileInfo)
                .forEach(pageInfo -> {
                    pageResultInfoRepository.findAllByPageInfoPageId(pageInfo.getPageId())
                            .forEach(pageResultInfo -> {
                                String compPageId = pageResultInfo.getCompPageInfo().getPageId();
                                if (!pageIdList.contains(compPageId)) {
                                    pageIdList.add(pageResultInfo.getCompPageInfo().getPageId());
                                }
                            });
                });

        Map<String, List<String>> body = new HashMap<>();
        body.put("page_id_list", pageIdList);


        return webClient.post()
                .uri(new URI(FastApiUrl + "/function/compFileInfo/get/pageId"))
                .bodyValue(body)
                .retrieve()
                .bodyToMono(PageContentDto.class)
                .block();
    }
}
