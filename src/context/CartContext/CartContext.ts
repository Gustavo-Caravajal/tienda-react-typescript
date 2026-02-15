import { createContext } from "react";
import type { Product } from "../../types/Product"


export type CartContextType = {
    cart: Product[];
    addItem: (item: Product) => void;
    deleteItem: (id: string) => void;
    totalItemPrice: (item: Product) => number;
    clearCart: () => void;
    getTotalItems: () => number | undefined;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);