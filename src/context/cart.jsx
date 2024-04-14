import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
 const [cartItems, setCartItems] = useState(localStorage.getItem('cartItems') 
  ? JSON.parse(localStorage.getItem('cartItems')) : []);
  
 function addToCart(item) {
  const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

  if (isItemInCart) {
   setCartItems(
    cartItems.map((cartItem) => 
    cartItem.id === item.id 
     ? {...cartItem, quantity: cartItem.quantity + 1}
     : cartItem
     )
   );
  } else {
   setCartItems([...cartItems, { ...item, quantity: 1 }])
  }
 }
 
 function removeFromCart(item) {
  const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);
  
  if (isItemInCart.quantity === 1) {
   setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id))
  } else {
   setCartItems(
    cartItems.map((cartItem) => 
     cartItem.id === item.id 
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
    )
   );
  }
 }

 function clearCart() {
  setCartItems([]);
 }

 function getCartTotal() {
  return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
 }

 useEffect(() => {
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
 }, [cartItems]);

 useEffect(() => {
  const cartItems = localStorage.getItem('cartItems');
  if (cartItems) setCartItems(JSON.parse(cartItems));
 }, []);

 return (
  <CartContext.Provider
   value={{
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    getCartTotal
   }}
  >
   {children}
  </CartContext.Provider>
 )
}