import { useCallback, useContext, useMemo, useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import ItemCount from "../ItemCount/ItemCount"
import Memo from "./Memo"


const ItemDetail = ({item}) => {
    const { agregarAlCarrito, isInCart} = useContext(CartContext)

    const [cantidad, setCantidad] = useState(1)
    // const [talle, setTalle] = useState(talles[0].value)

    const handleAgregar = () => {
        const newItem = {
            ...item,
            cantidad
        }

        agregarAlCarrito(newItem)
    }

    const fechaMontaje = useMemo(() => {
        return new Date()
    }, [cantidad])

    return (
        <div>
            <h2>{item.name}</h2>
            <hr/>
            <img src={item.img} alt={item.name}/>
            <p>{item.description}</p>
            {item.stock <= 5 && <p><strong>Quedan solo {item.stock} unidades!</strong></p> }
            <p>Precio: ${item.price}</p>
            <p>Fecha de montaje: {fechaMontaje.toLocaleString()}</p>
            <Memo/>

            {
                   isInCart(item.id)
                    ? <Link to="/cart" classname="btn btn-success"> Terminar mi compra</Link>
                    : <ItemCount 
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