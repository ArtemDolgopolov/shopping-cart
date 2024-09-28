import { useContext } from "react"
import Pagination from "../Pagination/Pagination"
import Products from "../Products/Products"
import { AppContext } from "../../context/context"
import { FaSearch } from 'react-icons/fa'
import "./ShoppingPage.css"

export default function ShoppingPage() {
  const { loading, 
          setSearchQuery, 
          handleSearch, 
          searchQueryTemp, 
          handleSearchInputChange 
         } = useContext(AppContext);

  if (loading) {
    return <div className='loader'>Loading...</div>;
  }

  return (
    <>
        <div className='search-wrapper'>
         <input
          className='search-input'
          type='text'
          placeholder='Search products...'
          value={searchQueryTemp}
          onChange={handleSearchInputChange}
         />
        <button className='search-button' onClick={handleSearch}>
         <FaSearch />
        </button>
        <button onClick={() => setSearchQuery("")}>
         Clear Search
        </button>
        </div>  
        <Products />
        {!loading && <Pagination />}
    </>
  );
}