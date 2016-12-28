import mapChannel from '../src/lib/mapChannel';

describe(`returns the correct values`, () => {

  it(`returns 1 with input 255`, () => {

    expect(mapChannel(255))
      .toEqual(1);

  });

  it(`returns 0 with input 0`, () => {

    expect(mapChannel(0))
      .toEqual(0);

  });

  it(`returns 0.5 with input 127.5`, () => {

    expect(mapChannel(127.5))
      .toEqual(0.5);

  });


});
