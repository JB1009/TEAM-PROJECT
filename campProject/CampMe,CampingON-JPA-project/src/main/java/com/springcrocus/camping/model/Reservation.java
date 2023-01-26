package com.springcrocus.camping.model;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;
import org.springframework.data.annotation.CreatedDate;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table
public class Reservation {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private long reservationIndex; // 예약 번호 pk

    @Column(nullable = false)
    private Date reservationStartDay; // 예약 시작일

    @Column
    private Date reservationEndDay; // 예약 종료일

    @Column
    @CreationTimestamp
    private Date reservationDate; // 예약 시점일

    @Column
    private String reservationMemo; // 요청 사항

    @ManyToOne
    @JoinColumn(name = "userNumber")
    private User user;
    
    @ManyToOne
    @JoinColumn(name = "campsiteIndex")
    private Campsite campsite;
}
