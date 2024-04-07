import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'

export default function Main() {
 return (
  <>
    <Header />
    <main>
     <Outlet />
    </main>
  </>
 )
}