const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img"); // img 생성

bgImage.src = `img/${chosenImage}`; // source 설정

document.body.appendChild(bgImage); // html에 추가
