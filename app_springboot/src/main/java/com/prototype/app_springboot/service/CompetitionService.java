package com.prototype.app_springboot.service;

import com.amazonaws.services.s3.AmazonS3Client;
import com.amazonaws.services.s3.model.AmazonS3Exception;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.PutObjectRequest;
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
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;
import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Service
@Slf4j
public class CompetitionService {

    @Value("${cloud.aws.s3.bucket}")
    private String bucket;

    private final AmazonS3Client amazonS3Client;
    private final CompetitionInfoRepository competitionInfoRepository;
    private final CompetitionDocsRepository competitionDocsRepository;
    private final CompetitionTypeRepository competitionTypeRepository;
    private final UserByCompetitionRepository userByCompetitionRepository;

    public CompetitionService(AmazonS3Client amazonS3Client, CompetitionInfoRepository competitionInfoRepository, CompetitionDocsRepository competitionDocsRepository, CompetitionTypeRepository competitionTypeRepository, UserByCompetitionRepository userByCompetitionRepository) {
        this.amazonS3Client = amazonS3Client;
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
                .competitionImage(uploadFileListToS3(competitionImageFile))
                .competitionReadme(addCompetitionRequestDto.getCompetitionReadme())
                .competitionStartDate(competitionStartDate)
                .competitionEndDate(competitionEndDate)
                .build();
        competitionInfoRepository.save(competitionInfo);

        competitionDocsFileList.forEach(competitionDocsFile -> {
            CompetitionDocs competitionDocs = CompetitionDocs.builder()
                    .competitionInfo(competitionInfo)
                    .docsPath(uploadFileListToS3(competitionDocsFile))
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

    @Transactional
    public UUID uploadFileListToS3(MultipartFile multipartFile) throws AmazonS3Exception {

        ObjectMetadata objectMetadata = new ObjectMetadata();
        objectMetadata.setContentLength(multipartFile.getSize());
        objectMetadata.setContentType(multipartFile.getContentType());
        UUID uuid = UUID.randomUUID();

        try (InputStream inputStream = multipartFile.getInputStream()) {

            // S3에 폴더 및 파일 업로드
            amazonS3Client.putObject(
                    new PutObjectRequest(bucket, uuid.toString(), inputStream, objectMetadata)
                            .withCannedAcl(CannedAccessControlList.PublicRead));

            log.info("AWS S3 파일 업로드 완료");
            return uuid;

        } catch (IOException e) {
            e.printStackTrace();
            log.error("AWS S3 파일 업로드 실패", e);
        }
        return null;
    }

}
