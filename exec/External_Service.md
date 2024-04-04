# 외부 API

1. [환율 조회 API 주소](https://www.koreaexim.go.kr/ir/HPHKIR020M01?apino=2&viewtype=C&searchselect=&searchword=)

   ```
   https://www.koreaexim.go.kr/ir/HPHKIR020M01?apino=2&viewtype=C&searchselect=&searchword=
   ```

# 소셜 로그인

1. [자체 은행 (반짝 은행)](https://j10a309.p.ssafy.io/)

   여행 어플은 자체 은행 페이지에서 계정을 만든 후, 가상 계좌를 개설한 뒤 이용 가능

   ```
   https://j10a309.p.ssafy.io/
   ```

# 포톤 클라우드

1. [AWS S3](https://aws.amazon.com/ko/pm/serv-s3/?gclid=CjwKCAjw_LOwBhBFEiwAmSEQAYxNmiIc1q-Nt-UWghtNFEDAAEhaNmJ7X-8HLi0SsC8BO8RmpJR8kRoCLbsQAvD_BwE&trk=024bf255-8753-410e-9b2f-8015932510e8&sc_channel=ps&ef_id=CjwKCAjw_LOwBhBFEiwAmSEQAYxNmiIc1q-Nt-UWghtNFEDAAEhaNmJ7X-8HLi0SsC8BO8RmpJR8kRoCLbsQAvD_BwE:G:s&s_kwcid=AL!4422!3!588924203916!e!!g!!s3!16390143117!134236388536)

   ```
   https://aws.amazon.com/ko/pm/serv-s3/?gclid=CjwKCAjw_LOwBhBFEiwAmSEQAYxNmiIc1q-Nt-UWghtNFEDAAEhaNmJ7X-8HLi0SsC8BO8RmpJR8kRoCLbsQAvD_BwE&trk=024bf255-8753-410e-9b2f-8015932510e8&sc_channel=ps&ef_id=CjwKCAjw_LOwBhBFEiwAmSEQAYxNmiIc1q-Nt-UWghtNFEDAAEhaNmJ7X-8HLi0SsC8BO8RmpJR8kRoCLbsQAvD_BwE:G:s&s_kwcid=AL!4422!3!588924203916!e!!g!!s3!16390143117!134236388536
   ```

   - 진행 과정
     1. AWS 가입 후 로그인
     2. S3 버킷 생성
     3. 버킷 > 권한 > 퍼블릭 엑세스 차단(버킷 설정) > 편집
        - 모든 퍼블릭 엑세스 차단 해제
     4. 버킷 > 권한 > 버킷 정책 > 편집 > 정책 생성기
        - Select Type of Policy > S3 Bucket Policy 선택
        - Effet > Allow 선택
        - Principal > \* 입력
        - Actions > GetObject, PutObject 선택
        - Amazon Resource Name (ARN) > (버킷 ARN)/\* 입력
          ```
          버킷 ARN 은 이전 페이지에서 확인 가능
          ```
     5. 버킷 > 권한 > CORS(Cross-origin 리소스 공유) > 편집
        - 다음을 입력
          ```
          [{"AllowedHeaders": ["*"], "AllowedMethods": ["PUT", "POST", "GET"], "AllowedOrigins": ["*"], "ExposeHeaders": []}]
          ```
     6. 버킷 > 객체
        - profileImg, qrdownload, attraction 폴더 생성
          ```
          각각 프로필 이미지, 시연용 이미지, 여행지 정보(사진)을 담는 폴더
          ```
     7. S3 계정(우측 상단) > 보안 자격 증명 > 액세스 키 > 액세스 키 만들기
        - 루트 사용자가 보단, IAM을 통해 만드는 것이 권장되나, 루트 사용자로 이용해도 이용에는 문제 없음
        - csv 파일 다운로드 후, 액세스 키와 시크릿을 복사하여 FE 프로젝트 .env 파일에 다음을 입력
          ```
          IMAGE_BASE_URL=(버킷 url)
          S3_ACCESS_KEY_ID=(액세스 키)
          S3_ACCESS_KEY_SECRET=(시크릿)
          ```

   8. attraction 폴더에 더미 이미지 붙여넣기 후 프로젝트 실행
      - 프로필이미지는 사용자가 이미지 수정을 하는 경우에만 생성됨
      - 시연용 폴더에는 결제 QR 코드, 앱 다운로드 구글 드라이브 QR 코드 등이 들어감
