package com.springcrocus.camping.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.regions.Regions;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;

@Configuration
public class WebConfig implements WebMvcConfigurer {

  @Value("${aws.s3.access-id}")
  private String accessKey;
  @Value("${aws.s3.access-pw}")
  private String secretKey;

  /*
   * AWS에서 발급한 key가 맞는지 검사
   */
  @Bean
  public BasicAWSCredentials AwsCredentials() {
    BasicAWSCredentials awsCreds = new BasicAWSCredentials(accessKey, secretKey);
    return awsCreds;
  }

  /*
   * AWS 위치 및 인증 체크
   */
  @Bean
  public AmazonS3 AwsS3Client() {

    AmazonS3 s3Builder = AmazonS3ClientBuilder.standard().withRegion(Regions.AP_NORTHEAST_2)
        .withCredentials(new AWSStaticCredentialsProvider(this.AwsCredentials())).build();
    return s3Builder;
  }

/*   @Autowired
  Interceptor interceptor;

  // 인터셉트 미로그인시
  @Override
  public void addInterceptors(InterceptorRegistry registry){
  String[] patterns = {"/login","/api/v1/login","/logout"};
  registry.addInterceptor(interceptor).excludePathPatterns(patterns);
  } */
  /**
  * @Since : 2022. 12. 6.
  * @Author : mr.Hyun
  * @Return : PasswordEncoder
  * @Comment : 특정 변수 암호화
  */

}
