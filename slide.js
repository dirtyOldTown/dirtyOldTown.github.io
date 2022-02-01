// Dodeljivanje varijabli za element "img" (sličice)
var img1 = document.querySelector(".slideshow img:first-of-type");
var img2 = document.querySelector(".slideshow img:nth-of-type(2)");
var img3 = document.querySelector(".slideshow img:nth-of-type(3)");
var img4 = document.querySelector(".slideshow img:nth-of-type(4)");
var img5 = document.querySelector(".slideshow img:nth-of-type(5)");
var img6 = document.querySelector(".slideshow img:last-of-type");

// Dodeljivanje varijabli za element "button"
var btn1 = document.querySelector(".btn button:nth-of-type(1)");
var btn2 = document.querySelector(".btn button:nth-of-type(2)");
var btn3 = document.querySelector(".btn button:nth-of-type(3)");
var btn4 = document.querySelector(".btn button:nth-of-type(4)");
var insert = document.querySelector(".slideshow");

// Dodeljivanje varijable za element "h3" i [niza] za naslove teksta
var text = document.querySelector("aside h3");
var mesto = ["Boba u Švajcarskoj", "Boba u Austriji",
"Boba u Srbiji", "Boba u Crnoj Gori"];

// [Nizovi] za sličice
var img = [img1, img2, img3, img4, img5, img6];
var Sektor1 = ["slike/Gmail/boba2.jpg","slike/Gmail/boba3.jpg","slike/Gmail/boba4.jpg",
  "slike/Gmail/boba5.jpg","slike/Gmail/boba6.jpg","slike/Gmail/boba7.jpg"];
var Sektor2 = ["slike/Gmail/boba8.jpg","slike/Gmail/boba9.jpg","slike/Gmail/boba10.jpg",
  "slike/Gmail/boba11.jpg","slike/Gmail/boba12.jpg","slike/Gmail/boba13.jpg"];
var Sektor3 = ["slike/Gmail/boba14.jpg","slike/Gmail/boba15.jpg","slike/Gmail/boba16.jpg",
  "slike/Gmail/boba17.jpg","slike/Gmail/boba18.jpg","slike/Gmail/boba19.jpg"];
var Sektor4 = ["slike/Gmail/boba20.jpg","slike/Gmail/boba21.jpg","slike/Gmail/boba22.jpg",
    "slike/Gmail/boba23.jpg","slike/Gmail/boba24.jpg","slike/Gmail/boba25.jpg"];
var Sektori = [Sektor1, Sektor2, Sektor3, Sektor4];

// *Funkcija za animaciju
function Fade(e) {
  e.preventDefault();
  insert.classList.remove("fade");
  void insert.offsetWidth;
  insert.classList.add("fade");
}
document.querySelector(".btn").addEventListener("click", function(e) {Fade(e);});

// Set funkcija za slajdove

function Promena(sektor, mesto, slika) {
 for (var x = 0; x < Sektor1.length; x++) {
    img[x].setAttribute("src",sektor[x]);
  }
    text.innerHTML = mesto;
    slikaUTekstu.setAttribute("src", slika);
}

 btn1.addEventListener("click", function(e){Promena(Sektor1, mesto[0], Sektor1[0]);});
 btn2.addEventListener("click", function(){Promena(Sektor2, mesto[1], Sektor2[0]);});
 btn3.addEventListener("click", function(){Promena(Sektor3, mesto[2], Sektor3[0]);});
 btn4.addEventListener("click", function(){Promena(Sektor4, mesto[3], Sektor4[0]);});


// Other
var imageNumber = 0;
var imageLength = Sektor1.length -1;
var slikaUTekstu = document.querySelector(".text img");
var Prethodna =document.querySelector("#move span:first-of-type");
var Sledeća =document.querySelector("#move span:last-of-type");

function plusImages(x, sektor) {
  imageNumber += x;
  if (imageNumber < 0) {
    imageNumber = imageLength;
  }
  if (imageNumber > imageLength) {
    imageNumber = 0;
  }
  slikaUTekstu.setAttribute("src", sektor[imageNumber]);

}
function slideshow(sektor) {
  Prethodna.addEventListener("click", function() {plusImages(-1, sektor);});
  Sledeća.addEventListener("click", function() {plusImages(1, sektor);});
}

slideshow(Sektor1);  
 


