package com.prototype.app_springboot.service;

import com.prototype.app_springboot.data.dto.CompetitionDtos.AddCompetitionRequestDto;
import com.prototype.app_springboot.data.entity.*;
import com.prototype.app_springboot.data.repository.*;
import com.prototype.app_springboot.data.type.RoleType;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.io.FilenameUtils;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
@Slf4j
public class CompetitionService {

    private final AwsService awsService;
    private final CompetitionInfoRepository competitionInfoRepository;
    private final CompetitionDocsRepository competitionDocsRepository;
    private final CompetitionTypeRepository competitionTypeRepository;
    private final UserByCompetitionRepository userByCompetitionRepository;
    private final UserInfoRepository userInfoRepository;

    public CompetitionService(AwsService awsService, CompetitionInfoRepository competitionInfoRepository, CompetitionDocsRepository competitionDocsRepository, CompetitionTypeRepository competitionTypeRepository, UserByCompetitionRepository userByCompetitionRepository, UserInfoRepository userInfoRepository) {
        this.awsService = awsService;
        this.competitionInfoRepository = competitionInfoRepository;
        this.competitionDocsRepository = competitionDocsRepository;
        this.competitionTypeRepository = competitionTypeRepository;
        this.userByCompetitionRepository = userByCompetitionRepository;
        this.userInfoRepository = userInfoRepository;
    }

    @Transactional
    public boolean updateReadMe(int competitionId, String readme) {
        Optional<CompetitionInfo> competitionInfoOptional = competitionInfoRepository.findById(competitionId);

        if (competitionInfoOptional.isPresent()) {
            CompetitionInfo competitionInfo = competitionInfoOptional.get();
            competitionInfo.setCompetitionReadme(readme);
            competitionInfoRepository.save(competitionInfo);
        } else {
            return false;
        }

        return true;
    }

    @Transactional
    public int setUserByCompetition(String userId, int competitionId) {
        if (!userByCompetitionRepository.existsByUserInfo_UserIdAndCompetitionInfoId(userId, competitionId)) {
            UserInfo userInfo = userInfoRepository.findById(userId)
                    .orElseThrow(() -> {
                        log.error("UserId : {}의 유저가 존재하지 않습니다.", userId);
                        throw new EntityNotFoundException("해당 유저를 찾을 수 없습니다.");
                    });

            UserByCompetition userByCompetition = UserByCompetition.builder()
                    .competitionInfo(getCompetitionInfoByCompetitionId(competitionId))
                    .userInfo(userInfo)
                    // TODO: 나중에 팀하고 바꿔야 댐
                    .teamInfo(null)
                    .roleType(RoleType.PARTICIPANT_BASE)
                    .build();

            userByCompetitionRepository.save(userByCompetition);
            return 0;
        } else {
            return 1;
        }
    }

    @Transactional
    public UserByCompetition getUserAndCompetitionByUserIdAndCompetitionId(String userId, int competitionId) {
        return userByCompetitionRepository.findByUserInfo_UserIdAndCompetitionInfoId(userId, competitionId)
                .orElseThrow(() -> {
                    log.error("CompetitionId : {} 에 UserId : {}의 유저가 참여하지 않았습니다.", competitionId, userId);
                    throw new EntityNotFoundException("해당 유저가 해당 공모전에 참여하지 않았습니다.");
                });
    }

    @Transactional
    public CompetitionInfo getCompetitionInfoByCompetitionId(int competitionId) {
        return competitionInfoRepository.findById(competitionId)
                .orElseThrow(() ->
                        new IllegalArgumentException("해당 대회가 존재하지 않습니다.")
                );
    }

    @Transactional
    public List<CompetitionInfo> getAllCompetitionInfoList() {
        return competitionInfoRepository.findAll();
    }

    /**
     * 대회 정보를 조회할 때, 대회에 참가한 유저 정보도 함께 조회한다. 해당 유저가 대회에 참가하지 않은 경우 null 이다.
     * 리턴하는 리스트의 첫번째 원소는 CompetitionInfo, 두번째 원소는 UserByCompetition 이다.
     * 해당 유저가 참여하지 않은 competition 인 경우 UserByCompetition 은 null 이다.
     *
     * @param userId
     * @return
     */
    @Transactional
    public List<Object[]> getAllCompetitionInfoListWithUserId(String userId) {
        return competitionInfoRepository.findAllLeftJoinWithUserByCompetition(userId);
    }

    @Transactional
    public List<UserByCompetition> getCompetitionInfoListByUserId(String userId) {
        return userByCompetitionRepository.findAllByUserInfo_UserId(userId);
    }

    @Transactional
    public List<UserByCompetition> getCompetitionInfoListByCompetitionId(int competitionId) {
        return userByCompetitionRepository.findAllByCompetitionInfoId(competitionId);
    }

    @Transactional
    public void saveCompetition(AddCompetitionRequestDto addCompetitionRequestDto, MultipartFile competitionImageFile, List<MultipartFile> competitionDocsFileList, String userId) {
        LocalDateTime competitionStartDate = LocalDateTime.parse(addCompetitionRequestDto.getCompetitionDateStart() + "T00:00:00");
        LocalDateTime competitionEndDate = LocalDateTime.parse(addCompetitionRequestDto.getCompetitionDateEnd() + "T00:00:00");

        CompetitionInfo competitionInfo = CompetitionInfo.builder()
                .competitionName(addCompetitionRequestDto.getCompetitionName())
                .competitionDescription(addCompetitionRequestDto.getCompetitionDescription())
                .competitionImage(awsService.uploadFileListToS3(competitionImageFile))
                .competitionReadme(addCompetitionRequestDto.getCompetitionReadme())
                .competitionStartDate(competitionStartDate)
                .competitionEndDate(competitionEndDate)
                .build();
        competitionInfoRepository.save(competitionInfo);

        UserInfo userInfo = userInfoRepository.findById(userId)
                .orElseThrow(() -> {
                    log.error("UserId : {}의 유저가 존재하지 않습니다.", userId);
                    throw new UsernameNotFoundException("해당 유저를 찾을 수 없습니다.");
                });

        UserByCompetition userByCompetition = UserByCompetition.builder()
                .userInfo(userInfo)
                .competitionInfo(competitionInfo)
                .roleType(RoleType.CREATOR)
                .build();
        userByCompetitionRepository.save(userByCompetition);

        competitionDocsFileList.forEach(competitionDocsFile -> {
            if (competitionDocsFile.isEmpty()) {
                return;
            }

            CompetitionDocs competitionDocs = CompetitionDocs.builder()
                    .competitionInfo(competitionInfo)
                    .path(awsService.uploadFileListToS3(competitionDocsFile))
                    .fileExtension(Objects.requireNonNull(FilenameUtils.getExtension(competitionDocsFile.getOriginalFilename())).toUpperCase())
                    .fileTitle(competitionDocsFile.getName())
                    .build();
            competitionDocsRepository.save(competitionDocs);
        });

        addCompetitionRequestDto.getCompetitionTypeList().forEach(type -> {
            CompetitionType competitionType = CompetitionType.builder()
                    .competitionInfo(competitionInfo)
                    .type(type)
                    .build();
            competitionTypeRepository.save(competitionType);
        });
    }
}
