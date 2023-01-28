-- 홈경기에 승리한 클럽의 예약자 이름,인원수,경기장,스코어 조회
SELECT c.customer_name,r.people_number,e.play_stadium,m.home,m.away,m.game_record FROM epl AS e 
INNER JOIN reservation AS r ON e.league_number = r.league_number 
INNER JOIN customer AS c ON c.customer_id = r.customer_id 
INNER JOIN matching AS m ON m.league_number = e.league_number 
WHERE  m.winner = "home"


-- 22년8월13일 23시 경기인 클럽명 조회
SELECT c.club_name,e.game_hiredate,e.start_time FROM epl AS e INNER JOIN matching AS m ON e.league_number = m.league_number 
INNER JOIN club AS c ON c.club_number = m.home_number  
INNER JOIN artist AS a ON a.club_number = c.club_number
WHERE e.start_time  = "23:00" AND e.game_hiredate = "2022-08-13" 
GROUP BY c.club_name 

-- 팀별 전체인원과 선발제외대상 선수인원조회
SELECT count(*) AS "선수전체인원" ,
nr.notregular AS "선발이 아닌선수 인원",
c.club_name 
FROM artist AS a INNER JOIN club AS c ON c.club_number = a.club_number
INNER JOIN 
(SELECT club_number AS cn,count(*) AS notregular  FROM artist WHERE roster != "regular" GROUP BY club_number) AS nr
ON nr.cn = c.club_number 
GROUP BY c.club_number 


-- 포지션별 인원수 조회
SELECT count(*) AS "공격수" ,
(SELECT count(*)  FROM artist WHERE POSITION IN("cm","cam","cdm")) AS "미드필더",
(SELECT count(*)  FROM artist WHERE POSITION IN("lb","rb","cb")) AS "수비수",
(SELECT count(*)  FROM artist WHERE POSITION = "gk") AS "골키퍼"
FROM artist
WHERE POSITION IN("lw","rw","st","cf")



