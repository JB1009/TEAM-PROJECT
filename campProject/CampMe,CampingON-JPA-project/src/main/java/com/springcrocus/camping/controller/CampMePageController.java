package com.springcrocus.camping.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

// 로그인 관련 PageController
@Controller
public class CampMePageController {

  @GetMapping("/post")
  public String callPost() {
    return "post";
  }

  @GetMapping("/comment")
  public String callComment() {
    return "comment";
  }

}
