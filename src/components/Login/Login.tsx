import React, { useState } from "react";
import './Login.css'
type User = {
    name: string;
    password: string;
}

export const Login = () => {
    const [userForm, setUserForm] = useState<User>({
        name: "",
        password: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserForm({ ...userForm, [name]: value });
    };

    return (
        <section className="login-container">
            <h4>Panel administrador</h4>
            <h6>Login</h6>
            <form className="login-form" >
                <div className="login-form-field">
                    <label className="login-form-label">USUARIO</label>
                    <input
                        className="login-form-input"
                        type="text"
                        name="name"
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
                        onChange={handleChange}
                        placeholder="Ingrese su contraseña"
                    />
                </div>
                <button className="login-form-submit" type="submit">Iniciar sesion</button>
            </form>
        </section>
    );
}