// JavaScript를 적용할 부분의 id 및 class 값을 호출하여 변수로 지정
const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");
const saveBtn = document.getElementById("jsSave");

// 브러쉬에 적용할 기본 색상과 캔버스의 사이즈
const INITIAL_COLOR = "#2c2c2c"
const CANVAS_SIZE = 700;

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

// 첫 실행시 캔버스의 배경을 흰색으로 설정
ctx.fillStyle = "white"
ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE)

//  브러쉬 초기 값
ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;

let painting = false;
let filling = false;

// MouseUp 또는 MouseLeave 시 호출
function stopPainting() {
    painting = false;
}

// MouseDown 또는 Click 시 호출
function startPainting(event) {
    painting = true;
}

// 캔버스 위에 있는 마우스의 좌표 값을 변수로 지정
// painting이 false(StopPainting)인 경우 마우스가 지나는 경로에 Path가 생성
// Painting이 true(StartPainting)인 경우 Path가 끝나고 lineTo를 따라 색상을 stroke
function onMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting) {
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else {
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}

// 각 색상 클릭시 해당 div의 background-color 값을 strokeStyle과 fillStyle에 적용
function handleColorClick(event) {
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
}

// range input의 변화되는 값을 lineWidth에 overwrite
function handleRangeChange(event) {
    const size = event.target.value;
    ctx.lineWidth = size;
}

// paint/fill button click에 따라 filling 값과 html test 전환
function handleModeClick() {
    if(filling === true) {
        filling = false;
        mode.innerText = "Fill";
    } else {
        filling = true;
        mode.innerText = "Paint";
    }
}

// 캔버스 클릭시 handleCanvasClick 단 filling이 true인 경우에 한정
function handleCanvasClick() {
    if(filling) {
        ctx.fillRect(0, 0, canvas.width, canvas.height)
    }
}

// 캔버스 좌클릭시 메뉴창 뜨지 않게 설정
function handleCM(event) {
    event.preventDefault();
}

// Save 버튼 클릭시 URL 데이터로 전송된 image를 a 태그 인스턴스 클릭에 따라 다운로드가 되도록 구현
function handelSaveClick() {
    const image = canvas.toDataURL();
    const link = document.createElement("a");
    link.href = image;
    link.download = "PaintJs"
    link.click();
}

// 캔버스 상 기능 작동을 위한 EventLinstener로 각 event마다 함수를 호출
if (canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
    canvas.addEventListener("click", handleCanvasClick);
    canvas.addEventListener("contextmenu", handleCM)
}

// colors 변수들로부터 Array를 받고 Array의 각 값들에 EventListner로 click시 handleColorClick 호출
Array.from(colors).forEach(color => 
    color.addEventListener("click", handleColorClick)
);

//  range input에 따라 handleRangeChange 함수 호출
if(range) {
    range.addEventListener("input", handleRangeChange)
}

// Fill/Paint 버튼 click에 따라 handleModeClick 호출
if(mode) {
    mode.addEventListener("click", handleModeClick)
}

// Save 버튼 click에 따라 handleSaveClick 호출
if(saveBtn) {
    saveBtn.addEventListener("click", handelSaveClick)
}