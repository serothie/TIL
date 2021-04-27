# Vanilla JS Project 1 - Momentum Clone Coding

## Ⅰ. Introduction

> - Vanilla JS 기반 Google Momentum Clone Coding
> - API를 이용해 위치 정보에 따른 날씨 표시

## Ⅱ. Get Started

### 1. background.js

images 디렉토리의 사진 중 하나를 무작위로 선택하여 배경에 표시한다. Math 라이브러리를 활용한다.

### 2. clock.js

Date 라이브러리를 이용하여 실시간으로 `${몇시}:${몇분}:${몇초}` 형식의 시간을 표시한다. 삼항연산자를 적용한다.

### 3. gretting.js

'접속자의 이름'을 입력받으면 `Hello ${이름}`을 화면에 나타나도록 한다. 재접속을 하더라도 입력받은 정보는 저장되도록 한다.

### 4. todo.js

'오늘 해야 할 일'을 입력받으면 하단에 리스트로 나타나도록 한다. 각 리스트 좌측의 ❌를 클릭하면 해당 리스트를 삭제한다. 재접속을 하더라도 입력받은 정보는 저장되도록 한다.

### 5. weather.js

OpenWeatherMap의 API를 활용하여 접속자 위치 정보에 따른 지역과 날씨가 시계 아래쪽에 나타나도록 한다. 네트워크에서 정보를 받은 후 출력되도록 then을 이용하여 함수를 실행한다.

## Ⅲ. 새로 배운 점

### 1. DOM : Document Object Model

오늘날 JavaScript가 가장 널리 쓰이는 분야는 클라이언트용 인터페이스이다. 이 때 주로 JavaScript는 웹 브라우저에서 제공되는 DOM API로 사용하게 된다. JavaScript에서 html의 문서에 접근하는 API를 뜻하는 용어로 DOM이 등장하였다.

html 문서의 다양한 요소를 객체화하여 다룰 수 있게 되었다. JavaScript의 강력함, 그 활용성과 잠재력을 느낄 수 있어 흥미로웠다.

### 2. Json : JavaScript Object Notation

일반적으로 서버에서 클라이언트로 데이터를 보낼 때 사용하는 양식. 클라이언트가 사용하는 언어에 관계 없이 통일된 데이터를 주고받을 수 있도록, 일정한 패턴을 지닌 문자열을 생성해 내보내면 클라이언트는 그를 해석해 데이터를 자기만의 방식으로 온전히 저장, 표시할 수 있게 된다. 간결하고 통일된 양식으로 각광을 받고 있는 것이 JSON이다.

Open API를 활용할 때 서버에서 Response를 받는 데이터의 양식으로 이해된다. 이 객체로부터 다양한 정보를 받아 웹사이트에 활용이 가능했다.

### 3. API : Application Programming Interface

응용 프로그램에서 사용할 수 있도록 운영 체제나 프로그래밍 언어가 제공하는 기능을 제어할 수 있게 만든 인터페이스 사양이다. API는 프로그램들이 서로 상호작용하는 것을 도와주는 매개체로 볼 수 있다.

## Ⅳ. 더 개선할 점

> 1. 배경 사진을 images 폴더가 아닌 Unsplash Image API를 활용하여 더 다양한 사진들이 나올 수 있도록 개선
> 1. CSS 활용 전체 레이아웃 및 디자인 개선

</br>

출처: [노마드코더 클론코딩](https://nomadcoders.co/?gclid=Cj0KCQjwyZmEBhCpARIsALIzmnIHuVc0EDdM0eo_oXDK2QDMtxzyIxzea1l8mhfDC6agvSup21e0M8YaAigZEALw_wcB)
