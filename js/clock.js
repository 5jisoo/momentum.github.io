const clock = document.querySelector("#clock");

const getClock = () => {
  const date = new Date(); // 매초마다 새로운 Date Object 생성 - 시간 정보 저장되어있음.
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
};

getClock(); // 웹사이트가 load 되자마자 실행되게 설정
setInterval(getClock, 1000);

"1".padStart();
