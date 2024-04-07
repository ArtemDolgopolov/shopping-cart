import Main from './components/Main/Main'
import ShoppingPage from './components/ShoppingPage/ShoppingPage'
import Cart from './components/Cart/Cart'
import Welcome from './components/Welcome/Welcome'
import './App.css'

import {
 createBrowserRouter,
 createRoutesFromElements,
 Route,
 RouterProvider
} from 'react-router-dom'

const router = createBrowserRouter(
 createRoutesFromElements(
   <Route element={<Main />} path="/" errorElement={<h1>404</h1>}>
     <Route index element={<Welcome />} path="/" />
     <Route index element={<ShoppingPage />} path="/shopping" />
     <Route element={<Cart />} path="/cart" />
   </Route>
 )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
