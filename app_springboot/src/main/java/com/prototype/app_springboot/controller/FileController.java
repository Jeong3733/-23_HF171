package com.prototype.app_springboot.controller;

import com.prototype.app_springboot.data.dto.FastApiDtos.*;
import com.prototype.app_springboot.data.dto.FileDtos.AllFileInfoRelatedInfosDto;
import com.prototype.app_springboot.data.dto.FileDtos.CompFileAddRequestDto;
import com.prototype.app_springboot.data.dto.FileDtos.CompFileInfoDto;
import com.prototype.app_springboot.data.dto.FileDtos.FileInfoDto;
import com.prototype.app_springboot.data.entity.CompFileInfo;
import com.prototype.app_springboot.data.entity.CompPageInfo;
import com.prototype.app_springboot.data.entity.FileInfo;
import com.prototype.app_springboot.service.FastApiService;
import com.prototype.app_springboot.service.FileService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.net.URISyntaxException;
import java.util.List;
import java.util.Map;

@RestController
@Slf4j
public class FileController {
    private final FileService fileService;
    private final FastApiService fastApiService;

    public FileController(FileService fileService, FastApiService fastApiService) {
        this.fileService = fileService;
        this.fastApiService = fastApiService;
    }

    @PostMapping("/add/compFileInfo")
    public ResponseEntity<String> addCompFile(
            @RequestPart(value = "file") MultipartFile compFile,
            @RequestPart(value = "data") CompFileAddRequestDto compFileAddRequestDto
    ) throws URISyntaxException {
        if (compFile == null || compFile.isEmpty()) {
            return new ResponseEntity<>("파일을 등록해주세요", HttpStatus.BAD_REQUEST);
        }
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        fileService.saveCompFile(compFile, compFileAddRequestDto, authentication.getName());

        return new ResponseEntity<>("파일 등록 완료", HttpStatus.OK);
    }

    @PostMapping("/add/fileInfo")
    public ResponseEntity<String> addFile(
        @RequestPart(value = "file") MultipartFile file,
        @RequestPart(value = "data") Map<String, String> postIdMap
    ) throws URISyntaxException {
        if (file == null || file.isEmpty()) {
            return new ResponseEntity<>("파일을 등록해주세요", HttpStatus.BAD_REQUEST);
        }
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        int postId = Integer.parseInt(postIdMap.get("postId"));
        fileService.saveFile(file, postId, authentication.getName());

        return new ResponseEntity<>("파일 등록 완료", HttpStatus.OK);
    }

    @GetMapping("/get/compFileInfo")
    public ResponseEntity<List<CompFileInfoDto>> getAllCompFileInfoList() {
        List<CompFileInfoDto> compFileDtoList = fileService.getAllCompFileInfoList().stream()
                .map(CompFileInfoDto::new)
                .toList();
        return new ResponseEntity<>(compFileDtoList, HttpStatus.OK);
    }

    @PostMapping("/get/fileInfo/postId")
    public ResponseEntity<List<FileInfoDto>> getFileInfoListByPostId(@RequestBody Map<String, String> postIdMap) {
        int postId = Integer.parseInt(postIdMap.get("postId"));
        List<FileInfo> fileInfoList = fileService.getFileInfoListByPostId(postId);
        List<FileInfoDto> fileInfoDtoList = fileInfoList.stream()
                .map(FileInfoDto::new)
                .toList();
        return new ResponseEntity<>(fileInfoDtoList, HttpStatus.OK);
    }

    @PostMapping("/get/fileInfo/fileId")
    public ResponseEntity<AllFileInfoRelatedInfosDto> getFileInfoByFileId(@RequestBody Map<String, String> fileIdMap) throws URISyntaxException {
        int fileId = Integer.parseInt(fileIdMap.get("fileId"));
        FileInfo fileInfo = fileService.getFileInfoById(fileId);

        PageContentDto pageContentDto = fastApiService.getPageContentByFile(fileInfo);
        FileInfo fileInfoWithPageResult = fileService.getFileInfoById(fileId);

        List<CompPageInfo> compPageInfoList = fileService.getRelatedCompPageInfoList(fileId);
        List<CompFileInfo> compFileInfoList = fileService.getRelatedCompFileInfoList(fileId);

        AllFileInfoRelatedInfosDto allFileInfoRelatedInfosDto = new AllFileInfoRelatedInfosDto(fileInfoWithPageResult, pageContentDto, compPageInfoList, compFileInfoList);
        return new ResponseEntity<>(allFileInfoRelatedInfosDto, HttpStatus.OK);
    }

    @PostMapping("/get/file/pageId")
    public ResponseEntity<PageContentDto> getPageContentList(@RequestBody ReqPageIdList pageIdList) throws URISyntaxException {
        PageContentDto pageContentDtoList = fastApiService.getPageContentByPageIdList(pageIdList.getPage_id_list());
        return new ResponseEntity<>(pageContentDtoList, HttpStatus.OK);
    }

    @PostMapping("/get/file/qna")
    public ResponseEntity<ResGetFileQNA> getFileQNA(@RequestBody ReqGetQNA reqGetFileQNA) throws URISyntaxException {
        ResGetFileQNA resGetFileQNA = fastApiService.getFileQNA(reqGetFileQNA);
        return new ResponseEntity<>(resGetFileQNA, HttpStatus.OK);
    }

    @PostMapping("/get/competitionFile/qna")
    public ResponseEntity<ResGetFileQNA> getCompetitionQNA(@RequestBody ReqGetCompetitionQNA reqGetCompetitionQNA) throws URISyntaxException {
        ResGetFileQNA resGetCompetitionQNA = fastApiService.getCompetitionQNA(reqGetCompetitionQNA);
        return new ResponseEntity<>(resGetCompetitionQNA, HttpStatus.OK);
    }
}
