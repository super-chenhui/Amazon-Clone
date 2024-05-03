import { getDeliveryOption } from "./deliveryOptions.js";

function Cart(localStorageKey) {
  const cart = {
    cartItems: undefined,

    loadFromStorage() {
      this.cartItems = JSON.parse(localStorage.getItem(localStorageKey));

      if (!this.cartItems) {
        this.cartItems = [{
          productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
          quantity: 2,
          deliveryOptionId: '1'
        }, {
          productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
          quantity: 1,
          deliveryOptionId: '2'
        }];
      }
    },

    saveToStorage() {
      localStorage.setItem(localStorageKey, JSON.stringify(this.cartItems));
    },

    getCartItem(productId) {
      return this.cartItems.find(cartItem => cartItem.productId === productId);
    },

    addToCart(productId, quantity) {
      const matchingItem = this.getCartItem(productId);

      if (matchingItem) {
        matchingItem.quantity += quantity;
      } else {
        this.cartItems.push({
          productId,  // productName: productName,
          quantity,  // quantity: quantity
          deliveryOptionId: '1'
        });
      }

      this.saveToStorage();
    },

    removeFromCart(productId) {
      const newCart = [];

      this.cartItems.forEach(cartItem => {
        if (cartItem.productId !== productId) {
          newCart.push(cartItem);
        }
      });

      this.cartItems = newCart;

      this.saveToStorage();
    },

    updateDeliveryOption(productId, deliveryOptionId) {
      const matchingItem = this.getCartItem(productId);

      if (!matchingItem) {
        return;
      }

      const deliveryOption = getDeliveryOption(deliveryOptionId);
      if (!deliveryOption) {
        return;
      }

      matchingItem.deliveryOptionId = deliveryOptionId;

      this.saveToStorage();
    }
  };

  return cart;
}

const cart = Cart('cart-oop');
const businessCart = Cart('cart-business');

cart.loadFromStorage();
businessCart.loadFromStorage();

console.log(cart);
console.log(businessCart);



