import React from 'react';
import ItemCount from "./ItemCount";
import "./itemJs.css"

const item = ({ product }) => {
    const {title,price,image} = product;
    return (
                    <div className="col d-flex justify-content-center mb-4">
                        <div className="card shadow mb-1 bg-white rounded justify-content-between ">
                            <img className="imagen" alt="Imagenes" src={image} />
                            <h2>{title}</h2>
                            <p>${price}</p>
                            <ItemCount stock={5} initial={1} onAdd={(n) => alert(`Se agregaron ${n} productos`)} />
                        </div>
                    </div>
    );
};
export default item;
