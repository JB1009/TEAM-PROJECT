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

import com.springcrocus.camping.model.Refund;
import com.springcrocus.camping.repository.RefundRepo;

@CrossOrigin
@RestController
public class RefundController {
    // Refund 환불
  @Autowired
  RefundRepo refundrepo;

  // 모든 환불 내역 조회
  @GetMapping("/allRefund")
  public List<Refund> callAllRefund() {
    return refundrepo.findAll();
  }

  // 환불 내역 상세 조회
  @GetMapping("/refund/{refundIndex}")
  public Refund detailRefund(@PathVariable long refundIndex) {
    return refundrepo.findById(refundIndex).get();
  }

  // 환불 내역 추가
  @PostMapping("/refund")
  public Refund insertRefund(@RequestBody Refund refund) {
    refund = refundrepo.save(refund);
    return refund;
  }

  // 환불 내역 삭제
  @DeleteMapping("/refund/{refundIndex}")
  public boolean deleteRefund(@PathVariable long refundIndex) {
    try {
      refundrepo.deleteById(refundIndex);
      return true;
    } catch (Exception e) {
      return false;
    }
  }
}
