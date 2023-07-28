package com.prototype.app_springboot.controller;

import com.prototype.app_springboot.data.dto.CompetitionDtos.AddCompetitionRequestDto;
import com.prototype.app_springboot.service.CompetitionService;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
public class CompetitionController {

    private final CompetitionService competitionService;

    public CompetitionController(CompetitionService competitionService) {
        this.competitionService = competitionService;
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
