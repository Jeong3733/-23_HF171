package com.prototype.app_springboot.service;

import com.prototype.app_springboot.data.entity.CompPageInfo;
import com.prototype.app_springboot.data.entity.PageInfo;
import com.prototype.app_springboot.data.entity.PageResultInfo;
import com.prototype.app_springboot.data.idClass.PageResultInfoId;
import com.prototype.app_springboot.data.repository.CompPageInfoRepository;
import com.prototype.app_springboot.data.repository.PageInfoRepository;
import com.prototype.app_springboot.data.repository.PageResultInfoRepository;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
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

    @Transactional
    public PageResultInfo getPageResultByPageIdAndCompPageId(String pageId, String compPageId) {
        PageResultInfoId pageResultInfoId = new PageResultInfoId(pageId, compPageId);
        return pageResultInfoRepository.findById(pageResultInfoId)
                .orElseThrow(() -> {
                    log.error("PageId : {}, CompPageID : {} 의 파일이 존재하지 않습니다.", pageId, compPageId);
                    throw new EntityNotFoundException("해당 PageResultInfo 가 존재하지 않습니다.");
                });
    }

    @Transactional
    public void updatePageResultInfoReport(String pageId, String compPageId, String report) {
        PageResultInfoId pageResultInfoId = new PageResultInfoId(pageId, compPageId);
        PageResultInfo pageResultInfo = pageResultInfoRepository.findById(pageResultInfoId)
                .orElseThrow(() -> {
                    log.error("PageId : {}, CompPageID : {} 의 파일이 존재하지 않습니다.", pageId, compPageId);
                    throw new EntityNotFoundException("해당 PageResultInfo 가 존재하지 않습니다.");
                });

        pageResultInfo.setReport(report);
    }
}
