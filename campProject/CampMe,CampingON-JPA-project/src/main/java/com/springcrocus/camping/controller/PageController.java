package com.springcrocus.camping.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PageController {
    // 로그인완료 페이지 이동
    @GetMapping("/")
    public String callIndex(){
        return "index";
    }
    // 로그인 페이지 이동
    @GetMapping("/login")
    public String callLoginPage(){
        return "login";
    }
    // 로그아웃 기능  @GetMapping의 value값과 html a태그의 href 값은 동일하게 입력
    @GetMapping("/logout")
    public String logoutMainGET(HttpServletRequest request) throws Exception{
        
        HttpSession session = request.getSession();
        // invalidate() 세션값 삭제
        session.invalidate();
        return "login";        
        
    }

    @GetMapping("/admin")
    public String callAdminPage(){
        return "admin";
    }
}
