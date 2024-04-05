## ✈ 개요

- 은행에서 출시한 백패커들을 위한 여행 슈퍼앱
- 간편 동행 모집(번개 모임)과 은행 API를 통한 환전, 결제, 정산 기능이 핵심

## ✈ 주요 기능

<table>
   <colgroup>
      <col width="40%"/>
      <col widht="60%"/>
   </colgroup>
	<tr>
		<td width="200" height="300"><img src="https://github.com/seomiii/seomiii/assets/86819719/674410db-8977-4ecb-ab68-ce84495aabf1" width="200" height="400"/></td>
		<td><br><h4>소셜 로그인(인증/인가)</h4><br>Twinkle-Bank의 계정으로 trip-together에서 간편하게 로그인할 수 있습니다.<br><br><ul><li>trip-together 로그인 시, 사용자가 은행의 로그인 정보(id,password)와 같은 민감한 정보를 제공하지 않고, 은행이 직접 인증 과정을 처리할 수 있도록 OAuth 2.0을 도입하였습니다.<br><br><li>Kakao 소셜 로그인의 인증 로직과 동일하게 구현했습니다. 사용자가 은행에 인증 코드를 요청 및 로그인을 진행하고, 발급된 인증 코드를 통해 여행 서비스에서 토큰을 발급받아 로그인이 진행되게 하였습니다.</ul></td>
	</tr>
	<tr>
		<td width="200" height="300"><img src="https://github.com/seomiii/seomiii/assets/86819719/402400e2-2d79-4ffc-b8e9-4b4baa895b28" width="200" height="400"/></td>
		<td><br><br><h4>핀번호 관리</h4><br>최초 로그인을 통해 Twinkle-Bank로부터 인증을 받은 이후로는 Trip-Together의 핀번호를 통해 Twinkle-Bank로부터 인증토큰을 받아올 수 있습니다.<br><br><ul><li>핀 번호 또한 비밀번호와 같은 정보처럼 암호화되어 관리됩니다.</li><li>개인 지갑을 등록할 때 필수로 pin번호를 생성해야 하고, 수정이 가능하여 유출 의심 등의 경우에 사용할 수 있습니다.</li></ul></td>
	</tr>
	<tr>
		<td width="200" height="300"><img src="https://github.com/seomiii/seomiii/assets/86819719/a9387711-b4f4-4f4f-82d6-8dc356fa7a5c" width="200" height="400"/></td>
		<td><br><br><h4>1원 인증 및 계좌 연동</h4><br>Trip-Together에서 환전시 사용할 은행계좌를 연동하기 위해 사용자는 1원을 해당 계좌로 송금받고, 송금자명을 입력하여 인증을 받을 수 있습니다.<br><br><ul><li>국립국어원 한국어 기초사전  데이터를 기반으로 랜덤으로 생성된 입금자명을 연동하고자 하는 은행계좌에 1원을 송금해줍니다.</li><li>사용자가 입력한 입금자명이 유효할 시 계좌 연동에 성공합니다.</li></ul></td>
	</tr>
   <tr>
		<td width="200" height="300"><img src="https://github.com/seomiii/seomiii/assets/86819719/0003a471-a954-472c-9f56-3c301465b170" width="200" height="400"/></td>
		<td><br><br><h4>프로필 관리</h4><br>최초 로그인시 Twinkle-Bank로부터 받아온 사용자 데이터 이외에 Trip-Together 서비스 사용에 필요한 부가 정보를 등록할 수 있습니다.<br><br><ul><li>이름, 생년월일, 성별, 가입일자의 정보는 최초 로그인시 Twinkle-Bank로부터 받아온 것으로 수정이 불가합니다.</li><li>위의 필수 정보 이외에 프로필 이미지, 닉네임, 내소개 정보를 수정하여 다른 사용자들과 소통하는 데에 활용할 수 있습니다.</li></ul></td>
	</tr>
   <tr>
		<td width="400" height="300"><img src="https://github.com/seomiii/seomiii/assets/86819719/b09ba4ee-111c-4e96-960e-60a22d5479e3" width="200" height="400"/></td>
		<td><br><br><h4>현 위치, 장소 기반 모임</h4><br>사용자의 위치, 장소를 기반으로 번개 모임을 모집, 참여할 수 있습니다.<br><br><ul><li>지도에서 편리하게 위치를 선택하고 이에 대한 위도와 경도를 기반으로 등록된 번개모임 구인글을 검색할 수 있습니다.</li><li>가고자하는 여행지별 등록된 번개모임 구인글을 검색할 수 있습니다.</li></ul></td>
	</tr>
   <tr>
		<td width="200" height="300"><img src="https://github.com/seomiii/seomiii/assets/86819719/82fe3426-18ba-4dc2-9fcc-5c9fa3de5947" width="400" height="400"/></td>
		<td><br><br><h4>모임 채팅</h4><br>모임 개설 시 참여자들을 위한 채팅방이 생성됩니다.<br><br><ul><li>모임 구성원들의 자유로운 채팅이 가능합니다.</li><li>신규 참여자는 기존 참여자들의 선택에 의해 참가 / 거절 될 수 있습니다.</li><li>신규 참여자의 정보를 확인하고, 모임 참여자들의 의견을 반영해 결정됩니다.</li></ul></td>
	</tr>
   <tr>
		<td width="200" height="300"><img src="https://github.com/seomiii/seomiii/assets/86819719/1a8e05f8-c840-423d-81e6-ac070988b3fb" width="400" height="400"/></td>
		<td><br><br><h4>결제 내역 기반 더치페이</h4><br>실제 결제 내역을 기반으로 번개 모임 정산을 할 수 있습니다.<br><br><ul><li>모임 채팅방 내에서 실제 결제 내역 및 인원을 선택하여 편리하게 정산할 수 있습니다.</li><li>모두가 정산 내역에 포함된 결제 내역들을 영수증 형태로 조회할 수 있어 거래에 대한 신뢰성을 높입니다.</li></ul></td>
	</tr>
   <tr>
		<td width="200" height="300"><img src="https://github.com/seomiii/seomiii/assets/86819719/5e552e14-c8b7-46aa-b336-030ca483d643" width="200" height="400"/></td>
		<td><br><br><h4>여행 계획 및 예산 책정</h4><br>사용자들의 실제 결제 내역이 적용된 여행지의 인당 평균 소비 금액을 통해 여행 예산을 책정할 수 있습니다.<br><br><ul><li>여행 장소에 대한 리뷰, 사진, 평점 등의 정보에 접근 가능하고, 해당 장소를 장바구니에 추가해 일자별 여행계획에 등록할 수 있습니다.</li><li>여행지의 인당 평균 소비금액은 서비스의 사용자들의 결제내역을 기준으로 주기적인 업데이트를 수행합니다.</li></ul></td>
	</tr>
   <tr>
		<td width="200" height="300"><img src="https://github.com/seomiii/seomiii/assets/86819719/c48b45fc-9071-42af-82d2-926d450b6c0b" width="200" height="400"/></td>
		<td><br><br><h4>간편 환전</h4><br>앱 내 지갑을 통해 “원화 <-> 해외 통화”로의 자유로운 환전이 가능합니다.<br><br><ul><li>“원화 -> 해외 통화“ 환전 시 해당 통화로 신규 여행 계좌가 개설되고 은행에서 원화가 차감됩니다.</li><li>“해외 통화 -> 원화” 환전 시 해당 통화에서 환불이 진행되고 은행에 원화가 입금됩니다.</li><li>매일 09:00 에 갱신되는 환율 정보를 기준으로 환전이 진행됩니다.</li></ul></td>
	</tr>
   <tr>
		<td width="200" height="300"><img src="https://github.com/seomiii/seomiii/assets/86819719/08cee8ab-0ef6-4f48-8198-591ea53c8785" width="200" height="400"/></td>
		<td><br><br><h4>바코드 결제</h4><br>사용자들은 여행지에 대한 결제 프로세스를 앱 내에서 간편 결제를 통해 진행합니다.<br><br><ul><li>가상의 결제 프로세스를 진행하기 위해 여행지의 사업자 번호를 QR에 등록했습니다.</li><li>해당 여행지의 통화에 맞는 사용자의 여행 계좌를 통해 결제가 이루어집니다.</li><li>앱 내 간편 결제를 통해 사용자의 마이 데이터를 확보했습니다.</li></ul></td>
	</tr>
