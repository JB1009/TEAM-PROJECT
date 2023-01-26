package com.springcrocus.camping.model;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.DynamicUpdate;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table
@DynamicUpdate
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private long userNumber;
    @Column
    private String userPassword;
    @Column(length = 30)
    private String userName;
    @Column(length = 50)
    private String userEmail;
    @Column(length = 50)
    private String userTel;
    @Column
    private Date userBirth;
    @Column(length = 5)
    @ColumnDefault("0")
    private int userGrade;
    @Column(length = 30)
    private String userNickname;
    // @CreationTimestamp
    // @Column(columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    // private Timestamp userJoinDate;
    @ColumnDefault("0")
    private long userPoint;
}
