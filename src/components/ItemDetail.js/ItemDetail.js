import React from 'react';
import "../Item.js/itemJs.css";

const ItemDetail = ({ products }) => {
    const { title, description, price, image } = products;
return (
    <div>
        <h2>{title}</h2>
        <img alt="Producto" src={image}/>
        <p>{description}</p>
        <h3>${price}</h3>
    </div>
)
}

export default ItemDetail;