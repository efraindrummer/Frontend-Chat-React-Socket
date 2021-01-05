import React, { useContext } from 'react'
import { ChatContext } from '../context/chat/ChatContext'
import { types } from '../types/types';

export const SidebarChatItem = ({ usuario }) => {

    const { chatState ,dispatch } = useContext(ChatContext);
    const { chatActivo } = chatState;

    const onClick = () => {
        dispatch({
            type: types.activarChat,
            payload: usuario.uid
        })
    }

    return (
        <div className={`chat_list ${(usuario.uid === chatActivo)  && 'active_chat'}`} onClick={onClick}>
            {/* active_chat */}
            <div className="chat_people">
                <div className="chat_img">
                    <img
                        src="https://lh3.googleusercontent.com/proxy/68MwCJgMSSLfKrPDyFhyCnA5K-OVhdRUtdz06mn8f5bEgqKA2-IoXJpP3ylo2vd-4GPTUFl23ORlOoXN2qXyA673RIJl7VyRPePRQCtf"
                        alt="sunil"
                    />
                </div>

                <div className="chat_ib">
                    <h5>{usuario.nombre}</h5>
                    {
                        (usuario.online) ? <span className="text-success">Online</span> : <span className="text-danger">Offline</span>
                    }
                </div>
            </div>
        </div>
    )
}
