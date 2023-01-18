var mySqrt = function(x) {
  //traverse through 0 until x + 1
  for(let i = 0; i<=x+1; i++){
    // if a number multiplied by itself is higher than x then you return the number -1
      if (i*i > x ){return (i-1)}
  }
};
