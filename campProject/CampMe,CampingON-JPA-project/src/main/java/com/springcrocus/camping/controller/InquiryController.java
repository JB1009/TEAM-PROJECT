package com.springcrocus.camping.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.springcrocus.camping.model.Inquiry;
import com.springcrocus.camping.repository.InquiryRepo;

@Controller
@RestController
public class InquiryController {
  @Autowired
	InquiryRepo repo;
    
  // InquiryRepo 문의
  @Autowired
  InquiryRepo inquiryrepo;

  // 문의 글 조회
  @GetMapping("/allInquiry")
  public Page<Inquiry> callAllInquiry(Pageable pageable) {
    return inquiryrepo.findAll(pageable);
  }

  // 문의 상세조회
  @GetMapping("/inquiry/{inquiryNumber}")
  public Inquiry callInquiryById(@PathVariable Long inquiryNumber) {
    return inquiryrepo.findById(inquiryNumber).get();
  }

	// 본인이 작성한 문의 불러오기
	@GetMapping("/myInquiry/{userNumber}")
	public List<Inquiry> callMyInquiry(@PathVariable Long userNumber){
		return inquiryrepo.findByuser_userNumber(userNumber);
	}

  // 문의 작성
  @PostMapping("/inquiry")
  public Boolean callSaveInquiry(@RequestBody Inquiry inquiry) {
    try {
			inquiry = inquiryrepo.save(inquiry);
			return true;	
		} catch (Exception e) {
			return false;
		}
  }

  // 문의 수정
  @PatchMapping("/inquiry")
  public Inquiry updateupComment(@RequestBody Inquiry inquirytUpdate) {
    inquirytUpdate = inquiryrepo.save(inquirytUpdate);
    return inquirytUpdate;
  }

  // 문의 삭제
  @DeleteMapping("/inquiry/{inquiryNumber}")
  public boolean callDeleInquiry(@PathVariable long inquiryNumber) {
    try {
      inquiryrepo.deleteById(inquiryNumber);
      return true;
    } catch (Exception e) {
      return false;
    }
  }
    
}
