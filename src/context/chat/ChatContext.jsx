import React, { createContext, useReducer } from "react";
import { chatReducer } from "./chatReducer";

export const ChatContext = createContext();

const initialState = {
    uid: '',
    chatActivo: null, //este va agarrar el id del usuario al que se le va a enviar el mensaje
    usuarios: [], //todos los usaurios de la base de datos
    mensajes: [], //Mensajes del chat seleccionado
}

export const ChatProvider = ({ children }) => {

    const [ chatState, dispatch ] = useReducer(chatReducer, initialState);

    return (
        <ChatContext.Provider value={{
            chatState,
            dispatch
        }}>
            {children}
        </ChatContext.Provider>
    )
}