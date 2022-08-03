
// Text-decoration za elemente navigacije
const naslovna = document.querySelector("#naslovna a");
const cenovnik = document.querySelector("#cenovnik a");
const mapa = document.querySelector("#kontakt a")
const navigacija = [cenovnik, mapa];

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

 


