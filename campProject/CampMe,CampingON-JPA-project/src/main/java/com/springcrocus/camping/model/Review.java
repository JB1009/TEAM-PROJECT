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

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table
public class Review {
    
    @Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)

    @Column
	private long reviewIndex;

    @Column
	private Date reviewDate;

    @Column
	private String reviewText;

    @Column
    private float reviewScore;

    @ManyToOne
    @OnDelete(action= OnDeleteAction.CASCADE)
    @JoinColumn(name = "userNumber")
    private User user;

    @ManyToOne
    @JoinColumn(name = "campsiteIndex")
    private Campsite campsite;


    
}
