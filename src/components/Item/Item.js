import { Link } from "react-router-dom"
import './Item.scss'


const Item = ( {item} ) => {

    return (
        <div className='productCard'>
            <h2>{item.name}</h2>
            <img className='imgItem' src={item.img}/>
            <p className="precioCard">${item.price}</p>
            <p className="categoriaCard">Categoría: {item.category}</p>
            <Link to={`/detail/${item.id}`} className='btn btn-primary'>Ver más</Link>
        </div>
    )
}

export default Item