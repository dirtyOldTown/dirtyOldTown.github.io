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

// Set *funkcija koje menjaju atribut 'src', elementa "img"
// Set *funkcija menja naslove 
   function Promena() {
  for (var x = 0; x < Sektor1.length; x++) {
    img[x].setAttribute("src", Sektor1[x]);
  }
 
  text.innerHTML = mesto[0];
  
  slikaUTekstu.setAttribute("src", Sektor1[0]);
}
function Promena2() {
  for (var x = 0; x < Sektor2.length; x++) {
    img[x].setAttribute("src", Sektor2[x]);
  }
   text.innerHTML = mesto[1];
    slikaUTekstu.setAttribute("src", Sektor2[0]);
}   
  function Promena3() {
   
    for (var x = 0; x < Sektor3.length; x++) {
      img[x].setAttribute("src", Sektor3[x]);
  }  
    slikaUTekstu.setAttribute("src", Sektor3[0]);
    text.innerHTML = mesto[2];
}
  function Promena4() {
    for (var x = 0; x < Sektor4.length; x++) {
      img[x].setAttribute("src", Sektor4[x]);
  }
   slikaUTekstu.setAttribute("src", Sektor4[0]);
   text.innerHTML = mesto[3];
}
/*Set addEventListener-a, kojima se omogućava
jednokratna upotreba klase 'fade', na varijabli INSERT!
*/
function Fade(e) {
  e.preventDefault();
  insert.classList.remove("fade");
  void insert.offsetWidth;
  insert.classList.add("fade");
}

btn1.addEventListener("click", function(e) {Fade(e) ;Promena();});
btn2.addEventListener("click", function(e) {Fade(e); Promena2();});
btn3.addEventListener("click", function(e) {Fade(e); Promena3();});
btn4.addEventListener("click", function(e) {Fade(e); Promena4();});

// SLIDESHOW
var slikaUTekstu = document.querySelector(".desk-view img");
var Prethodna = document.querySelector("#move span:first-child");
var Sledeća = document.querySelector("#move span:last-child");

var imageNumber = 0;
var imageLength = Sektor1.length -1;

function PlusImages(x, sektor) {
  imageNumber += x;
  if(imageNumber > imageLength) {
    imageNumber = 0; 
  }
  if (imageNumber < 0) {
    imageNumber = imageLength;
  }
 slikaUTekstu.setAttribute("src", sektor[imageNumber]);
}
function SlideShow(x) {
 Prethodna.addEventListener("click", function() {PlusImages(-1, x);});
 Sledeća.addEventListener("click", function() {PlusImages(1, x);});
}
SlideShow(Sektor1);