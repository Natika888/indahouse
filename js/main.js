// const ball = document.getElementById("ball");
// let mouseX = 0, mouseY = 0;
// let ballX = 0, ballY = 0;

// document.addEventListener("mousemove", (e) => {
//   mouseX = e.clientX;
//   mouseY = e.clientY;
// });

// function animate() {
//   // Плавное приближение к позиции курсора
//   ballX += (mouseX - ballX) * 0.1;
//   ballY += (mouseY - ballY) * 0.1;

//   ball.style.transform = `translate(${ballX - 10}px, ${ballY - 10}px)`;
//   requestAnimationFrame(animate);
// }

// animate();

const ball = document.getElementById("ball");

let mouseX = 0, mouseY = 0;
let ballX = 0, ballY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animate() {
  ballX += (mouseX - ballX) * 0.1;
  ballY += (mouseY - ballY) * 0.1;

  // ограничиваем движение шарика по границам окна
  const maxX = window.innerWidth - 40;
  const maxY = window.innerHeight - 40;

  const clampedX = Math.max(0, Math.min(ballX, maxX));
  const clampedY = Math.max(0, Math.min(ballY, maxY));

  ball.style.transform = `translate(${clampedX}px, ${clampedY}px)`;

  requestAnimationFrame(animate);
}

animate();