package com.prototype.app_springboot.service;

import com.prototype.app_springboot.data.dto.EvaluationDtos.EvaluationScoreDto;
import com.prototype.app_springboot.data.dto.EvaluationDtos.ReqAddEvaluation;
import com.prototype.app_springboot.data.dto.EvaluationDtos.ReqAddEvaluationDetail;
import com.prototype.app_springboot.data.dto.EvaluationDtos.ReqUpdateComment;
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
    private final EvaluationDetailInfoRepository evaluationDetailInfoRepository;
    private final EvaluationCommentInfoRepository evaluationCommentInfoRepository;
    private final FileInfoRepository fileInfoRepository;
    private final PostInfoRepository postInfoRepository;
    private final EvaluationScoreRepository evaluationScoreRepository;
    private final JudgeInfoRepository judgeInfoRepository;
    private final UserByCompetitionRepository userByCompetitionRepository;
    private final UserInfoRepository userInfoRepository;

    public EvaluationService(EvaluationInfoRepository evaluationInfoRepository, EvaluationDetailInfoRepository evaluationDetailInfoRepository, EvaluationCommentInfoRepository evaluationCommentInfoRepository, FileInfoRepository fileInfoRepository, PostInfoRepository postInfoRepository, EvaluationScoreRepository evaluationScoreRepository, JudgeInfoRepository judgeInfoRepository, UserByCompetitionRepository userByCompetitionRepository, UserInfoRepository userInfoRepository) {
        this.evaluationInfoRepository = evaluationInfoRepository;
        this.evaluationDetailInfoRepository = evaluationDetailInfoRepository;
        this.evaluationCommentInfoRepository = evaluationCommentInfoRepository;
        this.fileInfoRepository = fileInfoRepository;
        this.postInfoRepository = postInfoRepository;
        this.evaluationScoreRepository = evaluationScoreRepository;
        this.judgeInfoRepository = judgeInfoRepository;
        this.userByCompetitionRepository = userByCompetitionRepository;
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
                .max(0)
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
    public void addEvaluationDetail(ReqAddEvaluationDetail reqAddEvaluationDetail) {
        EvaluationInfo evaluationInfo = evaluationInfoRepository.findById(reqAddEvaluationDetail.getEvaluationId())
                .orElseThrow(() -> {
                    log.error("EvaluationId : {}의 평가항목이 존재하지 않습니다.", reqAddEvaluationDetail.getEvaluationId());
                    throw new EntityNotFoundException("해당 EvalId의 평가항목이 존재하지 않습니다.");
                });

        EvaluationDetailInfo evaluationDetailInfo = EvaluationDetailInfo.builder()
                .evaluationInfo(evaluationInfo)
                .name(reqAddEvaluationDetail.getName())
                .max(reqAddEvaluationDetail.getMax())
                .build();

        evaluationDetailInfoRepository.save(evaluationDetailInfo);
    }

    @Transactional
    public void deleteEvaluationDetail(int evalDetailId) {
        EvaluationDetailInfo evaluationDetailInfo = evaluationDetailInfoRepository.findById(evalDetailId)
                .orElseThrow(() -> {
                    log.error("EvaluationDetailId : {}의 평가항목 세부사항이 존재하지 않습니다.", evalDetailId);
                    throw new EntityNotFoundException("해당 EvalDetailId의 평가항목 세부사항이 존재하지 않습니다.");
                });

        evaluationDetailInfoRepository.delete(evaluationDetailInfo);
    }

    @Transactional
    public List<EvaluationDetailInfo> getEvaluationDetailByPostId(int postId) {
        return evaluationDetailInfoRepository.findAllByEvaluationInfoPostInfoId(postId);
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
    public List<EvaluationScore> getAllEvaluationScoreByFileIdAndJudgeId(int fileId, UUID judgeId) {
        FileInfo fileInfo = fileInfoRepository.findById(fileId)
                .orElseThrow(() -> {
                    log.error("FileId : {}의 파일이 존재하지 않습니다.", fileId);
                    throw new EntityNotFoundException("해당 FileId의 파일이 존재하지 않습니다.");
                });

        return evaluationScoreRepository.findAllByUserInfo_UserIdAndJudgeInfoId(fileInfo.getUserInfo().getUserId(), judgeId);
    }

    @Transactional
    public void saveComment(ReqUpdateComment reqUpdateComment) {
        PostInfo postInfo = postInfoRepository.findById(reqUpdateComment.getPost_id())
                .orElseThrow(() -> {
                    log.error("PostId : {}의 파일이 존재하지 않습니다.", reqUpdateComment.getPost_id());
                    throw new EntityNotFoundException("해당 PostId의 게시글이 존재하지 않습니다.");
                });

        UUID judgeId = UUID.fromString(reqUpdateComment.getJudge_id());
        JudgeInfo judgeInfo = judgeInfoRepository.findById(judgeId)
                .orElseThrow(() -> {
                    log.error("JudgeId : {}의 심사위원이 존재하지 않습니다.", reqUpdateComment.getJudge_id());
                    throw new EntityNotFoundException("해당 JudgeId의 심사위원이 존재하지 않습니다.");
                });

        UserInfo userInfo = userInfoRepository.findById(reqUpdateComment.getUser_id())
                .orElseThrow(() -> {
                    log.error("UserId : {}의 사용자가 존재하지 않습니다.", reqUpdateComment.getUser_id());
                    throw new EntityNotFoundException("해당 UserId의 사용자가 존재하지 않습니다.");
                });

        EvaluationCommentInfo evaluationCommentInfo = EvaluationCommentInfo.builder()
                .postInfo(postInfo)
                .judgeInfo(judgeInfo)
                .userInfo(userInfo)
                .comment(reqUpdateComment.getComment())
                .build();

        evaluationCommentInfoRepository.save(evaluationCommentInfo);
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

            int evalDetailId = evaluationScoreDto.getEvaluation_detail_id();
            EvaluationDetailInfo evaluationDetailInfo = evaluationDetailInfoRepository.findById(evalDetailId)
                    .orElseThrow(() -> {
                        log.error("EvalDetailId : {}의 평가 세부 항목이 존재하지 않습니다.", evalDetailId);
                        throw new EntityNotFoundException("해당 EvalDetailId의 평가항목이 존재하지 않습니다.");
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

            if (!userByCompetitionRepository.existsByUserInfo_UserIdAndCompetitionInfoId(userId, postInfo.getCompetitionInfo().getId())) {
                log.error("UserId : {}의 사용자가 CompetitionId : {}의 대회에 참가하지 않았습니다.", userId, postInfo.getCompetitionInfo().getId());
                throw new EntityNotFoundException("해당 사용자가 대회에 참가하지 않았습니다.");
            }

            if (!fileInfoRepository.existsByPostInfoIdAndUserInfo_UserId(postId, userId)) {
                log.error("PostId : {}의 게시글에 UserId : {}의 사용자가 파일을 업로드하지 않았습니다.", postId, userId);
                throw new EntityNotFoundException("해당 사용자가 파일을 업로드하지 않았습니다.");
            }

            Optional<EvaluationScore> evaluationScoreOptional = evaluationScoreRepository.findByPostInfoIdAndEvaluationDetailInfoIdAndJudgeInfoIdAndUserInfo_UserId(postId, evalDetailId, judgeId, userId);

            if (evaluationScoreOptional.isEmpty()) {
                EvaluationScore evaluationScore = EvaluationScore.builder()
                        .postInfo(postInfo)
                        .evaluationDetailInfo(evaluationDetailInfo)
                        .judgeInfo(judgeInfo)
                        .userInfo(userInfo)
                        .score(evaluationScoreDto.getScore())
                        .build();

                evaluationScoreRepository.save(evaluationScore);
            } else {
                EvaluationScore evaluationScore = evaluationScoreOptional.get();
                evaluationScore.setPostInfo(postInfo);
                evaluationScore.setEvaluationDetailInfo(evaluationDetailInfo);
                evaluationScore.setJudgeInfo(judgeInfo);
                evaluationScore.setUserInfo(userInfo);
                evaluationScore.setScore(evaluationScoreDto.getScore());
            }
        });
    }
}
