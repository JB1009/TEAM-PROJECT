package com.springcrocus.camping.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springcrocus.camping.model.Image;
import com.springcrocus.camping.repository.CampsiteRepo;
import com.springcrocus.camping.repository.ImageRepo;

@Service
public class ImageService {

  @Autowired
  ImageRepo imageRepo;

  @Autowired
  CampsiteRepo campsiteRepo;


  public List<Image> campsiteLocal(String campsiteLocal) {
    switch (campsiteLocal) {
      case "seoul":
        campsiteLocal = "서울";
        break;
      case "gyeonggido":
        campsiteLocal = "경기도";
        break;
      case "chungcheongdo":
        campsiteLocal = "충청도";
        break;
      case "gyeonsangdo":
        campsiteLocal = "경상도";
        break;
      case "jeonrado":
        campsiteLocal = "전라도";
        break;
      case "gangwondo":
        campsiteLocal = "강원도";
        break;
      case "jejudo":
        campsiteLocal = "제주도";
        break;
      case "findAll":
        campsiteLocal = "";
        break;
    }
    return imageRepo.find(campsiteLocal);
  }
}
