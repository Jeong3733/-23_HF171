package com.prototype.app_springboot.service;

import com.prototype.app_springboot.data.dto.CompetitionDtos.AddCompetitionRequestDto;
import com.prototype.app_springboot.data.entity.CompetitionDocs;
import com.prototype.app_springboot.data.entity.CompetitionInfo;
import com.prototype.app_springboot.data.entity.CompetitionType;
import com.prototype.app_springboot.data.entity.UserByCompetition;
import com.prototype.app_springboot.data.repository.competition.CompetitionDocsRepository;
import com.prototype.app_springboot.data.repository.competition.CompetitionInfoRepository;
import com.prototype.app_springboot.data.repository.competition.CompetitionTypeRepository;
import com.prototype.app_springboot.data.repository.competition.UserByCompetitionRepository;
import jakarta.transaction.Transactional;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDateTime;
import java.util.List;

@Service
@Slf4j
public class CompetitionService {

    private final AwsService awsService;
    private final CompetitionInfoRepository competitionInfoRepository;
    private final CompetitionDocsRepository competitionDocsRepository;
    private final CompetitionTypeRepository competitionTypeRepository;
    private final UserByCompetitionRepository userByCompetitionRepository;

    public CompetitionService(AwsService awsService, CompetitionInfoRepository competitionInfoRepository, CompetitionDocsRepository competitionDocsRepository, CompetitionTypeRepository competitionTypeRepository, UserByCompetitionRepository userByCompetitionRepository) {
        this.awsService = awsService;
        this.competitionInfoRepository = competitionInfoRepository;
        this.competitionDocsRepository = competitionDocsRepository;
        this.competitionTypeRepository = competitionTypeRepository;
        this.userByCompetitionRepository = userByCompetitionRepository;
    }

    @Transactional
    public CompetitionInfo getCompetitionInfoByCompetitionId(int competitionId) {
        return competitionInfoRepository.findById(competitionId)
                .orElseThrow(() ->
                        new IllegalArgumentException("해당 대회가 존재하지 않습니다.")
                );
    }

    @Transactional
    public List<CompetitionInfo> getCompetitionInfoList() {
        return competitionInfoRepository.findAll();
    }

    @Transactional
    public List<UserByCompetition> getCompetitionInfoListByUserId(String userId) {
        return userByCompetitionRepository.findAllByUserInfo_UserId(userId);
    }

    @Transactional
    public void saveCompetition(AddCompetitionRequestDto addCompetitionRequestDto, MultipartFile competitionImageFile, List<MultipartFile> competitionDocsFileList) {
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

        competitionDocsFileList.forEach(competitionDocsFile -> {
            CompetitionDocs competitionDocs = CompetitionDocs.builder()
                    .competitionInfo(competitionInfo)
                    .docsPath(awsService.uploadFileListToS3(competitionDocsFile))
                    .fileTitle(competitionDocsFile.getName())
                    .build();
            competitionDocsRepository.save(competitionDocs);
        });

        addCompetitionRequestDto.getCompetitionTypeList().forEach(type -> {
            System.out.println("type = " + type);
            CompetitionType competitionType = CompetitionType.builder()
                    .competitionInfo(competitionInfo)
                    .type(type)
                    .build();
            competitionTypeRepository.save(competitionType);
        });
    }
}
