import React, { useEffect, useState} from 'react';
import getData from '../MockApi/index';
import ItemDetail from '../ItemDetail.js/ItemDetail';
import { useParams } from 'react-router-dom'



export const ItemDetailContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    
    let params = useParams();

    const product = products.filter((el) => el.id == params.id)

    // const [data, setData] = useState([]);
    // const [Loading, setLoading] = useState(true);
    // const [error, setError] = useState("");

    // useEffect(() => {
    //     fetch("https://fakestoreapi.com/products/" + params.id)
    //         .then((res) => res.json())
    //         .then((JSON) => {
    //             setLoading(false);
    //             setData(JSON);
    //         })
    //         .catch((error) => { setError("Ocurrio un error inesperado"); });
    // }, [params.id]);
    
    useEffect(() => {
        getData
            .then((product) => {setProducts(product);})
            .catch((error) => {console.log(error);})
            .finally(() => {setLoading(false);});
    }, [params.id]);

    console.log(product);
    console.log(products);
    return (
        <div className="text-center pt-5">
            {loading ? <h3 className="pt-5">Cargando...</h3> : products && product.map(({ id, title, price, description, image }) => (
                <ItemDetail key={id} id={id} title={title} price={price} description={description} image={image} />))}
        </div>
    )
}
export default ItemDetailContainer;