</table>

---

## ✈ 사용 기술 설명

### Back-End

![8.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/6b52a1be-ff5d-46d1-9e5f-6708ae945b24/f5fcd2b9-4768-4f61-a73f-02d29b12eb97/8.png)

✅**동시성 처리**

- 트랜잭션 단위의 데이터 정합성 관리를 위해 반짝은행의 모든 입금 및 출금 API에는 분산락 처리가 되어있습니다. 이때, Redis의 Redisson 클라이언트를 활용하여 pub/sub 기능을 통해 합리적으로 Lock 획득 재시도가 가능하도록 하였습니다.
- Redisson을 통해 Lock 획득에 실패할 경우, 특정 채널을 구독하여 Lock이 다시 획득될 수 있는 상태가 되었다는 이벤트를 받았을 때, 다시 Lock 획득을 시도하도록 하였습니다. 그 결과, 불필요한 polling이 일어나지 않도록 하여 효율성을 개선하고, Redis 서버에 부하를 줄였습니다.

![10.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/6b52a1be-ff5d-46d1-9e5f-6708ae945b24/0305748a-0817-47d9-8288-b05b9dbc8ca3/10.png)

✅ **Java 부동 소수점 오차 해결**

- Java의 부동 소수점 오차를 해결하기 위해 반짝은행의 모든 금융거래 계산시, BigDecimal 유틸 클래스의 메소드를 활용하였습니다.
- double보다 범위가 약 2배 이상 길어 좀 더 정밀한 연산이 가능한 BigDecimal을 사용하여 연산시 오차를 줄였습니다.

