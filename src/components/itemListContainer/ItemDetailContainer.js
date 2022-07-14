import React, { useEffect, useState} from 'react';
import getDetail from '../products/MockDetail';
import ItemDetail  from './ItemDetail';


export const ItemDetailContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getDetail
            .then((detail) => {
                setProducts(detail);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

return (
        <div className="text-center pt-5">
            {loading ? <h3 className="pt-5">Cargando...</h3> : <ItemDetail products={products} />}
        </div>
)
}

export default ItemDetailContainer;