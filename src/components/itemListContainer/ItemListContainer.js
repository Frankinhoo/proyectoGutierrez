import React, { useEffect, useState } from "react";
import ItemList from "./itemList";
import getData from "../products/index";
import ItemDetailContainer from "./ItemDetailContainer";

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
            <ItemDetailContainer products={products} />
        </div>
    )
}

export default ItemListContainer;