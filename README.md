# Together
> 대학생을 위한 대외활동 및 팀원 모집 통합 플랫폼

## 프로젝트 요약
- **한 줄 소개**: AI기반 개인형 맞춤 대외활동 추천을 해주며, 설문기반 팀원 매칭을 제공하는 대학생 전용 플랫폼
- **핵심 성과**: 
  - React Native 기반 IOS/Android 크로스 플랫폼 서비스
  - AI 추천 알고리즘과 검색 시스템을 통한 사용자 경험 최적화
  - 주요 사이트 크롤링을 통한 통합 대외활동 서비스 구축

![Landing Page](https://github.com/user-attachments/assets/ce04c6ef-4d6e-4eb5-bea8-90a907dc6cc4)

## 프로젝트 개요

### 기존 문제점 파악
1. **분산된 정보 구조**
    - 각기 다른 플랫폼에 흩어진 대외활동 정보
    - 공모전, 대외활동, 인턴십 등 카테고리별 사이트 분리
    - 실시간 업데이트 부족으로 인한 정보 지연
2. **팀원 모집의 어려움**
    - 적합한 팀원 찾기의 복잡성
    - 개인별 역량과 관심사 매칭의 한계

### 솔루션 접근
1.  **통합 플랫폼 구축**
    - 모든 대외활동 정보를 한 곳에서 검색 가능
    - 실시간 검색과 카테고리별 분류로 정보 접근성 향상
    - 관심 태그 기반 개인화 및 AI추천 서비스 제공
2.  **팀원 매칭 시스템**
    - 사용자 관심사와 활동 내용 자동 매칭
    - 설문 기반 팀원 모집 기능


### 개발 기간
- **개발 기간**: 2023.09 ~ 2023.12(약 3개월)
- **팀 구성**: APP 1명(본인), BackEnd 1명, AI & Crawling 1명


## 주요 기능
-  **통합 검색 시스템**: 공모전, 대외활동, 분야별 실시간 검색 및 필터링
-  **AI 추천 서비스**: 사용자 관심 태그 기반 맞춤형 활동 추천
-  **팀원 모집 플랫폼**: 설문 시스템과 연동된 체계적인 팀원 매칭
-  **실시간 현황 제공**: 조회수, 참여자 수, D-day 정보 실시간 업데이트
-  **관심사 관리**: 개인 맞춤형 태그 설정 및 활동 필터링

## 기술 스택

### FrontEnd
![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) ![React Navigation](https://img.shields.io/badge/React_Navigation-6B73FF?style=for-the-badge&logo=react&logoColor=white) ![Context API](https://img.shields.io/badge/Context_API-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white) ![React Native Vector Icons](https://img.shields.io/badge/Vector_Icons-FF6B6B?style=for-the-badge&logo=react&logoColor=white) ![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white) ![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white)

## 프로젝트 구조

```
Together/
├── Components/                 # 재사용 가능한 UI 컴포넌트
├── Contexts/                   # Context-API 상태 관리
├── Screens/                    # 화면 컴포넌트
├── Images/                     # 이미지 리소스
```

## 주요 문제 해결 경험

### 직면한 문제: 실시간 검색 시 연속적인 API 호출로 인한 중복 데이터 처리

#### 문제 상황
검색 기능 구현 시 사용자가 입력할 때마다 API 호출이 발생하면서 동일한 데이터가 중복으로 표시되는 현상 발생

#### 해결 과정
1. **원인 분석**: 연속적인 API 호출과 비동기 응답 순서 불일치로 인한 데이터 중복
2. **해결책**:
   - **중복 제거 로직 구현**
3. **구현**: Set을 활용한 ID 기반 중복 데이터 제거
   ```javascript
   async function fetchSearchData() {
     const response = await axios.get(`${server}/home/search`, {
       params: { keyword: query }
     });
     const uniqueArray = Array.from(
       new Set(response.data.map(item => item.id))
     ).map(id => response.data.find(item => item.id === id));
     setSearchRequest(uniqueArray);
   }
   ```

## 시연 영상

<div align="center">

https://github.com/user-attachments/assets/e3f84213-1208-4833-9484-2a2ab8edc40d

</div>

## 팀 구성 및 역할
|<img src="https://avatars.githubusercontent.com/u/5442985?v=4" width="150" height="150"/>|<img src="https://avatars.githubusercontent.com/u/44336444?v=4" width="150" height="150"/>|<img src="https://avatars.githubusercontent.com/u/96579569?v=4" width="150" height="150"/>|
|:-:|:-:|:-:|
|권혁원<br/>PM / FrontEnd|안예원<br/>BackEnd|이지현<br/>AI / Crawling|

## 수상 내역
- 제6회 스마트AI/SW 경진대회 최우수상

---

## 개발 회고

### AI 대회 도전: 기획부터 끝까지, 그리고 백엔드로의 전환점

이 프로젝트는 **AI가 필수 요소인 대회**에 참가하기 위해 기획 단계부터 열심히 준비했던 프로젝트입니다. 당시 ChatGPT API 연동이 지금처럼 자연스럽지 않던 시기였고, AI에 대한 지식이 전무했던 저에게는 큰 도전이었습니다.

### 위기의 순간: PM으로서의 한계 직면

#### "내가 PM인데 백엔드와 AI를 모르겠다..."
프로젝트에서 **PM을 맡았지만 백엔드와 AI 지식이 전혀 없어** 진행 상황을 제대로 체크할 수 없는 답답한 상황이 계속되었습니다.

**당시 겪었던 어려움들**
- 팀원들의 작업 진행도를 정확히 파악하기 어려움
- 기술적 이슈나 병목 지점을 사전에 예측하지 못함
- 일정 관리와 리소스 분배에서의 한계

#### "대회 전날, 시연할 데이터가 없다..."
**결정적인 순간이 찾아왔습니다.** 대회 발표를 위해 데이터를 예쁘게 정리해야 하는데

- DB를 만져본 적도 없고, 접근 권한도 없는 상황
- 백엔드 팀원과 연락이 되지 않아 전전긍긍
- 심사위원들 앞에서 발표해야 하는 시간은 다가오고...

> *"이런 상황이 다시는 일어나면 안 된다. 다음 프로젝트는 무조건 백엔드를 해보자!"*

### 전환점: 백엔드 학습에 대한 결심

- **3번째 프로젝트**였던 만큼 기술적으로 큰 트러블은 발생하지 않음
- 퍼블리싱 → CRUD 구현 → API 호출의 패턴은 이미 익숙했기 때문
- React Native의 컴포넌트 구조와 상태 관리도 능숙히 다룰 수 있었음

하지만 **프론트엔드로서의 근본적인 한계**를 느꼈습니다.
- 항상 백엔드가 API를 완성해주길 기다려야 하는 상황
- 의존성으로 인한 개발 일정의 불확실성
- 서버에서 예상과 다른 형태로 데이터가 올 때의 무력감

### 현재에 미친 영향: "프론트엔드의 고충을 아는 백엔드 개발자"

이 프로젝트에서의 답답함과 한계를 경험한 덕분에, 현재는 **프론트엔드 개발자와의 소통을 최우선으로 하는 백엔드 개발자**가 되었습니다.

- 프로젝트 시작 전 프론트엔드 팀과 API 설계 회의 필수 진행
- 화면 단위 vs 엔티티 단위 데이터 제공 방식 사전 협의
- **특별한 요청이 없다면 화면 단위로 최적화된 API 제공**

> **이 프로젝트는 제게 단순한 개발 경험을 넘어 '협업하는 개발자'로 성장할 수 있는 소중한 전환점이 되었습니다.**  
> **프론트엔드의 어려움을 직접 겪어본 백엔드 개발자로서, 팀 전체의 생산성을 높이는 것이 진정한 백엔드의 역할이라고 생각합니다.**
