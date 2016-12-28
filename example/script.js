const colorToVec4 = require(`../`);

const color = colorToVec4(`#FF00FF`);
console.log(color);

const color2 = colorToVec4(`rgba(255, 0, 0, .3)`);
console.log(color2);

const color3 = colorToVec4(`rgb(200, 255, 0)`);
console.log(color3);
