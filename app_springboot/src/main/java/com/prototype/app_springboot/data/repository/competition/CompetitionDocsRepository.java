package com.prototype.app_springboot.data.repository.competition;

import com.prototype.app_springboot.data.entity.CompetitionDocs;
import com.prototype.app_springboot.data.idClass.CompetitionDocsId;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CompetitionDocsRepository extends JpaRepository<CompetitionDocs, CompetitionDocsId> {
}
