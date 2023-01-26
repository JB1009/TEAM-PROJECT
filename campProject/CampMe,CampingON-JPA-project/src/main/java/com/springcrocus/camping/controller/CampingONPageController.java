package com.springcrocus.camping.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

// CampingON 관련 PageController
@Controller
public class CampingONPageController {

  @GetMapping("/search")
  public String callSearch(){
    return "search";
  }
  
  @GetMapping("/campsite")
  public String callCampsite(){
    return "campsite";
  }
  
}
