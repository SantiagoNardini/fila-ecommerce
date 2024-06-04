import { Link } from "react-router-dom"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './Item.scss'

export default function Item({item}) {
    return (
      <Card sx={{ maxWidth: 362, margin: 1, padding: 0, borderRadius: 2}}>
        <CardActionArea component={Link} to={`/detail/${item.id}`}>
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
            <div>{item.category.charAt(0).toUpperCase() + item.category.slice(1)}</div>
            <div className="price">${item.price}</div>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
