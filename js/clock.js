const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();

// 함수를 몇 초마다 실행시킬 것인지
setInterval(getClock, 1000);

//함수를 5초 뒤에 한 번 실행한다.
// setTimeout(sayHello,5000)
