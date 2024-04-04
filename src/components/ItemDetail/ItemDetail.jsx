import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import ItemCount from "../ItemCount/ItemCount"
import './ItemDetail.scss'
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

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

        <div className='productCard'>
            <img className='imgItem' src={item.img} alt={item.name}/>
            <div className="productCardDetail">
            <h2>{item.name}</h2>
            {
            item.stock >= 5 && <p><strong>Quedan {item.stock} unidades!</strong></p>
            }
            {
            item.stock === 0 && 
            <Stack direction="row" spacing={2}>
            <Button variant="outlined" color="error">
              No hay stock
            </Button>
            </Stack>
            }
            <p className="precioCard">${item.price}</p>
            <hr/>
            <p className="itemDescription">{item.description}</p>
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
        </div>
    )
}

export default ItemDetail