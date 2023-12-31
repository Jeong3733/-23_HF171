package com.prototype.app_springboot.data.repository;

import com.prototype.app_springboot.data.entity.FileInfo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;


public interface FileInfoRepository extends JpaRepository<FileInfo, Integer> {
     Optional<List<FileInfo>> findAllByPostInfoId(int postId);
     Optional<FileInfo> findById(int id);
     Optional<FileInfo> findByPath(UUID path);
     List<FileInfo> findAllByPostInfoIdAndUserInfo_UserId(int postId, String userId);
     Boolean existsByPostInfoIdAndUserInfo_UserId(int postId, String userId);
}
