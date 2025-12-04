import from datetime {datetime}
import from datetime {time}
import from byllm.lib{Model}
import from utils {extract_city_details,extract_time_details}

cl import from .HeroSection {HeroSection}
cl import from .chatBot {ChatBot}
cl import from .SearchBusTable {SearchBusTable}

glob llm = Model(model_name="gemini/gemini-2.0-flash");

cl import from react{
    useState,
    useEffect
}

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

enum chatType{
    general="general",
    bus_search="bus_search",
}

enum walkerType{
    findRoutesAgent = "findRoutesAgent",
    filterBusesAgent = "filterBusesAgent",
    computeBusTimeAgent = "computeBusTimeAgent",
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
        start_node_1 = root ++> City(city_type=cityType.start.value, name="jaffna");
        start_node_2 = root ++> City(city_type=cityType.start.value, name="colombo");
        start_node_3 = root ++> City(city_type=cityType.start.value, name="colombo");

        end_node_1 = start_node_1 +>: busRoute(route_number="57",distance=405) :+> City(city_type=cityType.end.value, name="colombo");
        end_node_2 = start_node_1 +>: busRoute(route_number="87",distance=450) :+> City(city_type=cityType.end.value, name="colombo");
        end_node_3 = start_node_2 +>: busRoute(route_number="57", distance=405) :+> City(city_type=cityType.end.value, name="jaffna");
        end_node_4 = start_node_2 +>: busRoute(route_number="87", distance=450) :+> City(city_type=cityType.end.value, name="jaffna");
        end_node_5 = start_node_3 +>: busRoute(route_number="01", distance=200) :+> City(city_type=cityType.end.value, name="kandy");

        bus_1 = end_node_1 +>: busEdge(edge_type=busEdgeType.direct.value) :+> Bus(
            bus_type=busType.normal.value,
            bus_id="AB1234",
            start_time=time(8, 0),
            end_time=time(12, 0),
            fare=500.0,
            intermediate_stops=["vavuniya", "anuradhapura", "dambulla"]
        );

        bus_2 = end_node_1 +>: busEdge(edge_type=busEdgeType.direct.value) :+> Bus(
            bus_type = busType.luxury.value,
            bus_id = "CD5678", 
            start_time = time(8,0), 
            end_time = time(13, 0), 
            fare = 2800.0,
            intermediate_stops = ["vavuniya", "kurunagala"]
        ); 

        bus_3 = end_node_2 +>: busEdge(edge_type = busEdgeType.direct.value) :+> Bus(
            bus_type = busType.semi_luxury.value, 
            bus_id = "EF9012", 
            start_time = time(9, 0), 
            end_time = time(15, 0), 
            fare = 2200.0, 
            intermediate_stops = ["vavuniya", "puttalam"]
        );

        bus_4 = end_node_2 +>: busEdge(edge_type = busEdgeType.direct.value) :+> Bus(
            bus_type = busType.normal.value, 
            bus_id = "GH3456", 
            start_time = time(10, 30), 
            end_time = time(16, 30), 
            fare = 1600.0, 
            intermediate_stops = ["vavuniya", "puttalam"]
        );
        bus_5 = end_node_3 +>: busEdge(edge_type = busEdgeType.direct.value) :+> Bus(
            bus_type = busType.luxury.value, 
            bus_id = "IJ7890", 
            start_time = time(16, 0), 
            end_time = time(2, 0), 
            fare = 3000.0, 
            intermediate_stops = ["kurunagala", "vavuniya"]
        );
        bus_6 = end_node_4 +>: busEdge(edge_type = busEdgeType.direct.value) :+> Bus(
            bus_type = busType.normal.value, 
            bus_id = "KL1234", 
            start_time = time(14, 0), 
            end_time = time(22, 0), 
            fare = 1500.0,
            intermediate_stops = ["puttalam", "vavuniya"]
        );
        bus_7 = end_node_4 +>: busEdge(edge_type = busEdgeType.via.value) :+> Bus(
            bus_type = busType.semi_luxury.value, 
            bus_id = "MN5678", 
            start_time = time(7, 30), 
            end_time = time(10, 30), 
            fare = 1200.0, 
            intermediate_stops = ["dehiwala", "colombo", "puttalam", "vavuniya"]
        );
        bus_8 = end_node_5 +>: busEdge(edge_type = busEdgeType.direct.value) :+> Bus(
            bus_type = busType.normal.value, 
            bus_id = "OP9012", 
            start_time = time(12, 0), 
            end_time = time(15, 0), 
            fare = 800.0, 
            intermediate_stops = ["kegalle", "mawanella"]
        );

