import { useParams } from "react-router-dom"
import { useContext } from "react"
import { AppContext } from "../../context/context"
import './DetailedCard.css'

export default function DetailedCard() {
  const { id } = useParams();

  const { products, addToCart } = useContext(AppContext);

  const thisProduct = products.find(product => String(product.id) === id);

  return (
        <div key={thisProduct.id} className='product-details-card'>
          <img src={thisProduct.image} alt={thisProduct.title} className='product-details-image' />
          <div className='product-details-section'>
           <p className='product-details-title'>{thisProduct.title}</p>
          <p className='product-details-price'>$ {thisProduct.price}</p>
          <p className='product-details-description'>{thisProduct.description}</p>
          <button onClick={() => addToCart(thisProduct)} className='product-details-button'>Add to cart</button>
          </div>
        </div>
  );
}