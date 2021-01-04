// html의 body 영역을 변수로 지정
const body = document.querySelector("body");

// Math.random 값에 적용할 이미지 개수
const IMG_NUMBER = 15;

// 로딩을 마쳤다는 메시지
function handleImgLoad(){
    console.log('finished loading');
}

function paintImage(imgNumber) {
    const image = new Image();
    image.src = `images/${imgNumber + 1}.jpg`;
    image.classList.add('bgImage');
    body.prepend(image);
    // image.addEventListener("loadend", handleImgLoad); 향후 API 활용시 이용
}

// 이미지 개수(15) 중 임의의 사진을 선택하기 위한 숫자 값 리턴
function genRandom() {
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

// genRandom 함수 호출하여 변수로 지정 및 해당 변수에 따른 배경 사진 적용
function init() {
    const randomNumber =genRandom();
    paintImage(randomNumber);
}

init();