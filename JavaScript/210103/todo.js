// todo 리스트를 입력할 form, input 입력된 리스트가 삽입될 ul 태그 지정
const toDoForm = document.querySelector(".js-toDoForm"),
      toDoInput = toDoForm.querySelector("input"),
      toDoList = document.querySelector(".js-toDoList");

// 변수 지정
const TODOS_LS = "toDos";

// input에 입력받은 값을 담아둘 빈 array 생성
let toDos = [];

// EventLinster가 click 이벤트 감지시 호출되는 함수
// button의 부모 노드(li)를 삭제
// 남아있는 리스트들의 id 값과 지워진 list의 id 값이 다른 것만 남겨 toDos Array에 저장
function deleteToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo) {
        console.log(li.id);
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos
    saveToDos();
}

// 입력받은 정보를 Json 정보로 localStorage에 저장
function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

// li, button 태그 인스턴스 생성(button은 좌측에 X표 포함)하기 위한 변수
// button에는 EventListener로 Click을 감지하면 deleteToDo 호출
// 리스트에 입력한 값을 담기 위한 span 태그 영역 인스턴스 생성과 newId 값을 배정
// button과 span(input 입력값) 및 newId를 toDoObj에 담아 push 및 saveToDos 호출
function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerHTML = "❌";
    delBtn.addEventListener("click",deleteToDo);
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
}

// html의 form에 submit 되는 경우 새로고침을 막고 input 초기화
// 동시에 paintToDo 실행하여 입력 값을 하단 리스트에 출력
function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

// localStorage에 저장된 todo 리스트 값이 있는 경우 재접속하더라도 그대로 화면에 출력
// forEach 함수를 이용해 loadedToDos의 저장된 Array에 각각 paintToDo 호출
function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        })
    }
}

// loadToDos 호출 및 html의 form에 EventListener에서 submit 감지시 handleSubmit 호출
function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit)
}

init();