package com.springcrocus.camping.model;

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

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table
public class Post {
    @Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column
	private Long postNumber; // 게시판 고유 key 값 NOT NULL / AUTO INCREMENT

    @Column
	private int postType; // 게시판 타입 (공지사항/일반 게시글) (1or 2)

    @Column(length = 50, columnDefinition="TEXT")
	private String postTitle; // 게시판 제목 NOT NULL

    // TIMESTAMP DEFAULT NOW() 현재 날짜 
    @CreationTimestamp
    @Column(columnDefinition = "TIMESTAMP DEFAULT NOW()")
    private Timestamp postDate; // 게시판 작성 일 NOT NULL

    @Column( columnDefinition="TEXT")
	private String postText; // 게시판 내용 NOT NULL

    @Column
	private int postKind; // 게시판 종류(1~4) NOT NULL

    @ManyToOne
    @OnDelete(action= OnDeleteAction.CASCADE)
    @JoinColumn(name = "userNumber")
    private User user;

}