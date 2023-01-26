package com.springcrocus.camping.model;

import java.sql.Date;
import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table
public class Payment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private long paymentIndex; // 결제 번호 pk

    @Column(length = 30)
    private String paymentType; // 결제 종료(카카오페이, 무통 등등)

    @Column
    private int paymentPrice; // 결제 금액

    @Column
    @CreationTimestamp
    private Timestamp paymentDate; // 결제 날짜

    @ManyToOne
    @JoinColumn(name = "refundIndex")
    private Refund refund;

    @ManyToOne
    @JoinColumn(name = "reservationIndex")
    private Reservation reservation;
}
