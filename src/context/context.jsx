import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export function AppProvider({ children }) {
 const [cartItems, setCartItems] = useState(localStorage.getItem('cartItems') 
  ? JSON.parse(localStorage.getItem('cartItems')) : []);
 const [products, setProducts] = useState([]);
 const [loading, setLoading] = useState(true);
 const [productsPerPage] = useState(3);
 const [page, setPage] = useState(1);

 const lastPage = page * productsPerPage;
 const firstPage = lastPage - productsPerPage;
 const currentsProducts = products.slice(firstPage, lastPage);
 const totalPages = Math.ceil(products.length / productsPerPage);

 const handlePrevPage = () => {
  if (page > 1) setPage(page - 1);
 }

 const handleNextPage = () => {
  if (lastPage < products.length) setPage(page + 1);
 }

 const getApiProducts = async () => {
  const productData = await fetch('https://fakestoreapi.com/products')
  .then((res) => res.json());

   setProducts(productData);
 }

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
  return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
 }

 useEffect(() => {
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
 }, [cartItems]);

 useEffect(() => {
  const cartItems = localStorage.getItem('cartItems');
  if (cartItems) setCartItems(JSON.parse(cartItems));
 }, []);

 useEffect(() => {
  getApiProducts();
  const stopLoading = setTimeout(() => setLoading(false), 3000);
  return (() => clearTimeout(stopLoading));
 }, [])

 return (
  <AppContext.Provider
   value={{
    products: products.slice(firstPage, lastPage),
    loading,
    getApiProducts,
    productsPerPage,
    page,
    firstPage,
    lastPage,
    handleNextPage,
    handlePrevPage,
    currentsProducts,
    totalPages,
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    getCartTotal
   }}
  >
   {children}
  </AppContext.Provider>
 )
}