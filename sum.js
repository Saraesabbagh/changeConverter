const sum = (amountsArr) => {
  let total = 0;
  
  for(i =0; i<amountsArr.length; i+= 1){
    total +=amountsArr[i];
  }
  return total;
}

  module.exports = sum;

//   amountsArr.forEach(myFunction);

//   function myFunction(value) {
//     if (value.includes("£") === true) {
//       total += value;
//     } else if (value.includes("p") === true) {
//       total += value / 100;
//     }
//   }
//   return total;
// };