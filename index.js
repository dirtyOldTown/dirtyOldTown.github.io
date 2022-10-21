let startGame = document.querySelector(".start-game");
let gameArea = document.querySelector(".game-area");
const keys = {
  ArrowUp: false,
  ArrowDown: false,
  ArrowRight: false,
  ArrowLeft: false
}
const player = {speed: 5};
window.document.addEventListener("keydown", pressOn);
window.document.addEventListener("keyup", pressOff);
startGame.addEventListener("click", start)
function pressOn(e) {
  e.preventDefault();
  keys[e.key] = true;
}
function pressOff(e) {
    e.preventDefault();
    keys[e.key] = false;
}

function moveLine() {
  let lines = document.querySelectorAll(".line");
  lines.forEach((line) => {
     if (line.y > 430) {
      line.y -= 430;
     }
     line.y += 5
     line.style.top = line.y + "px"
    })
  }

function play() {
  window.requestAnimationFrame(play);
  moveLine()
  let car = document.querySelector(".car");
  let road = car.getBoundingClientRect();
  if (player.start) {
  if (keys["ArrowUp"] && road.top > 10) {player.y -=5}
  if (keys["ArrowDown"] && road.top < 505 - road.height) {player.y +=5}
  if (keys["ArrowLeft"] && road.x > road.width - 40) {player.x -=5}
  if (keys["ArrowRight"] && road.x < 255) {player.x +=5}
  }
  car.style.top = player.y + "px";
  car.style.left = player.x + "px";
}
function start() {
  gameArea.classList.remove("hide");
  startGame.classList.add("hide");
  player.start = true;
  let car = document.createElement("div");
  document.body.appendChild(car);
  car.classList.add("car");
  for (let i = 0; i < 4; i++) {
    let line = document.createElement("div");
    line.classList.add("line");
    line.y = 140 * i;
    line.style.top += (140 * i) + "px";
    document.body.appendChild(line);
  }
  player.y = car.offsetTop;
  console.log(player)
  player.x = car.offsetLeft;
  window.requestAnimationFrame(play)
}








