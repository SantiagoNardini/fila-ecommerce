import Item from "../Item/Item"
import * as React from 'react';
import './ItemList.css'



const ItemList = ( {items} ) => {

    return (
        
      <div>


            <div className='row'>
                { items.map((producto) => <Item key={producto.id} item={producto}/>) }
            </div>
        </div>
  );
}

export default ItemList