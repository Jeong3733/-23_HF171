package com.prototype.app_springboot.controller;

import com.prototype.app_springboot.data.dto.CompetitionDtos.AddCompetitionRequestDto;
import com.prototype.app_springboot.data.dto.CompetitionDtos.CompetitionDto;
import com.prototype.app_springboot.data.dto.CompetitionDtos.CompetitionWithUserByCompDto;
import com.prototype.app_springboot.data.entity.CompetitionInfo;
import com.prototype.app_springboot.data.entity.UserByCompetition;
import com.prototype.app_springboot.service.CompetitionService;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
public class CompetitionController {

    private final CompetitionService competitionService;

    public CompetitionController(CompetitionService competitionService) {
        this.competitionService = competitionService;
    }

    @GetMapping("/get/competitionInfo")
    public ResponseEntity<List<CompetitionDto>> getCompetitionInfoList() {
        List<CompetitionDto> competitionInfoDtoList = competitionService.getCompetitionInfoList().stream()
                .map(CompetitionDto::new)
                .collect(Collectors.toList());

        return new ResponseEntity<>(competitionInfoDtoList, HttpStatus.OK);
    }

    @PostMapping("/get/competitionInfo/competitionId")
    public ResponseEntity<CompetitionDto> getCompetitionInfo(@RequestBody Map<String, String> competitionIdMap) {
        int competitionId = Integer.parseInt(competitionIdMap.get("competitionId"));
        CompetitionInfo competitionInfo = competitionService.getCompetitionInfoByCompetitionId(competitionId);
        CompetitionDto competitionInfoDto = new CompetitionDto(competitionInfo);
        return new ResponseEntity<>(competitionInfoDto, HttpStatus.OK);
    }

    @PostMapping("/get/competitionInfo/userId")
    public ResponseEntity<List<CompetitionWithUserByCompDto>> getCompetitionInfoListByUserId(@RequestBody Map<String, String> userIdMap) {
        String userId = userIdMap.get("userId");
        List<UserByCompetition> userByCompetitionList = competitionService.getCompetitionInfoListByUserId(userId);
        List<CompetitionWithUserByCompDto> competitionWithUserByCompDtoList = userByCompetitionList.stream()
                .map(userbycompetition -> {
                    CompetitionInfo competitionInfo = competitionService.getCompetitionInfoByCompetitionId(userbycompetition.getCompetitionInfo().getId());
                    return new CompetitionWithUserByCompDto(competitionInfo, userbycompetition);
                })
                .toList();

        return new ResponseEntity<>(competitionWithUserByCompDtoList, HttpStatus.OK);
    }

    @PostMapping(value = "/add-competition", consumes = {MediaType.APPLICATION_JSON_VALUE, MediaType.MULTIPART_FORM_DATA_VALUE})
    public void addCompetition(
            @RequestPart(value = "data") AddCompetitionRequestDto addCompetitionRequestDto,
            @RequestPart(value = "competitionImage", required = false) MultipartFile competitionImage,
            @RequestPart(value = "competitionDocs", required = false) List<MultipartFile> competitionDocsList
    ) {
        competitionService.saveCompetition(addCompetitionRequestDto, competitionImage, competitionDocsList);
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
