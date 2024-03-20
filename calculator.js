let root = document.querySelector(".operator.root");
let pi = document.querySelector(".operator.pi");
let e = document.querySelector(".operator.e");
function preventInput(target, monitor) {
  if (target.value != "=" && target.value != "AC" &&  target.value != "CE" &&
      target.value != root.value && target.value != pi.value &&
      target.value != e.value) {
        monitor.value += target.value;
   }
   if (monitor.value === 'undefined') {
      monitor.value = "";
      alert("First enter a mathematical expression!")
   }
   if (target.value == root.value && monitor.value == 0) {
      monitor.value = "";
   }
}

export { preventInput }

