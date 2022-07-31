
// Text-decoration za elemente navigacije
const naslovna = document.querySelector("#naslovna a");
const cenovnik = document.querySelector("#cenovnik a");
const mapa = document.querySelector("#kontakt a")
const navigacija = [naslovna, cenovnik, mapa];

for (let x = 0; x < navigacija.length; x++) {
navigacija[x].addEventListener("mouseover", () => {
  navigacija[x].style.textDecoration = "underline";
});
}
for (let x = 0; x < navigacija.length; x++) {
  navigacija[x].addEventListener("mouseout", () => {
    navigacija[x].style.textDecoration = "none";
  });
}

// Animacija navigacije
const logo = document.querySelector(".logo-glavno");
const spuštanjeNavigacije = document.querySelector(".navigacija");
const header = document.querySelector("header");
let animacija = logo.addEventListener("click", () => {
  spuštanjeNavigacije.classList.toggle("spuštanje");
});

// Onload gugl-mapa
let frame = document.getElementById("mapa-load");
window.onload = function() {
  frame.src = 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2832.7769248470036!2d20.499663000000005!3d44.764964!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a70e6fdeb505f%3A0xbd5b46a682a957b5!2z0JHRgNCw0ZvQtSDQiNC10YDQutC-0LLQuNGbIDIwMSwg0JHQtdC-0LPRgNCw0LQ!5e0!3m2!1ssr!2srs!4v1658408435279!5m2!1ssr!2srs" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade';
}


