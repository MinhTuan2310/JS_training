const productList = [
  { id: 1, name: 'IPhone 5', isFreeShip: false },
  { id: 2, name: 'IPhone X', isFreeShip: true },
  { id: 3, name: 'IPhone 12 Pro', isFreeShip: true },
 ];
 
function findProductHavingFreeShip(productList) {
  if(!Array.isArray(productList)) return false;

  return productList.find (product => product.isFreeShip === true)
}

 console.log(findProductHavingFreeShip(productList));