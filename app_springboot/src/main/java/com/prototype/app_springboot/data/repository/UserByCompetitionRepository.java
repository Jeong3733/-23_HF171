package com.prototype.app_springboot.data.repository;

import com.prototype.app_springboot.data.entity.UserByCompetition;
import com.prototype.app_springboot.data.idClass.UserByCompetitionId;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface UserByCompetitionRepository extends JpaRepository<UserByCompetition, UserByCompetitionId> {
    List<UserByCompetition> findAllByUserInfo_UserId(String userInfoId);
    List<UserByCompetition> findAllByCompetitionInfoId(int competitionInfoId);
    Optional<UserByCompetition> findByUserInfo_UserIdAndCompetitionInfoId(String userInfoId, int competitionInfoId);
    boolean existsByUserInfo_UserIdAndCompetitionInfoId(String userInfoId, int competitionInfoId);
}
