const productList = [
  { id: 1, name: 'Iphone 16', isFreeShip: false, price: 10200500 },
  { id: 2, name: 'Iphone 16 Pro Max', isFreeShip: true, price: 1500000 },
 ];

function hasFreeShip(productList, price) {
  if(!Array.isArray(productList)) return false;

  return productList.some(obj => obj.isFreeShip && obj.price < 10000000);
}
console.log(hasFreeShip(productList, 10000000));