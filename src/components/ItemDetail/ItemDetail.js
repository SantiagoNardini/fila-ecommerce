import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import ItemCount from "../ItemCount/ItemCount"
import './ItemDetail.scss'

const ItemDetail = ({item}) => {
    const { agregarAlCarrito, isInCart } = useContext(CartContext)

    const [cantidad, setCantidad] = useState(1)

    const handleAgregar = () => {
        const newItem = {
            ...item,
            cantidad
        }

        agregarAlCarrito(newItem)
    }

    return (
        <div className='productCardDetail'>
            <h2>{item.name}</h2>
            <hr/>
            <img className='imgItem' src={item.img} alt={item.name}/>
            <p className="itemDescription">{item.description}</p>
            {item.stock <= 5 && <p><strong>Quedan sólo {item.stock} unidades!</strong></p>}
            <p className="precioCard">${item.price}</p>

            {
                isInCart(item.id)
                    ?   <Link to="/cart" className="btn btn-success">Terminar mi compra</Link>
                    :   <ItemCount 
                            stock={item.stock}
                            cantidad={cantidad}
                            setCantidad={setCantidad}
                            agregar={handleAgregar}
                        />
            }

        </div>
    )
}

export default ItemDetail