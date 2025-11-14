import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
}

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]); //Array de productos en el carrito global

    const addToCart = (product) => {
        // Verificar si el producto ya está en el carrito
        const existingCartItem = cart.find((cartItem) => cartItem.product._id === product._id);
        
        if (existingCartItem) {
            // Check if adding one more exceeds stock
            if (existingCartItem.quantity < product.stock) {
                const updatedCart = cart.map((cartItem) => {
                    if (cartItem.product._id === product._id) {
                        return { ...cartItem, quantity: cartItem.quantity + 1 };
                    }
                    return cartItem;
                });
                setCart(updatedCart);
            }
        } else {
            if (product.stock > 0) {
                setCart([...cart, { product, quantity: 1 }]);
            }
        }
    }
    const removeFromCart = (item) => {
        const updatedCart = cart.filter((cartItem) => cartItem.product._id !== item.product._id);
        setCart(updatedCart);
    }
    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
}