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

public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    @Column
    private long commentNumber; // 댓글 번호

    @CreationTimestamp
    @Column(columnDefinition = "TIMESTAMP DEFAULT NOW()")
    private Timestamp commentDate; // 댓글 날짜

    @Column(columnDefinition = "TEXT")
    private String commentText; // 댓글 내용

    @ManyToOne
    @OnDelete(action= OnDeleteAction.CASCADE)
    @JoinColumn(name = "userNumber")
    private User user;

    @ManyToOne
    @OnDelete(action= OnDeleteAction.CASCADE)
    @JoinColumn(name = "postNumber")
    private Post post;

}
