import React, { useState } from 'react';

const NewMessageForm = ({ sendHandler }) => {
    const [ inputText, setInputText ] = useState('');

    const handleTextChange = event => {
        setInputText(event.target.value);
    };

    const handleSend = () => {
        sendHandler(inputText);
        setInputText('');
    }
    return (
        <div>
            <input
                type="text"
                data-testid="messageText"
                value={inputText}
                onChange={handleTextChange}
            />
            <button
                type="button"
                data-testid="sendButton"
                onClick={handleSend}
            >Send</button>
        </div>
    );
};

export default NewMessageForm;