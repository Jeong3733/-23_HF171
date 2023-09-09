package com.prototype.app_springboot.data.repository;

import com.prototype.app_springboot.data.entity.FileInfo;
import com.prototype.app_springboot.data.entity.PageInfo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface PageInfoRepository extends JpaRepository<PageInfo, String>{
    Optional<PageInfo> findByPageId(String pageId);
    List<PageInfo> findAllByFileInfoId(int fileInfoId);
    List<PageInfo> findAllByFileInfo(FileInfo fileInfo);
}
