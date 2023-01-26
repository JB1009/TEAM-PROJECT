package com.springcrocus.camping.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springcrocus.camping.model.Inquiry;

public interface InquiryRepo extends JpaRepository<Inquiry,Long>{
  
public List<Inquiry> findByuser_userNumber(Long userNumber);

}
