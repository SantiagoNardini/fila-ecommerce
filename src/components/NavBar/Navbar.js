import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
export const Navbar = () => {

return (
    <header className="header" >
        <div className="header_container">
            <img src="./imgs/logo.png" className="header_logo" alt="Logo"/>

            <nav className="navbar">
                <p className="navbar_link">Enlace 1</p>
                <p className="navbar_link">Enlace 2</p>
                <p className="navbar_link">Enlace 3</p>
            </nav>
            <CartWidget/>
        </div>
    </header>
)


}