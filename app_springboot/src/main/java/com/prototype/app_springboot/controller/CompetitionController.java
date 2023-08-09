package com.prototype.app_springboot.controller;

import com.prototype.app_springboot.data.dto.CompetitionDtos.*;
import com.prototype.app_springboot.data.entity.CompetitionInfo;
import com.prototype.app_springboot.data.entity.UserByCompetition;
import com.prototype.app_springboot.service.CompetitionService;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

// TODO: 예외 처리하기 (competitionId 가 잘못된 경우, userId 가 잘못된 경우 등등)
@RestController
public class CompetitionController {

    private final CompetitionService competitionService;

    public CompetitionController(CompetitionService competitionService) {
        this.competitionService = competitionService;
    }

    @PostMapping("/get/userInfo/competitionId")
    public ResponseEntity<List<UserInfoWithUserByCompDto>> getAllUserInfoWithUserByCompByCompetitionId(@RequestBody Map<String, String> competitionIdMap) {
        int competitionId = Integer.parseInt(competitionIdMap.get("competitionId"));
        List<UserByCompetition> userByCompetitionList = competitionService.getCompetitionInfoListByCompetitionId(competitionId);
        List<UserInfoWithUserByCompDto> userInfoWithUserByCompList = userByCompetitionList.stream()
                .map(UserInfoWithUserByCompDto::new)
                .toList();
        return new ResponseEntity<>(userInfoWithUserByCompList, HttpStatus.OK);
    }

