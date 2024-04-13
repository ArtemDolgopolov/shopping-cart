import { useEffect, useState } from "react"
import Pagination from "../Pagination/Pagination";
import Products from "../Products/Products";
import './ShoppingPage.css'

export default function ShoppingPage() {
 const [products, setProducts] = useState([]);
 const [loading, setLoading] = useState(true);
 const [productsPerPage] = useState(5);
 const [page, setPage] = useState(1);

 const getApiProducts = async () => {
  const productData = await fetch('https://fakestoreapi.com/products')
  .then((res) => res.json());

   setProducts(productData);
   console.log(productData);
 }

 const lastPage = page * productsPerPage;
 const firstPage = lastPage - productsPerPage;
 const currentsProducts = products.slice(firstPage, lastPage);

 const handlePagination = (pageNumber) => {
  setPage(pageNumber);
 }

 useEffect(() => {
  getApiProducts();
  const stopLoading = setTimeout(() => setLoading(false), 3000);
  return (() => clearTimeout(stopLoading));
 }, [])

 return (
  <>
  <div>
   <Products products={currentsProducts} loading={loading} />
   {!loading && (
    <Pagination 
     productsLength={products.length} 
     productsPerPage={productsPerPage} 
     handlePagination={handlePagination}
     page={page}
    />
   )}
   </div>
   </>
 )  
}