        report {"data" : "Graph Created Successfully"};
    }
}

walker findRoutes{
    has from_city_name: str;
    has to_city_name: str;
    has from_city: str =cityType.start.value;
    has to_city: str = cityType.end.value;
    has routes: list[str] = [];

    can search with `root entry{

        print("Searching routes from ", self.from_city_name, " to ", self.to_city_name);
        start_results = [-->(`?City: name==self.from_city_name, city_type==self.from_city)];
        print("start_results",start_results);
        visit[-->start_results];
    }

    can visit_cities with City entry{
        
        # print("Now we are in",here);
        if([-->(`?City: name==self.to_city_name, city_type==self.to_city)]){
            bus_routes = [edge-->(`?City: name==self.to_city_name, city_type==self.to_city)];
            for r in bus_routes{
            self.routes.append(r.route_number);
        }
        routes_str ="";
        for item in self.routes{
            routes_str += item + ", ";
        }
        # Remove the last comma and space
        if (routes_str.endswith(", ")){
            routes_str = routes_str[:-2];
        }
        report {"routes":self.routes,
                "response": routes_str
            };
        }
    }
}

walker findRoutesAgent{
    has from_city_name: str;
    has to_city_name: str;
    has from_city: str =cityType.start.value;
    has to_city: str = cityType.end.value;
    has routes: list[str] = [];
    
    can search with `root entry{

        print("Searching routes from ", self.from_city_name, " to ", self.to_city_name);
        start_results = [-->(`?City: name==self.from_city_name, city_type==self.from_city)];
        print("start_results",start_results);
        visit[-->start_results];
    }

    can visit_cities with City entry{
        
        # print("Now we are in",here);
        if([-->(`?City: name==self.to_city_name, city_type==self.to_city)]){
            bus_routes = [edge-->(`?City: name==self.to_city_name, city_type==self.to_city)];
            for r in bus_routes{
            self.routes.append(r.route_number);
            }
        }
    }
}

walker filterBuses{
    has from_city_name: str;
    has to_city_name: str;
    has start_time: str;
    has end_time: str;
    has from_city: str =cityType.start.value;
    has to_city: str = cityType.end.value;
    has route_no: str = "";
    has bus_type: str = "";
    has bus_edge_type:str = "";

    can filterRoutes with `root entry{
        start_results = [-->(`?City: name==self.from_city_name, city_type==self.from_city)];
        print("start_results",start_results);
        visit[-->start_results];
    }

    can filter with City entry{
        start_t:time = datetime.strptime(self.start_time, "%H:%M").time();
        end_t:time = datetime.strptime(self.end_time, "%H:%M").time();
        if (here.city_type == cityType.end.value and here.name == self.to_city_name){
            if (self.bus_edge_type == ""){
                if (self.bus_type == ""){
                    report[--> (`?Bus: start_time >= start_t, start_time <= end_t)];
                }
                else{
                    report[--> (`?Bus: bus_type==self.bus_type, start_time >= start_t, start_time <= end_t)];
                }
            }
            else{
                if (self.bus_type == ""){
                    report[->:busEdge:edge_type==self.bus_edge_type:->(`?Bus: start_time >= start_t, start_time <= end_t)];
                }
                else{
                    report[->:busEdge:edge_type==self.bus_edge_type:->(`?Bus: bus_type==self.bus_type, start_time >= start_t, start_time <= end_t)];
                }
            }
        }
        else{
            if (self.route_no == ""){
                end_results = [-->(`?City: name==self.to_city_name, city_type==self.to_city)];
                print("end_results",end_results);
                visit[-->end_results];
            }
            else{
                end_results = [->:busRoute:route_number==self.route_no:->(`?City: name==self.to_city_name, city_type==self.to_city)];
                visit[-->end_results];
            }
        }        
    }
}

