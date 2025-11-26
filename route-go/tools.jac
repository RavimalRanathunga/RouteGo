import from byllm.llm {Model}
import from datetime {time}

glob llm = Model(model_name="gemini/gemini-2.0-flash");


import from datetime {time}

enum cityType{
    start = "start",
    end = "end",
}

enum busType{
    normal = "normal",
    semi_luxury = "semi_luxury",
    luxury = "luxury",
}

enum busEdgeType{
    direct = "direct",
    via = "via",
}

# Node Definitions
node City{
    has city_type: str;
    has name: str;
}

node Bus{
    has bus_type: str;
    has bus_id: str;
    has start_time: time;
    has end_time: time;
    has fare: float;
    has intermediate_stops: list[str];
}

# Edge Definitions
edge busRoute{
    has route_number: str;
}

edge busEdge{
    has edge_type: str;
}

# Walker Definitions

walker createGraph{

    can start with `root entry {
        start_node_1 = root ++> City(city_type=cityType.start, name="Jaffna");
        start_node_2 = root ++> City(city_type=cityType.start, name="Colombo");
        start_node_3 = root ++> City(city_type=cityType.start, name="Colombo");

        end_node_1 = start_node_1 +>: busRoute(route_number="57") :+> City(city_type=cityType.end, name="Colombo");
        end_node_2 = start_node_1 +>: busRoute(route_number="87") :+> City(city_type=cityType.end, name="Colombo");
        end_node_3 = start_node_2 +>: busRoute(route_number="57") :+> City(city_type=cityType.end, name="Jaffna");
        end_node_4 = start_node_2 +>: busRoute(route_number="87") :+> City(city_type=cityType.end, name="Jaffna");
        end_node_5 = start_node_3 +>: busRoute(route_number="01") :+> City(city_type=cityType.end, name="Kandy");

        bus_1 = end_node_1 +>: busEdge(edge_type=busEdgeType.direct) :+> Bus(
            bus_type=busType.normal,
            bus_id="AB1234",
            start_time=time(8, 0),
            end_time=time(12, 0),
            fare=500.0,
            intermediate_stops=["Vavuniya", "Anuradhapura"]
        );

        bus_2 = end_node_1 +>: busEdge(edge_type=busEdgeType.direct) :+> Bus(
            bus_type = busType.luxury,
            bus_id = "CD5678", 
            start_time = time(8,0), 
            end_time = time(13, 0), 
            fare = 2800.0,
            intermediate_stops = ["Vavuniya", "Kurunagala"]
        ); 

        bus_3 = end_node_2 +>: busEdge(edge_type = busEdgeType.direct) :+> Bus(
            bus_type = busType.semi_luxury, 
            bus_id = "EF9012", 
            start_time = time(9, 0), 
            end_time = time(15, 0), 
            fare = 2200.0, 
            intermediate_stops = ["Vavuniya", "Puttalam"]
        );

        bus_4 = end_node_2 +>: busEdge(edge_type = busEdgeType.direct) :+> Bus(
            bus_type = busType.normal, 
            bus_id = "GH3456", 
            start_time = time(10, 30), 
            end_time = time(16, 30), 
            fare = 1600.0, 
            intermediate_stops = ["Vavuniya", "Puttalam"]
        );
        bus_5 = end_node_3 +>: busEdge(edge_type = busEdgeType.direct) :+> Bus(
            bus_type = busType.luxury, 
            bus_id = "IJ7890", 
            start_time = time(16, 0), 
            end_time = time(2, 0), 
            fare = 3000.0, 
            intermediate_stops = ["Kurunagala", "Vavuniya"]
        );
        bus_6 = end_node_4 +>: busEdge(edge_type = busEdgeType.direct) :+> Bus(
            bus_type = busType.normal, 
            bus_id = "KL1234", 
            start_time = time(14, 0), 
            end_time = time(22, 0), 
            fare = 1500.0,
            intermediate_stops = ["Puttalam", "Vavuniya"]
        );
        bus_7 = end_node_4 +>: busEdge(edge_type = busEdgeType.via) :+> Bus(
            bus_type = busType.semi_luxury, 
            bus_id = "MN5678", 
            start_time = time(7, 30), 
            end_time = time(10, 30), 
            fare = 1200.0, 
            intermediate_stops = ["Dehiwala", "Colombo", "Puttalam", "Vavuniya"]
        );
        bus_8 = end_node_5 +>: busEdge(edge_type = busEdgeType.direct) :+> Bus(
            bus_type = busType.normal, 
            bus_id = "OP9012", 
            start_time = time(12, 0), 
            end_time = time(15, 0), 
            fare = 800.0, 
            intermediate_stops = ["Kegalle", "Mawanella"]
        );
    }

}


walker findResults{
    has from_city: cityType.start;
    has from_city_name: str;
    has to_city: cityType.end;
    has to_city_name: str;
    has start_time: str;
    has end_time: str;

    can search with `root entry{

        start_results = [-->(`?City: city_type==self.from_city, name==self.from_city_name)];
        visit[-->start_results];
        visit[-->(`?City: city_type==self.to_city,name==self.to_city_name)];
        
        visit[-->(`?Bus)];
    }

    can report_buses with Bus entry{
        report here;
    }

}

walker filterRoutes
{
    has route_no: str = "";
    has bus_type: str = "";
    has bus_edge_type:str = "";

    can filterRoutes with city entry
    {
        
    }
}

node City{
    has city_type: str;
    has name: str;
}

walker computeBusTime{
    has user_input: str = "";


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

    # def selectBusType(user_input: str) -> busType by llm();
    # def selectCityType(user_input: str) -> cityType by llm();

    def route_and_run(user_input: str) -> str by llm(
        method = "ReAct",
        tools=([self.compute_average_speed, self.compute_stop_delay])
    );

    can start with `root entry{
        # selected_bus_type = self.selectBusType(user_input=self.user_input);
        # selected_city_type = self.selectCityType(user_input=self.user_input); 
        # print("Selected Bus Type: ", selected_bus_type);
        # print("Selected City Type: ", selected_city_type);

        response = self.route_and_run(user_input=self.user_input);

        print("Computed Response: ", response);
 
        report {
            "user_input": self.user_input,
            "response": response,
        };    
        
    }


}

with entry{
    compute_time_walker = root spawn computeBusTime(user_input="Compute the time taken using average speed and stop delay for a luxury bus starting at Kandy and ending at Galle. Intermediate stops are Matara and Hambantota.");
}


