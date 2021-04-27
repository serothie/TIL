## "**간단한 게시판 서비스를 위한 API 서버**"

1. User APIs : 유저 SignUp / Login / Logout

   1. SignUp API : _fullname_, _email_, _password_ 을 입력받아 새로운 유저를 가입시킵니다.
   2. Login API : _email_, _password_ 를 입력받아 특정 유저로 로그인합니다.
   3. Logout API : 현재 로그인 된 유저를 로그아웃합니다.

2. Board APIs : 게시판 CRUD

   1. Create API : _name_ 을 입력받아 새로운 게시판을 만듭니다.
   2. Read API : 현재 등록된 게시판 목록을 가져옵니다.
   3. Update API : 기존 게시판의 _name_ 을 변경합니다.
   4. Delete API : 특정 게시판을 제거합니다.

3. BoardArticle APIs : 게시판 글 CRUD

   1. Create API : _title_, _content_ 를 입력받아 특정 게시판에 새로운 글을 작성합니다.
   2. Read API : 게시판의 글 목록을 가져오거나, 특정 게시판 글의 내용을 가져옵니다.
   3. Update API : 게시판 글의 _title_, *content*를 변경합니다.
   4. Delete API : 특정 게시판 글을 제거합니다.

4. Dashboard APIs
   1. RecentBoardArticle API : 모든 게시판에 대해 각각의 게시판의 가장 최근 _n_ 개의 게시판 글의 _title_ 을 가져옵니다. (_k_ 개의 게시판이 있다면 최대 _k _ n* 개의 게시판 글의 *title\* 을 반환합니다.)

## 실행 방법 : python app.py

```
출처: [엘리스 AI 트랙 1기](https://aitrack.elice.io/)
```
