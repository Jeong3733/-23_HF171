package com.prototype.app_springboot.service;

import com.prototype.app_springboot.data.entity.FileInfo;
import com.prototype.app_springboot.data.repository.FileInfoRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FileService {
    private final FileInfoRepository fileInfoRepository;
    public FileService(FileInfoRepository fileInfoRepository) {
        this.fileInfoRepository = fileInfoRepository;
    }

    public List<FileInfo> getFileInfoListByPostId(int postId) {
        return fileInfoRepository.findAllByPostInfoId(postId)
                .orElseThrow(() ->
                        new IllegalArgumentException("해당 PostId의 파일이 존재하지 않습니다.")
                );
    }
}
