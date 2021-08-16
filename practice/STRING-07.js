function fillPath(path, params) {
  if(typeof params !== "object" || params === null || Array.isArray(params) || typeof path !== 'string') return false;


  const obj = {...params};
  const arrayList =  path.split("/");

  return arrayList
    .map((value, index) => {
      Object.keys(obj).forEach(key => {
        if(value.indexOf(key) !== -1) {
        value = obj[key].toString();
        }
      })
      return value;
  })
  .join("/");
}
console.log(fillPath('/categories/:categoryId/products/:productId', { 
  categoryId: 1, 
  productId: 2
 }));