walker filterBusesAgent{
    has from_city_name: str;
    has to_city_name: str;
    has start_time: str;
    has end_time: str;
    has from_city: str =cityType.start.value;
    has to_city: str = cityType.end.value;
    has route_no: str = "";
    has bus_type: str = "";
    has bus_edge_type:str = "";
    has response: str = "";
    has buses:list = [];

    can filterRoutes with `root entry{
        start_results = [-->(`?City: name==self.from_city_name, city_type==self.from_city)];
        print("start_results",start_results);
        visit[-->start_results];
    }

    can filter with City entry{
        start_t:time = datetime.strptime(self.start_time, "%H:%M").time();
        end_t:time = datetime.strptime(self.end_time, "%H:%M").time();
        if (here.city_type == cityType.end.value and here.name == self.to_city_name){
            if (self.bus_edge_type == ""){
                if (self.bus_type == ""){
                    buses = [--> (`?Bus: start_time >= start_t, start_time <= end_t)];
                    self.buses = self.buses + buses;
                }
                else{
                    buses = [--> (`?Bus: bus_type==self.bus_type, start_time >= start_t, start_time <= end_t)];
                    self.buses = self.buses + buses;
                }
            }
            else{
                if (self.bus_type == ""){
                    buses = [->:busEdge:edge_type==self.bus_edge_type:->(`?Bus: start_time >= start_t, start_time <= end_t)];
                    self.buses = self.buses + buses;
                }
                else{
                    buses = [->:busEdge:edge_type==self.bus_edge_type:->(`?Bus: bus_type==self.bus_type, start_time >= start_t, start_time <= end_t)];
                    self.buses = self.buses + buses;
                }
            }
        }
        else{
            if (self.route_no == ""){
                end_results = [-->(`?City: name==self.to_city_name, city_type==self.to_city)];
                print("end_results",end_results);
                visit[-->end_results];
            }
            else{
                end_results = [->:busRoute:route_number==self.route_no:->(`?City: name==self.to_city_name, city_type==self.to_city)];
                visit[-->end_results];
            }
        }        
    }
}


walker findGraph{
    can find with `root entry{

        results = [-->(`?City)];
        report {"data":True} if len(results) > 0 else {"data":False};
    }
}

