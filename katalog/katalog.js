// animacija za pdf katalog
const katalog = document.getElementById("pdf");
katalog.addEventListener("mousedown", () => {
    katalog.style.color = "orange";
    katalog.style.opacity = 0.9;
  });
  katalog.addEventListener("mouseup", () => {
    katalog.style.color = "white";
    katalog.style.opacity = 1;
    open("./katalog.pdf");
  });
  katalog.addEventListener("mouseover", () => {
    katalog.style.opacity = 0.8;
  });
  katalog.addEventListener("mouseout", () => {
    katalog.style.opacity = 1;
  });
  const faHome = document.getElementById("fa-home");
  faHome.addEventListener("click", () => {
    open("/index.html")
  });
const katalogLista = document.querySelectorAll("ul li a");
katalogLista.forEach((lista) => {
  lista.onmouseup = () => {
    lista.style.color = "#54626F"
  }
})


