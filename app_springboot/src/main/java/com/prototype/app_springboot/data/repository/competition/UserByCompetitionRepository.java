package com.prototype.app_springboot.data.repository.competition;

import com.prototype.app_springboot.data.entity.UserByCompetition;
import com.prototype.app_springboot.data.idClass.UserByCompetitionId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface UserByCompetitionRepository extends JpaRepository<UserByCompetition, UserByCompetitionId> {
    List<UserByCompetition> findAllByUserInfo_UserId(String userInfoId);
    List<UserByCompetition> findAllByCompetitionInfoId(int competitionInfoId);
    UserByCompetition findByUserInfo_UserIdAndCompetitionInfoId(String userInfoId, int competitionInfoId);

    // UserInfoWithUserByCompDto 에 쓸려고 햇는데 안 쓰는거
    @Query("SELECT u, i FROM UserByCompetition u JOIN UserInfo i ON u.userInfo.userId = i.userId AND u.competitionInfo.id = :competitionId")
    List<Object[]> findAllUserByCompAndUserInfoByCompetitionId(@Param("competitionId") int competitionId);
}
