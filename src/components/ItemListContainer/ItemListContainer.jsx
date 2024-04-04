import { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'
import { useParams } from 'react-router-dom'
import Loader from '../Loader/Loader'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../firebase/config'
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
  
const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        const productosRef = collection(db, "productos")
        const q = categoryId 
                    ? query(productosRef, where("category", "==", categoryId))
                    : productosRef

        getDocs(q)
            .then((res) => {
                setProductos( res.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                }))
            })
            .finally(() => setLoading(false))
        
    }, [categoryId])

    return (
        
        <React.Fragment>
        <CssBaseline />
        <Container maxWidth="xl" sx={{ bgcolor: '#cfe8fc' }}>
        <Divider textAlign="left" className='divider' sx={{ fontWeight: 'bold'}}>{ categoryId ? `Indumentaria / ${categoryId.charAt(0).toUpperCase() + categoryId.slice(1)}` : 'Todos los productos'}</Divider>
        {loading
            ? <Loader />
            : <ItemList items={productos} />
        }
        </Container>
      </React.Fragment>

    )

}

export default ItemListContainer