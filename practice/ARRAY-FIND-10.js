const productList = [
  { id: 1, code: 'ip01', name: 'IPhone 16' },
  { id: 2, code: 'ip02', name: 'IPhone 16 Promax' },
];

function findProductByCode(productList, code) {
  if(!Array.isArray(productList)) return false;

  return productList.findIndex(product => product.code === code);
}

console.log(findProductByCode(productList, 'ip01'));
console.log(findProductByCode(productList, 'ip02'));
console.log(findProductByCode(productList, 'ip03'));
 