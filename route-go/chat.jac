cl import from react {
    useState,
    useEffect
}

cl {

    def ChatWindow(closeChat: any) -> any {
        let [messages, setMessages] = useState([
            {sender: "bot", text: "Hi! I'm RouteGo Assistant. How can I help you find buses today?", id: 0}
        ]);
        let [inputValue, setInputValue] = useState("");
        let [messageId, setMessageId] = useState(1);

        # useEffect(
        #     lambda -> None {},
        #     []
        # );

        def handleSendMessage() -> None {
            if not inputValue {
                return;
            }

            let userMsg = {sender: "user", text: inputValue, id: messageId};
            let botMsg = {sender: "bot", text: "We are updating our backend now. Please check back soon!", id: messageId + 1};
            
            setMessages(messages.concat([userMsg, botMsg]));
            setMessageId(messageId + 2);
            setInputValue("");
        }

        def handleInputChange(e: any) -> None {
            setInputValue(e.target.value);
        }

        def handleKeyPress(e: any) -> None {
            if e.key == "Enter" {
                handleSendMessage();
                e.preventDefault();
            }
        }

        return <div
            style={{
                "position": "fixed",
                "bottom": "100px",
                "right": "20px",
                "width": "350px",
                "height": "500px",
                "background": "white",
                "borderRadius": "10px",
                "boxShadow": "0 4px 12px rgba(0,0,0,0.2)",
                "display": "flex",
                "flexDirection": "column",
                "zIndex": "999"
            }}
        >
            <div
                style={{
                    "background": "#ff7f32",
                    "color": "white",
                    "padding": "15px",
                    "borderRadius": "10px 10px 0 0",
                    "display": "flex",
                    "justifyContent": "space-between",
                    "alignItems": "center"
                }}
            >
                <h4
                    style={{
                        "margin": "0",
                        "fontSize": "1rem"
                    }}
                >
                    RouteGo Chat
                </h4>
                <button
                    onClick={lambda -> None { closeChat(); }}
                    style={{
                        "background": "none",
                        "border": "none",
                        "color": "white",
                        "fontSize": "1.5rem",
                        "cursor": "pointer",
                        "padding": "0"
                    }}
                >
                    ×
                </button>
            </div>
            <div
                id="messages-container"
                style={{
                    "flex": "1",
                    "overflowY": "auto",
                    "padding": "15px",
                    "background": "#f9f9f9",
                    "display": "flex",
                    "flexDirection": "column"
                }}
            >
                {messages.map(lambda msg: any -> any {
                    let justifyContent = "flex-start";
                    let bgColor = "#e0e0e0";
                    let textColor = "black";
                    
                    if msg.sender == "user" {
                        justifyContent = "flex-end";
                        bgColor = "#ff7f32";
                        textColor = "white";
                    }
                    
                    return <div
                        key={msg.id}
                        style={{
                            "marginBottom": "10px",
                            "display": "flex",
                            "justifyContent": justifyContent
                        }}
                    >
                        <div
                            style={{
                                "maxWidth": "70%",
                                "padding": "10px 15px",
                                "borderRadius": "10px",
                                "background": bgColor,
                                "color": textColor,
                                "wordWrap": "break-word",
                                "fontSize": "0.95rem"
                            }}
                        >
                            {msg.text}
                        </div>
                    </div>;
                })}
            </div>
            <div
                style={{
                    "padding": "10px",
                    "borderTop": "1px solid #ddd",
                    "display": "flex",
                    "gap": "10px"
                }}
            >
                <input
                    type="text"
                    value={inputValue}
                    onChange={lambda e: any -> None { handleInputChange(e); }}
                    onKeyPress={lambda e: any -> None { handleKeyPress(e); }}
                    placeholder="Type your message..."
                    style={{
                        "flex": "1",
                        "padding": "10px",
                        "borderRadius": "5px",
                        "border": "1px solid #ddd",
                        "fontSize": "0.9rem",
                        "fontFamily": "Arial, sans-serif"
                    }}
                />
                <button
                    onClick={lambda -> None { handleSendMessage(); }}
                    style={{
                        "background": "#ff7f32",
                        "color": "white",
                        "border": "none",
                        "padding": "10px 15px",
                        "borderRadius": "5px",
                        "cursor": "pointer",
                        "fontWeight": "600",
                        "fontSize": "0.9rem"
                    }}
                >
                    Send
                </button>
            </div>
        </div>;
    }

    def ChatBot() -> any {
        let [isChatOpen, setIsChatOpen] = useState(false);

        if isChatOpen {
            return <ChatWindow
                closeChat={lambda -> None { setIsChatOpen(false); }}
            />;
        }

        return <div>
            <button
                onClick={lambda -> None { setIsChatOpen(true); }}
                style={{
                    "position": "fixed",
                    "bottom": "20px",
                    "right": "20px",
                    "width": "60px",
                    "height": "60px",
                    "borderRadius": "50%",
                    "background": "#ff7f32",
                    "color": "white",
                    "border": "none",
                    "fontSize": "1.8rem",
                    "cursor": "pointer",
                    "boxShadow": "0 4px 12px rgba(0,0,0,0.2)",
                    "display": "flex",
                    "alignItems": "center",
                    "justifyContent": "center",
                    "zIndex": "998"
                }}
            >
                💬
            </button>
        </div>;
    }

    def app() -> any {
        return <ChatBot />;
    }

}
