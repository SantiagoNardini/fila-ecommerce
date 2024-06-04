import './Navbar.scss'
import logo from '../../assets/imgs/FilaLogo.png'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { LoginContext } from '../../context/LoginContext'
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';


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
                <div className='user'>
                <Stack direction="row" spacing={1}>
                    <Tooltip title={user.email} arrow>
                        <Avatar sx={{ color: '#002964' }} ><PersonIcon/></Avatar>
                    </Tooltip>
                        <Avatar onClick={logout} sx={{ color: '#002964' }}><LogoutIcon/></Avatar>
                        <Avatar><CartWidget/></Avatar>
                </Stack>
                </div>
                </nav>

            </div>

        </header>
    )
}