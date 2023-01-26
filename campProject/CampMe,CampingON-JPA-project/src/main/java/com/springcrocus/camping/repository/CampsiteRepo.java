package com.springcrocus.camping.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.springcrocus.camping.model.Campsite;

public interface CampsiteRepo extends JpaRepository<Campsite,Long>{
  
    // 검색 기능
    @Query(value="SELECT * FROM campsite WHERE (campsite_name LIKE %?1% or campsite_address LIKE %?1%)",nativeQuery=true)
    List<Campsite> findBysearchWord(String searchWord);

    @Query(value="select * from campsite as c inner join camping_type as t on c.type_index = t.type_index where t.type_name = ?1", nativeQuery = true)
    List<Campsite> findBytypeName(String typeName);

    public List<Campsite> findBycampsiteLocal(String campsiteLocal);

    List<Campsite> findByUserUserNumber(Long userNumber);

    @Query(value="select * from campsite where store = ?1 and barbecue = ?2 and parking = ?3 and wifi = ?4 and shower = ?5 and pool = ?6 and pet = ?7 and bathroom = ?8", nativeQuery = true)
    List<Campsite> findOptin(boolean store, boolean barbecue, boolean parking, boolean wifi, boolean shower, boolean pool, boolean pet, boolean bathroom);



}
