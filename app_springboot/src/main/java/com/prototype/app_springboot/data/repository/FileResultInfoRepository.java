package com.prototype.app_springboot.data.repository;

import com.prototype.app_springboot.data.entity.FileResultInfo;
import com.prototype.app_springboot.data.idClass.FileResultInfoId;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FileResultInfoRepository extends JpaRepository<FileResultInfo, FileResultInfoId> {
    FileResultInfo findByFileInfoId(int fileInfoId);
}
