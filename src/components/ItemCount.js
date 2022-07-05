import {useState} from "react";

const ItemCount = (stock, initial, onAdd) => {
    const [count, setCount] = useState(initial);
    const decrementar = () => {
        setCount((valAnt) => (valAnt >0 ? count - 1 : count));
    };
    const incrementar = () => {
        setCount(count + 1);
    };


    return (
        <div>
            <h3>Zapatilla</h3>
            <p>{count}</p>
            <button onClick={decrementar}>-</button>
            <button onClick={incrementar}>+</button>
            <button onClick={() => {
                if (count <= stock) {
                    onAdd(count);
                }
                
            } }>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount;