package com.springcrocus.camping.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.springcrocus.camping.model.Post;

public interface PostRepo extends JpaRepository<Post, Long>{
    // 내가 쓴 게시글 불러오기
    @Query(value="SELECT  * FROM post AS p inner JOIN user AS u ON p.user_number = u.user_number WHERE u.user_number = ?1", nativeQuery=true)
    List<Post> findUserPost(long userNumber);

    List<Post> findTop5ByPostKindOrderByPostNumberDesc(int postKind);

    List<Post> findTop3ByPostTypeOrderByPostNumberDesc(int postType);
}
