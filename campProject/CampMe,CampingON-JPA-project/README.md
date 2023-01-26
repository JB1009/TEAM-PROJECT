# DB 정보
    DB 주소 : 192.168.0.11
    DB 명 : camping
    DB ID : project
    DB PW : 12341234


### 개발 규칙

- git push 전에는 꼭 pull 먼저

- 모든 표기법은 카멜표기법으로 할 것

        ex)
        user_name (x)
        userNmae (o)

- 축약어는 사용 금지

        ex)
        userAddr (x)
        userAddress (o)

- 모든 메소드는 동사로 표기할 것

        ex)
        join (x)
        doJoin (o)

### API Controller 규칙

- 모든 메소드에 주석을 추가하여 설명

- UserController

        로그인, 회원가입, 회원탈퇴, 회원정보 조회, 회원정보 수정만 여기서 작업

- CampMEController

        캠프미 사이트 관련 API 작업

- CampingONController

        캠핑온 사이트 관련 API 작업
        
- Controller 

        write 추가 예) /post/write
        delete 삭제 예) /post/delete/{postNumber}
        modify 수정 예) /post/modify
        detail 상세조회 /post/detail/{postNumber}
        
