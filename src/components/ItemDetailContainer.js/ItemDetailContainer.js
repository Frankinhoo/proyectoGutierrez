import React, { useEffect, useState} from 'react';
import getData from '../MockApi/index';
import ItemDetail from '../ItemDetail.js/ItemDetail';
import { useParams } from 'react-router-dom'


export const ItemDetailContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    
    let params = useParams();
    
    const product = products.filter((el) => el.id == params.id)
    
    useEffect(() => {
        getData
            .then((data) => {
                setProducts(data);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [params.id]);

    console.log(product);
    return (
        <div className="text-center pt-5">
            {loading ? <h3 className="pt-5">Cargando...</h3> : products && <ItemDetail products={products} />}
        </div>
    )
}
export default ItemDetailContainer;