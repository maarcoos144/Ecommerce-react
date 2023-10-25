import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../itemList/ItemList';

import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig';

const ItemListContainer = () => {
const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(true);
const { categoryId } = useParams();

useEffect(() => {
    setLoading(true);

    // Consulta la colección 'items' en lugar de 'products'
    const collectionRef = categoryId
        ? query(collection(db, 'items'), where('category', '==', categoryId))
        : collection(db, 'items');

    getDocs(collectionRef)
        .then(response => {
        const productsAdapted = response.docs.map(doc => {
            const data = doc.data();
            return { id: doc.id, ...data };
        });
        setProducts(productsAdapted);
        console.log('Productos obtenidos:', productsAdapted);
        })
        .catch(error => {
        console.error('Error al obtener productos:', error);
        })
        .finally(() => {
        setLoading(false);
        });
    }, [categoryId]);

    return (
    <div>
        <h1>Lista de productos</h1>
        {loading ? <p>Cargando productos...</p> : <ItemList products={products} />}
    </div>
    );
};

export default ItemListContainer;
