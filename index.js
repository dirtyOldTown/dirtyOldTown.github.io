import { preventInput } from "./calculator.js";

let calculator = document.getElementById("calculator");
let monitor = document.getElementById("monitor");
let equal = document.getElementById("equal");
let deleteAllInputs = document.getElementById("ac");
let deleteCurrentInput = document.getElementById("ce");
function calc(event) {
  let target = event.target.closest("input");
  // Preventing the display of the specific input on the monitor
  preventInput(target, monitor);
  // handle calculation
  equal.onclick = function() {
    monitor.value = eval(monitor.value);
  }
  // Clearing all inputs from the monitor
  deleteAllInputs.onclick = function() {
    monitor.value = "";
  }
  // Clearing current input
  deleteCurrentInput.onclick = function() {
    monitor.value = monitor.value.substring(0, monitor.value.length - 1);
  }
  // Handle square root
  let root = document.querySelector(".operator.root");
  root.onclick = function() {
    if (!isNaN(monitor.value)) {
      monitor.value = Math.sqrt(monitor.value);
    } else {
    alert(`- The square root must be calculated from a real number!\n- First click the equals key and then search for the value of the square root of the given number!`);
    }
  }
}

// Handle number PI
let pi = document.querySelector(".operator.pi");
pi.onclick = function() {
  monitor.value += Math.PI.toFixed(5);
}

  // Handle number e
  let e = document.querySelector(".operator.e");
  e.onclick = function() {
    monitor.value += Math.E.toFixed(5);
  }


calculator.addEventListener("click", calc);