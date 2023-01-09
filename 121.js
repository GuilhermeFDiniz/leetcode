var maxProfit = function(prices) {
  // declare maxprofit variable
  let maxProfit = 0
  // declare a buyprice variable
  let buy = 0
  // declare a sellprice variable
  buy = prices[0]
  // traverse prices
  for(let i = 0; i < prices.length; i++){
    //check if the max profit is less than the current price - best buy option
      if(maxProfit < prices[i]-buy){
        // if so maxprofit becomes current price - best buy option
          maxProfit = prices[i]-buy
      }
      //check if the current price is better than the best buy option
      if(prices[i] < buy){
        // if so the best buy option equals to current price
          buy = prices[i]
      }
  }
  // return maxProfit
  return maxProfit
};
