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
