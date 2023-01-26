package com.springcrocus.camping.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.springcrocus.camping.model.Pick;
import com.springcrocus.camping.repository.PickRepo;

@CrossOrigin
@RestController
public class PickController {
  @Autowired
  PickRepo pickrepo;

  // 캠핑온 찜 삭제
  
  @DeleteMapping("/pick/{campsiteIndex}&{userNumber}")
  public Boolean deletePick(@PathVariable Long campsiteIndex, @PathVariable Long userNumber) {
    try {
          pickrepo.deleteBycampsiteCampsiteIndexAndUserUserNumber(campsiteIndex, userNumber);
      return true;
    } catch (Exception e) {
        e.printStackTrace();
      return false;
    }

  }

  // 찜하기
  @PostMapping("/pick")
  public Pick insertPick(@RequestBody Pick pick) {
    return pickrepo.save(pick);
  }

  // 내가 찜한 캠핑장 조회
  @GetMapping("/pick/{userNumber}")
  public List<Pick> detailPick(@PathVariable Long userNumber) {
    return pickrepo.findByuser_userNumber(userNumber);
  }
}
