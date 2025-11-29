import from byllm.llm {Model}
import from datetime {time}

import from utils {extract_city_details}

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
    has distance: int;
}

edge busEdge{
    has edge_type: str;
}

# Walker Definitions

walker createGraph{

    can start with `root entry {
        start_node_1 = root ++> City(city_type=cityType.start.value, name="Jaffna");
        start_node_2 = root ++> City(city_type=cityType.start.value, name="Colombo");
        start_node_3 = root ++> City(city_type=cityType.start.value, name="Colombo");

        end_node_1 = start_node_1 +>: busRoute(route_number="57",distance=405) :+> City(city_type=cityType.end.value, name="Colombo");
        end_node_2 = start_node_1 +>: busRoute(route_number="87",distance=450) :+> City(city_type=cityType.end.value, name="Colombo");
        end_node_3 = start_node_2 +>: busRoute(route_number="57", distance=405) :+> City(city_type=cityType.end.value, name="Jaffna");
        end_node_4 = start_node_2 +>: busRoute(route_number="87", distance=450) :+> City(city_type=cityType.end.value, name="Jaffna");
        end_node_5 = start_node_3 +>: busRoute(route_number="01", distance=200) :+> City(city_type=cityType.end.value, name="Kandy");

        bus_1 = end_node_1 +>: busEdge(edge_type=busEdgeType.direct.value) :+> Bus(
            bus_type=busType.normal,
            bus_id="AB1234",
            start_time=time(8, 0),
            end_time=time(12, 0),
            fare=500.0,
            intermediate_stops=["Vavuniya", "Anuradhapura", "Dambulla"]
        );

        bus_2 = end_node_1 +>: busEdge(edge_type=busEdgeType.direct.value) :+> Bus(
            bus_type = busType.luxury,
            bus_id = "CD5678", 
            start_time = time(8,0), 
            end_time = time(13, 0), 
            fare = 2800.0,
            intermediate_stops = ["Vavuniya", "Kurunagala"]
        ); 

        bus_3 = end_node_2 +>: busEdge(edge_type = busEdgeType.direct.value) :+> Bus(
            bus_type = busType.semi_luxury, 
            bus_id = "EF9012", 
            start_time = time(9, 0), 
            end_time = time(15, 0), 
            fare = 2200.0, 
            intermediate_stops = ["Vavuniya", "Puttalam"]
        );

        bus_4 = end_node_2 +>: busEdge(edge_type = busEdgeType.direct.value) :+> Bus(
            bus_type = busType.normal, 
            bus_id = "GH3456", 
            start_time = time(10, 30), 
            end_time = time(16, 30), 
            fare = 1600.0, 
            intermediate_stops = ["Vavuniya", "Puttalam"]
        );
        bus_5 = end_node_3 +>: busEdge(edge_type = busEdgeType.direct.value) :+> Bus(
            bus_type = busType.luxury, 
            bus_id = "IJ7890", 
            start_time = time(16, 0), 
            end_time = time(2, 0), 
            fare = 3000.0, 
            intermediate_stops = ["Kurunagala", "Vavuniya"]
        );
        bus_6 = end_node_4 +>: busEdge(edge_type = busEdgeType.direct.value) :+> Bus(
            bus_type = busType.normal, 
            bus_id = "KL1234", 
            start_time = time(14, 0), 
            end_time = time(22, 0), 
            fare = 1500.0,
            intermediate_stops = ["Puttalam", "Vavuniya"]
        );
        bus_7 = end_node_4 +>: busEdge(edge_type = busEdgeType.via.value) :+> Bus(
            bus_type = busType.semi_luxury, 
            bus_id = "MN5678", 
            start_time = time(7, 30), 
            end_time = time(10, 30), 
            fare = 1200.0, 
            intermediate_stops = ["Dehiwala", "Colombo", "Puttalam", "Vavuniya"]
        );
        bus_8 = end_node_5 +>: busEdge(edge_type = busEdgeType.direct.value) :+> Bus(
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

walker filterRoutes{
    has route_no: str = "";
    has bus_type: str = "";
    has bus_edge_type:str = "";

    can filterRoutes with city entry
    {
        
    }
}


walker computeBusTime{
    has user_input: str = "";
    # has system_prompt: str = ;


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

    def compute_number_of_intermediate_stops{
        cities: City_details = extract_city_details(user_input=self.user_input);
        # print("Extracted Cities: ", cities);

        result = root spawn computeIntermediateStops(cities,output_number=0);
        # print("Number of Intermediate Stops: ", result.output_number);
        return result.output_number;

    }


    # complete the system prompt
    def route_and_run(user_input: str, system_prompt: str = "You are a helpful assistant that computes bus travel time based on average speed and stop delays. If the user provides a bus type, starting city, ending city, and intermediate stops, use the provided tools. If the user does not provide starting city or ending city, ask for more information. If the user does not provide intermediate stops, use compute_number_of_intermediate_stops function") -> str by llm(
        method = "ReAct",
        tools=([self.compute_average_speed, self.compute_stop_delay, self.compute_number_of_intermediate_stops])
    );

    can start with `root entry{

        response = self.route_and_run(user_input=self.user_input);

        print("Computed Response: ", response);
 
        report {
            "user_input": self.user_input,
            "response": response,
        };    
        
    }


}

walker computeIntermediateStops
{

    has cities: City_details;
    has output_number: int;
    
    can start with `root entry{
        if (self.cities.start_city == "" or self.cities.end_city == ""){
            print("Insufficient information to compute intermediate stops. Please provide both starting and ending cities.");
        }
        else{
            visit[-->](`?City: city_type==cityType.start.value, name==self.cities.start_city);

        }
    }

    can search with City entry{

        if (here.city_type == cityType.start.value and here.name == self.cities.start_city){
        
            filtered_edges = [edge-->(`?City: city_type==cityType.end.value, name==self.cities.end_city)];
            # print("Filtered Edges: ", filtered_edges);

            if (len(filtered_edges) == 0){
                print("No routes found between ", self.cities.start_city, " and ", self.cities.end_city);
            }
            else{
                self.min_distance_edge = filtered_edges[0];
                for item in filtered_edges{
                    if (item.distance < self.min_distance_edge.distance){
                        self.min_distance_edge = item;
                    }
                    
                }

                # print("Minimum Distance Edge: ", self.min_distance_edge);
                next_node = [->:busRoute:distance==self.min_distance_edge.distance:->(`?City)](?city_type==cityType.end.value);
                visit next_node[0];

            }
        }
        elif (here.city_type == cityType.end.value and here.name == self.cities.end_city){
            

            bus_nodes = [->:busEdge:edge_type=="direct":->(`?Bus)];
            
            selected_bus = bus_nodes[0]; # the first bus is selected out of the all direct buses

            number_of_stops = len(selected_bus.intermediate_stops);
            self.output_number = number_of_stops;
            

        } 
    }      
}



with entry{
    root spawn createGraph();
    compute_time_walker = root spawn computeBusTime(user_input="Compute the time taken using average speed and stop delay for a luxury bus starting at Jaffna and ending at Colombo.");
}


