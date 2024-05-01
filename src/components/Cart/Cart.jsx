import { useContext } from "react"
import { AppContext } from "../../context/context"
import './Cart.css'

export default function Cart() {
 const {
   cartItems, 
   addToCart, 
   removeFromCart, 
   clearCart, 
   getCartTotal 
 } = useContext(AppContext);

 return (
  <div className='cart'>
   <h1 className='cart-header'>Cart</h1>
   {cartItems.map((item) => (
     <div className='cart-product' key={item.id}>
      <img className='cart-image' src={item.image} alt={item.title} />
      <p className='cart-title'>{item.title}</p>
      <p className='cart-price'>$ {item.price}</p>
      <div className='quantity-controller-wrapper'>
       <button
            onClick={() => {
              addToCart(item)
            }}
            className='cart-increase-button'
          >
            +
          </button>
          <p className='cart-quantity'>{item.quantity}</p>
          <button
            onClick={() => {
              removeFromCart(item)
            }}
            className='cart-reduce-button'
          >
            -
          </button>
      </div> 
     </div>
    ))}
    {
    cartItems.length > 0 ? (
      <div>
    <h1 className='cart-total-price'>Total: ${getCartTotal()}</h1>
    <button
      onClick={() => {
        clearCart()
      }}
      className='cart-clear-button'
    >
      Clear cart
    </button>
  </div>
    ) : (
      <h1 className='cart-empty-message'>Your cart is empty</h1>
    )
  }
  </div>
 )  
}