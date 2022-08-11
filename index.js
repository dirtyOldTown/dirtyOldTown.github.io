
// Text-decoration za elemente navigacije i footer elemenata
const naslovna = document.querySelector("#naslovna a");
const cenovnik = document.querySelector("#cenovnik a");
const kontakt = document.querySelector("#kontakt a");
const pošta = document.querySelector("#pošta a");
const telefon = document.querySelector("#telefon2 a");
const navigacija = [cenovnik, kontakt];
const footer = [pošta, telefon]

for (let x = 0; x < navigacija.length; x++) {
navigacija[x].addEventListener("mouseover", () => {
  navigacija[x].style.color = "coral";
});
}
for (let x = 0; x < navigacija.length; x++) {
  navigacija[x].addEventListener("mouseout", () => {
    navigacija[x].style.color = "white";
  });
}
for (let x = 0; x < navigacija.length; x++) {
  navigacija[x].addEventListener("mouseup", () => {
    navigacija[x].style.color = "white";
  });
}
// Animacija logoa - ključ servis
const ključServis = document.getElementById("ključ-servis");
const dizanjeNavigacije = document.querySelector(".navigacija");

ključServis.addEventListener("click", () => {
  dizanjeNavigacije.classList.toggle("navigacija-animacija");
});


