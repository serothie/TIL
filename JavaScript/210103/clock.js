// html의 시간 정보를 띄울 div를 클래스로 호출
const clockContainer = document.querySelector(".js-clock"),
      clockTitle = clockContainer.querySelector("h1");

// 시간 정보를 받아 Text 삽입, 삼항연산자를 활용하여 `00:00:00` 형식으로 일관되게 출력
function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
        minutes < 10 ? `0${minutes}` : minutes
    }:${seconds < 10 ? `0${seconds}`:seconds}`;

}

// getTime 함수 호출 후 1초 간격으로 setInterval을 호출하여 실시간으로 시간 출력
function init(){
    getTime();
    setInterval(getTime, 1000);
}

init();