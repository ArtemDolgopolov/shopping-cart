import { useContext } from "react"
import { AppContext } from "../../context/context"
import './Pagination.css'

export default function Pagination() {
 const { page, paginationNumber, handlePagination } = useContext(AppContext);

 return (
  <div className='pagination'>
   {paginationNumber.map((number) => (
    <button 
      key={number} 
      onClick={() => handlePagination(number)}
      className={page === number ? 'active' : ''}
    >
      {number}
    </button>
   ))}
  </div>
 )
}