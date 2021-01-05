import React, { useContext, useEffect } from 'react';
import { createContext } from 'react';
import { AuthContext } from '../auth/AuthContext';
import { useSocket } from '../hooks/useSocket'
import { types } from '../types/types';
import { ChatContext } from './chat/ChatContext';

export const SocketContext = createContext();


export const SocketProvider = ({ children }) => {

    const { socket, online, conectarSocket, desconectarSocket } = useSocket('http://localhost:8080');
    const { auth } = useContext(AuthContext);
    const { dispatch } = useContext(ChatContext);

    useEffect(() => {
        if(auth.logged){
            conectarSocket();
        }
    }, [auth, conectarSocket]);

    useEffect(() => {
        if(!auth.logged){
            desconectarSocket();
        }
    }, [auth, desconectarSocket])

    //Efecto para escuchar los cambios de los usuarios conectados
    useEffect(() => {
        socket?.on('lista-usuarios', (usuarios) => {
            dispatch({
                type: types.usuariosCargados,
                payload: usuarios
            })
        })
    }, [socket, dispatch]);
    
    return (
        <SocketContext.Provider value={{ socket, online }}>
            { children }
        </SocketContext.Provider>
    )
}