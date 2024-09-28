import { useContext } from "react"
import { AppContext } from "../../context/context"
import './Pagination.css'

export default function Pagination() {
 const { page, handleNextPage, handlePrevPage, totalPages } = useContext(AppContext);

 return (
  <div className="pagination">
      <button className="prev" onClick={handlePrevPage} disabled={page === 1}>
        Prev
      </button>
      <span className="page">{page}</span>
      <button className="next" onClick={handleNextPage} disabled={page === totalPages}>
        Next
      </button>
    </div>
 )
}