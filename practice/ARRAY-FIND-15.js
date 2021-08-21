const productList = [
  { id: 1, name: 'Samsung' },
  { id: 2, name: 'IPHONE X' },
  { id: 3, name: 'iPhone 12 Pro' },
 ];

function findFirstIPhone(productList) {
  if(!Array.isArray(productList)) return false;

  return productList.find( product => product
    .name
    .toLowerCase()
    .includes("iphone")
    );
}

console.log(findFirstIPhone(productList));