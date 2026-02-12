import { createContext } from "react";
import type { Product } from "../../types/Product"


export type CartContextType = {
    cart: Product[];
    addItem: (item: Product) => void;
    clearCart: () => void;
    getTotalItems: () => number | undefined;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);