import { useContext } from "react"
import { Link } from 'react-router-dom'
import { AppContext } from "../../context/context"
import './Products.css'

export default function Products() {
 const { addToCart, loading, products } = useContext(AppContext);
 
 return (
  <div className='products'>
   {loading ? (
    <p>Loading...</p>
   ) : (
    products.map((product) => (
     <div key={product.id} className='product-card'>
      <Link to={`/shopping/${product.id}`}>
       <img src={product.image} alt={product.title} />
       <p>{product.title}</p>
       <p className='product-price'>$ {product.price}</p>
      </Link>
      <button onClick={() => addToCart(product)}>Add to cart</button> 
     </div>
    )))}
  </div>
 )  
}