import { Link } from "react-router-dom"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './Item.scss'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { blue } from '@mui/material/colors';

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(blue[900]),
  backgroundColor: blue[900],
  borderRadius: 20,
  '&:hover': {
    backgroundColor: blue[800],
    color: theme.palette.getContrastText(blue[800]),
  },
}));

export default function Item({item}) {
    return (
      <Card sx={{ maxWidth: 362, margin: 1, padding: 0, borderRadius: 5}}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="350"
            image={item.img}
            alt={item.name}
          />
          <CardContent>
            <Typography gutterBottom variant="body1" component="div" sx={{fontSize: 15, fontWeight: 'bold'}}>
            {item.name}
            </Typography>
            <div className="price">${item.price}</div>
            <ColorButton size="small" variant="contained" component={Link} to={`/detail/${item.id}`}>Ver más</ColorButton>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
