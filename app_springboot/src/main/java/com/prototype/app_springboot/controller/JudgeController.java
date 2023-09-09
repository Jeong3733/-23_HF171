package com.prototype.app_springboot.controller;

import com.prototype.app_springboot.data.dto.JudgeDtos.JudgeInfoDto;
import com.prototype.app_springboot.data.dto.JudgeDtos.ReqCheckJudgePost;
import com.prototype.app_springboot.data.dto.JudgeDtos.ResGetPostAndCompetitionJudge;
import com.prototype.app_springboot.data.entity.JudgeInfo;
import com.prototype.app_springboot.service.JudgeService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Slf4j
@RestController
public class JudgeController {

    private final JudgeService judgeService;

    public JudgeController(JudgeService judgeService) {
        this.judgeService = judgeService;
    }

    @PostMapping("/add/judge")
    public ResponseEntity<String> addJudge(@RequestBody Map<String, Integer> postIdMap) {
        int postId = postIdMap.get("postId");
        judgeService.saveJudge(postId);
        return new ResponseEntity<>("심사위원 완료", HttpStatus.OK);
    }

    @DeleteMapping("/delete/judge")
    public ResponseEntity<String> deleteJudge(@RequestBody Map<String, String> judgeIdMap) {
        String judgeId = judgeIdMap.get("judgeId");
        judgeService.deleteJudge(judgeId);
        return new ResponseEntity<>("심사위원 삭제 완료", HttpStatus.OK);
    }

    @PostMapping("/get/judge/postId")
    public ResponseEntity<ResGetPostAndCompetitionJudge> getAllJudgeByPostId(@RequestBody Map<String, Integer> postIdMap) {
        int postId = postIdMap.get("postId");
        List<JudgeInfo> judgeInfoList = judgeService.getAllJudgeInfoByPostId(postId);
        ResGetPostAndCompetitionJudge resGetPostJudge = ResGetPostAndCompetitionJudge.builder()
                .judge_info_list(judgeInfoList)
                .build();
        return new ResponseEntity<>(resGetPostJudge, HttpStatus.OK);
    }

    @PostMapping("/get/judge/competitionId")
    public ResponseEntity<ResGetPostAndCompetitionJudge> getAllJudgeByCompetitionId(@RequestBody Map<String, Integer> competitionIdMap) {
        int competitionId = competitionIdMap.get("competitionId");
        List<JudgeInfo> judgeInfoList = judgeService.getAllJudgeInfoByCompetitionId(competitionId);
        ResGetPostAndCompetitionJudge resGetPostJudge = ResGetPostAndCompetitionJudge.builder()
                .judge_info_list(judgeInfoList)
                .build();
        return new ResponseEntity<>(resGetPostJudge, HttpStatus.OK);
    }

    @PostMapping("/validate/judge")
    public ResponseEntity<JudgeInfoDto> validateJudge(@RequestBody Map<String, String> judgeIdMap) {
        String judgeId = judgeIdMap.get("judgeId");
        JudgeInfo judgeInfo = judgeService.getJudgeInfoByJudgeId(judgeId);
        JudgeInfoDto judgeInfoDto = new JudgeInfoDto(judgeInfo);
        return new ResponseEntity<>(judgeInfoDto, HttpStatus.OK);
    }

    @PostMapping("/validate/judge/postId")
    public ResponseEntity<Map<String, Boolean>> validateJudgeByPostId(@RequestBody ReqCheckJudgePost reqCheckJudgePost) {
        Boolean check = judgeService.getJudgeInfoByJudgeIdAndPostId(reqCheckJudgePost.getJudgeId(), reqCheckJudgePost.getPostId());
        Map<String, Boolean> body = new HashMap<>();
        body.put("check", check);
        return new ResponseEntity<>(body, HttpStatus.OK);
    }
}
