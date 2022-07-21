// Promena logoa
const media = window.matchMedia('screen and (max-width: 600px)');
const logo = document.querySelector(".logo-glavno img");
function noviLogo(x) {
  if (x.matches) {
    logo.setAttribute("src", "slike/kljuc1.jpg")
  } else {
    logo.setAttribute("src", "slike/kljuc-svetlo.jpg")
  }
}
noviLogo(media);
media.addEventListener("change", noviLogo);

// Promena boje za navigaciju
const naslovna = document.querySelector("#naslovna a");
const cenovnik = document.querySelector("#cenovnik a");
cenovnik.setAttribute("style", "color: #A1C621");
naslovna.setAttribute("style", "color: white");

// Text-decoration za elemente navigacije
const mapa = document.querySelector("#mapa a");
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