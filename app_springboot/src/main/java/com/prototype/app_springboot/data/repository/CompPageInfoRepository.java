package com.prototype.app_springboot.data.repository;

import com.prototype.app_springboot.data.entity.CompPageInfo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CompPageInfoRepository extends JpaRepository<CompPageInfo, String> {
    Optional<CompPageInfo> findByPageId(String pageId);
}
