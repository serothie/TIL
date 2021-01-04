// 입력을 받을 form과 input, 입력받은 정보를 띄울 class를 변수로 정의
const form = document.querySelector(".js-form"),
      input = form.querySelector("input"),
      greeting = document.querySelector(".js-greetings");

// localStorage에 저장될 USER_LS 변수
const USER_LS = "currentUser",
      SHOWING_CN = "showing";

// localStorage에 입력값을 저장하여 다시 접속하더라도 값이 유지
function saveName(text) {
    localStorage.setItem(USER_LS, text);
}

// form에 제출시 새로고침되는 기본값을 막고 입력되는 값에 paintGreeting 및 saveName 호출
function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

// 입력을 받는 form을 띄우고 EventListener 에서 submit 감지시 handleSubmit 호출
function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit)
}

// form에서 입력을 받은 경우 showing class와 그 css 값을 이용해 form은 감추고, greeting를 나타내 텍스트를 보여줌
function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

// localStorage에 저장된 USER_LS를 현재 사용자로 paintGreeting 호출, null 값인 경우 askForName 호출
function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null) {
         askForName();
    } else {
        paintGreeting(currentUser);
    }
}

// loadName 함수 호출
function init(){
    loadName()
}

init();