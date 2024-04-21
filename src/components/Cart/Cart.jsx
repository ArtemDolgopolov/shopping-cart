import { useContext } from "react"
import { AppContext } from "../../context/context";

export default function Cart() {
 const {
   cartItems, 
   addToCart, 
   removeFromCart, 
   clearCart, 
   getCartTotal 
 } = useContext(AppContext);

 return (
  <div>
   <h1>Cart</h1>
   {cartItems.map((item) => (
     <div key={item.id}>
      <img src={item.image} alt={item.title} />
      <p>{item.title}</p>
      <p>$ {item.price}</p>
      <button
            onClick={() => {
              addToCart(item)
            }}
          >
            +
          </button>
          <p>{item.quantity}</p>
          <button
            onClick={() => {
              removeFromCart(item)
            }}
          >
            -
          </button>
     </div>
    ))}
    {
    cartItems.length > 0 ? (
      <div>
    <h1>Total: ${getCartTotal()}</h1>
    <button
      onClick={() => {
        clearCart()
      }}
    >
      Clear cart
    </button>
  </div>
    ) : (
      <h1>Your cart is empty</h1>
    )
  }
  </div>
 )  
}