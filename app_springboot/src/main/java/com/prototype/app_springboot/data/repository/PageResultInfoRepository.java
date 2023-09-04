package com.prototype.app_springboot.data.repository;

import com.prototype.app_springboot.data.entity.PageResultInfo;
import com.prototype.app_springboot.data.idClass.PageResultInfoId;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PageResultInfoRepository extends JpaRepository<PageResultInfo, PageResultInfoId> {
    List<PageResultInfo> findAllByPageInfoPageId(String pageInfoId);
}