    @PostMapping("/get/userbycompetition")
    public ResponseEntity<UserByCompetitionDto> getUserByCompetition(@RequestBody Map<String, String> competitionIdMap) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        int competitionId = Integer.parseInt(competitionIdMap.get("competitionId"));
        UserByCompetition userByCompetition = competitionService.getUserAndCompetitionByUserIdAndCompetitionId(authentication.getName(), competitionId);
        UserByCompetitionDto userByCompetitionDto = new UserByCompetitionDto(userByCompetition);
        return new ResponseEntity<>(userByCompetitionDto, HttpStatus.OK);
    }

    @GetMapping("/get/competitionInfo")
    public ResponseEntity<List<CompetitionDto>> getAllCompetitionInfoList() {
        List<CompetitionDto> competitionInfoDtoList = competitionService.getAllCompetitionInfoList().stream()
                .map(CompetitionDto::new)
                .collect(Collectors.toList());

        return new ResponseEntity<>(competitionInfoDtoList, HttpStatus.OK);
    }

    // 아래와 달리 모든 CompetitionInfo 조회
    @GetMapping("/get/competitionInfo/chk/userId")
    public ResponseEntity<List<CompetitionWithUserByCompDto>> getAllCompetitionWithUserByCompListByUserId() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        // TODO: 알맞은 예외 코드 작성하기
        if (authentication == null || authentication.getName().equals("anonymousUser")) {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }

        List<CompetitionWithUserByCompDto> competitionWithUserByCompDto = competitionService.getAllCompetitionInfoListWithUserId(authentication.getName()).stream()
                .map(competitionInfoWithUserByCompetition -> {
                    CompetitionInfo competitionInfo = (CompetitionInfo) competitionInfoWithUserByCompetition[0];
                    UserByCompetition userByCompetition = (UserByCompetition) competitionInfoWithUserByCompetition[1];
                    return new CompetitionWithUserByCompDto(competitionInfo, userByCompetition);
                })
                .toList();

        return new ResponseEntity<>(competitionWithUserByCompDto, HttpStatus.OK);
    }

    @PostMapping("/get/competitionInfo/userId")
    public ResponseEntity<?> getCompetitionWithUserByCompListByUserId() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        // TODO: 알맞은 예외 코드 작성하기
        if (authentication == null || authentication.getName().equals("anonymousUser")) {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }

        List<UserByCompetition> userByCompetitionList = competitionService.getCompetitionInfoListByUserId(authentication.getName());
        List<CompetitionWithUserByCompDto> competitionWithUserByCompDtoList = userByCompetitionList.stream()
                .map(userbycompetition -> {
                    CompetitionInfo competitionInfo = competitionService.getCompetitionInfoByCompetitionId(userbycompetition.getCompetitionInfo().getId());
                    return new CompetitionWithUserByCompDto(competitionInfo, userbycompetition);
                })
                .toList();

        return new ResponseEntity<>(competitionWithUserByCompDtoList, HttpStatus.OK);
    }

    @PostMapping("/get/competitionInfo/competitionId")
    public ResponseEntity<CompetitionDto> getCompetitionInfoByCompetitionId(@RequestBody Map<String, String> competitionIdMap) {
        int competitionId = Integer.parseInt(competitionIdMap.get("competitionId"));
        CompetitionInfo competitionInfo = competitionService.getCompetitionInfoByCompetitionId(competitionId);
        CompetitionDto competitionInfoDto = new CompetitionDto(competitionInfo);
        return new ResponseEntity<>(competitionInfoDto, HttpStatus.OK);
    }

    @PostMapping("/get/competitionInfo/chk/competitionId")
    public ResponseEntity<CompetitionWithUserByCompDto> getCompetitionWithUserByCompByCompetitionIdAndUserId(@RequestBody Map<String, String> competitionIdMap) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        int competitionId = Integer.parseInt(competitionIdMap.get("competitionId"));
        CompetitionInfo competitionInfo = competitionService.getCompetitionInfoByCompetitionId(competitionId);
        UserByCompetition userByCompetition = competitionService.getUserAndCompetitionByUserIdAndCompetitionId(authentication.getName(), competitionId);
        if (userByCompetition == null) {
            CompetitionWithUserByCompDto competitionWithUserByCompDto = new CompetitionWithUserByCompDto(competitionInfo, null);
            return new ResponseEntity<>(competitionWithUserByCompDto, HttpStatus.OK);
        }

        CompetitionWithUserByCompDto competitionWithUserByCompDto = new CompetitionWithUserByCompDto(competitionInfo, userByCompetition);
        return new ResponseEntity<>(competitionWithUserByCompDto, HttpStatus.OK);
    }

    @PostMapping(value = "/add-competition", consumes = {MediaType.APPLICATION_JSON_VALUE, MediaType.MULTIPART_FORM_DATA_VALUE})
    public ResponseEntity<String> addCompetition(
            @RequestPart(value = "data") AddCompetitionRequestDto addCompetitionRequestDto,
            @RequestPart(value = "competitionImage", required = false) MultipartFile competitionImage,
            @RequestPart(value = "competitionDocs", required = false) List<MultipartFile> competitionDocsList
    ) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        if (competitionImage == null) {
            return new ResponseEntity<>("대표 이미지를 등록해주세요", HttpStatus.BAD_REQUEST);
        }

        if (competitionDocsList == null) {
            return new ResponseEntity<>("자료를 등록해주세요", HttpStatus.BAD_REQUEST);
        }

        // TODO: 알맞은 예외 코드 작성하기
        if (authentication == null || authentication.getName().equals("anonymousUser")) {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
        String userId = authentication.getName();
        competitionService.saveCompetition(addCompetitionRequestDto, competitionImage, competitionDocsList, userId);
        return new ResponseEntity<>("공모전 등록 완료", HttpStatus.OK);
    }

//        // Check if files list is not empty
//        if (files != null && !files.isEmpty()) {
//            // Iterate through each MultipartFile in the files list
//            for (MultipartFile file : files) {
//                // Check if the MultipartFile is not empty
//                if (file.isEmpty()) {
//                    // Handle the case where the file is empty (e.g., raise an error or return a response)
//                    System.out.println("Error: Empty file in the files list.");
//                } else {
//                    // Perform any other checks or processing on the MultipartFile if needed
//                    System.out.println("File Name: " + file.getOriginalFilename());
//                    System.out.println("Content Type: " + file.getContentType());
//                    System.out.println("File Size: " + file.getSize());
//                    // ... Add more checks or processing here as needed
//                }
//            }
//        } else {
//            // Handle the case where the files list is empty (e.g., raise an error or return a response)
//            System.out.println("Error: Files list is empty.");
//        }
//
//        // Now you can use the AddCompetitionRequestDto and files for further processing
//        System.out.println(addCompetitionRequestDto.getCompetitionTypeList());
//    }

}
