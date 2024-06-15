import React from 'react';
import { useState } from 'react';

const Message = () => {
    const [message, setMessage] = useState('Hello Jaanu');
    return (
        <div>
            <h1>{message}</h1>
            <button onClick={() => setMessage('Hello Bhavya')}>Change Message</button>
        </div>
    )
}

export default Message;