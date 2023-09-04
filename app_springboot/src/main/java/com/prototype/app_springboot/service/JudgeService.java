package com.prototype.app_springboot.service;

import com.prototype.app_springboot.data.entity.JudgeInfo;
import com.prototype.app_springboot.data.entity.PostInfo;
import com.prototype.app_springboot.data.repository.JudgeInfoRepository;
import com.prototype.app_springboot.data.repository.PostInfoRepository;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Slf4j
@Service
public class JudgeService {
    private final JudgeInfoRepository judgeInfoRepository;
    private final PostInfoRepository postInfoRepository;

    public JudgeService(JudgeInfoRepository judgeInfoRepository, PostInfoRepository postInfoRepository) {
        this.judgeInfoRepository = judgeInfoRepository;
        this.postInfoRepository = postInfoRepository;
    }

    @Transactional
    public void saveJudge(int postId) {
        UUID uuid = UUID.randomUUID();
        PostInfo postInfo = postInfoRepository.findById(postId)
                .orElseThrow(() -> {
                    log.error("PostId : {}의 파일이 존재하지 않습니다.", postId);
                    throw new EntityNotFoundException("해당 PostId의 게시글이 존재하지 않습니다.");
                });

        JudgeInfo judgeInfo = JudgeInfo.builder()
                .postInfo(postInfo)
                .id(uuid)
                .build();

        judgeInfoRepository.save(judgeInfo);
    }

    @Transactional
    public void deleteJudge(String judgeId) {
        UUID uuid = UUID.fromString(judgeId);
        JudgeInfo judgeInfo = judgeInfoRepository.findById(uuid)
                .orElseThrow(() -> {
                    log.error("JudgeId : {}의 파일이 존재하지 않습니다.", judgeId);
                    throw new EntityNotFoundException("해당 JudgeId의 심사위원이 존재하지 않습니다.");
                });

        judgeInfoRepository.delete(judgeInfo);
    }

    @Transactional
    public JudgeInfo getJudgeInfoByJudgeId(String judgeId) {
        UUID uuid = UUID.fromString(judgeId);
        return judgeInfoRepository.findById(uuid)
                .orElseThrow(() -> {
                    log.error("JudgeId : {}의 심사위원이 존재하지 않습니다.", judgeId);
                    throw new EntityNotFoundException("해당 JudgeId의 심사위원이 존재하지 않습니다.");
                });
    }

    @Transactional
    public List<JudgeInfo> getAllJudgeInfoByPostId(int postId) {
        return judgeInfoRepository.findAllByPostInfoId(postId);
    }

    @Transactional
    public List<JudgeInfo> getAllJudgeInfoByCompetitionId(int competitionId) {
        List<JudgeInfo> judgeInfoList = new ArrayList<JudgeInfo>();
        postInfoRepository.findAllByCompetitionInfoId(competitionId)
                .forEach(postInfo -> {
                    judgeInfoList.addAll(judgeInfoRepository.findAllByPostInfoId(postInfo.getId()));
        });
        return judgeInfoList;
    }
}
