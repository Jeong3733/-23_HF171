package com.prototype.app_springboot.service;

import com.amazonaws.services.s3.AmazonS3Client;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.PutObjectRequest;
import jakarta.transaction.Transactional;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;

@Service
@Slf4j
public class AmazonS3Service {

    @Value("${cloud.aws.s3.bucket}")
    private String bucket;

    private final AmazonS3Client amazonS3Client;

    public AmazonS3Service(AmazonS3Client amazonS3Client) {
        this.amazonS3Client = amazonS3Client;
    }

    @Transactional
    public void uploadFileList(MultipartFile[] multipartFilesfiles, String dirName) {

        for (MultipartFile multipartFile : multipartFilesfiles) {
            ObjectMetadata objectMetadata = new ObjectMetadata();
            objectMetadata.setContentLength(multipartFile.getSize());
            objectMetadata.setContentType(multipartFile.getContentType());

            try (InputStream inputStream = multipartFile.getInputStream()) {

                // S3에 폴더 및 파일 업로드
                amazonS3Client.putObject(
                        new PutObjectRequest(bucket, uploadFileName(multipartFile, dirName), inputStream, objectMetadata)
                                .withCannedAcl(CannedAccessControlList.PublicRead));

                log.info("AWS S3 파일 업로드 완료");

            } catch (IOException e) {
                e.printStackTrace();
                log.error("Filed upload failed", e);
            }
        }
    }

    public String uploadFileName(MultipartFile multipartFile, String dirName) {
        return dirName + "/" + multipartFile.getOriginalFilename();
    }
}
