import React from "react";
import ItemCount from "./ItemCount";

const ItemListContainer = ({greeting}) => {
    return (
        <div className="text-center pt-5">
            <h1>{greeting}</h1>
            <ItemCount
                stock={5}
                initial={1}
                onAdd={(n) => alert(`Se agregaron ${n} productos`)} />
        </div>
    )
}

export default ItemListContainer;