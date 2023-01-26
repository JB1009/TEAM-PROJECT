package com.springcrocus.camping.service;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.GetObjectRequest;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.PutObjectRequest;
import com.amazonaws.services.s3.model.S3Object;
import com.amazonaws.services.s3.model.S3ObjectInputStream;

@Service
public class AwsService {

    @Autowired
    private AmazonS3 s3Client;
    
    //aws.s3.bucket로 시작하는 yaml 설정값을 가져옴
    @Value("${aws.s3.bucket}")
    private String bucketName;
    
    /**
    * Comment  : S3 업로드
    * @author  : sangwon Hyun
    * @date    : 2020. 6. 26.
    * @methodName : uploadObject
    * @returnType : void
    * @param : multipartFile, bucketPath(s3 경로), storedFileName(파일 이름)
    */
    @Async
    public void uploadObject(MultipartFile multipartFile, String bucketPath, String storedFileName) throws IOException {

        ObjectMetadata omd = new ObjectMetadata();
        omd.setContentType(multipartFile.getContentType());
        omd.setContentLength(multipartFile.getSize());
        omd.setHeader("filename",storedFileName);
        s3Client.putObject(new PutObjectRequest(bucketName+bucketPath,storedFileName,multipartFile.getInputStream(),omd));
    }
    
    /**
    * Comment  : S3 다운로드
    * @author  : sangwon Hyun
    * @date    : 2020. 6. 30.
    * @methodName : getObject
    * @returnType : byte[]
    * @param : bucketPath, storedFileName
    */
    @Async
    public byte[] getObject(String bucketPath,String storedFileName) throws IOException
    {
    	S3Object s3Object = s3Client.getObject(new GetObjectRequest(bucketName+bucketPath,storedFileName));
    	S3ObjectInputStream objectInputStream = s3Object.getObjectContent();
    	byte[] bytes = com.amazonaws.util.IOUtils.toByteArray(objectInputStream);
    	s3Object.close();
    	return bytes;
    }
    
}
