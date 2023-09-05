package com.prototype.app_springboot.controller;

import com.prototype.app_springboot.data.dto.EvaluationDtos.*;
import com.prototype.app_springboot.data.entity.EvaluationInfo;
import com.prototype.app_springboot.data.entity.EvaluationScore;
import com.prototype.app_springboot.service.EvaluationService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@Slf4j
@RestController
public class EvaluationController {
    private final EvaluationService evaluationService;

    public EvaluationController(EvaluationService evaluationService) {
        this.evaluationService = evaluationService;
    }

    @PostMapping("/add/eval")
    public ResponseEntity<String> saveEvaluation(@RequestBody ReqAddEvaluation reqAddEvaluation) {
        evaluationService.addEvaluation(reqAddEvaluation);
        return new ResponseEntity<>("평가 항목 추가 완료", HttpStatus.OK);
    }

    @DeleteMapping("/delete/eval")
    public ResponseEntity<String> deleteEvaluation(@RequestBody Map<String, Integer> evalIdMap) {
        int evalId = evalIdMap.get("evaluationId");
        evaluationService.deleteEvaluation(evalId);
        return new ResponseEntity<>("평가 항목 삭제 완료", HttpStatus.OK);
    }

    @PostMapping("/get/eval")
    public ResponseEntity<ResGetEvaluation> getAllEvaluationByPostId(@RequestBody Map<String, Integer> postIdMap) {
        int postId = postIdMap.get("postId");
        List<EvaluationInfo> evaluationInfoList = evaluationService.getAllEvaluationByPostId(postId);
        ResGetEvaluation resGetEvaluation = ResGetEvaluation.builder()
                .evaluation_info_list(evaluationInfoList)
                .build();
        return new ResponseEntity<>(resGetEvaluation, HttpStatus.OK);
    }

    @PostMapping("/get/score")
    public ResponseEntity<ResGetScore> getAllScoreByPostIdAndJudgeId(@RequestBody ReqGetScore reqGetScore) {
        List<EvaluationScore> evaluationScoreList = evaluationService.getAllEvaluationScoreByPostIdAndJudgeId(reqGetScore.getPostId(), reqGetScore.getJudgeId());
        ResGetScore resGetScore = new ResGetScore(evaluationScoreList);
        return new ResponseEntity<>(resGetScore, HttpStatus.OK);
    }

    @PostMapping("/get/allScore")
    public ResponseEntity<ResGetScore> getAllScoreByPostIdAndJudgeId(@RequestBody Map<String, Integer> postIdMap) {
        int postId = postIdMap.get("postId");
        List<EvaluationScore> evaluationScoreList = evaluationService.getAllEvaluationScoreByPostId(postId);
        ResGetScore resGetScore = new ResGetScore(evaluationScoreList);
        return new ResponseEntity<>(resGetScore, HttpStatus.OK);
    }

    @PostMapping("/update/score")
    public ResponseEntity<String> addScoreList(@RequestBody ReqUpdateScore reqUpdateScore) {
        evaluationService.saveAllScoreList(reqUpdateScore.getEvaluation_score_list());
        return new ResponseEntity<>("점수 저장 완료", HttpStatus.OK);
    }
}
