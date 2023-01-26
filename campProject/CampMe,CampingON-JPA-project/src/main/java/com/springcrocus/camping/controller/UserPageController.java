package com.springcrocus.camping.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class UserPageController {

    @GetMapping("/join")
    public String callPost() {
        return "user";
    }
}
