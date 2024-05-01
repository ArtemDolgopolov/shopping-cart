import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from "../../context/context"
import './Header.css'

export default function Header() {
 const {
  cartItems
} = useContext(AppContext);

 return (
  <div className='header-wrapper'>
   <div className='header-logo-wrapper'>
    <Link to='/' className='header-logo'>
     All that shop 
    </Link>
   </div>
   <div className='header-nav-wrapper'>
    <button className='cart-button'>
     <Link to='/cart' className='cart-link'>
      <FaShoppingCart className='cart-icon' />
      <span className='cart-counter'>{cartItems.reduce((total, item) => total + item.quantity, 0)}</span>
     </Link>
    </button>
    <button className='shopping-button'>
     <Link to='/shopping' className='shopping-link'>Go shopping</Link>
    </button> 
   </div>
  </div>
 )
}