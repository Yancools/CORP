import React from "react";
import './Chat.css';

const Chat = () => {
    return (
        <div className="chat">
            <div className="chat__header">
                Заголовок чата
            </div>
            <div className="chat__content">
                
            </div>
            <div className="chat__footer">
                <div className="chat__footer--choose"></div>
                <input type="text" className="chat__footer--input" />
                <div className="chat__footer--smile"></div>
                <div className="chat__footer--send"></div>
            </div>
        </div>
    );
}

export default Chat;