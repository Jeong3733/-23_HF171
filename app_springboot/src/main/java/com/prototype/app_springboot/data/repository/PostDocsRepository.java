package com.prototype.app_springboot.data.repository;

import com.prototype.app_springboot.data.entity.PostDocs;
import com.prototype.app_springboot.data.idClass.PostDocsId;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostDocsRepository extends JpaRepository<PostDocs, PostDocsId> {
}
