package com.springcrocus.camping.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.springcrocus.camping.model.Comment;

public interface CommentRepo extends JpaRepository<Comment, Long> {

  // 내가 쓴 게시글 불러오기
  @Query(value = "SELECT  * FROM comment AS c inner JOIN user AS u ON c.user_number = u.user_number WHERE u.user_number = ?1", nativeQuery = true)
  public List<Comment> findByuserComment(long userNumber);

  // 게시글에 맞는 댓글 불러오기
  @Query(value = "select * from comment as c inner join post as p on c.post_number = p.post_number where c.post_number = ?1", nativeQuery = true)
  public List<Comment> findBypostComment(long postNumber);

  // 댓글 삭제
  @Modifying
  @Query(value = "DELETE FROM comment WHERE post_number = ?1", nativeQuery = true)
  public void deleteByPostNumber(Long postNumber);

}
