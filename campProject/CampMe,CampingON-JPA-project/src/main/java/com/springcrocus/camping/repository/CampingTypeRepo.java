package com.springcrocus.camping.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springcrocus.camping.model.CampingType;

public interface CampingTypeRepo extends JpaRepository<CampingType, Long>{
  
}
