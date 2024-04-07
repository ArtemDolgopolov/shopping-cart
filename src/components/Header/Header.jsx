import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Header() {
 return (
  <div className='header'>
   <div className='header-logo-wrapper'>
    <h1>Online Shop</h1>
   </div>
   <div className='header-nav-wrapper'>
    <button>
     <Link to='/cart'>
      <FaShoppingCart />
     </Link>
    </button>
    <button>
     <Link to='/shopping'>Go shopping</Link>
    </button> 
   </div>
  </div>
 )
}