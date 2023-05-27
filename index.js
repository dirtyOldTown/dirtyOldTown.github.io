let forma = document.createElement("form");
let h2 = document.querySelector("h2");
let h2Rect = h2.getBoundingClientRect();
let showButton = document.getElementById("show");
forma.classList.add("stil");
forma.style.top = h2.offsetTop + 10 + "px";
forma.style.left = h2.offsetWidth + 20 + "px";
forma.innerHTML = `<img src='slike/icons8-address-64.png'>
<div style="float: right; text-align: center">
<p style="margin-bottom: 7px">Ukucaj nešto <br> ...pametno :)</p>
<input type="text" autofocus><br>
<div style="margin-top: 5px"><button id="ok">OK</button> 
<button id="cancel">Cancel</button></div>
</div>`;
kontejner.append(forma)
let ok = document.getElementById("ok");
let cancel = document.getElementById("cancel");
console.log(ok)
