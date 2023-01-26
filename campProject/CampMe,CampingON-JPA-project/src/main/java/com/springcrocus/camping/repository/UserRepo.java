package com.springcrocus.camping.repository;

import org.springframework.boot.autoconfigure.data.web.SpringDataWebProperties.Pageable;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


import com.springcrocus.camping.model.User;

public interface UserRepo extends JpaRepository<User, Long> {

  // Page<User> findAll(Pageable pageable);
  
  User findByuserEmailAndUserPassword(String userEamil, String userPassword);

  // 이메일 중복 검사
  boolean existsByuserEmail(String userEmail);

  // 닉네임 중복 검사
  boolean existsByuserNickname(String userNickname);

  boolean existsByuserTel(String userTel);

  @Query(value = "SELECT user_password FROM user WHERE user_tel = ?1", nativeQuery = true)
  String findByuserTel(String userTel);

  User findByuserEmailAndUserTel(String userEamil, String userTel);

  @Query(value = "SELECT * FROM user WHERE user_email = ?1", nativeQuery = true)
  Long findByuserEmail(String userEmail);

}
