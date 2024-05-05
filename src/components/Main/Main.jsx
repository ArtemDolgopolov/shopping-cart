import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import './Main.css'

export default function Main() {
 return (
  <>
    <Header />
    <main className='main'>
     <Outlet />
    </main>
    <Footer />
  </>
 )
}