import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from "../../context/cart"

export default function Header() {
 const {
  cartItems
} = useContext(CartContext);

 return (
  <div className='header'>
   <div className='header-logo-wrapper'>
    <h1>Online Shop</h1>
   </div>
   <div className='header-nav-wrapper'>
    <button>
     <Link to='/cart'>
      <FaShoppingCart />
      <span>{cartItems.reduce((total, item) => total + item.quantity, 0)}</span>
     </Link>
    </button>
    <button>
     <Link to='/shopping'>Go shopping</Link>
    </button> 
   </div>
  </div>
 )
}