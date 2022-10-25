const skor = document.querySelector(".skor");
const igrica = document.querySelector(".igrica");
const startGame = document.querySelector(".start");
const staza = document.querySelector(".staza");

// Regulisanje kretanja automobila preko tastera: 
// Objekt za tastere: gore; dole; levo; desno
const keys = {
  ArrowUp: false,
  ArrowDown: false,
  ArrowLeft: false,
  ArrowRight: false
}
// Objekt za unos vrednosti za igrača, tj. njegovog automobila:
const igrač = {brzina: 5}
// Funkcije za detektovanje tastera:
function stisniTaster(e) {
  e.preventDefault();
  keys[e.key] = true;
}
function pustiTaster(e) {
  e.preventDefault();
  keys[e.key] = false;
}
// Realizacija funkcija za detektovanje tastera (addEventListener):
window.document.addEventListener("keydown", stisniTaster);
window.document.addEventListener("keyup", pustiTaster);
// Puštanje igre na klik
startGame.addEventListener("click", start);
// Pokretanje linija na stazi:
function kretanjeLinija() {
  let skupLinija = document.querySelectorAll(".linije");
  skupLinija.forEach((item) => {
    item.x += 4;
    if (item.x > 450) {
      item.x -= 450;
    }
    item.style.top = item.x + "px";
  })
}
// Registrovanje suadara automobila
function sudar(a, b) {
  let aRect = a.getBoundingClientRect();
  let bRect = b.getBoundingClientRect();
  return !(
    (aRect.top > bRect.bottom) ||
    (aRect.bottom < bRect.top) ||
    (aRect.left > bRect.right) ||
    (aRect.right < bRect.left)
  )
}
// Kretanje suparničkih automobila
function suparničkiAutomobili(auto) {
  let suparnici = document.querySelectorAll(".suparnički-auto");
  suparnici.forEach((item) => {
    if (sudar(auto, item)) {
      console.log("SHIT");
      krajIgre()
    }
    item.y += igrač.brzina;
    if (item.y > 450) {
      item.y -= 1220;
      item.style.left = Math.floor(Math.random() * 350) + "px";
    }
    item.style.top = item.y + "px";
  })
}
// Funkcija 'play' za regulisanje toka same igre:
function play() {
  let zvukMotora = document.querySelector("#zvuk1");
  let auto = document.querySelector(".auto");
  let autoRect = auto.getBoundingClientRect(); 
  let igraRect = staza.getBoundingClientRect();
  kretanjeLinija()
  suparničkiAutomobili(auto)
  // Regulisanje kretanja auta u okvirima staze:
  if (igrač.start) {
    window.requestAnimationFrame(play)
    zvukMotora.play()
    if (keys["ArrowUp"] && autoRect.top > igraRect.top) {igrač.y -= igrač.brzina}
    if (keys["ArrowDown"] && autoRect.bottom < igraRect.bottom) {igrač.y += igrač.brzina}
    if (keys["ArrowLeft"] && autoRect.x > igraRect.x) {igrač.x -= igrač.brzina}
    if (keys["ArrowRight"] && autoRect.right < igraRect.right) {igrač.x += igrač.brzina}
    igrač.skor++;
    auto.style.top = igrač.y + "px";
    auto.style.left = igrač.x + "px";
    skor.innerHTML = "Skor: " + igrač.skor;
  }
}
// Funkcija za stanje posle sudara automobila
function krajIgre() {
  let zvukMotora = document.querySelector("audio");
  igrač.start = false;
  zvukMotora.pause();
  skor.innerHTML = "Game Over" + "<p style='margin-bottom: -20px;color: white; margin-top: -10px;font-weight: bold;font-family: times-new-roman'>" + "Skor: " + igrač.skor + "</p>"
  skor.style.color = "red";
  let sudar = document.createElement("audio");
  sudar.setAttribute("autoplay", "autoplay");
  sudar.innerHTML = `<source src="audio/crash.wav" type="audio/wav" />`
}
// Funkcija 'start' (Regulisanje uslova i okruženja za početak igrice)
function start() {
  igrač.start = true;
  skor.style.borderBottom = "2px solid white"
  staza.classList.remove("hide"); 
  staza.innerHTML = "";
  igrač.skor = 0;
  skor.style.color = "white";
  let auto = document.createElement("img");
  auto.src = "slike/auto2.png"
  auto.classList.add("auto");
  staza.append(auto);
  igrač.x = auto.offsetLeft;
  igrač.y = auto.offsetTop;
  // Kreiranje linija na stazi:
  for (let i = 0; i < 5; i++) {
    let linije = document.createElement("div");
    linije.classList.add("linije");
    linije.x = 110 * i;
    linije.style.top = linije.x + "px"
    staza.appendChild(linije);
  }
  // Kreiranje suparničkih vozila
  for (let i = 0; i < 4; i++) {
    let suparničkiAuto = document.createElement("div");
    suparničkiAuto.classList.add("suparnički-auto");
    let img = document.createElement("img");
    let imgSrc = ["slike/auto1.png", "slike/auto3.png", "slike/auto4.png", "slike/auto-glavni.png"];
    img.src = imgSrc[i];
    suparničkiAuto.appendChild(img);
    staza.appendChild(suparničkiAuto);
    suparničkiAuto.y = (i + 1) * 750 * (-1);
    suparničkiAuto.x = Math.floor(Math.random() * 360);
    suparničkiAuto.style.left = suparničkiAuto.x + "px";
    suparničkiAuto.style.top = suparničkiAuto.y + "px"
  }
  window.requestAnimationFrame(play);
}

