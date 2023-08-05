package com.prototype.app_springboot.data.repository.competition;

import com.prototype.app_springboot.data.entity.CompetitionInfo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CompetitionInfoRepository extends JpaRepository<CompetitionInfo, Integer> {
}
