package com.springcrocus.camping.model;

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
public class CampingType {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    @Column
    private long typeIndex; // 캠핑장 타입 번호 pk

    @Column(length = 30)
    private String typeName; // 캠핑장 타입 이름
}
