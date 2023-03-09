import './ItemListContainer.css'
import { Button } from 'react-bootstrap';

const ItemListContainer = ({greeting}) => {

    return (
        <div className="container my-5">
            <h2 className="list_container_title">ItemListContainer</h2>
            <hr/>

            <p>{greeting}</p>

        <Button>Click Me</Button>
        </div>
    )
}

export default ItemListContainer;