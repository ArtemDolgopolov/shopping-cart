import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from "../../context/context"
import './Header.css'

export default function Header() {
 const {
  cartItems,
  isOpen,
  handleBurgerMenu
} = useContext(AppContext);

 return (
  <header className='header-wrapper'>
   <div className='header-logo-wrapper'>
    <Link to='/' className='header-logo'>
     All that shop 
    </Link>
   </div>
   <div className={`header-nav-wrapper ${isOpen ? 'active' : ''}`}>
    <div className='header-nav-list'>
     <button className='header-menu-close' onClick={handleBurgerMenu}>
      <FaTimes />
     </button>
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
   <button className='header-menu-button' onClick={handleBurgerMenu}>
    <FaBars />
   </button>
  </header>
 )
}