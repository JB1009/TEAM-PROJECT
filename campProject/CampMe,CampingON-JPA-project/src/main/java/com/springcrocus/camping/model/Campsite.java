package com.springcrocus.camping.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table
public class Campsite {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    @Column
    private long campsiteIndex; // 캠핑장 번호 pk

    @Column(length = 30)
    private String campsiteName; // 캠핑장 이름

    @Column(length = 50)
    private String campsiteAddress; // 캠핑장 주소

    @Column(length = 30)
    private String campsiteLocal; // 캠핑장 지역

    @Column(columnDefinition="TEXT")
    private String campsiteIntroduction; // 캠핑장 소개글

    @Column(columnDefinition="TEXT")
    private String campsiteGuide; // 캠핑장 안내글

    @Column
    private boolean store;
    @Column
    private boolean barbecue;
    @Column
    private boolean parking;
    @Column
    private boolean pet;
    @Column
    private boolean bathroom;
    @Column
    private boolean wifi;
    @Column
    private boolean shower;
    @Column
    private boolean pool;
    @Column
    private long campsitePrice;
    @Column
    private String topImage;

    @ManyToOne
    @OnDelete(action= OnDeleteAction.CASCADE)
    @JoinColumn(name = "typeIndex")
    private CampingType campingType;

    @ManyToOne
    @OnDelete(action= OnDeleteAction.CASCADE)
    @JoinColumn(name = "userNumber")
    private User user;

    public Campsite(){
        
    }

}
