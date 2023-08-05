package com.prototype.app_springboot.data.repository;

import com.prototype.app_springboot.data.entity.FileInfo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;


public interface FileInfoRepository extends JpaRepository<FileInfo, Integer> {
     Optional<List<FileInfo>> findAllByPostInfoId(int postId);
}
