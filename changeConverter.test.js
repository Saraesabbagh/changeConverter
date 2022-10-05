const changeConverter = require ('./changeConverter');

describe('changeConverter', () => {
  it('returns two 50s when given exact number 100', () => {
    expect(changeConverter(100)).toEqual(["£50", "£50"]);
  });
  it('return 1 50 when given exactly 50', ()=>{
    expect(changeConverter(50)).toEqual(["£50"]);
  });
   it("returns 1 50 and 1 20 when given exactly 70", () => {
     expect(changeConverter(70)).toEqual(["£50", "£20"]);
   });
   it("returns 2 20s when given exactly 40", () => {
     expect(changeConverter(40)).toEqual(["£20", "£20"]);
   });
   it("returns 1 10 when given exactly 10", () => {
     expect(changeConverter(10)).toEqual(["£10"]);
   });
   it("returns 1 5 when given exactly 5", () => {
     expect(changeConverter(5)).toEqual(["£5"]);
   });
   it("returns 1 £2 when given exactly 2", () => {
     expect(changeConverter(2)).toEqual(["£2"]);
   });
   it("returns 1 £1 when given exactly 1", () => {
     expect(changeConverter(1)).toEqual(["£1"]);
   });
   it("returns 1 50p when given exactly 0.5", () => {
     expect(changeConverter(0.5)).toEqual(["50p"]);
   });
   it("returns 1 20p when given exactly 0.2", () => {
     expect(changeConverter(0.2)).toEqual(["20p"]);
   });
   it("returns 1 10p when given exactly 0.1", () => {
     expect(changeConverter(0.1)).toEqual(["10p"]);
   });
   it("returns 1 5p when given exactly 0.05", () => {
     expect(changeConverter(0.05)).toEqual(["5p"]);
   });
   it("returns 1 2p when given exactly 0.02", () => {
     expect(changeConverter(0.02)).toEqual(["2p"]);
   });
   it("returns 1 1p when given exactly 0.01", () => {
     expect(changeConverter(0.01)).toEqual(["1p"]);
   });
    it("returns 1 £10 1 £2 and 1 50p when given exactly 12.50", () => {
      expect(changeConverter(12.50)).toEqual(["£10", "£2", "50p"]);
    });
    it("returns no change when given exactly 0", () => {
      expect(changeConverter(0)).toEqual([]);
    });
});