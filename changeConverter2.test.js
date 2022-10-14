const changeConverter2 = require("./changeConverter2");

describe('changeConverter2', () => {
  it('returns 1 £50 when given exact number 50.00', ()=> {
    expect(changeConverter2(50.00)).toEqual(["£50"]);
  });
  it('returns 2 £50s when given exact number 100.00', ()=>{
    expect(changeConverter2(100.00)).toEqual(["£50", "£50"]);
  });
  it("returns 1 £20 and 1 £50 when given exact number 70.00", () => {
    expect(changeConverter2(70.00)).toEqual(["£50","£20"]);
  });
  
})