![9.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/6b52a1be-ff5d-46d1-9e5f-6708ae945b24/3ec88243-a283-4adf-aeaf-92d0966f433b/9.png)

✅ **환율 데이터 적용**

- 한국 수출입 은행의 환율 API를 활용했습니다.
- 환율 변동사항이 반영되는 시간대에 맞춰 스케줄러가 동작합니다.
- trip-together가 제공하는 통화들의 환율 정보를 반영합니다.

![12.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/6b52a1be-ff5d-46d1-9e5f-6708ae945b24/59711153-4c57-4b96-ac68-118a89068ef0/12.png)

✅ **소셜로그인 (인증/인가)**

- trip-together 로그인 시, 사용자가 은행의 로그인 정보(id,password)와 같은 민감한 정보를 제공하지 않고, 은행이 직접 인증 과정을 처리할 수 있도록 OAuth 2.0을 도입하였습니다.
- Kakao 소셜 로그인의 인증 로직과 동일하게 구현했습니다. 사용자가 은행에 인증 코드를 요청 및 로그인을 진행하고, 발급된 인증 코드를 통해 여행 서비스에서 토큰을 발급받아 로그인이 진행되게 하였습니다.

![13.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/6b52a1be-ff5d-46d1-9e5f-6708ae945b24/1f0ca0a6-0900-431e-95bc-9d958e9dc58f/13.png)

✅ **번개 채팅**

- 트립투게더의 채팅 기능은 웹소켓, STOMP 프로토콜, RabbitMQ 메시지 브로커로 구현되었습니다.
- 첫번째, 웹소켓을 통해 클라이언트와 서버를 연결하여 실시간 양방향 통신이 가능한 환경을 구성하였습니다. 이때, 어떠한 이유로 인해 웹소켓을 사용할 수 없는 경우에 fall option으로 SockJS 프로토콜을 두어 웹소켓 API를 사용하도록 대비하였습니다.
- 두번째, STOMP 프로토콜을 연결하여 pub/sub 구조를 사용할 수 있도록 함으로써, 사용자가 직접 웹소켓 세션에 메시지를 전달하지 않고도 구독한 채널에 발행된 메시지를 브로드캐스트 받을 수 있는 환경을 구성하였습니다.
- 마지막으로, 위의 환경에 외부 메시지 브로커 RabbitMQ를 연결하여 확장성, 결함허용성, 모니터링 가능성을 개선하였습니다.

![14.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/6b52a1be-ff5d-46d1-9e5f-6708ae945b24/520ec3f7-13d8-4a45-a9a8-632d59d439df/14.png)

✅ **여행 계획 및 정산 영수증 관리**

- 트립투게더의 여행 계획 및 정산 영수증 내역은 MongoDB의 도큐먼트로 관리하여 조회 성능을 향상시켰습니다.
- 일자별 여행 계획과 정산 영수증의 구성요소들은 데이터 정합성이 유지되지 않아도 되는 데이터로 구성되어 있으며, 조회시 테이블 간의 복잡한 연관관계로 다량의 JOIN 쿼리가 발생하도록 되어 있습니다. 따라서 이를 NoSQL 데이터베이스인MongoDB에 도큐먼트로 관리함으로써 기존 RDB에서의 복잡한 JOIN 연산을 간소화하고 조회 성능을 향상시켰습니다.

![11.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/6b52a1be-ff5d-46d1-9e5f-6708ae945b24/fc39eefa-2f36-4036-ac4c-732bc8202016/11.png)

✅ **객체지향 설계**

- SRP
   - 도메인 주도 설계 방식 / 핵심 도메인과 도메인 로직에 초점을 맞추고, Entity와 도메인 개념을 일치시켰습니다.
   - 각 도메인은 협력하지만 책임과 역할이 명확히 구분되어 있고, 높은 응집도와 낮은 결합도를 갖추도록 했습니다.
   - 도메인 간 소통 시 발생하는 문제는 Util 클래스와 Facade 패턴을 적용하여 해결했습니다.
- ISP
   - 서비스 로직 설계 시 DB를 조작하는 서비스 로직과 단순 조회 서비스 로직을 인터페이스로 분리하여 설계했습니다.
   - 컨트롤러는 서비스 인터페이스를 호출하여 사용하도록 구현했습니다.
