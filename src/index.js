import rgbToVec4 from './lib/rgbToVec4';
import hexToVec4 from './lib/hexToVec4';

export default (color: Array<number>|string) => {

  if (typeof color === `string`) {

    if (color.startsWith(`rgba`)) return rgbToVec4(color);
    else if (color.startsWith(`rgb`)) return rgbToVec4(color);
    else if (color.startsWith(`#`)) return hexToVec4(color);
    else throw new Error(`${color} is not a valid color, must be rgba, rgb, hex or vec4`);

  } else if (Array.isArray(color)) {
    if (color.length !== 4) {
      throw new Error(`[${color}] is not a valid vec4`);
    }
    return color;
  } else {
    throw new Error(`${color} is not a valid color, must be rgba, rgb, hex or vec4`);
  }

};
