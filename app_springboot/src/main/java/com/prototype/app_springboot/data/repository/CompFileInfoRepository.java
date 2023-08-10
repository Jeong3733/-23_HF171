package com.prototype.app_springboot.data.repository;

import com.prototype.app_springboot.data.entity.CompFileInfo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CompFileInfoRepository extends JpaRepository<CompFileInfo, Integer> {
}
