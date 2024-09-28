import { Link } from 'react-router-dom'
import './Welcome.css'

export default function Welcome() {
 return (
   <>
   <div className='welcome-wrapper'>
     <p className='welcome-title'>
       Welcome to All That Shop, where the spectrum of shopping meets your every need! 
       Step into a world where fashion intertwines seamlessly with technology, and style meets innovation.
       From trendy apparel to cutting-edge gadgets, we've curated a diverse collection that caters to your every whim and fancy.
       Explore the latest in fashion trends, dive into the realm of state-of-the-art electronics, and discover a universe of possibilities,
       all under one roof.
       Embrace the essence of versatility and convenience as you embark on a journey through our eclectic aisles. 
       At All That Shop, the boundaries of shopping are limitless, and every desire finds its perfect match. 
       Come, experience the epitome of retail therapy like never before!
     </p>
     <img 
       className='welcome-image' 
       src='https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg' 
       alt='all-that' />
   </div>
   <div className='welcome-button-wrapper'>
    <Link className='welcome-shopping-button' to='/shopping'>Start your journey</Link>
   </div>
   
   </>  
 )
}