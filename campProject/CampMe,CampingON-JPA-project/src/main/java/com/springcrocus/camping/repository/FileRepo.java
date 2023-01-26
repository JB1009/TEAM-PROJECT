package com.springcrocus.camping.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springcrocus.camping.model.File;

public interface FileRepo extends JpaRepository<File,Long>{
  
}
