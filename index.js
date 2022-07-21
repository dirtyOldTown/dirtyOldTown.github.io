// Promena teksta - footer
const adresa = document.getElementById("adresa");
const mediaHandler = window.matchMedia('(max-width: 767px)');
function promena(x) {
  if (x.matches) {
    adresa.innerHTML = `
    <p style="margin-top: 3%; font-size: 1.9em; margin-left: 0%;color: white; margin-bottom: 2%;font-family: Reklama">
    <span style="font-size: 0.83em; color:#343a40 ; font-weight: bold;">Adresa:&nbsp; 🔑 &nbsp;</span> Braće Jerković 201, Beograd 
    </p>
    `
  } else {
  adresa.innerHTML = `
  <p style="margin-top: 0.5%; font-size: 2.54vw; margin-left: 0%; margin-bottom: 0; font-style: italic">
  Radnja se nalazi na okretnici autobusa 26
  </p>
  `
  }
}
promena(mediaHandler);
mediaHandler.addEventListener("change", promena)