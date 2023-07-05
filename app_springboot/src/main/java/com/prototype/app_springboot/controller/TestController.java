package com.prototype.app_springboot.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class TestController {
    @GetMapping({"/", ""})
    public String index() {
        return "index";
    }

    @GetMapping("/fileTest")
    public String fileTest() {
        return "fileUploadTest";
    }
}
