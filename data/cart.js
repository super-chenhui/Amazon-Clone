export const cart = [];

export function addToCart(productId, quantity) {
  /*
  let matchingItem;
  cart.forEach((item) => {
    if (item.productName === productName) {
      matchingItem = item;
    }
    console.log('find...' + item.productName);
  });
  */
  /*
  When the matchingItem is found,
  forEach() will continue to execute code on the remaining items,
  find() will stop looking */    
  const matchingItem = cart.find(CartItem => CartItem.productId === productId);

  if (matchingItem) {
    matchingItem.quantity += quantity;
  } else {
    cart.push({
      productId,  // productName: productName,
      quantity  // quantity: quantity
    });
  }
}