package com.prototype.app_springboot.data.repository.competition;

import com.prototype.app_springboot.data.entity.CompetitionType;
import com.prototype.app_springboot.data.idClass.CompetitionTypeId;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CompetitionTypeRepository extends JpaRepository<CompetitionType, CompetitionTypeId> {
}
