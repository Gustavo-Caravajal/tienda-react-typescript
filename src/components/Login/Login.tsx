import React, { useEffect, useState } from "react";
import './Login.css'
import { Navigate, useNavigate, type NavigateFunction } from "react-router-dom";
import { supabase } from "../../supabase-client";
type User = {
    email: string;
    password: string;
}

export const Login = () => {
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [userForm, setUserForm] = useState<User>({
        email: "",
        password: ""
    });

    useEffect(() => {
        const checkUser = async () => {
            const { data } = await supabase.auth.getUser();
            setUser(data.user);
            setLoading(false);
        }
        checkUser();
    }, [])


    const navigate: NavigateFunction = useNavigate();

    if(loading){
        return null;
    }

    if (user) {
        return <Navigate to={"/admin/alta-productos"} />
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserForm({ ...userForm, [name]: value });
    };

    const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { error } = await supabase.auth.signInWithPassword({
            email: userForm.email,
            password: userForm.password
        })

        if (error) {
            alert("Credenciales incorrectas.")
            setUserForm({
                email: "",
                password: ""
            });
        } else {
            navigate("/admin/alta-productos");
        }

    }

    return (
        <section className="login-container">
            <h4>Panel administrador</h4>
            <h6>Login</h6>
            <form
                className="login-form"
                onSubmit={handleSubmit}
            >
                <div className="login-form-field">
                    <label className="login-form-label">USUARIO</label>
                    <input
                        className="login-form-input"
                        type="email"
                        name="email"
                        value={userForm.email}
                        onChange={handleChange}
                        placeholder="Ingrese su usuario"
                    />
                </div>
                <div className="login-form-field">
                    <label className="login-form-label">CONTRASEÑA</label>
                    <input
                        className="login-form-input"
                        type="password"
                        name="password"
                        value={userForm.password}
                        onChange={handleChange}
                        placeholder="Ingrese su contraseña"
                    />
                </div>
                <button className="login-form-submit" type="submit">Iniciar sesion</button>
            </form>
        </section>
    );
}