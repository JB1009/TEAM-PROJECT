package com.springcrocus.camping.controller;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.springcrocus.camping.model.Comment;
import com.springcrocus.camping.model.Post;
import com.springcrocus.camping.repository.CommentRepo;
import com.springcrocus.camping.repository.PostRepo;

@CrossOrigin
@RestController
public class CampMEController {

  // postRepo
  @Autowired
  PostRepo postrepo;

  // CommentRepo
  @Autowired
  CommentRepo commentrepo;

  // 캠프미 마이페이지 API 시작

  // 캠프미 마이페이지 api - 내가 쓴 댓글
  @GetMapping("/user/post/{userNumber}")
  public List<Post> callMyPost(@PathVariable long userNumber) {
    return postrepo.findUserPost(userNumber);
  }

  // 캠프미 마이페이지 api - 내가 쓴 게시글
  @GetMapping("/user/comment/{userNumber}")
  public List<Comment> callMyPComment(@PathVariable long userNumber) {
    return commentrepo.findByuserComment(userNumber);
  }

  // 캠프미 마이페이지 API 끝

  // 게시글 API 시작

  // 게시글 전체 불러오기
  @GetMapping("/board/post")
  public List<Post> callAllPost() {
    return postrepo.findAll();
  }

  @GetMapping("paging/board")
  public Page<Post> callPagingPost(Pageable pageable){
    return postrepo.findAll(pageable);
  }

  // 공지사항 조회
  @GetMapping("/board/notice")
  public List<Post> callNotice(){
    return postrepo.findTop3ByPostTypeOrderByPostNumberDesc(2);
  }

  @GetMapping("/board/top5/{postKind}")
  public List<Post> callTop5Post(@PathVariable int postKind){
    return postrepo.findTop5ByPostKindOrderByPostNumberDesc(postKind);
  }

  // 페이징전용 매핑
  // @GetMapping("/post/paging")
  // public List<Post> pagingPost() {
  // return postrepo.findAll();
  // }

  // 게시글 추가
  @PostMapping("/post")
  public Post insertPost(@RequestBody Post post) {

    return postrepo.save(post);
  }

  // 게시글 삭제
  @Transactional
  @DeleteMapping("/post/{postNumber}")
  public boolean callDeleteDept(@PathVariable long postNumber) {
    try {
      commentrepo.deleteByPostNumber(postNumber);
      postrepo.deleteById(postNumber);
      return true;
    } catch (Exception e) {
      return false;
    }
  }

  // 게시판 수정
  @PatchMapping("/post")
  public Post updateDepStudent(@RequestBody Post post) {
    post = postrepo.save(post);
    return post;
  }

  // 게시판 전체 조회 (페이징 처리, 정렬 추가)
  // 사용법: /member/pagination?offset=0&pageSize=5&column=age
  // @GetMapping("/post/pagination")
  // public APIResponse<Page<Post>> callAllMembers(@RequestParam int offset,
  // @RequestParam int pageSize,
  // @RequestParam String column) {

  // // pageSize : 한페이지에 몇개 보여줄지
  // // offset, pageSize === LIMIT offset, pageSize
  // Page<Post> post = postrepo.findAll(PageRequest.of(offset,
  // pageSize).withSort(Sort.by(column)));
  // int size = post.getSize();
  // return new APIResponse<>(size, post);
  // }

  // 게시판 상세조회
  @GetMapping("/post/{postNumber}")
  public Post callpostById(@PathVariable Long postNumber) {
    return postrepo.findById(postNumber).get();
  }

  // 게시글 API 끝

  // 캠프미 댓글 API 시작

  // 캠프미 모든 댓글 조회 (댓글 번호, 입력 시간, 내용, 게시물 번호, 유저 번호)
  @GetMapping("/allComment")
  public List<Comment> callAllComment() {
    return commentrepo.findAll();
  }

  // 캠프미 게시글에 맞는 댓글 조회
  @GetMapping("/post/comment/{postNumber}")
  public List<Comment> callPostComments(@PathVariable long postNumber) {
    return commentrepo.findBypostComment(postNumber);
  }

  // 캠프미 댓글 추가
  @PostMapping("/comment")
  public Comment callSaveComments(@RequestBody Comment comment) {
    comment = commentrepo.save(comment);
    return comment;
  }

  // 캠프미 댓글 삭제
  @DeleteMapping("/comment/{commentNumber}")
  public boolean callDeleComment(@PathVariable long commentNumber) {
    try {
      commentrepo.deleteById(commentNumber);
      return true;
    } catch (Exception e) {
      return false;
    }
  }

  // 캠프미 댓글 수정
  @PatchMapping("/comment")
  public Comment updateupComment(@RequestBody Comment commentUpdate) {
    commentUpdate = commentrepo.save(commentUpdate);
    return commentUpdate;
  }

  // 캠프미 댓글 API 끝

}
