package com.springcrocus.camping.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.springcrocus.camping.model.CampingType;
import com.springcrocus.camping.model.Campsite;
import com.springcrocus.camping.model.User;
import com.springcrocus.camping.service.UploadService;

@RestController
@CrossOrigin
public class UploadController {

  @Autowired
  private UploadService uploadService;

  // MultipartFile 클래스로 사진을 전송 받는다.
  @PostMapping("/api/v1/image")
  public Boolean uploadImage(@RequestParam(value = "image") MultipartFile[] locationFile,
      @RequestParam(value = "camp") String[] campsite) {

    Campsite c = new Campsite();

    User u = new User();
    u.setUserNumber(Long.parseLong(campsite[15]));
    CampingType ct = new CampingType();
    ct.setTypeIndex(Long.parseLong(campsite[14]));

    c.setCampsiteName(campsite[0]); // 캠핑장 이름
    c.setCampsiteAddress(campsite[1]); // 캠핑장 주소
    c.setCampsiteIntroduction(campsite[2]); // 캠핑장 소개
    c.setCampsiteGuide(campsite[3]); // 캠핑장 안내
    c.setCampsiteLocal(campsite[4]); // 캠핑장 주소
    c.setCampsitePrice(Integer.parseInt(campsite[5]));
    c.setStore(Boolean.parseBoolean(campsite[6]));
    c.setBarbecue(Boolean.parseBoolean(campsite[7]));
    c.setParking(Boolean.parseBoolean(campsite[8]));
    c.setPet(Boolean.parseBoolean(campsite[9]));
    c.setBathroom(Boolean.parseBoolean(campsite[10]));
    c.setWifi(Boolean.parseBoolean(campsite[11]));
    c.setShower(Boolean.parseBoolean(campsite[12]));
    c.setPool(Boolean.parseBoolean(campsite[13]));
    c.setCampingType(ct);
    c.setUser(u);

    for (int i = 0; i < locationFile.length; i++) {
      System.out.println("사진 이름은 : " + locationFile[i].getName());
      System.out.println("사진 사이즈 : " + locationFile[i].getSize());
    }

    return uploadService.uploadImageToAwsS3(locationFile, c);
  }
}
