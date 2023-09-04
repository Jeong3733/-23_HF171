package com.prototype.app_springboot.data.repository;

import com.prototype.app_springboot.data.entity.CompetitionInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CompetitionInfoRepository extends JpaRepository<CompetitionInfo, Integer> {
    @Query("SELECT c, u FROM CompetitionInfo c LEFT JOIN UserByCompetition u ON c.id = u.competitionInfo.id AND u.userInfo.userId = :userId")
    List<Object[]> findAllLeftJoinWithUserByCompetition(@Param("userId") String userId);
}
