module.exports = function getZerosCount(number) {
  let mod5 = 0;
  for (let num = 2; num <= number; num += 1) {
    for (let nn = num; nn % 5 === 0; nn /= 5) {
      mod5 += 1;
    }
  }
  return mod5;
};
