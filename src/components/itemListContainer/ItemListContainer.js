import React, { useEffect, useState } from "react";
import ItemList from "../ItemList.js/itemList";
import getData from "../MockApi/index";
const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

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
    }, []);

    return (
        <div className="text-center pt-5">
            <h1>{greeting}</h1>
            
            {loading ? <h3 className="pt-5">Cargando...</h3> : <ItemList items={products} />}
        </div>
    )
}

export default ItemListContainer;