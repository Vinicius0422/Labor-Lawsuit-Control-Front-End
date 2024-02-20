import React, { useState } from "react";

import axios from "axios";

export const Login = () => {

    let [login, setLogin] = useState('');
    let [password, setPassword] = useState('');

    async function logar(e) {
        e.preventDefault();

        try {
            const response = await axios.post('http://3.142.244.162:8080/auth/login', {
                login: login,
                password: password
            });

            console.log(response.status)
            console.log(response.data)

        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div className="min-h-screen flex w-screen items-center justify-center bg-stone-400">
            <form className="flex flex-col justify-between items-center bg-stone-600 w-96 p-4 h-80 rounded-xl shadow-xl shadow-stone-500" type="submit" onSubmit={(e) => logar(e)}>
                <h2 className="text-3xl font-semibold text-white">Login</h2>
                <div className="w-10/12 flex flex-col gap-6">
                    <input className="w-full py-2 px-3 rounded-xl border-none outline-none text-sm" type="text" name="username" placeholder="Digite o usuário..." value={login} onChange={(e) => setLogin(e.target.value)} />
                    <input className="w-full py-2 px-3 rounded-xl border-none outline-none text-sm" type="password" name="password" placeholder="Digite a senha..." value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button className="text-lg font-semibold text-stone-600 bg-white w-6/12 rounded-xl py-2">Acessar</button>
            </form>
        </div>
    )
}