function animate({timing, duration, draw}) {
  let start = performance.now();
  requestAnimationFrame(function animate(time) {
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;
    let progress = timing(timeFraction);
    draw(progress);
    if (timeFraction < 1) requestAnimationFrame(animate);
  });
}

function linear(timeFraction) {
  return timeFraction;
}

function quad(timeFraction, x = 2) {
  return Math.pow(timeFraction, x);
}

function circ(timeFraction) {
  return 1 - Math.sin(Math.acos(timeFraction));
}

function back(timeFraction, x = 1.5) {
  return Math.pow(timeFraction, 2) * ((x + 1) * timeFraction - x);
}

function bounce(timeFraction) {
  for (let a = 0, b = 1; 1; a += b, b /= 2) {
    if (timeFraction >= (7 - 4 * a) / 11) {
      return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2);
    }
  }
}

function elastic(timeFraction, x = 1.5) {
  return Math.pow(2, 10 * (timeFraction - 1)) * Math.cos(20 * Math.PI * x / 3 * timeFraction);
}

function makeEaseOut(timing) {
  return function(timeFraction) {
    return 1 - timing(1 - timeFraction);
  }
}

function makeEaseInOut(timing) {
  return function(timeFraction) {
    if (timeFraction < 0.5) {
      return timing(2 * timeFraction) / 2;
    } else {
      return (2 - timing(2 * (1 - timeFraction))) / 2;
    }
  }
}

export { 
  animate, 
  linear, 
  quad,
  circ,
  back,
  bounce,
  elastic,
  makeEaseOut,
  makeEaseInOut
}
