import { useState, type ReactNode } from "react"
import { CartContext } from "./CartContext";
import type { Product } from "../../types/Product";


type CartProviderProps = {
    children: ReactNode;
}

export const CartProvider = ({children}: CartProviderProps) => {

    const [cart, setCart] = useState<Product[]>([]);

    const exists = (id: string) => {
        const exist = cart.some(p => p.id === id);
        return exist;
    }

    const addItem = (item: Product) => {
        if(exists(item.id)){
            throw new Error("El producto ya existe en el carrito");
        }

        setCart([...cart, item]);
        alert(`${item.name} agregado`);
    }

    const clearCart = () => {
        setCart([]);
    }

    const getTotalItems = () => {
        if(cart.length){        
            return cart.length
        }
    }

    const values = {
        cart,
        addItem,
        clearCart,
        getTotalItems
    }

    return <CartContext.Provider value={values}>
        {children}
    </CartContext.Provider>
}