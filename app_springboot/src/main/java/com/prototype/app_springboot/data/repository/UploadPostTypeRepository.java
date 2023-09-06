package com.prototype.app_springboot.data.repository;

import com.prototype.app_springboot.data.entity.UploadPostType;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UploadPostTypeRepository extends JpaRepository<UploadPostType, Integer> {
}
