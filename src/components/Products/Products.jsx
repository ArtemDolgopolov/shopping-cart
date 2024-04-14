import { useContext, useEffect, useState } from "react"
import { CartContext } from "../../context/cart"

export default function Products({ products, loading }) {
 const { addToCart } = useContext(CartContext);
 
 return (
  <div>
   {loading ? (
    <p>Loading...</p>
   ) : (
    products.map((product) => (
     <div key={product.id}>
      <img src={product.image} alt={product.title} />
      <p>{product.title}</p>
      <p>$ {product.price}</p>
      <button onClick={() => addToCart(product)}>Add to cart</button>
     </div>
    )))}
  </div>
 )  
}