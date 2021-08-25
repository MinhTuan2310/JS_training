const cartItemList = [
  { id: 1, product: { id: 1, price: 50000 }, quantity: 1 },
  { id: 2, product: { id: 2, price: 100000 }, quantity: 2 },
 ];

function calcCartTotal(cartItemList) {
  if(!Array.isArray(cartItemList)) return false;

  return cartItemList.reduce((acc, cartItem) => {
    let productPrice = cartItem.product.price * cartItem.quantity;

    return acc + productPrice;
  }, 0);
}

console.log(calcCartTotal(cartItemList));