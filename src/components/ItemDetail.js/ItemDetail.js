import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../Item.js/itemJs.css";
import ItemCount from "../ItemCount.js/ItemCount";

const ItemDetail = ({ title, description, price, image }) => {

    const [cart, setCart] = useState(true);
    
return (
    <div>
        <h2>{title}</h2>
        <img alt="Producto" src={image}/>
        <p>{description}</p>
        <h3>${price}</h3>
        {cart ? setCart && <ItemCount stock={5} initial={1} onAdd={(n) => { alert(`Se agregaron ${n} productos`); setCart(false) }} /> : <Link to='/Carrito'> Ir al Carrito </Link>}
    </div>
)
}

export default ItemDetail;