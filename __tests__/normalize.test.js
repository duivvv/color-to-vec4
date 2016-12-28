import normalize from '../src/lib/normalize';

describe(`returns the correct values`, () => {

  it(`returns 1 when normalizing between 2 between 0 - 1`, () => {

    expect(normalize(0, 1, 2))
      .toEqual(1);

  });

  it(`returns 0.5 when normalizing 0.5 between 0 - 1`, () => {

    expect(normalize(0, 1, 0.5))
      .toEqual(0.5);

  });

  it(`returns 122 when normalizing 122 between 0 - 255`, () => {

    expect(normalize(0, 255, 122))
      .toEqual(122);

  });

  it(`returns 255 when normalizing 400 between 0 - 255`, () => {

    expect(normalize(0, 255, 400))
      .toEqual(255);

  });

});
