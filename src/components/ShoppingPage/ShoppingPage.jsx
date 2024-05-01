import { useContext } from "react";
import Pagination from "../Pagination/Pagination";
import Products from "../Products/Products";
import { AppContext } from "../../context/context";
import "./ShoppingPage.css";

export default function ShoppingPage() {
  const { loading } = useContext(AppContext);

  if (loading) {
    return <div className='loader'>Loading...</div>;
  }

  return (
    <>
        <Products />
        {!loading && <Pagination />}
    </>
  );
}