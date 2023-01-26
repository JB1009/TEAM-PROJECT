package com.springcrocus.camping.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.springcrocus.camping.model.Review;
import com.springcrocus.camping.repository.ReviewRepo;

@CrossOrigin
@RestController
public class ReviewController {
    // Review 리뷰
  @Autowired
  ReviewRepo reviewrepo;

  // 리뷰 목록 조회
  @GetMapping("/allReview")
  public List<Review> callAllReview() {
    return reviewrepo.findAll();
  }

  // 리뷰 상세 조회
  @GetMapping("/review/{reviewIndex}")
  public Review detailReview(@PathVariable long reviewIndex) {
    return reviewrepo.findById(reviewIndex).get();
  }

  // 개인 리뷰 상세 조회
  @PostMapping("/review/myReview")
  public Review myReview(@RequestParam("userNumber") Long userNumber, @RequestParam("campsiteIndex") Long campsiteIndex ){
    System.out.println("조회");
    return reviewrepo.findByUserUserNumberAndCampsiteCampsiteIndex(userNumber, campsiteIndex);
  }

  // 리뷰 작성
  @PostMapping("/review")
  public Review insertReview(@RequestBody Review review) {
    return reviewrepo.save(review);
  }

  // 리뷰 수정
  @PatchMapping("/review")
  public Review updateReview(@RequestBody Review review) {
    review = reviewrepo.save(review);
    return review;
  }

  // 리뷰 삭제
  @DeleteMapping("/review/{reviewIndex}")
  public boolean deleteReview(@PathVariable long reviewIndex) {
    try {
      reviewrepo.deleteById(reviewIndex);
      return true;
    } catch (Exception e) {
      return false;
    }
  }

  @GetMapping("/myReview/{userNumber}")
  public List<Review> detailUserReview(@PathVariable long userNumber){
    return reviewrepo.findByUserUserNumber(userNumber);
  }

}
