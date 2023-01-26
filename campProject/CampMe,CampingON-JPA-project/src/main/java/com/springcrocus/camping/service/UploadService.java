package com.springcrocus.camping.service;

import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.springcrocus.camping.controller.CampsiteController;
import com.springcrocus.camping.model.Campsite;
import com.springcrocus.camping.model.Image;
import com.springcrocus.camping.repository.ImageRepo;

@Service
public class UploadService {
    
    @Autowired
    private AwsService awsService;

    @Autowired
    private ImageRepo imageRepo;

    @Autowired
    private CampsiteController campsiteController;

    public Campsite test(Campsite campsite){
        return campsite;
    }

    public Boolean uploadImageToAwsS3(MultipartFile[] locationFile, Campsite campsite){
      
        String today = new SimpleDateFormat("yyMMdd").format(new Date());
        String imageBasePath = "https://s3.ap-northeast-2.amazonaws.com/jukery.pro";//디비에 저장할 때 사용
        String imagePath = "/upload/"+today; //이미지를 저장할 폴더
        //실무에서는 사진이름을 현재시각(초 까지) 혹은 PK 이름으로 저장한다.
        //사진 용량도 코딩으로 줄여서 저장한다. (image resize)
        Campsite camp = new Campsite();
        for(int i=0; i<locationFile.length; i++){
            String sec = new SimpleDateFormat("HH-mm-ss").format(new Date());
            String imageName = sec+locationFile[i].getName()+i+".jpg";
            if(i == 0){
                
                campsite.setTopImage(imageBasePath + imagePath + "/" + imageName);
                camp = campsiteController.insertCampsite(campsite);
            }
        //   imageTmep += camp.getCampsiteIndex()+locationFile[0].getName()+i+".jpg";
        try{
            awsService.uploadObject(locationFile[i],imagePath,imageName); //S3에 이미지 업로드
            String s3Url = imageBasePath + imagePath + "/" +imageName;
            //s3Url를 DB에 저장하는 로직을 구현하면 끝
            Image img = new Image();
            img.setImageName(s3Url);
            img.setCampsite(camp);
            imageRepo.save(img);

        }catch(Exception e){
            return false;
        }
        }
        return true;
    }
}
