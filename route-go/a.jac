walker agentAI{
    has user_input: str = "";
    has chat_history: list[str] = [];
    has response: str = "";

    def add_chat_history(entry: str){
        print(self.chat_history);
        self.chat_history.append(entry);

        print("Chat history updated: ", self.chat_history);
    }

    }

    with entry{
        a = agentAI();
        a.add_chat_history("New entry added to chat history.");
    }