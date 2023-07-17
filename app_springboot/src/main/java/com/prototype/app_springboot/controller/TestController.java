package com.prototype.app_springboot.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class TestController {
    @GetMapping("/fileTest")
    public String fileTest() {
        return "fileUploadTest";
    }

    @ResponseBody
    @GetMapping("/react/test")
    public String test() {
        return "택관이 화이팅!";
    }
}
