// @flow

import mapChannel from './mapChannel';

import hexToRgb from './hexToRgb';

export default (color: string) => {

  const isValid = /^#[0-9A-F]{6}$/i.test(color);

  if (!isValid) {
    throw new Error(`${color} is not a valid hex color`);
  }

  const colorObj = hexToRgb(color);
  const {r, g, b} = colorObj;
  const colors = [r, g, b];

  return [...colors.map(c => mapChannel(c)), 1];

};
