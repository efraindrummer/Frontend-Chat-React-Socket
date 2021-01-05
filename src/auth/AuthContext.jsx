import React from 'react';
import { createContext, useCallback, useState } from 'react';
import { fetchConToken, fetchSinToken } from '../helpers/fetch';

export const AuthContext = createContext();

const initialState = {
    uid: null,
    cheking: true,
    logged: false,
    name: null,
    email: null,
};


export const AuthProvider = ({ children }) => {

    const [auth, setAuth] = useState(initialState);

    const login = async (email, password) => {
        const resp = await fetchSinToken('login', { email, password }, 'POST');
        
        if(resp.ok){
            localStorage.setItem('token', resp.token);
            const { usuario } = resp;
            console.log(usuario);

            setAuth({
                uid: usuario.uid,
                cheking: false,
                logged: true,
                name: usuario.nombre,
                email: usuario.email,
            });
            console.log('Autenticado Correctamente');
        }

        return resp.ok;
    }

    const register = async (nombre, email, password) => {
        const resp = await fetchSinToken('login/new', { nombre, email, password }, 'POST');
        
        if(resp.ok){
            localStorage.setItem('token', resp.token);
            const { usuario } = resp;
            console.log(usuario);

            setAuth({
                uid: usuario.uid,
                cheking: false,
                logged: true,
                name: usuario.nombre,
                email: usuario.email,
            });
            console.log('Autenticado Correctamente');
            return true;
        }

        return resp.msg;
    }

    const verificaToken = useCallback( async() => {

        const token = localStorage.getItem('token');

        //Esta es la validacion para verificar si el token no existe
        if(!token){
            setAuth({
                uid: null,
                cheking: false,
                logged: false,
                name: null,
                email: null,
            })

            return false;
        }

        const resp = await fetchConToken('login/renew');

        if(resp.ok){
            localStorage.setItem('token', resp.token);
            const { usuario } = resp;
            console.log(usuario);

            setAuth({
                uid: usuario.uid,
                cheking: false,
                logged: true,
                name: usuario.nombre,
                email: usuario.email,
            });

            console.log('Autenticado Correctamente');
            return true;

        }else{
            
            return setAuth({
                uid: null,
                cheking: false,
                logged: false,
                name: null,
                email: null,
            });
        }

    }, []);

    const logout = () => {

    }

    return (
        <AuthContext.Provider value={{
            auth,
            login,
            register,
            verificaToken,
            logout,
        }}>
            {children}
        </AuthContext.Provider>
    )
}
