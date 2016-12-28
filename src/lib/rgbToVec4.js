//@flow

import mapChannel from './mapChannel';
import normalize from './normalize';

export default (color: string): Array<number> => {

  let alpha = false;

  if (color.startsWith(`rgba(`)) alpha = true;
  else if (color.startsWith(`rgb(`)) alpha = false;

  const split = alpha ? `rgba(` : `rgb(`;

  let channels = color.split(split)[1].split(`)`)[0].split(`,`);
  if (channels.length < 3 || channels.length > 4) {
    throw new Error(`${color} is not a valid rgb(a) color`);
  }

  channels = channels.map(c => parseFloat(c)).map(c => normalize(0, 255, c));

  const [r, g, b, a = 1] = channels;
  const aa = normalize(0, 1, a);

  const rgb = [r, g, b].map(mapChannel);

  return [...rgb, aa];

};
