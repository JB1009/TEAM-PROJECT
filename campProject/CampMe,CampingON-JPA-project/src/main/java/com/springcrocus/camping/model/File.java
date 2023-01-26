package com.springcrocus.camping.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table

public class File {
    @Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)

    @Column
	private long fileNumber; // 파일 번호

    @Column
	private String fileName; // 파일 명

    @ManyToOne
    @JoinColumn(name = "postNumber")
    private Post post;

    @ManyToOne
    @JoinColumn(name = "userNumber")
    private User user;
}
