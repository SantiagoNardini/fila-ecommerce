import { useContext } from 'react'
import { FaCartPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import './CartWidget.scss'

const CartWidget = () => {
    const { totalCantidad, cart } = useContext(CartContext)

    return (
        <Link to="/cart" className={`cart-widget ${cart.length > 0 ? 'cart-widget-active' : ''}`}>
            <FaCartPlus className='cart-icon'/>
            <span>{totalCantidad()}</span>
        </Link>
    )
}

export default CartWidget