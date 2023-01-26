package com.springcrocus.camping.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.springcrocus.camping.model.Campsite;
import com.springcrocus.camping.repository.CampsiteRepo;
import com.springcrocus.camping.service.CampsiteService;

@CrossOrigin
@RestController
public class CampsiteController {

    @Autowired
    CampsiteRepo campsiteRepo;

    @Autowired
    CampsiteService campsiteService;

  //내가등록한 캠핑장
  @GetMapping("/campsite/camping/{userNumber}")
  public List<Campsite> callMyPost(@PathVariable Long userNumber) {
    return campsiteRepo.findByUserUserNumber(userNumber);
  }
    // 캠핑장 검색 API
  @GetMapping("/campsite/search/{searchWord}")
  public List<Campsite> searchCampsite(@PathVariable String searchWord) {
    return campsiteRepo.findBysearchWord(searchWord);
  }

  @GetMapping("/campsite/searching")
  public List<Campsite> searching(@RequestParam("word") String[] word){
    return campsiteService.callSearchResult(word);
  }

  // 캠핑 유형별 상세조회
  @GetMapping("/campsite/type/{typeName}")
  public List<Campsite> callCampsiteType(@PathVariable String typeName) {
    return campsiteRepo.findBytypeName(typeName);
  }

  @GetMapping("/campsite/local/{campsiteLocal}")
  public List<Campsite> callCampsiteLocal(@PathVariable String campsiteLocal) {
    return campsiteService.campsiteLocal(campsiteLocal);
  }

  // ====== campsite =========

  // 모든 캠핑장 불러오기
  @GetMapping("/allCampsite")
  public List<Campsite> callAllCampsite() {
    return campsiteRepo.findAll();
  }
  
  @GetMapping("/paging/campsite")
  public Page<Campsite> pagingCampsite(Pageable pageable){
    return campsiteRepo.findAll(pageable);
  }

  // 캠핑장 상세조회
  @GetMapping("/campsite/{campsiteIndex}")
  public Campsite detailCampsite(@PathVariable Long campsiteIndex) {
    return campsiteRepo.findById(campsiteIndex).get();
  }

  // 캠핑장 추가
  @PostMapping("/campsite")
  public Campsite insertCampsite(@RequestBody Campsite campsite) {
    return campsiteRepo.save(campsite);
  }

  // 캠핑장 수정
  @PatchMapping("/campsite")
  public Campsite updateCampsite(@RequestBody Campsite campsite) {
    campsite = campsiteRepo.save(campsite);
    return campsite;
  }

  // 캠핑장 삭제
  @DeleteMapping("/campsite/{campsiteIndex}")
  public boolean deleteCampsite(@PathVariable long campsiteIndex) {
    try {
      campsiteRepo.deleteById(campsiteIndex);
      return true;
    } catch (Exception e) {
      return false;
    }
  }


}
