import * as React from 'react';
import Button from '@mui/material/Button';

const ItemCount = ({stock, cantidad, setCantidad, agregar}) => {

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const handleSumar = () => {
        cantidad < stock && setCantidad(cantidad + 1)
    }

    return (
        <div>
            <button 
                onClick={handleRestar} 
                className={`btn
                ${cantidad === 1 ? 'minimo' : ''}
                ${cantidad === 1 ? 'bts-outline-danger' : 'btn-outline-primary'}`}
                disabled={cantidad === 1 || stock === 0}
            >
                -
            </button>

            <span className="mx-3">{cantidad}</span>

            <button 
                onClick={handleSumar} 
                className={cantidad === stock ? "btn btn-outline-danger" : "btn btn-outline-primary"}
                disabled={cantidad === stock || stock === 0}
            >
                +
            </button>

            <br/>

            <Button variant="contained" disabled={stock === 0} onClick={agregar} sx={{mt: 2}} >Agregar al carrito</Button>
        </div>
    )
}

export default ItemCount