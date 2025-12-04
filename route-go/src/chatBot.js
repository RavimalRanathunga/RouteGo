import {__jacJsx, __jacSpawn} from "@jac-client/utils";
import { useState, useEffect } from "react";
function ChatWindow(props) {
  let [messages, setMessages] = useState([{sender: "bot", text: "Hi! I'm RouteGo Assistant. How can I help you find buses today?", id: 0}]);
  let [inputValue, setInputValue] = useState("");
  let [messageId, setMessageId] = useState(1);
  async function handleSendMessage() {
    let input_val = inputValue;
    if (!inputValue) {
      return;
    }
    setInputValue("");
    let userMsg = {sender: "user", text: input_val, id: messageId};
    setMessages(messages.concat([userMsg]));
    let results = await __jacSpawn("agentAI", "", {"user_input": input_val});
    let botMsg = {sender: "bot", text: results.reports[0].response, id: messageId + 1};
    setMessages(messages.concat([userMsg, botMsg]));
    setMessageId(messageId + 2);
  }
  function handleInputChange(e) {
    setInputValue(e.target.value);
  }
  function handleKeyPress(e) {
    if (e.key === "Enter") {
      handleSendMessage();
      e.preventDefault();
    }
  }
  return __jacJsx("div", {"style": {"position": "fixed", "bottom": "100px", "right": "20px", "width": "350px", "height": "500px", "background": "white", "borderRadius": "10px", "boxShadow": "0 4px 12px rgba(0,0,0,0.2)", "display": "flex", "flexDirection": "column", "zIndex": "999"}}, [__jacJsx("div", {"style": {"background": "#ff7f32", "color": "white", "padding": "15px", "borderRadius": "10px 10px 0 0", "display": "flex", "justifyContent": "space-between", "alignItems": "center"}}, [__jacJsx("h4", {"style": {"margin": "0", "fontSize": "1rem"}}, ["RouteGo Chat"]), __jacJsx("button", {"onClick": () => {
    props.closeChat();
  }, "style": {"background": "none", "border": "none", "color": "white", "fontSize": "1.5rem", "cursor": "pointer", "padding": "0"}}, ["×"])]), __jacJsx("div", {"id": "messages-container", "style": {"flex": "1", "overflowY": "auto", "padding": "15px", "background": "#f9f9f9", "display": "flex", "flexDirection": "column"}}, [messages.map(msg => {
    let justifyContent = "flex-start";
    let bgColor = "#e0e0e0";
    let textColor = "black";
    if (msg.sender === "user") {
      justifyContent = "flex-end";
      bgColor = "#ff7f32";
      textColor = "white";
    }
    return __jacJsx("div", {"key": msg.id, "style": {"marginBottom": "10px", "display": "flex", "justifyContent": justifyContent}}, [__jacJsx("div", {"style": {"maxWidth": "70%", "padding": "10px 15px", "borderRadius": "10px", "background": bgColor, "color": textColor, "wordWrap": "break-word", "fontSize": "0.95rem"}}, [msg.text])]);
  })]), __jacJsx("div", {"style": {"padding": "10px", "borderTop": "1px solid #ddd", "display": "flex", "gap": "10px"}}, [__jacJsx("input", {"type": "text", "value": inputValue, "onChange": e => {
    handleInputChange(e);
  }, "onKeyPress": e => {
    handleKeyPress(e);
  }, "placeholder": "Type your message...", "style": {"flex": "1", "padding": "10px", "borderRadius": "5px", "border": "1px solid #ddd", "fontSize": "0.9rem", "fontFamily": "Arial, sans-serif"}}, []), __jacJsx("button", {"onClick": () => {
    handleSendMessage();
  }, "style": {"background": "#ff7f32", "color": "white", "border": "none", "padding": "10px 15px", "borderRadius": "5px", "cursor": "pointer", "fontWeight": "600", "fontSize": "0.9rem"}}, ["Send"])])]);
}
function ChatBot() {
  let [isChatOpen, setIsChatOpen] = useState(false);
  if (isChatOpen) {
    return __jacJsx("div", {}, [__jacJsx(ChatWindow, {"closeChat": () => {
      setIsChatOpen(false);
    }}, []), __jacJsx("button", {"onClick": () => {
      setIsChatOpen(false);
    }, "style": {"position": "fixed", "bottom": "100px", "right": "20px", "width": "100px", "height": "200px", "background": "white", "borderRadius": "10px", "boxShadow": "0 4px 12px rgba(0,0,0,0.2)", "display": "flex", "flexDirection": "column", "zIndex": "999", "position": "absolute", "top": "0", "opacity": "0", "cursor": "pointer"}}, [])]);
  }
  return __jacJsx("div", {}, [__jacJsx("button", {"onClick": () => {
    setIsChatOpen(true);
  }, "style": {"position": "fixed", "bottom": "20px", "right": "20px", "width": "60px", "height": "60px", "borderRadius": "50%", "background": "#ff7f32", "color": "white", "border": "none", "fontSize": "1.8rem", "cursor": "pointer", "boxShadow": "0 4px 12px rgba(0,0,0,0.2)", "display": "flex", "alignItems": "center", "justifyContent": "center", "zIndex": "998"}}, ["💬"])]);
}
export { ChatBot, ChatWindow };
