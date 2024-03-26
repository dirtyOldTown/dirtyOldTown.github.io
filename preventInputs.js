let root = document.querySelector(".operator.root");
let pi = document.querySelector(".operator.pi");
let e = document.querySelector(".operator.e");
let percent = document.getElementById("percent");
function preventInput(target, monitor) {
   if (target.value != "=" && target.value != "AC" &&  target.value != "CE" &&
      target.value != root.value && target.value != pi.value &&
      target.value != e.value && target.value != percent.value) {
         if (isNaN(target.value)) handleNan(target, monitor);
         else monitor.value += target.value;
      } 
   if (monitor.value === 'undefined') {
      monitor.value = "";
   }
   if (target.value == root.value && monitor.value == 0) {
      monitor.value = "";
   }
   if (target.value == percent.value && monitor.value == 0) {
      monitor.value = "";
   }
}

function handleNan(target, monitor) {
  if (monitor.value.length == 0 && target.value == "-")  monitor.value += "-";

  if (monitor.value.length > 0 && isFinite(monitor.value.at(-1)) &&
  !(target.value == "(" || target.value == ")")) {
     monitor.value += target.value;
  }
  if (monitor.value.length > 0 && isNaN(monitor.value.at(-1)) &&
  !(target.value == "(" || target.value == ")")) {
   if (monitor.value.length == 1 && isNaN(target.value)) {
      monitor.value += "";
   } else {
      if (!(target.value == "(" || target.value == ")")) {
         let display = monitor.value.substring(0, monitor.value.length - 1);
         monitor.value = display + target.value;
      } else {
         monitor.value += target.value;
      }
  }
  if (target.value == "(" || target.value == ")") {
    monitor.value += target.value;
  }
}
}
export { preventInput }

