import { useEffect, useState } from "react"

export default function Products({ products, loading }) {
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
     </div>
    )))}
  </div>
 )  
}