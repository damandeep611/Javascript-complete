// * reduce array method
const myNums = [1, 2, 3];

// const myTotal = myNums.reduce(function (acc, currval) {
//   console.log(`acc: ${acc} and currval: ${currval}`);
//   return acc + currval;
// }, 3);

// ?now we will wirte it in arrow function

const myTotal = myNums.reduce((acc, curr) => acc + curr, 0);
// console.log(myTotal);

const shoppingCart = [
  {
    itemName: "Js Course",
    price: 2999,
  },
  {
    itemName: "py Course",
    price: 999,
  },
  {
    itemName: "mobile dev Course",
    price: 9999,
  },
  {
    itemName: "data science Course",
    price: 12999,
  },
];

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(priceToPay);
