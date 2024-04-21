import { useContext } from "react"
import { Link } from 'react-router-dom'
import { AppContext } from "../../context/context"

export default function Products() {
 const { addToCart, loading, products } = useContext(AppContext);
 
 return (
  <div>
   {loading ? (
    <p>Loading...</p>
   ) : (
    products.map((product) => (
     <div key={product.id}>
      <Link to={`/shopping/${product.id}`}>
       <img src={product.image} alt={product.title} />
       <p>{product.title}</p>
       <p>$ {product.price}</p>
      </Link>
      <button onClick={() => addToCart(product)}>Add to cart</button> 
     </div>
    )))}
  </div>
 )  
}