walker agentAI{
    has user_input: str = "";
    
    has response: str = "";

    """
    Determines the most appropriate walkers to handle the user's input using given {user_input}.
    
    Args:
        user_input:str = The natural language input from the user describing their
                         bus route query or travel time calculation request.
    
    The abilities of each walker are defined below.
        walkerType.findRoutesAgent: Handles requests related to finding bus routes between cities.
        walkerType.computeBusTimeAgent: Handles requests related to computing bus travel times.
        walkerType.filterBusesAgent: Handles requests related to filtering buses based on criteria.

    Returns:
        List of walkerType: An enum values indicating which walkers should handle the request.
                   
    Examples:
        >>> find_next_walkers("How long does it take to get from Colombo to Jaffna?")
            walkerType.computeBusTimeAgent
        
        >>> find_next_walkers("Show me routes from Colombo to Kandy")
            walkerType.findRoutesAgent"""
    def find_next_walker(user_input:str) -> walkerType by llm();

    """use this function to select chat type based on {user_input}
        Args:
            user_input:str = The natural language input from the user describing their
                            query related to buses or general chat.
        Returns:
            chatType: An enum value indicating which chat type the {user_input} belongs to.
        
        Examples:
            >>> select_chat_type("Tell me a joke")
            chatType.general
            
            >>> select_chat_type("Find me a bus from Colombo to Kandy")
            chatType.bus_search"""
    def select_chat_type(user_input:str) -> chatType by llm();

    def generate_response(user_input:str) -> str by llm();

    can serve with `root entry{

        chat_category: str;
        next_walker: walkerType;

        print("User input received: ", self.user_input);
        try{
            chat = self.select_chat_type(self.user_input);
            print(chat);
            chat_category = chat.value;

            if (chat_category == "general"){
                print("General chat detected. Responding accordingly.");
                response = "I'm here to help you with bus routes and travel times. How can I assist you today?";
                report {
                    "user_input": self.user_input,
                    "response": response,
                };
                return;
            }

            next_walker = self.find_next_walker(self.user_input);
            print("Next walker determined: ", next_walker);

        }except e{
            report {
                "user_input": self.user_input,
                "response": "Sorry, Service is currently unavailable. Please try again later.",
            };
            return;
        }

            match next_walker.value{
            case "computeBusTimeAgent":
                result = root spawn computeBusTimeAgent(user_input=self.user_input);
                
                print("Result from computeBusTimeAgent: ", result);
                self.response = result.response;
                report {
                    "user_input": self.user_input,
                    "response": self.response,
                };
                return;
                
            case "findRoutesAgent":
                cities = extract_city_details(user_input=self.user_input);
                print("start_city: ", cities.start_city);
                print("end_city: ", cities.end_city);
                result = root spawn findRoutesAgent(from_city_name=cities.start_city, to_city_name=cities.end_city);
                print(result);
                # self.chat_history.append("User: " + self.user_input);
                # self.chat_history.append(f"Agent: Available routes from {cities.start_city} to {cities.end_city} are: " + ", ".join(result.routes));
                # print(chat_history);
                # self.response = self.generate_response(chat_history=self.chat_history, user_input=self.user_input);
                # print("Generated Response: ", self.response);
                # self.chat_history.append(f"Agent:",self.response);
                
                available_routes = "";
                for route in result.routes{
                    available_routes += route + ", ";
                }
                self.chat_history.append("User: " + self.user_input);
                self.chat_history.append(f"Agent: Available routes {available_routes}");
                
                self.response = self.generate_response(self.chat_history,self.user_input);
                print("Generated Response: ", self.response);
                self.chat_history.append("Agent: " + self.response);

                report {
                    "user_input": self.user_input,
                    # "response": result.routes[0],
                    "response": self.response,
                };

            case "filterBusesAgent":
                cities = extract_city_details(user_input=self.user_input);
                print("start_city: ", cities.start_city);
                print("end_city: ", cities.end_city);
                times = extract_time_details(user_input=self.user_input);
                print("start time:",times.start_time);
                print("end time:",times.end_time);

                if (times.start_time == "" or times.end_time == "")
                {
                    report {
                        "response":"Please provide a start and end time"
                    };
                    return;
                }

                result = root spawn filterBusesAgent(from_city_name=cities.start_city,to_city_name=cities.to_city,start_time=times.start_time);
                self.chat_history.append("User: " + self.user_input);
                self.response = self.generate_response(self.chat_history,self.user_input);
                
            }
        }
}


walker computeBusTimeAgent{
    has walkerType: str = walkerType.computeBusTime.value; 
    has user_input: str = "";
    has response: str = "";
  
    def compute_average_speed(bus_type: str) -> float{
        print("tool: average speed called");
        if (bus_type == "normal"){
            return 40.0;
        } elif (bus_type == "semi_luxury"){
            return 60.0;
        } elif (bus_type == "luxury"){
            return 80.0;
        } 
    }

    def compute_stop_delay(intermediate_stops: list[str]) -> float{
        print("tool: stop delay called");
        stop_delay = len(intermediate_stops) * 10.0;
        return stop_delay;
    }

    def compute_number_of_intermediate_stops{
        print("tool: intermediate stops called");
        cities: City_details = extract_city_details(user_input=self.user_input);
        print("Extracted Cities: ", cities);

        result = root spawn computeIntermediateStops(cities,output_number=0);
        return result.output_number;

    }

    """
    Processes user input to compute bus travel time using ReAct methodology with integrated tools.
    
    This function serves as the main orchestrator for travel time calculations, intelligently 
    determining which tools to use based on the information provided in the user input.
    
    Args:
        user_input (str): Natural language input from the user describing their travel query.
                         Should ideally contain bus type, starting city, ending city, and 
                         optionally intermediate stops information.
    
    Returns:
        str: A natural language response containing the computed stop delay time, average speed,
             or available routes.
    
    Tool Usage Logic:
        - If user provides intermediate stops: Uses compute_stop_delay tool directly with the
          provided stops list to calculate delay time.
        - If user does NOT provide intermediate stops: Automatically uses 
          compute_number_of_intermediate_stops tool to find the number of stops on the 
          shortest route, then uses compute_stop_delay tool with that count.
        - Always uses compute_average_speed tool when bus type information is available.
    
    Available Tools:
        1. compute_average_speed(bus_type: str) -> float:
           Returns average speed in km/h based on bus type (normal: 40, semi_luxury: 60, luxury: 80)
        
        2. compute_stop_delay(intermediate_stops: list[str]) -> float:
           Calculates total delay in minutes based on number of intermediate stops (10 min per stop)
        
        3. compute_number_of_intermediate_stops() -> int:
           Finds the shortest route between cities and returns the number of intermediate stops
    
    Examples:
        >>> route_and_run("How long does it take for a luxury bus from Colombo to Jaffna with stops at Kurunegala and Vavuniya?")
        "Based on the luxury bus specifications and the 2 intermediate stops..."
        
        >>> route_and_run("Travel time for normal bus from Colombo to Kandy")
        "I'll find the route information first. The shortest route has 2 intermediate stops..."
    
    Note:
        Uses ReAct (Reasoning and Acting) methodology to determine the optimal sequence of 
        tool calls based on available information in the user input. The LLM automatically 
        handles missing information by requesting clarification or using available tools 
        to gather required data.
    """
    def route_and_run(user_input: str) -> str by llm(method="ReAct",tools=[self.compute_average_speed, self.compute_stop_delay, self.compute_number_of_intermediate_stops]);

    can start with `root entry{

        self.response = self.route_and_run(user_input=self.user_input);

        print("Computed Response: ", self.response);
 
            
        
    }
}

walker computeIntermediateStops{

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

                next_node = [->:busRoute:distance==self.min_distance_edge.distance:->(`?City)](?city_type==cityType.end.value);
                visit next_node[0];
            }
        }
        elif (here.city_type == cityType.end.value and here.name == self.cities.end_city){
            
            bus_nodes = [->:busEdge:edge_type=="direct":->(`?Bus)];
            
            selected_bus = bus_nodes[0]; # the first bus is selected out of the all direct buses

            number_of_stops = len(selected_bus.intermediate_stops);
            self.output_number = number_of_stops;
            # print("test");
        } 
    }      
}

cl {

    def app() -> any {

        useEffect(
            lambda -> None
            {
                async def creategraph() -> None
                {
                    is_graph_created = root spawn findGraph();
                    console.log("Graph exists:", is_graph_created.reports[0].data);
                    if (is_graph_created.reports[0].data == False){
                        result = root spawn createGraph();
                    }
                }
            creategraph();
            },
            []
        );

        return <div style={{"width":"100%"}}>
            <HeroSection />
            <SearchBusTable />
            <ChatBot />
        </div>;
    }
}






