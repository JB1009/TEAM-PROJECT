package com.springcrocus.camping.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.springcrocus.camping.model.Image;

public interface ImageRepo extends JpaRepository<Image, Long>{

  public List<Image> findBycampsiteCampsiteIndex(long campsiteIndex);

  @Query(value="select * from (select c.*,i.image_name,i.image_index  from campsite c inner join image i on c.campsite_index = i.campsite_index group by c.campsite_index) as sub where sub.campsite_local = ?1", nativeQuery = true)
  public List<Image> find(String campsiteLocal);

  List<Image> findTop1ByCampsiteCampsiteIndex(Long campsiteIndex);

 
}
