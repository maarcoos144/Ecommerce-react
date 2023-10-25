import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const { itemId } = useParams();

    useEffect(() => {
        setLoading(true);

        const docRef = doc(db, 'items', itemId);

        getDoc(docRef)
            .then(response => {
                const data = response.data();
                const productAdapted = { id: response.id, ...data };
                setProduct(productAdapted);
                setLoading(false); // Marcar la carga como completa
                console.log('Producto obtenido:', productAdapted); // Depuración
            })
            .catch(error => {
                console.error('Error al obtener el producto:', error);
                setLoading(false); // Marcar la carga como completa incluso en caso de error
            });
    }, [itemId]);

    return (
        <div className='ItemDetailContainer'>
            {loading ? (
                <p>Cargando producto...</p>
            ) : (
                product ? (
                    <ItemDetail {...product} />
                ) : (
                    <p>Producto no encontrado</p>
                )
            )}
        </div>
    );
}

export default ItemDetailContainer;
