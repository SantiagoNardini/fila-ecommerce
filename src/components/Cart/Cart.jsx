import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { BsFillTrash3Fill } from "react-icons/bs";
import { Link } from "react-router-dom";
import './Cart.scss'

const Cart = () => {
  const { cart, vaciarCarrito, removerItem, totalCarrito } = useContext(CartContext);

  if (cart.length === 0){
      return (
        <div className="container my-5">
          <h2>No tienes productos agregados</h2>
          <h5>Una vez que añadas algo a tu carrito, aparecerá acá. ¿Listo para empezar?</h5>
          <hr />
          <Link className="btn btn-primary" to="/">Empezar a comprar</Link>
        </div>
      )
  }

  return (
    <div className="container my-5">
          <h2>Tu compra</h2>
          <hr />

          {cart.map((item) => (
            <div className="productCart" key={item.id}>
              <h4>{item.name}</h4>
              <img className='imgCart' src={item.img} />
              <div>
                  <p className="categoriaCart">Cantidad: {item.cantidad} </p>
                  <p className="categoriaCart">Precio unitario: ${item.price}</p>
              </div>
              <p className="precioCart">Total: ${item.price * item.cantidad}</p>
              <button onClick={() => removerItem(item.id)} className="btn btn-danger"><BsFillTrash3Fill /> </button>
            </div>
          ))
          }
          
          <h3>Total: ${totalCarrito()}</h3>
          <button onClick={vaciarCarrito} className="btn btn-danger m-2">Vaciar carrito</button>
          <Link to="/checkout" className="btn btn-success m-2">Finalizar compra</Link>
    </div>
  );
};

export default Cart;
