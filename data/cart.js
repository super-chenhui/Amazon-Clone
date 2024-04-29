export const cart = [{
  productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
  quantity: 2
}, {
  productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
  quantity: 1
}];

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
  const matchingItem = cart.find(cartItem => cartItem.productId === productId);

  if (matchingItem) {
    matchingItem.quantity += quantity;
  } else {
    cart.push({
      productId,  // productName: productName,
      quantity  // quantity: quantity
    });
  }
}