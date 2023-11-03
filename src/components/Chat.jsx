import { useState } from "react";
import Message from "./Message";

let id = 6;

const intialMessages = [
    { id: 1, text: "Hello!", user: "Nicolas" },
    { id: 2, text: "Hey!", user: "Sergio" },
    { id: 3, text: "How are you feeling today?", user: "Nicolas" },
    { id: 4, text: "Hot hot, you?", user: "Sergio" },
    { id: 5, text: "Cool cool!", user: "Nicolas" },
];

function Chat() {
    const [messages, setMessages] = useState(intialMessages);

    const addMessage = (text) => {
        setMessages([...messages, { id: id++, text, user: "Nicolas" }]);
    };

    return (
        <div className="chat">
            <ul>
                {messages.map((message, index) => (
                    <Message key={index} message={message} />
                ))}
            </ul>

            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    addMessage(e.target.message.value);
                    e.target.reset();
                }}
            >
                <input
                    className="message-input"
                    name="message"
                    placeholder="Type a message"
                    required
                />
            </form>
        </div>
    );
}

export default Chat;
