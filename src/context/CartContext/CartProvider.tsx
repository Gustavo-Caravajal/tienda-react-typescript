import { useState, type ReactNode } from "react"
import { CartContext } from "./CartContext";
import type { Product } from "../../types/Product";


type CartProviderProps = {
    children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {

    const [cart, setCart] = useState<Product[]>([]);

    const exists = (id: string): boolean => {
        const exist = cart.some(p => p.id === id);
        return exist;
    }

    const addItem = (item: Product): void => {
        if (exists(item.id)) {
            const updatedCart = cart.map((prod) => {
                if (prod.id === item.id) {
                    return { ...prod, quantity: item.quantity + prod.quantity };
                } else {
                    return prod;
                }
            });
            setCart(updatedCart);
            alert(`Agregado al carrito`);
        } else {
            setCart([...cart, item]);
            alert(`${item.name} agregado`);
        }
    }

    const deleteItem = (id: string): void => {
        const filteredCart = cart.filter(prod => prod.id !== id);
        setCart(filteredCart);
        alert("Producto eliminado")
    }

    const clearCart = (): void => {
        setCart([]);
    }

    const getTotalItems = (): number => {
        const totalItems = cart.reduce((acum, prod) => prod.quantity + acum, 0);
        return totalItems;
    }

    const total = () => {
        const total = cart.reduce((acum, prod) => prod.price * prod.quantity + acum, 0);
        return Math.round(total * 100)/100;
    }

    const values = {
        cart,
        addItem,
        deleteItem,
        clearCart,
        getTotalItems,
        total
    }

    return <CartContext.Provider value={values}>
        {children}
    </CartContext.Provider>
}