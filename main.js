function randomInteger(max) {
    return Math.floor(Math.random()*(max + 1));
}

function randomRgbColor() {
    // HEX colors are a shorthand version of RGB values
    let r = randomInteger(255);
    let g = randomInteger(255);
    let b = randomInteger(255);

    console.log([r,g,b]);
    return [r,g,b];
}

function randomHexColor() {
    let [r,g,b] = randomRgbColor();

    /*
     toString(16) - String representation of number: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString
     padStart(2, '0') - pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
     syntax: padStart(targetLength, padString)
     */
    let hr = r.toString(16).padStart(2, '0');
    let hg = g.toString(16).padStart(2, '0');
    let hb = b.toString(16).padStart(2, '0');

    // console.log('hr: ' + hr + ' hg: ' + hg + ' hb: ' + hb);
    return "#" + hr + hg + hb;
}

function changeColor() {
  let hex = randomHexColor();
  let colorElement = document.getElementById('color');

  colorElement.value = hex;
  document.getElementById('text').innerHTML = hex;
}

function clickHandler(event) {
  changeColor();
  event.preventDefault();
}

document.addEventListener('click', clickHandler);
