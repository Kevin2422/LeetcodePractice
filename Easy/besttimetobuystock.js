var maxProfit = function(prices) {
    let maxprofit = 0
    for(let i = 0; i<prices.length; i++){
        for(let j = i+1; j<prices.length; j++){
            if(prices[i] < prices[j]){
                let profit = prices[j] - prices[i]
                maxprofit = Math.max(maxprofit, profit)
            }else {
                break;
            }
            
        }
    }
    return maxprofit
};


// const maxProfit = (prices) => {
//     let left = 0; // Buy
//     let right = 1; // sell
//     let max_profit = 0;
//     while (right < prices.length) {
//       if (prices[left] < prices[right]) {
//         let profit = prices[right] - prices[left]; // our current profit
  
//         max_profit = Math.max(max_profit, profit);
//       } else {
//         left = right;
//       }
//       right++;
//     }
//     return max_profit;
//   };