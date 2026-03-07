import type { User } from "@supabase/supabase-js";
import { createContext } from "react";

export type AuthContextType = {
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    login: (email: string, password: string) => Promise<User>;
    logout: () => Promise<void>;
}
export const AuthContext = createContext<AuthContextType | undefined>(undefined);