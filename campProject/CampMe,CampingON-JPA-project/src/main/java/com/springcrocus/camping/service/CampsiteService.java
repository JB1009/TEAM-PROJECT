package com.springcrocus.camping.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springcrocus.camping.model.Campsite;
import com.springcrocus.camping.repository.CampsiteRepo;

@Service
public class CampsiteService {

  @Autowired
  CampsiteRepo campsiterepo;

  public List<Campsite> campsiteLocal(String campsiteLocal) {
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
        return campsiterepo.findAll();
    }
    return campsiterepo.findBycampsiteLocal(campsiteLocal);
  }

  public List<Campsite> callSearchResult(String[] word){

    List<Campsite> searchWord = campsiterepo.findBysearchWord(word[0]);
    List<Campsite> local = campsiteLocal(word[1]);
    List<Campsite> type = campsiterepo.findBytypeName(word[2]);

    Boolean[] op = new Boolean[8];
    int cnt = 0;
    for(int i=3; i<word.length; i ++){
      op[cnt++] = Boolean.parseBoolean(word[i]);
    }
    List<Campsite> option = campsiterepo.findOptin(op[0], op[1], op[2], op[3], op[4], op[5], op[6], op[7]);

    List<Campsite> res = new ArrayList<>(searchWord);
    res.removeAll(local);
    res.removeAll(type);
    res.removeAll(option);

    System.out.println(res);

    return res;

  }
  
}
