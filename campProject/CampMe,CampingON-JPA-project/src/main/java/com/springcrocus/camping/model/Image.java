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
public class Image {

  @Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
  @Column
	private long imageIndex; // 파일 번호

  @Column
	private String imageName; // 파일 명

  @ManyToOne
  @OnDelete(action= OnDeleteAction.CASCADE)
  @JoinColumn(name = "campsiteIndex")
  private Campsite campsite;
  
}
