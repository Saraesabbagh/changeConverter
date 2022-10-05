const changeConverter = (number) => {
  const change = [];
  let remainder = number;

  while (remainder > 0) {
    if (remainder >= 50) {
      const timesby = Math.floor(remainder / 50);
      for (let i = 0; i < timesby; i++) {
        change.push("£50");
        remainder -= 50 * timesby;
      }
    } else if (remainder >= 20) {
      const timesby = Math.floor(remainder / 20);
      for (let i = 0; i < timesby; i++) {
        change.push("£20");
        remainder -= 20 * timesby;
      }
    } else if (remainder >= 10) {
      const timesby = Math.floor(remainder / 10);
      for (let i = 0; i < timesby; i++) {
        change.push("£10");
        remainder -= 10 * timesby;
      }
    } else if (remainder >= 5) {
      const timesby = Math.floor(remainder / 5);
      for (let i = 0; i < timesby; i++) {
        change.push("£5");
        remainder -= 5 * timesby;
      }
    } else if (remainder >= 2) {
      const timesby = Math.floor(remainder / 2);
      for (let i = 0; i < timesby; i++) {
        change.push("£2");
        remainder -= 2 * timesby;
      }
    } else if (remainder >= 1) {
      const timesby = Math.floor(remainder / 1);
      for (let i = 0; i < timesby; i++) {
        change.push("£1");
        remainder -= 1 * timesby;
      }
    } else if (remainder < 1) {
      let pennies = remainder * 100;
      if (pennies >= 50) {
        const pennytimesby = Math.floor(pennies / 50);
        for (let i = 0; i < pennytimesby; i++) {
          change.push("50p");
          let penniestobeminused = (50 * pennytimesby) / 100;
          remainder -= penniestobeminused;
        }
      } else if (pennies >= 20) {
        const pennytimesby = Math.floor(pennies / 20);
        for (let i = 0; i < pennytimesby; i++) {
          change.push("20p");
          let penniestobeminused = (20 * pennytimesby) / 100;
          remainder -= penniestobeminused;
        }
      } else if (pennies >= 10) {
        const pennytimesby = Math.floor(pennies / 10);
        for (let i = 0; i < pennytimesby; i++) {
          change.push("10p");
          let penniestobeminused = (10 * pennytimesby) / 100;
          remainder -= penniestobeminused;
        }
      } else if (pennies >= 5) {
        const pennytimesby = Math.floor(pennies / 5);
        for (let i = 0; i < pennytimesby; i++) {
          change.push("5p");
          let penniestobeminused = (5 * pennytimesby) / 100;
          remainder -= penniestobeminused;
        }
      } else if (pennies >= 2) {
        const pennytimesby = Math.floor(pennies / 2);
        for (let i = 0; i < pennytimesby; i++) {
          change.push("2p");
          let penniestobeminused = (2 * pennytimesby) / 100;
          remainder -= penniestobeminused;
        }
      }else if (pennies === 1){
        change.push("1p");
        remainder -= 1;
      }
      
      
    }
   
  }
    return change;
}

module.exports= changeConverter;