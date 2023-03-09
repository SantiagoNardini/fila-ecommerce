import { FaCartArrowDown } from "react-icons/fa";
import './CartWidget.css';

const CartWidget = () => {

    return (
        <div className="cart-widget">
            <FaCartArrowDown className="cart-icon"/>
            <span>0</span>
        </div>
    )
}

export default CartWidget;