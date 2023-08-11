package com.prototype.app_springboot.service;

import com.prototype.app_springboot.data.entity.CompPageInfo;
import com.prototype.app_springboot.data.repository.CompPageInfoRepository;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PageService {
    private final CompPageInfoRepository compPageRepository;

    public PageService(CompPageInfoRepository compPageRepository) {
        this.compPageRepository = compPageRepository;
    }

    @Transactional
    public List<CompPageInfo> getAllCompPageInfoList() {
        return compPageRepository.findAll();
    }
}
