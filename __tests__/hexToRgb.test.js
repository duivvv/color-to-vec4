import hexToRgb from '../src/lib/hexToRgb';

describe(`returns the correct values`, () => {

  it(`returns {r: 255, g: 0, b: 0, a: 1} on #FF0000`, () => {

    expect(hexToRgb(`#FF0000`))
      .toEqual({
        r: 255,
        g: 0,
        b: 0,
        a: 1
      });

  });

  it(`returns {r: 255, g: 255, b: 0, a: 1} on #FFFF00`, () => {

    expect(hexToRgb(`#FFFF00`))
      .toEqual({
        r: 255,
        g: 255,
        b: 0,
        a: 1
      });

  });

  it(`returns {r: 255, g: 255, b: 0, a: 1} on #743c22`, () => {

    expect(hexToRgb(`#743c22`))
      .toEqual({
        r: 116,
        g: 60,
        b: 34,
        a: 1
      });

  });

});
