const number = 143907;
const amountInDollars = (number / 100).toLocaleString('en-US', {style: 'currency', currency:'USD'});
console.log('amountInDollars is', amountInDollars);

// const anotherAmountInDollars = number / 100
// const amountInDecimal = number % 100
// const amount = "$" + (anotherAmountInDollars + amountInDecimal)

// console.log('amount is', amount)
