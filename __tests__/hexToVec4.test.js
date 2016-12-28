import hexToVec4 from '../src/lib/hexToVec4';

describe(`returns the correct values`, () => {

  it(`returns [1, 1, 1, 1] on #FFFFF`, () => {

    expect(hexToVec4(`#FFFFFF`))
      .toEqual([1, 1, 1, 1]);

  });

  it(`returns [0, 0, 0, 1] on #000000`, () => {

    expect(hexToVec4(`#000000`))
      .toEqual([0, 0, 0, 1]);

  });

  it(`returns [0, 0, 1, 1] on #0000FF`, () => {

    expect(hexToVec4(`#0000FF`))
      .toEqual([0, 0, 1, 1]);

  });

  it(`returns [0, 1, 0, 1] on #00FF00`, () => {

    expect(hexToVec4(`#00FF00`))
      .toEqual([0, 1, 0, 1]);

  });

  it(`returns [1, 1, 0, 1] on #FFFF00`, () => {

    expect(hexToVec4(`#FFFF00`))
      .toEqual([1, 1, 0, 1]);

  });


});

describe(`throws errors on wrong input`, () => {

  it(`throws error on ##FF`, () => {

    expect(() => hexToVec4(`##FF`))
      .toThrowError(`##FF is not a valid hex color`);

  });

  it(`throws error on #GGAABB`, () => {

    expect(() => hexToVec4(`#GGAABB`))
      .toThrowError(`#GGAABB is not a valid hex color`);

  });

});
