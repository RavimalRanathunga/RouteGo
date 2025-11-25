import from byllm.llm {Model}
import from datetime {time}

glob llm = Model(model_name="gemini/gemini-2.0-flash");


enum busType{
    normal = "normal",
    semi_luxury = "semi_luxury",
    luxury = "luxury",
}

node Bus{
    has bus_type: str;
    has bus_id: str;
    has start_time: time;
    has end_time: time;
    has fare: float;
    has intermediate_stops: list[str];
}


walker computeBusTime{
    has user_input: str = "";

    def selectBusType(user_input: str) -> busType by llm();

    def compute_average_speed(bus_type: str) -> float{
        if (bus_type == "normal"){
            return 40.0;
        } elif (bus_type == "semi_luxury"){
            return 60.0;
        } elif (bus_type == "luxury"){
            return 80.0;
        } 
    }

    def compute_stop_delay(intermediate_stops: list[str]) -> float{
        stop_delay = len(intermediate_stops) * 10.0;
        return stop_delay;
    }

    def route_and_run(user_input: str) -> str by llm(
        method = "ReAct",
        tools=([self.compute_average_speed, self.compute_stop_delay])
    );

    




    can start with `root entry{
        selected_bus_type = self.selectBusType(user_input=self.user_input);

        print("Selected Bus Type: ", selected_bus_type);

        response = self.route_and_run(user_input=self.user_input);

        print("Computed Response: ", response);

            
        report {
            "user_input": self.user_input,
            "response": response,
            "node_type": self.__class__.__name__
        };
    
        
    }

}

with entry{
    compute_time_walker = root spawn computeBusTime(user_input="Compute the time taken using average speed and stop delay for a luxury bus with intermediate stops at Kandy and Galle.");
}  