- LSP
   - 정산 과정에서 요청자와 송금자는 모두 정산 참여자인 동시에 다른 역할을 가지고 있습니다.
   - JPA의 단일 테이블 전략을 사용하여 상속 관계를 구현했습니다.
   - 참여자를 추상 엔티티와 추상 레포지토리로 설계하고, 요청자와 송금자가 상속 받도록 했습니다. 이를 통해 DB에는 단일 테이블로 저장하는 동시에 스프링 서버에서는 분리된 코드 작성이 가능하여 개발 과정이 개선되었습니다.

![15.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/6b52a1be-ff5d-46d1-9e5f-6708ae945b24/82ae4812-5196-42b1-9b67-338873af3d71/15.png)

✅ **관심사 분리**

- 검증 로직 어노테이션 관리
   - Auth 도메인에 @PinVerify 등 어노테이션 생성
      - 메서드에 붙을 수 있고, 런타임동안 살아있도록 하였습니다.
   - PinVerifyAspect 클래스 등 생성
      - @Aspect 어노테이션을 통해 AOP 동작을 설정해주었습니다.
      - @PinVerify 어노테이션이 붙은 메서드들에 대해 pinVerifyAdvice 메서드가 먼저 실행 되도록 하였습니다.
      - pinVerifyAdvice 메서드는 해당 요청을 보낸 Member에 대해, 입력된 pin과 실제 값이 같은지를 비교하여, 다르다면 예외를 보내도록 구현하였습니다.

![16.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/6b52a1be-ff5d-46d1-9e5f-6708ae945b24/1a54120e-762c-48b6-8d91-c6f2062edba8/16.png)

✅ **글로벌 예외 처리**

- 프로젝트의 모든 에러상황을 스프링이 제공하는 AOP를 통해 관리함으로써, 복잡한 WAS의 에러 전달이 진행되지 않도록 함과 동시에 에러 상황을 세분화한 커스텀 에러 메시지를 사용자에게 전달할 수 있도록 하였습니다.
- 세부적으로, 예외 처리를 위한 ControllerAdvice는 여러 컨트롤러에 대해 전역적으로 ExceptionHandler를 적용하였습니다. 그에 따라 전역적으로 커스텀하게 에러를 핸들링하는 클래스를 만들어 어노테이션을 붙여주면 에러 처리를 위임할 수 있도록 하였습니다.

### Front-End

✅ **Redux를 활용한 상태관리**

- 현재 접속하고 있는 유저에 대한 정보 상태
- 특정 여행지들에 대한 장바구니 상태
- 현재 계획 중인 계획 상태
- 카드 사용 내역 상태
- 네비게이션 탭바 상태를 Redux를 통해 관리함으로써 다양한 컴포넌트에서 상황에 맞게 상태를 업데이트하고 활용 가능하도록 하였습니다.

✅ **디바이스 스토리지 활용**

- Encrypted Storage를 활용해 access token, refresh token 등 보안이 중요한 데이터를 안전하게 관리하였습니다.
- Async Storage를 활용해 채팅 내역, 카드 사용 내역 등의 데이터를 디바이스에서 저장할 수 있도록 하였습니다.

✅ **위치정보, 카메라 활용**

- 앱의 특성을 활용해 권한 허가 이후, 자신의 현재 위치 정보와 카메라 기능을 활용할 수 있도록 했습니다.
- 'native-camera-kit' 라이브러리를 통해 카메라를 활용해 바코드를 인식 후, 결제가 가능하도록 하였습니다.

✅ **번개 채팅**

- WebSocket, Stomp를 이용한 실시간 채팅
- Device Storage를 일종의 캐시로 활용하여 메세지를 저장 및 불러오기 함

✅ **사용자 친화적 UI/UX**

- 안드로이드 스튜디오 디자인 가이드를 참고한 화면 설계
- 사용자가 앱 환경을 이해하고 상호작용하며 제어하는 데 도움이 되는 상호작용 패턴
- Flat Design

## ✈ 개발 환경

**📍Back-End**

**📍Front-End**

**📍Infra**

## ✈ 서비스 아키텍쳐

![3.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/6b52a1be-ff5d-46d1-9e5f-6708ae945b24/8499ff08-2287-47e4-8f19-a083b517bafc/3.png)

## ✈ 명세서

**ERD**
[바로가기](https://sirlyun.notion.site/ERD-7cc5192cbbff4b85ae90bff77a04d2e1?pvs=4)

**API 명세**
[바로가기](https://sirlyun.notion.site/API-8d1507bd65f44d11989b13f0ec63a99e?pvs=4)

**기능 명세**
[바로가기](https://sirlyun.notion.site/5cd9e9f950294200bc715531a975f60f?pvs=4)

## ✈ 팀원 소개
