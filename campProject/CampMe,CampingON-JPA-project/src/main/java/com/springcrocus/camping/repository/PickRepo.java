package com.springcrocus.camping.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.springcrocus.camping.model.Pick;

public interface PickRepo extends JpaRepository<Pick, Long> {

  public List<Pick> deletePickIndexByuserUserNumber(Long userNumber);

  public List<Pick> findByuser_userNumber(Long userNumber);

  @Modifying(clearAutomatically = true)
  @Transactional
  @Query(value = "DELETE FROM pick WHERE campsite_index = ?1 AND user_number = ?2", nativeQuery = true)
  public int deleteBycampsiteCampsiteIndexAndUserUserNumber(Long campsiteIndex, Long userNunber);

}
