import { useParams } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../context/context";

export default function DetailedCard() {
  const { id } = useParams();

  const { products, addToCart } = useContext(AppContext);

  const thisProduct = products.find(product => String(product.id) === id);

  return (
    <div>
        <div key={thisProduct.id}>
          <img src={thisProduct.image} alt={thisProduct.title} />
          <p>{thisProduct.title}</p>
          <p>$ {thisProduct.price}</p>
          <p>{thisProduct.description}</p>
          <button onClick={() => addToCart(thisProduct)}>Add to cart</button>
        </div>
    </div>
  );
}