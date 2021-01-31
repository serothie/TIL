## 수행 방법

---

아래의 명세에 해당하는 프로젝트를 2월 1일 23시 59분 59초까지 완수하여 **GitLab**에 업로드하고 링크를 공유해 제출해주세요.

과제 링크는 [06] 6주차 과제 > 6주차 과제 Gitlab 링크 제출하기 > 과제 제출하기에서 제출할 수 있습니다.

모든 평가는 제출하는 순서에 따라 진행됩니다.

## 과제 내용

---

이 과제를 통해 만들어야 하는 것은 "**간단한 게시판 서비스를 위한 API 서버**" 입니다. 구현해야 하는 API 목록은 아래와 같습니다. 아래에 명시된 API 이외에 추가적인 API (가령, 유저 회원가입 API에서 email 사용 여부를 미리 확인하는 API 등) 를 정의해서 구현하셔도 좋습니다.

1. User APIs : 유저 SignUp / Login / Logout
    1. SignUp API : *fullname*, *email*, *password* 을 입력받아 새로운 유저를 가입시킵니다.
    2. Login API : *email*, *password* 를 입력받아 특정 유저로 로그인합니다.
    3. Logout API : 현재 로그인 된 유저를 로그아웃합니다.
2. Board APIs : 게시판 CRUD
    1. Create API : *name* 을 입력받아 새로운 게시판을 만듭니다.
    2. Read API : 현재 등록된 게시판 목록을 가져옵니다.
    3. Update API : 기존 게시판의 *name* 을 변경합니다.
    4. Delete API : 특정 게시판을 제거합니다.
3. BoardArticle APIs : 게시판 글 CRUD
    1. Create API : *title*, *content* 를 입력받아 특정 게시판에 새로운 글을 작성합니다.
    2. Read API : 게시판의 글 목록을 가져오거나, 특정 게시판 글의 내용을 가져옵니다.
    3. Update API : 게시판 글의 *title*, *content*를 변경합니다.
    4. Delete API : 특정 게시판 글을 제거합니다.
4. Dashboard APIs
    1. RecentBoardArticle API : 모든 게시판에 대해 각각의 게시판의 가장 최근 *n* 개의 게시판 글의 *title* 을 가져옵니다. (*k* 개의 게시판이 있다면 최대 *k * n* 개의 게시판 글의 *title* 을 반환합니다.)

## API 구현 시의 주의사항

---

아래의 내용에 따라 API를 구현해 주세요.

1. 모든 API의 URL, Method, Request/Response 형태 (e.g. form-data, JSON, gRPC, etc.) 등은 자유롭게 결정하시면 됩니다.
2. 위의 API 목록에 명시된 각 API 의 응답에 추가적인 field를 정의해도 됩니다. 가령, 게시판 글의 목록을 가져오는 API에서는 *title* 만 가져올 수도 있고, 추가적으로 작성된 시각이나 작성자의 *fullname* 등을 함께 반환하게 하셔도 좋습니다.
3. 작성한 API들을 사용하는 Prototype 웹 사이트를 함께 구현해도 좋지만, **필수사항은 아닙니다.**

## 프로젝트 구현 환경

---

프로젝트는 아래의 내용에 따라 구현해 주세요.

1. 프로젝트에서 사용할 프로그래밍 언어는 **Python**입니다.
2. API 서버는 **Flask**로 구현해주세요. Flask 위에 Gunicorn이나 Nginx를 붙이는 환경을 구성하셔도 좋습니다.
3. 메인 DB는 **MySQL**, **MariaDB, SQLite** 등 자유롭게 선택하여 구성해주세요.
4. 프로젝트 소스코드는 git 을 통해 관리하시기 바랍니다. 최종적으로 프로젝트 repository를 GitLab에 업로드하여 제출하셔야 합니다. 
5. 프로젝트에서 구현한 API, 서버 실행 방법 등에 대해 자세히 적어 README 파일을 작성해주세요.