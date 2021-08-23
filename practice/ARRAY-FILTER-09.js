const productList = [
  { id: 1, name: 'Luxury IPhone X', amount: 1 },
  { id: 2, name: 'Super Cool iphone 16 Pro', amount: 0 },
  { id: 3, name: 'iphone 20 Pro', amount: 2 },
 ];

 function findAllIphones (productList) {
   if(!Array.isArray(productList)) return false;

   return productList.filter(product => product.amount > 0 && product.name.toLowerCase().includes("iphone"));
 }
 
 console.log(findAllIphones(productList));