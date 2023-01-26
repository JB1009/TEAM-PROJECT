package com.springcrocus.camping.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.springcrocus.camping.model.Image;
import com.springcrocus.camping.repository.ImageRepo;
import com.springcrocus.camping.service.ImageService;

@CrossOrigin
@RestController
public class ImageController {
  
  @Autowired
  ImageService imageService;

  @Autowired
  ImageRepo imageRepo;

  // 캠핑장에 맞는 사진 가져오기
  @GetMapping("/campsite/image/{campsiteIndex}")
  public List<Image> getCampsiteImage(@PathVariable Long campsiteIndex){
    return imageRepo.findBycampsiteCampsiteIndex(campsiteIndex);
  }

  // 캠핑장 대표사진
  @GetMapping("/campsiteImage/{campsiteLocal}")
  public List<Image> callCampsiteImage(@PathVariable String campsiteLocal){
    return imageRepo.find(campsiteLocal);
  }

  @GetMapping("/campsiteImage/top1/{campsiteIndex}")
  public List<Image> callTop1Image(@PathVariable Long campsiteIndex){
    return imageRepo.findTop1ByCampsiteCampsiteIndex(campsiteIndex);
  }
}
