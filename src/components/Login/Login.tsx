import React, { useState } from "react";
import './Login.css'
import { Navigate, useNavigate, type NavigateFunction } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext/useAuthContext";
type LoginForm = {
    email: string;
    password: string;
}

export const Login = () => {
    const { user, loading, login } = useAuthContext();
    const [userForm, setUserForm] = useState<LoginForm>({
        email: "",
        password: ""
    });

    const navigate: NavigateFunction = useNavigate();

    if (loading) {
        return null;
    }

    if (user!==null) {
        return <Navigate to={"/admin/panel/products"} replace />
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserForm({ ...userForm, [name]: value });
    };

    const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await login(userForm.email, userForm.password)
            navigate("/admin/panel/products");
        } catch (error) {
            console.log(error);
            alert("Credenciales incorrectas.")
            setUserForm({
                email: "",
                password: ""
            });
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