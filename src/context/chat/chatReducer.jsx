import { types } from "../../types/types";

/* const initialState = {
    uid: '',
    chatActivo: null, //este va agarrar el id del usuario al que se le va a enviar el mensaje
    usuarios: [], //todos los usaurios de la base de datos
    mensajes: [], //Mensajes del chat seleccionado
}
 */
export const chatReducer = ( state, action) => {

    console.log(action);
    
    switch (action.type) {

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
        default:
            return state;
    }
}
