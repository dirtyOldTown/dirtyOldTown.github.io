let root = document.querySelector(".operator.root");
let pi = document.querySelector(".operator.pi");
let e = document.querySelector(".operator.e");
function preventInput(target, monitor) {
  if (target.value != "=" && target.value != "AC" &&  target.value != "CE" &&
  target.value != root.value && target.value != pi.value &&
  target.value != e.value) {
      monitor.value += target.value;
   }
}

export { preventInput }

