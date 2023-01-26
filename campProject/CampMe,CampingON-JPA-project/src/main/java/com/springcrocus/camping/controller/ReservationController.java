package com.springcrocus.camping.controller;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.springcrocus.camping.model.Reservation;
import com.springcrocus.camping.repository.ReservationRepo;

@CrossOrigin
@RestController
public class ReservationController {
    // Reservation 캠핑장 예약
  @Autowired
  ReservationRepo reservationrepo;
  
  // 내 예약 조회
  @GetMapping("/myReservation/{userNumber}")
  public List<Reservation> callmyReservations(@PathVariable Long userNumber){
    return reservationrepo.findByUserUserNumberOrderByReservationDateDesc(userNumber);
  }

  // 캠핑 기록 조회
  @GetMapping("/myReservationHistory/{userNumber}")
  public List<Reservation> callMyReservationHistory(@PathVariable Long userNumber){
    SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
    String todayfm = dateFormat.format(new Date(System.currentTimeMillis()));
    List<Reservation> rList = reservationrepo.findByUserUserNumber(userNumber);
    List<Reservation> list = new ArrayList<>();
    for(int i=0; i<rList.size(); i++){
      try {
        Date today = new Date(dateFormat.parse(todayfm).getTime());
        Date date = new Date(dateFormat.parse(rList.get(i).getReservationEndDay().toString()).getTime());
        int compare = date.compareTo(today);
        if(compare < 0){
          list.add(rList.get(i));
        }
      } catch (Exception e) {
        e.printStackTrace();
      }
    }
    return list;
  }

  // 모든 예약 조회
  @GetMapping("/allReservation")
  public Page<Reservation> callAllReservpostpoation(Pageable pageable) {
    return reservationrepo.findAll(pageable);
  }
  // 예약 상세 조회
  @GetMapping("/reservation/{reservationIndex}")
  public Reservation detailReservation(@PathVariable long reservationIndex) {
    return reservationrepo.findById(reservationIndex).get();
  }

  // 캠핑장 예약
  @PostMapping("/reservation")
  public Reservation insertReservation(@RequestBody Reservation reservation) {
    reservation = reservationrepo.save(reservation);
    return reservation;
  }

  // 캠핑장 예약 삭제
  @DeleteMapping("/reservation/{reservationIndex}")
  public boolean deleteReservation(@PathVariable long reservationIndex) {
    try {
      reservationrepo.deleteById(reservationIndex);
      return true;
    } catch (Exception e) {
      return false;
    }
  }
  // 캠핑장 별 예약 정보 조회
  @GetMapping("/reservation/camping/{campsiteIndex}")
  public List<Reservation> callReservationByCampsite(@PathVariable long campsiteIndex){
    return reservationrepo.findByCampsiteCampsiteIndex(campsiteIndex);
  }
}
