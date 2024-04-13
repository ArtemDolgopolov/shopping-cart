import './Pagination.css'

export default function Pagination({ 
 productsLength,
 productsPerPage,
 handlePagination,
 page 
}) {
 let paginationNumber = [];

 for (let i = 1; i <= Math.ceil(productsLength / productsPerPage); i++) {
  paginationNumber.push(i);
 }

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