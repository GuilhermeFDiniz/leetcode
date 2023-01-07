var addBinary = function(a, b) {
  // transform a into binary number
  // transform b into binary number
  // binary sum a+b
  // transform it to string
  // return
  return (BigInt('0b' + a) + BigInt('0b' + b)).toString(2);
};
