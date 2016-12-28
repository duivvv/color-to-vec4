import rgbToVec4 from '../src/lib/rgbToVec4';

describe(`returns the correct values`, () => {

  it(`returns [1, 1, 1, 1] on rgb(255, 255, 255, 1)`, () => {

    expect(rgbToVec4(`rgba(255, 255, 255, 1)`))
      .toEqual([1, 1, 1, 1]);

  });

  it(`returns [0, 0, 0, 1] on rgba(0, 0, 0, 1)`, () => {

    expect(rgbToVec4(`rgba(0, 0, 0, 1)`))
      .toEqual([0, 0, 0, 1]);

  });

  it(`returns [0, 0, 1, 1] on rgba(0, 0, 255, 1)`, () => {

    expect(rgbToVec4(`rgba(0, 0, 255, 1)`))
      .toEqual([0, 0, 1, 1]);

  });

  it(`returns [0, 1, 0, 1] on rgba(0, 255, 0, 1)`, () => {

    expect(rgbToVec4(`rgba(0, 255, 0, 1)`))
      .toEqual([0, 1, 0, 1]);

  });

  it(`returns [0, 1, 0, 1] on rgba(0, 255, 0, 10)`, () => {

    expect(rgbToVec4(`rgba(0, 255, 0, 10)`))
      .toEqual([0, 1, 0, 1]);

  });

  it(`returns [1, 1, 0, 1] on rgba(255, 255, 0, 1)`, () => {

    expect(rgbToVec4(`rgba(255, 255, 0, 1)`))
      .toEqual([1, 1, 0, 1]);

  });

  it(`returns [1, 1, 0, 1] on rgba(300, 255, 0, 1)`, () => {

    expect(rgbToVec4(`rgba(300, 255, 0, 1)`))
      .toEqual([1, 1, 0, 1]);

  });

  it(`returns [0, 1, 0, 1] on rgba(-20, 255, 0, 1)`, () => {

    expect(rgbToVec4(`rgba(-20, 255, 0, 1)`))
      .toEqual([0, 1, 0, 1]);

  });

  it(`returns [1, 1, 0, 0.5] on rgba(255, 255, 0, 0.5)`, () => {

    expect(rgbToVec4(`rgba(255, 255, 0, 0.5)`))
      .toEqual([1, 1, 0, 0.5]);

  });

  it(`returns [1, 0, 0, 1] on rgb(255, 0, 0)`, () => {

    expect(rgbToVec4(`rgb(255, 0, 0)`))
      .toEqual([1, 0, 0, 1]);

  });

  it(`returns [1, 0, 1, 1] on rgb(255, 0, 255)`, () => {

    expect(rgbToVec4(`rgb(255, 0, 255)`))
      .toEqual([1, 0, 1, 1]);

  });

  it(`returns [1, 0, 0, 1] on rgba(255, 0, 0)`, () => {

    expect(rgbToVec4(`rgb(255, 0, 0)`))
      .toEqual([1, 0, 0, 1]);

  });

});

describe(`throws errors on wrong input`, () => {

  it(`throws error on rgb(255, 255, 255, 0, 0)`, () => {

    expect(() => rgbToVec4(`rgb(255, 255, 255, 0, 0)`))
      .toThrowError(`rgb(255, 255, 255, 0, 0) is not a valid rgb(a) color`);

  });

  it(`throws error on rgba(255, 0)`, () => {

    expect(() => rgbToVec4(`rgba(255, 0)`))
      .toThrowError(`rgba(255, 0) is not a valid rgb(a) color`);

  });

});
