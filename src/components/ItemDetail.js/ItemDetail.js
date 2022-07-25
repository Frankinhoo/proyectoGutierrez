import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import "../Item.js/itemJs.css";
import ItemCount from "../ItemCount.js/ItemCount";
import {CartContext} from '../CartContext.js/CartContext'

const ItemDetail = ({ title, description, price, image}) => {
    const CartContextvalue = useContext(CartContext);
    
    const [cart, addItem] = CartContext;

    const onAdd = (quantity) => {
        addItem(item)
    }

    // const [cart, setCart] = useState([]);
    
    return (
        <div>
            <h2>{title}</h2>
            <img alt="Producto" src={image} />
            <p>{description}</p>
            <h3>${price}</h3>
            {cart ? setCart && <ItemCount stock={5} initial={1} onAdd={(n) => { alert(`Se agregaron ${n} productos`); setCart(false) }} /> : <Link to='/Carrito'> Ir al Carrito </Link>}
        </div>
    )
}

export default ItemDetail;