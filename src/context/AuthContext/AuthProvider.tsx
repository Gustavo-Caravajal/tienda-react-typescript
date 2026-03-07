import { useEffect, useState, type ReactNode } from "react"
import { AuthContext } from "./AuthContext";
import { supabase } from "../../supabase-client";
import type { User } from "@supabase/supabase-js";

type AuthProviderProps = {
    children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const login = async (email: string, password: string): Promise<User> => {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password
        })
        if (error) {
            throw error;
        }
        setUser(data.user)
        return data.user;
    }

    const logout = async (): Promise<void> => {
        await supabase.auth.signOut();
        setUser(null);
    };


    useEffect(() => {
        const checkUser = async () => {
            const { data } = await supabase.auth.getUser();
            setUser(data.user);
            setLoading(false);
        }
        checkUser();
    }, [])

    return <AuthContext.Provider value={{ user, setUser, loading, setLoading, login, logout }}>
        {children}
    </AuthContext.Provider>

}