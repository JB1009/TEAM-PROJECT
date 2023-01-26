package com.springcrocus.camping.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springcrocus.camping.model.Payment;

public interface PaymentRepo extends JpaRepository<Payment,Long>{
  
}
