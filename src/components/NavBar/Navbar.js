import './Navbar.scss'
import FilaLogo from '../../assets/imgs/FilaLogo.png'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

export const Navbar = () => {

    return (
        <header className="header">
            <div className="header__container">
                <img src={FilaLogo} className="header__logo" alt='logo'/>

                <nav className="navbar">
                    <Link to='/' className="navbar__link">Inicio</Link>
                    <Link to='/productos/remeras' className="navbar__link">Remeras</Link>
                    <Link to='/productos/buzos' className="navbar__link">Buzos</Link>
                    <Link to='/productos/pantalones' className="navbar__link">Pantalones</Link>
                    <Link to='/productos/calzado' className="navbar__link">Calzado</Link>
                    <Link to='/nosotros' className="navbar__link">Nosotros</Link>
                </nav>

                <CartWidget />
            </div>
        </header>
    )
}