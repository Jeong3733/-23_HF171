package com.prototype.app_springboot.controller;

import com.prototype.app_springboot.data.entity.JudgeInfo;
import com.prototype.app_springboot.service.JudgeService;
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

    @PostMapping("/get/judge")
    public ResponseEntity<List<JudgeInfo>> getAllJudgeByPostId(@RequestBody Map<String, Integer> postIdMap) {
        int postId = postIdMap.get("postId");
        List<JudgeInfo> judgeInfoList = judgeService.getAllJudgeInfoByPostId(postId);
        return new ResponseEntity<>(judgeInfoList, HttpStatus.OK);
    }

    @PostMapping("/validate/judge")
    public ResponseEntity<JudgeInfo> validateJudge(@RequestBody Map<String, String> judgeIdMap) {
        String judgeId = judgeIdMap.get("judgeId");
        JudgeInfo judgeInfo = judgeService.getJudgeInfoByJudgeId(judgeId);
        return new ResponseEntity<>(judgeInfo, HttpStatus.OK);
    }

}
