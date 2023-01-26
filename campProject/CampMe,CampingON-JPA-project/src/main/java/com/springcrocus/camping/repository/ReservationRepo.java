package com.springcrocus.camping.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springcrocus.camping.model.Reservation;

public interface ReservationRepo extends JpaRepository<Reservation, Long> {

    List<Reservation> findByCampsiteCampsiteIndex(Long campsiteIndex);

    List<Reservation> findByUserUserNumberOrderByReservationDateDesc(Long userNumber);

    List<Reservation> findByUserUserNumber(Long userNumber);
}
