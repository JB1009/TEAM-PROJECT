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
public class Pick {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column
  private long pickIndex; // 옵션 종류 번호 pk

  @ManyToOne
  @OnDelete(action= OnDeleteAction.CASCADE)
  @JoinColumn(name = "userNumber")
  private User user;

  @ManyToOne
  @OnDelete(action= OnDeleteAction.CASCADE)
  @JoinColumn(name = "campsiteIndex")
  private Campsite campsite;

  public Pick(){}
}
