import { Link } from "react-router-dom"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';
import './Item.scss'
import LocalAtmIcon from '@mui/icons-material/LocalAtm';


// const Item = ( {item} ) => {

//     return (
//         <div className='productCard'>
//             <h2>{item.name}</h2>
//             <img className='imgItem' src={item.img}/>
//             <p className="precioCard">${item.price}</p>
//             <p className="categoriaCard">Categoría: {item.category}</p>
//             <Link to={`/detail/${item.id}`} className='btn btn-primary'>Ver más</Link>
//         </div>
//     )
// }

export default function Item({item}) {
    return (
      <Card sx={{ maxWidth: 362, margin: 1, boxShadow: 2 }}>
        <CardActionArea component={Link} to={`/detail/${item.id}`}>
          <CardMedia
            component="img"
            height="300"
            image={item.img}
            alt={item.name}
          />
          <CardContent>
            <Typography gutterBottom variant="body1" component="div" sx={{fontSize: 18}}>
            {item.name}
            </Typography>
            <Button variant="contained" startIcon={<LocalAtmIcon />} sx={{fontSize: 16, backgroundColor: 'black'}}>${item.price}</Button>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
