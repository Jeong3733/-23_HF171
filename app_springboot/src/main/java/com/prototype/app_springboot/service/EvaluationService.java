package com.prototype.app_springboot.service;

import com.prototype.app_springboot.data.dto.EvaluationDtos.EvaluationScoreDto;
import com.prototype.app_springboot.data.dto.EvaluationDtos.ReqAddEvaluation;
import com.prototype.app_springboot.data.entity.*;
import com.prototype.app_springboot.data.repository.*;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Slf4j
@Service
public class EvaluationService {
    private final EvaluationInfoRepository evaluationInfoRepository;
    private final PostInfoRepository postInfoRepository;
    private final EvaluationScoreRepository evaluationScoreRepository;
    private final JudgeInfoRepository judgeInfoRepository;
    private final UserInfoRepository userInfoRepository;

    public EvaluationService(EvaluationInfoRepository evaluationInfoRepository, PostInfoRepository postInfoRepository, EvaluationScoreRepository evaluationScoreRepository, JudgeInfoRepository judgeInfoRepository, UserInfoRepository userInfoRepository) {
        this.evaluationInfoRepository = evaluationInfoRepository;
        this.postInfoRepository = postInfoRepository;
        this.evaluationScoreRepository = evaluationScoreRepository;
        this.judgeInfoRepository = judgeInfoRepository;
        this.userInfoRepository = userInfoRepository;
    }

    @Transactional
    public void addEvaluation(ReqAddEvaluation reqAddEvaluation) {
        PostInfo postInfo = postInfoRepository.findById(reqAddEvaluation.getPostId())
                .orElseThrow(() -> {
                    log.error("PostId : {}의 파일이 존재하지 않습니다.", reqAddEvaluation.getPostId());
                    throw new EntityNotFoundException("해당 PostId의 게시글이 존재하지 않습니다.");
                });

        EvaluationInfo evaluationInfo = EvaluationInfo.builder()
                .postInfo(postInfo)
                .name(reqAddEvaluation.getName())
                .max(reqAddEvaluation.getMax())
                .build();

        evaluationInfoRepository.save(evaluationInfo);
    }

    @Transactional
    public void deleteEvaluation(int evalId) {
        EvaluationInfo evaluationInfo = evaluationInfoRepository.findById(evalId)
                .orElseThrow(() -> {
                    log.error("EvaluationId : {}의 평가항목이 존재하지 않습니다.", evalId);
                    throw new EntityNotFoundException("해당 EvalId의 평가항목이 존재하지 않습니다.");
                });

        evaluationInfoRepository.delete(evaluationInfo);
    }

    @Transactional
    public List<EvaluationInfo> getAllEvaluationByPostId(int postId) {
        return evaluationInfoRepository.findAllByPostInfoId(postId);
    }

    @Transactional
    public List<EvaluationScore> getAllEvaluationScoreByPostIdAndJudgeId(int postId, String judgeId) {
        UUID judgeIdUUID = UUID.fromString(judgeId);
        return evaluationScoreRepository.findAllByPostInfoIdAndJudgeInfoId(postId, judgeIdUUID);
    }

    @Transactional
    public List<EvaluationScore> getAllEvaluationScoreByPostId(int postId) {
        return evaluationScoreRepository.findAllByPostInfoId(postId);
    }

    @Transactional
    public void saveAllScoreList(List<EvaluationScoreDto> evaluationScoreDtoList) {
        evaluationScoreDtoList.forEach(evaluationScoreDto -> {
            int postId = evaluationScoreDto.getPost_id();
            PostInfo postInfo = postInfoRepository.findById(postId)
                    .orElseThrow(() -> {
                        log.error("PostId : {}의 게시글이 존재하지 않습니다.", postId);
                        throw new EntityNotFoundException("해당 PostId의 게시글이 존재하지 않습니다.");
                    });

            int evalId = evaluationScoreDto.getEvaluation_id();
            EvaluationInfo evaluationInfo = evaluationInfoRepository.findById(evalId)
                    .orElseThrow(() -> {
                        log.error("EvalId : {}의 평가항목이 존재하지 않습니다.", evalId);
                        throw new EntityNotFoundException("해당 EvalId의 평가항목이 존재하지 않습니다.");
                    });

            UUID judgeId = evaluationScoreDto.getJudge_id();
            JudgeInfo judgeInfo = judgeInfoRepository.findById(judgeId)
                    .orElseThrow(() -> {
                        log.error("JudgeId : {}의 심사위원이 존재하지 않습니다.", judgeId);
                        throw new EntityNotFoundException("해당 JudgeId의 심사위원이 존재하지 않습니다.");
                    });

            String userId = evaluationScoreDto.getUser_id();
            UserInfo userInfo = userInfoRepository.findById(userId)
                    .orElseThrow(() -> {
                        log.error("UserId : {}의 사용자가 존재하지 않습니다.", evaluationScoreDto.getUser_id());
                        throw new EntityNotFoundException("해당 UserId의 사용자가 존재하지 않습니다.");
                    });

            Optional<EvaluationScore> evaluationScoreOptional = evaluationScoreRepository.findByPostInfoIdAndEvaluationInfoIdAndJudgeInfoIdAndUserInfo_UserId(postId, evalId, judgeId, userId);

            if (evaluationScoreOptional.isEmpty()) {
                EvaluationScore evaluationScore = EvaluationScore.builder()
                        .postInfo(postInfo)
                        .evaluationInfo(evaluationInfo)
                        .judgeInfo(judgeInfo)
                        .userInfo(userInfo)
                        .score(evaluationScoreDto.getScore())
                        .comment(evaluationScoreDto.getComment())
                        .build();

                evaluationScoreRepository.save(evaluationScore);
            } else {
                EvaluationScore evaluationScore = evaluationScoreOptional.get();
                evaluationScore.setPostInfo(postInfo);
                evaluationScore.setEvaluationInfo(evaluationInfo);
                evaluationScore.setJudgeInfo(judgeInfo);
                evaluationScore.setUserInfo(userInfo);
                evaluationScore.setScore(evaluationScoreDto.getScore());
                evaluationScore.setComment(evaluationScoreDto.getComment());
            }
        });
    }
}
