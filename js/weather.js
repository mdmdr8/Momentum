const API_KEY="4be23ab0ba72b36963f5e16f21c68076"
// 내 좌표를 얻어서 API로 DB에 질문을 던질거야
function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
        // fetch는 js가 대신 url을 가져오는 기능
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child")
      const city = document.querySelector("#weather span:last-child")
      city.innerText = data.name;
      weather.innerText =  `${data.weather[0].main} / ${data.main.temp} `;
    })
    
}
function onGeoError(){
  alert("Can't find you. No weather for you.");

}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);