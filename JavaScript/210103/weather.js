// html의 날씨 정보를 띄울 span을 클래스로 호출
const weather = document.querySelector(".js-weather");

// 발급받은 API key 값
const API_KEY ="cc9a5288b8060a10f7a8c120716f8c3f";

//  
const COORDS = 'coords';

// OpenWeatherMap으로부터 위도, 경도, API key 값을 보내 날씨 정보를 받는다.
// 응답받은 날씨 정보의 json 값을 return 받아 온도와 장소를 표시
function getWeather(lat, lng) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    ).then(function(response){
        return response.json();
    })
    .then(function(json) {
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature} @ ${place}`;
    });
}

// 위도와 경도 값을 localStorage에 저장
function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

// geo location 값을 받아온 경우 객체의 위도 및 경도 값으로 saveCoords(위도, 경도 값 저장) 및 getweather(지역, 날씨 정보 표시) 함수 호출
function handleGeoSuccess(position) {
    console.log(position)
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

// geo location 값을 받아오지 못한 경우
function handleGeoError(){
    console.log("Can't access geo location");
}

// 위치 정보 확인 권한 요청
function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

// localStorage에 위치 정보가 없는 경우 askForCoords 호출, 있는 경우 저장되어 있는 문자열 값을 객체로 변환
// 변환된 객체의 위도, 경도 값으로 getWeather(API를 통한 지역, 날씨 정보 호출)
function loadcoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null) {
        askForCoords();
    } else {
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}   

// 첫 접속에 loadcoords 호출
function init() {
    loadcoords();
}

init();