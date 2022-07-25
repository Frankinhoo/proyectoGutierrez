import { createContext, useState } from 'react';

export const CartContext = createContext({});

export const CartProvider = ({ children, defaultValue }) => {

    const [cart, setCart] = useState([])
    

    const addItem = (item, quantity) => {
        
        if (cart.some(el => el.id == item.id)) {
            let index = cart.findIndex(el => el.id == item.id);
            let product = cart[index];
            product.quantity = product.quantity + quantity;

            const newCart = [...cart];
            newCart.splice(index, 1, product);

            setCart([...newCart]);
            
        } else {
            let product = { ...item, quantity };
            setCart([...cart, product]);
        }
    }

    const deleteCartById = (id) => {
        let index = newCart.findIndex(el => el.id == id);
        const newCart = [...cart];
        newCart.splice(index, 1);
        setCart([...newCart]);
    }

    const deleteCart = () => {
        setCart([]);
    }

    return <CartContext.Provider value={[cart, setCart, addItem, deleteCart, deleteCartById]}>
        {children}
    </CartContext.Provider>
}

