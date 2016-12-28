// @flow

type color = {
  r: number,
  g: number,
  b: number
}

export default (hex: string): color => {

  let result: Array<number> = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  result = result.slice(1, 4);
  result = result.map(r => parseInt(r, 16));

  const [r, g, b]: Array<number> = result;
  const a = 1;

  return {r, g, b, a};

};
