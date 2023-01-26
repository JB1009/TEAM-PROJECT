package com.springcrocus.camping.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.springcrocus.camping.model.User;
import com.springcrocus.camping.repository.UserRepo;

@CrossOrigin
@RestController
public class UserController {

  @Autowired
  UserRepo repo;

  // 회원 전체 조회
  @GetMapping("/allUsers")
  public Page<User> callAllUser(Pageable pageable) {
    return repo.findAll(pageable);
  }

  // 로그인
  @PostMapping("/user/login")
  public User callLogin(@RequestBody User user, HttpServletRequest request) {
    User u = repo.findByuserEmailAndUserPassword(user.getUserEmail(), user.getUserPassword());
    System.out.println(u);
    if (u != null) {
      HttpSession session = request.getSession();
      session.setAttribute("userId", u.getUserNumber());
      return u;
    } else {
      return null;
    }
  }

  // 회원가입
  @PostMapping("/user")
  public boolean userJoin(@RequestBody User user) {
    boolean isEmail = checkEmailDuplicate(user.getUserEmail());
    boolean isNickname = checkNicknameDuplicate(user.getUserNickname());
    if(isEmail && isNickname){
      return false;
    }else{
      user = repo.save(user);
      return true;
    }
  }

  // 회원 탈퇴
  @DeleteMapping("/user/{userNumber}")
  public boolean userSecession(@PathVariable long userNumber) {
    try {
      repo.deleteById(userNumber);
      return true;
    } catch (Exception e) {
      return false;
    }
  }

  // 회원정보 조회
  @GetMapping("/user/{userNumber}")
  public User callUser(@PathVariable long userNumber) {
    User u = repo.findById(userNumber).get();
    u.setUserPassword("");
    return u;
  }

  // 이메일로 회원정보 조회
  @GetMapping("/user/email/{userEmail}")
  public User callUserDetail(@PathVariable String userEmail) {
    long userNumber = repo.findByuserEmail(userEmail);
    return repo.findById(userNumber).get();
  }

  // 회원정보 수정
  @PutMapping("/user")
  public User userModify(@RequestBody User user) {
    User input = repo.save(user);
    return input;
  }

  @PatchMapping("/user")
  public User userModifyAdmin(@RequestBody User user) {
    User input = repo.save(user);
    return input;
  }

  // Email 중복체크 - email이 중복이면 true return
  @GetMapping("/user-email/{userEmail}")
  public boolean checkEmailDuplicate(@PathVariable String userEmail) {
    return repo.existsByuserEmail(userEmail);
  }

  @GetMapping("/user-nickname/{userNickname}")
  public boolean checkNicknameDuplicate(@PathVariable String userNickname) {
    return repo.existsByuserNickname(userNickname);
  }

  @GetMapping("/user-tel/{userTel}")
  public boolean checkTelDuplicate(@PathVariable String userTel) {
    return repo.existsByuserTel(userTel);
  }
 
  // 비밀번호 찾기 - 이메일과 전화번호가 일치하면 패스워드를 돌려줌 일치하지 않으면 null
  @PostMapping("/user/identity")
  public User findUserPassword(@RequestBody User user){
    boolean emailCheck = repo.existsByuserEmail(user.getUserEmail());
    boolean telCheck = repo.existsByuserTel(user.getUserTel());
    if(emailCheck && telCheck){
      User u = repo.findByuserEmailAndUserTel(user.getUserEmail(), user.getUserTel());
      return u;
    }
    return null; 
  }

  @PostMapping("/user/check")
  public boolean checkUserPassword(@RequestBody User user){
    User u = repo.findById(user.getUserNumber()).get();
    if( u.getUserPassword().equals(user.getUserPassword()) ){
      return true;
    }else{
      return false;
    }
  }
}