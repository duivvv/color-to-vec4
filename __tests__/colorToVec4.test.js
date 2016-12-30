import colorToVec4 from '../src/';

describe(`returns the correct values`, () => {

  it(`returns [1, 1, 0, 1] on #FFFF00`, () => {

    expect(colorToVec4(`#FFFF00`))
      .toEqual([1, 1, 0, 1]);

  });

  it(`returns [0, 0, 1, 1] on [0, 0, 1, 1]`, () => {

    expect(colorToVec4([0, 0, 1, 1]))
      .toEqual([0, 0, 1, 1]);

  });

  it(`returns [1, 0, 0, 1] on #FF0000`, () => {

    expect(colorToVec4(`#FF0000`))
      .toEqual([1, 0, 0, 1]);

  });

  it(`returns [0, 0, 1, 0.3] on rgba(0, 0, 255, 0.3)`, () => {

    expect(colorToVec4(`rgba(0, 0, 255, 0.3)`))
      .toEqual([0, 0, 1, 0.3]);

  });

  it(`returns [0.5, 0, 1, 1] on rgb(127.5, 0, 255)`, () => {

    expect(colorToVec4(`rgb(127.5, 0, 255)`))
      .toEqual([0.5, 0, 1, 1]);

  });

});

describe(`throws errors on wrong input`, () => {

  it(`throws error on ##FF`, () => {

    expect(() => colorToVec4(`##FF`))
      .toThrowError(`##FF is not a valid hex color`);

  });

  it(`throws error on FFFF`, () => {

    expect(() => colorToVec4(`FFFF`))
      .toThrowError(`FFFF is not a valid color, must be rgba, rgb, hex or vec4`);

  });

  it(`throws error on 234`, () => {

    expect(() => colorToVec4(234))
      .toThrowError(`234 is not a valid color, must be rgba, rgb, hex or vec4`);

  });

  it(`throws error on rgba(255, 0)`, () => {

    expect(() => colorToVec4(`rgba(255, 0)`))
      .toThrowError(`rgba(255, 0) is not a valid rgb(a) color`);

  });

  it(`throws error on rgba(255, 0, 255, 255, 255)`, () => {

    expect(() => colorToVec4(`rgba(255, 0, 255, 255, 255)`))
      .toThrowError(`rgba(255, 0, 255, 255, 255) is not a valid rgb(a) color`);

  });

  it(`throws error on [1, 1, 1]`, () => {

    expect(() => colorToVec4([1, 1, 1]))
      .toThrowError(`[1,1,1] is not a valid vec4`);

  });

  it(`throws error on [1, 1, 1, 1, 1]`, () => {

    expect(() => colorToVec4([1, 1, 1, 1, 1]))
      .toThrowError(`[1,1,1,1,1] is not a valid vec4`);

  });

});
