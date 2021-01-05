import { types } from "../../types/types";

/* const initialState = {
    uid: '',
    chatActivo: null, //este va agarrar el id del usuario al que se le va a enviar el mensaje
    usuarios: [], //todos los usaurios de la base de datos
    mensajes: [], //Mensajes del chat seleccionado
}
 */
export const chatReducer = ( state, action ) => {
  
    switch (action.type) {

        case types.cerrarSesion:
            return {
                uid: '',
                chatActivo: null,
                usuarios: [],
                mensajes: []
            }

        case types.usuariosCargados:
            return {
                ...state,
                usuarios: [ ...action.payload ]
            }

        case types.activarChat:

            if(state.chatActivo === action.payload) return state

            return {
                ...state,
                chatActivo: action.payload,
                mensajes: []
            }
        
        case types.nuevoMensaje:
            if(state.chatActivo === action.payload.de || state.chatActivo === action.payload.para ){
                return {
                    ...state,
                    mensajes: [...state.mensajes, action.payload]
                }
            }else{
                return state;
            }

        case types.cargarMensajes:
            return {
                ...state,
                mensajes: [...action.payload],
            }
            
        default:
            return state;
    }
}
