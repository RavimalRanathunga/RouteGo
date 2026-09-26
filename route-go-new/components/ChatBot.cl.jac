# agentAI is deliberately NOT imported here: importing a walker into a
# client-inferred file breaks the Vite bundle (it emits an ES import for a
# name the compiled server stub never exports), even though it resolves the
# `jac check` warnings on `results.reports`. Registration happens via main.jac.
cl def:pub ChatWindow(closeChat: Callable[[], None]) -> JsxElement {
        has messages: list[any] = [
            {"sender": "bot", "text": "Hi! I'm RouteGo Assistant. How can I help you find buses today?", "id": 0}
        ];
        has inputValue: str = "";
        has messageId: int = 1;

        async def send_message() -> None {

            input_val = inputValue;
            if not inputValue {
                return;
            }
            inputValue = "";

            userMsg = {"sender": "user", "text": input_val, "id": messageId};

            results = root spawn agentAI(user_input=input_val);

            botMsg = {"sender": "bot", "text": results.reports[0].response, "id": messageId + 1};

            messages = messages + [userMsg, botMsg];
            messageId = messageId + 2;

        }

        def handle_input_change(e: ChangeEvent) {
            inputValue = e.target.value;
        }

        def handle_key_press(e: KeyboardEvent) {
            if e.key == "Enter" {
                send_message();
                e.preventDefault();
            }
        }

        def handle_close(_e: MouseEvent) { closeChat(); }
        def handle_send_click(_e: MouseEvent) { send_message(); }

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
                    onClick={handle_close}
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
                {for msg in messages {
                    <div
                        key={msg.id}
                        style={{
                            "marginBottom": "10px",
                            "display": "flex",
                            "justifyContent": "flex-end" if msg.sender == "user" else "flex-start"
                        }}
                    >
                        <div
                            style={{
                                "maxWidth": "70%",
                                "padding": "10px 15px",
                                "borderRadius": "10px",
                                "background": "#ff7f32" if msg.sender == "user" else "#e0e0e0",
                                "color": "white" if msg.sender == "user" else "black",
                                "wordWrap": "break-word",
                                "fontSize": "0.95rem"
                            }}
                        >
                            {msg.text}
                        </div>
                    </div>
                }}
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
                    onChange={handle_input_change}
                    onKeyPress={handle_key_press}
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
                    onClick={handle_send_click}
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

cl def:pub ChatBot() -> JsxElement {
    has isChatOpen: bool = False;

    def open_chat(_e: MouseEvent) { isChatOpen = True; }
    def close_chat() { isChatOpen = False; }

    if isChatOpen {
        return <ChatWindow
            closeChat={close_chat}
        />;
    }

    return <div>
        <button
            onClick={open_chat}
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
