import React from 'react';
import { Link } from 'react-router-dom';
// import ItemCount from "../ItemCount.js/ItemCount";
import "./itemJs.css"

const item = ({ product }) => {
    const {id, title,price,image} = product;
    return (
                    <div className="col d-flex justify-content-center mb-4">
                        <div className="card shadow mb-1 bg-white rounded">
                            <img className="imagen" alt="Imagenes" src={image} />
                            <div className="card-body">
                                <h4 className="card-title pt-2 text-dark ">{title}</h4>
                                <h5><p className="card-text pt-2">${price}</p></h5>
                                {/* <ItemCount stock={5} initial={1} onAdd={(n) => alert(`Se agregaron ${n} productos`)} /> */}
                                <button className="btn btn-dark button">Agregar al carrito </button>
                            </div>
                                <p><Link to={"/producto/" + id}>Ver detalle</Link></p>
                        </div>
                    </div>
    );
};
export default item;
