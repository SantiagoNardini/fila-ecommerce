import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import './CartWidget.scss'
import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Tooltip from '@mui/material/Tooltip';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));
  
  export default function CartWidget() {
      const {totalCantidad} = useContext(CartContext)
    return (
      <Link to="/cart">
        <Tooltip title="Cart" arrow sx={{ color: '#002964' }}>
          <IconButton aria-label="cart">
            <StyledBadge badgeContent={totalCantidad()}>
              <ShoppingCartIcon />
            </StyledBadge>
          </IconButton>
        </Tooltip>
      </Link>
      
    );
  }