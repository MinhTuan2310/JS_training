function fillPath(path, params) {
  if(typeof params !== "object" || params === null || Array.isArray(params) || typeof path !== 'string') return false;


  const obj = {...params};
  const wordList =  path.split("/");

  return wordList
    .map((word, index) => {
      Object.keys(params).forEach(key => {
        if(word.slice(1) === key) {
          word = params[key] + "";
        }
      });

      return word;
  })
  .join("/");
}



console.log(fillPath('/categories/:categoryId/products/:productId', { 
  categoryId: 5, 
  productId: 6
 }));

