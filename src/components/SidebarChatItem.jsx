import React from 'react'

export const SidebarChatItem = () => {
    return (
        <div className="chat_list">
            {/* active_chat */}
            <div className="chat_people">
                <div className="chat_img">
                    <img
                        src="https://lh3.googleusercontent.com/proxy/68MwCJgMSSLfKrPDyFhyCnA5K-OVhdRUtdz06mn8f5bEgqKA2-IoXJpP3ylo2vd-4GPTUFl23ORlOoXN2qXyA673RIJl7VyRPePRQCtf"
                        alt="sunil"
                    />
                </div>

                <div className="chat_ib">
                    <h5>Some random name</h5>
                    <span className="text-success">Online</span>
                    <span className="text-danger">Offline</span>
                </div>
            </div>
        </div>
    )
}
