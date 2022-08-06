
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
for (let x = 0; x < footer.length; x++) {
 footer[x].addEventListener("mouseover", () => {
    footer[x].style.textDecoration = "underline";
  });
}
for (let x = 0; x < footer.length; x++) {
  footer[x].addEventListener("mouseout", () => {
     footer[x].style.textDecoration = "none";
   });
 }

 


