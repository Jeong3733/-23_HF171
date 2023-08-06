package com.prototype.app_springboot.data.repository.competition;

import com.prototype.app_springboot.data.entity.UserByCompetition;
import com.prototype.app_springboot.data.idClass.UserByCompetitionId;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserByCompetitionRepository extends JpaRepository<UserByCompetition, UserByCompetitionId> {
    List<UserByCompetition> findAllByUserInfo_UserId(String userInfoId);
    UserByCompetition findByUserInfo_UserIdAndCompetitionInfoId(String userInfoId, int competitionInfoId);
}
