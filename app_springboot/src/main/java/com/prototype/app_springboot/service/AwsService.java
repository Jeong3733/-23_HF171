package com.prototype.app_springboot.service;

import com.amazonaws.services.s3.AmazonS3Client;
import com.amazonaws.services.s3.model.*;
import jakarta.transaction.Transactional;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;
import java.util.UUID;

@Service
@Slf4j
public class AwsService {
    @Value("${cloud.aws.s3.bucket}")
    private String bucket;
    private final AmazonS3Client amazonS3Client;

    public AwsService(AmazonS3Client amazonS3Client) {
        this.amazonS3Client = amazonS3Client;
    }

    @Transactional
    public S3Object downloadFileFromS3(String uuid) throws IOException {
        return amazonS3Client.getObject(new GetObjectRequest(bucket, uuid));
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
