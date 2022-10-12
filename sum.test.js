const sum = require ('./sum');

describe('sum', () => {
  it('returns £10 when given £5, £5', () => {
    expect(sum(['£5', '£5'])).toEqual("£10");
  });
  it("returns £5 when given £5", () => {
    expect(sum(["£5"])).toEqual("£5");
  });
});