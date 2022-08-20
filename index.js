
// Promena stila (color, text-decoration) za elemente navigacije i footer elemente
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
    navigacija[x].style.color = "#D0F0C0";
  });    
}
for (let x = 0; x < navigacija.length; x++) {
  navigacija[x].addEventListener("mouseup", () => {
    navigacija[x].style.color = "#D0F0C0";
  });
}
for (let x = 0; x < navigacija.length; x++) {
  footer[x].addEventListener("mouseover", () => {
    footer[x].style.textDecoration = "underline";
  });
}
for (let x = 0; x < navigacija.length; x++) {
  footer[x].addEventListener("mouseout", () => {
    footer[x].style.textDecoration = "none";
  });
}
for (let x = 0; x < navigacija.length; x++) {
  footer[x].addEventListener("mouseup", () => {
    footer[x].style.textDecoration = "none";
  });
}
// Animacija (Pojavljivanje početne navigacije na klik) za mobilni
const ključServis = document.getElementById("ključ-servis");
const dizanjeNavigacije = document.querySelector(".navigacija");
const mobilni = document.getElementById("mobilni");

mobilni.addEventListener("click", () => {
  dizanjeNavigacije.classList.toggle("navigacija-animacija");
});
// Sređivanje atributa za liniju - hr
const linija = document.querySelector("footer hr");
linija.setAttribute("size", 1);
linija.setAttribute("color","grey");




