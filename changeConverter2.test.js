const changeConverter2 = require("./changeConverter2");

describe('changeConverter2', () => {
  it('returns 1 £50 when given exact number 50.00', ()=> {
    expect(changeConverter2(50.00)).toEqual(["£50"]);
  });
  it('returns 2 £50s when given exact number 100.00', ()=>{
    expect(changeConverter2(100.00)).toEqual(["£50", "£50"]);
  });
})
