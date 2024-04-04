import './Navbar.scss'
import logo from '../../assets/imgs/FilaLogo.png'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { LoginContext } from '../../context/LoginContext'

export const Navbar = () => {
    const { user, logout } = useContext(LoginContext)

    return (
        <header className="header">
            <div className="header__container">
                <img src={logo} className="header__logo" alt='logo'/>

                <nav className="navbar">
                <Link to='/' className="navbar__link">Inicio</Link>
                    <Link to='/productos/remeras' className="navbar__link">Remeras</Link>
                    <Link to='/productos/buzos' className="navbar__link">Buzos</Link>
                    <Link to='/productos/pantalones' className="navbar__link">Pantalones</Link>
                    <Link to='/productos/calzado' className="navbar__link">Calzado</Link>
                </nav>

                <CartWidget />
            </div>

            <div className='user'>
                <h6>Bienvenido: {user.email}</h6>
                <button className='btn btn-danger' onClick={logout}>Logout</button>
            </div>
        </header>
    )
}