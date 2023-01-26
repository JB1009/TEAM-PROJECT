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
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;
import org.hibernate.annotations.UpdateTimestamp;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table
public class Inquiry {
    @Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column
	private long inquiryNumber; // 문의글 고유 key 값 NOT NULL / AUTO INCREMENT

    @Column
	private String inquiryType; // 문의글 종류(결제, 로그인, 회원가입 … 등등)

    @Column(length = 30)
	private String inquiryTitle; // 문의글 제목 NOT NULL

    @Column(columnDefinition="TEXT")
	private String inquiryText; // 문의 내용 NOT NULL

    @CreationTimestamp
    @Column(columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private Timestamp inquiryDate; // 문의글 작성 날짜 NOT NULL

    @Column
    @UpdateTimestamp
    private Date answerDate; // 답변 일자 NULL

    @Column
	private String answerText; // 답변 내용 NULL

    @ManyToOne
    @OnDelete(action= OnDeleteAction.CASCADE)
    @JoinColumn(name = "userNumber")
    private User user;


}
