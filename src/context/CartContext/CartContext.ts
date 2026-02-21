import { createContext } from "react";
import type { CartItem } from "../../types/Product"


export type CartContextType = {
    cart: CartItem[];
    addItem: (item: CartItem) => void;
    deleteItem: (id: number) => void;
    totalItemPrice: (item: CartItem) => number;
    clearCart: () => void;
    getTotalItems: () => number | undefined;
    total: () => number;
    checkout: () => void;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);