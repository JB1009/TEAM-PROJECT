package com.springcrocus.camping.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springcrocus.camping.model.Refund;

public interface RefundRepo extends JpaRepository<Refund,Long>{
  
}
