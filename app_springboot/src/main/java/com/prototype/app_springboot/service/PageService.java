package com.prototype.app_springboot.service;

import com.prototype.app_springboot.data.entity.CompPageInfo;
import com.prototype.app_springboot.data.entity.PageInfo;
import com.prototype.app_springboot.data.entity.PageResultInfo;
import com.prototype.app_springboot.data.repository.CompPageInfoRepository;
import com.prototype.app_springboot.data.repository.PageInfoRepository;
import com.prototype.app_springboot.data.repository.PageResultInfoRepository;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PageService {
    private final CompPageInfoRepository compPageRepository;
    private final PageInfoRepository pageInfoRepository;
    private final PageResultInfoRepository pageResultInfoRepository;

    public PageService(CompPageInfoRepository compPageRepository, PageInfoRepository pageInfoRepository, PageResultInfoRepository pageResultInfoRepository) {
        this.compPageRepository = compPageRepository;
        this.pageInfoRepository = pageInfoRepository;
        this.pageResultInfoRepository = pageResultInfoRepository;
    }

    @Transactional
    public List<PageInfo> getPageInfoListByFileId(int fileInfoId) {
        return pageInfoRepository.findAllByFileInfoId(fileInfoId);
    }

    @Transactional
    public List<PageResultInfo> getPageResultInfoByPageId(String pageId) {
        return pageResultInfoRepository.findAllByPageInfoPageId(pageId);
    }

    @Transactional
    public List<CompPageInfo> getAllCompPageInfoList() {
        return compPageRepository.findAll();
    }
}
