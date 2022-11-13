const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

getClock();

// 함수를 몇 초마다 실행시킬 것인지
setInterval(getClock, 1000);

//함수를 5초 뒤에 한 번 실행한다.
// setTimeout(sayHello,5000)
