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

import com.springcrocus.camping.model.Payment;
import com.springcrocus.camping.repository.PaymentRepo;

@CrossOrigin
@RestController
public class PaymentController {
    // Payment 결제
  @Autowired
  PaymentRepo paymentrepo;

  // 모든 결제 내역 조회
  @GetMapping("/allPayment")
  public List<Payment> callAllPayment() {
    return paymentrepo.findAll();
  }

  // 결제 내역 상세 조회
  @GetMapping("/payment/{paymentIndex}")
  public Payment detailPayment(@PathVariable long paymentIndex) {
    // findById(id) == select * from emp where empno = 333;
    return paymentrepo.findById(paymentIndex).get();
  }

  // 결제 내역 추가
  @PostMapping("/payment")
  public Payment insertPayment(@RequestBody Payment payment) {
    payment = paymentrepo.save(payment);
    return payment;
  }

  // 결제 내역 삭제
  @DeleteMapping("/payment/{paymentIndex}")
  public boolean deletePayment(@PathVariable long paymentIndex) {
    try {
      paymentrepo.deleteById(paymentIndex);
      return true;
    } catch (Exception e) {
      return false;
    }
  }
}
