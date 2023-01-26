package com.springcrocus.camping.model;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table
public class Refund {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private long refundIndex; // 환불 번호 pk

    @Column(nullable = false)
    private Date refundDate; // 환불 날짜

    @Column(length = 255, nullable = false)
    private String refundReason; // 환불 사유
}
