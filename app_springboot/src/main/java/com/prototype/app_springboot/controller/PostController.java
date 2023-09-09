package com.prototype.app_springboot.controller;

import com.prototype.app_springboot.data.dto.PostDtos.AddPostRequestDto;
import com.prototype.app_springboot.data.dto.PostDtos.PostInfoDto;
import com.prototype.app_springboot.data.dto.PostDtos.PostInfoWithPostTypeDto;
import com.prototype.app_springboot.data.entity.PostInfo;
import com.prototype.app_springboot.data.entity.UserInfo;
import com.prototype.app_springboot.service.AuthService;
import com.prototype.app_springboot.service.PostService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
public class PostController {
    private final PostService postService;
    private final AuthService authService;

    public PostController(PostService postService, AuthService authService) {
        this.postService = postService;
        this.authService = authService;
    }

    @PostMapping("/add/postInfo")
    public ResponseEntity<String> addPost(
            @RequestPart(value = "file", required = false) MultipartFile file,
            @RequestPart(value = "data") AddPostRequestDto addPostRequestDto
    ) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        postService.addPostInfoAndPostDocs(file, addPostRequestDto, authentication.getName());
        return new ResponseEntity<>("Post 등록이 완료되었습니다.", HttpStatus.OK);
    }

    @PostMapping("/get/postInfo/postId")
    public ResponseEntity<PostInfoDto> getPostInfoByPostId(@RequestBody Map<String, String> postIdMap) {
        int postId = Integer.parseInt(postIdMap.get("postId"));
        PostInfo postInfo = postService.getPostInfoByPostId(postId);
        PostInfoDto postInfoDto = new PostInfoDto(postInfo);
        return new ResponseEntity<>(postInfoDto, HttpStatus.OK);
    }

    @PostMapping("/get/postInfo/boardType")
    public ResponseEntity<List<PostInfoDto>> getPostInfoByCompIdAndBrdType(@RequestBody Map<String, String> competitionIdAndBoardTypeMap) {
        int competitionId = Integer.parseInt(competitionIdAndBoardTypeMap.get("competitionId"));
        String boardType = competitionIdAndBoardTypeMap.get("boardType");
        List<PostInfoDto> postInfoDtoList = postService.getPostInfoListByCompetitionIdAndBoardType(competitionId, boardType).stream()
                .map(PostInfoDto::new)
                .collect(Collectors.toList());
        return new ResponseEntity<>(postInfoDtoList, HttpStatus.OK);
    }

    @PostMapping("/get/postInfo/chk/postId")
    public ResponseEntity<PostInfoWithPostTypeDto> getPostInfoAndFileInfoByPostIdAndUserId(@RequestBody Map<String, String> postIdMap) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String userId = authentication.getName();
        UserInfo userInfo = authService.getUser(userId);

        int postId = Integer.parseInt(postIdMap.get("postId"));
        PostInfo postInfo = postService.getPostInfoByPostIdAndUserId(postId, userId);
        PostInfoWithPostTypeDto postInfoWithPostTypeDto = new PostInfoWithPostTypeDto(postInfo, userInfo);
        return new ResponseEntity<>(postInfoWithPostTypeDto, HttpStatus.OK);
    }
}