package com.springcrocus.camping.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springcrocus.camping.model.Review;

public interface ReviewRepo extends JpaRepository<Review,Long>{

    Review findByUserUserNumberAndCampsiteCampsiteIndex(Long userNumber, Long campsiteIndex);

    List<Review> findByUserUserNumber(Long userNumber);
  
}
