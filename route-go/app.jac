import from datetime {datetime}
import from datetime {time}
import from byllm.llm {Model}
import from utils {extract_city_details}

glob llm = Model(model_name="gemini/gemini-2.0-flash");

cl import from react {
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
        start_node_1 = root ++> City(city_type=cityType.start.value, name="Jaffna");
        start_node_2 = root ++> City(city_type=cityType.start.value, name="Colombo");
        start_node_3 = root ++> City(city_type=cityType.start.value, name="Colombo");

        end_node_1 = start_node_1 +>: busRoute(route_number="57") :+> City(city_type=cityType.end.value, name="Colombo");
        end_node_2 = start_node_1 +>: busRoute(route_number="87") :+> City(city_type=cityType.end.value, name="Colombo");
        end_node_3 = start_node_2 +>: busRoute(route_number="57") :+> City(city_type=cityType.end.value, name="Jaffna");
        end_node_4 = start_node_2 +>: busRoute(route_number="87") :+> City(city_type=cityType.end.value, name="Jaffna");
        end_node_5 = start_node_3 +>: busRoute(route_number="01") :+> City(city_type=cityType.end.value, name="Kandy");

        bus_1 = end_node_1 +>: busEdge(edge_type=busEdgeType.direct.value) :+> Bus(
            bus_type=busType.normal.value,
            bus_id="AB1234",
            start_time=time(8, 0),
            end_time=time(12, 0),
            fare=500.0,
            intermediate_stops=["Vavuniya", "Anuradhapura"]
        );

        bus_2 = end_node_1 +>: busEdge(edge_type=busEdgeType.direct.value) :+> Bus(
            bus_type = busType.luxury.value,
            bus_id = "CD5678", 
            start_time = time(8,0), 
            end_time = time(13, 0), 
            fare = 2800.0,
            intermediate_stops = ["Vavuniya", "Kurunagala"]
        ); 

        bus_3 = end_node_2 +>: busEdge(edge_type = busEdgeType.direct.value) :+> Bus(
            bus_type = busType.semi_luxury.value, 
            bus_id = "EF9012", 
            start_time = time(9, 0), 
            end_time = time(15, 0), 
            fare = 2200.0, 
            intermediate_stops = ["Vavuniya", "Puttalam"]
        );

        bus_4 = end_node_2 +>: busEdge(edge_type = busEdgeType.direct.value) :+> Bus(
            bus_type = busType.normal.value, 
            bus_id = "GH3456", 
            start_time = time(10, 30), 
            end_time = time(16, 30), 
            fare = 1600.0, 
            intermediate_stops = ["Vavuniya", "Puttalam"]
        );
        bus_5 = end_node_3 +>: busEdge(edge_type = busEdgeType.direct.value) :+> Bus(
            bus_type = busType.luxury.value, 
            bus_id = "IJ7890", 
            start_time = time(16, 0), 
            end_time = time(2, 0), 
            fare = 3000.0, 
            intermediate_stops = ["Kurunagala", "Vavuniya"]
        );
        bus_6 = end_node_4 +>: busEdge(edge_type = busEdgeType.direct.value) :+> Bus(
            bus_type = busType.normal.value, 
            bus_id = "KL1234", 
            start_time = time(14, 0), 
            end_time = time(22, 0), 
            fare = 1500.0,
            intermediate_stops = ["Puttalam", "Vavuniya"]
        );
        bus_7 = end_node_4 +>: busEdge(edge_type = busEdgeType.via.value) :+> Bus(
            bus_type = busType.semi_luxury.value, 
            bus_id = "MN5678", 
            start_time = time(7, 30), 
            end_time = time(10, 30), 
            fare = 1200.0, 
            intermediate_stops = ["Dehiwala", "Colombo", "Puttalam", "Vavuniya"]
        );
        bus_8 = end_node_5 +>: busEdge(edge_type = busEdgeType.direct.value) :+> Bus(
            bus_type = busType.normal.value, 
            bus_id = "OP9012", 
            start_time = time(12, 0), 
            end_time = time(15, 0), 
            fare = 800.0, 
            intermediate_stops = ["Kegalle", "Mawanella"]
        );

        report {"data":"Graph Created Successfully"};
    }

}

walker findResults{

    has from_city_name: str;
    has to_city_name: str;
    has start_time: str;
    has end_time: str;
    has from_city: str =cityType.start.value;
    has to_city: str = cityType.end.value;

    can search with `root entry{

        print("Searching buses from ", self.from_city_name, " to ", self.to_city_name);
        start_results = [-->(`?City: name==self.from_city_name, city_type==self.from_city)];
        print("start_results",start_results);
        visit[-->start_results];
    }

    can visit_cities with City entry{
        
        print("Now we are in",here);

        if (here.city_type == cityType.end.value and here.name == self.to_city_name){

            start_t:time = datetime.strptime(self.start_time, "%H:%M").time();
            end_t:time = datetime.strptime(self.end_time, "%H:%M").time();
            print("Filtering buses between", start_t, "and", end_t);

            if(start_t<=end_t){
                report[--> (`?Bus: start_time >= start_t, start_time <= end_t)];
            }else{

            report[--> (`?Bus: start_time >= start_t or start_time <= end_t)];
            }
        } else {
        end_results = [-->(`?City: name==self.to_city_name, city_type==self.to_city)];
            print("end_results",end_results);
            visit[-->end_results];
        }
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
        
        print("Now we are in",here);

        bus_routes = [edge-->(`?City: name==self.to_city_name, city_type==self.to_city)];
        for r in bus_routes{
            self.routes.append(r.route_number);
        }

        report {"routes":self.routes};
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

walker findGraph{
    can find with `root entry{

        results = [-->(`?City)];
        report {"data":True} if len(results) > 0 else {"data":False};

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

cl {

    def SearchBusTable(){
            let [from_city_name,setFromCityName] = useState("");
            let [to_city_name,setToCityName] = useState("");
            let [start_time,setStartTime] = useState("");
            let [end_time,setEndTime] = useState("");
            let [clicked,setClick] = useState(False);
            let [buses,setBuses] = useState([]);
            let [bus_routes,setBusRoutes] = useState([]);

            def handleRefresh() -> None{
                setFromCityName("");
                setToCityName("");
                setStartTime("");
                setEndTime("");
                setBuses([]);
                setClick(not clicked);
            }

            async def handleClick() -> None{
                console.log("Button clicked!");

                if (from_city_name == "" or to_city_name == "" or start_time == "" or end_time == ""){
                    alert("Please fill in all fields before searching.");
                    return;
                }
                else{
                    console.log(f"From: {from_city_name}, To: {to_city_name}, Start Time: {start_time}, End Time: {end_time}");

                    setClick(not clicked);
                    setBuses([]);
                    setBusRoutes([]);

                    results = root spawn findResults(
                    from_city_name=from_city_name,
                    to_city_name=to_city_name,
                    start_time=start_time,
                    end_time=end_time
                    );

                    console.log(f"Found {results.reports.length} reports.");

                    if (results.reports.length >0){
                        let newBuses = [];
                        for results in results.reports{
                            for bus in results{
                                console.log("Bus Found:", bus);
                                newBuses.push(bus);
                            }
                        }
                        setBuses(newBuses);

                        routes = root spawn findRoutes(
                            from_city_name=from_city_name,
                            to_city_name=to_city_name
                        );

                        console.log("Routes Found:", routes.reports[0].routes);
                        setBusRoutes(bus_routes.concat(routes.reports[0].routes));

                        console.log("Bus Routes:", bus_routes);


                    }

                    console.log(f"Found {buses.length} buses.");
                    console.log(buses);
                }
            }

            return 
        <div style={{
                "background": "linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)",
                "padding": "40px 20px",
                "borderRadius": "0px", 
                # "width": "100%",
                "color": "white",
        }}>

            <h3 style={{ 
                "marginBottom": "20px", 
                "fontWeight": "600"
                }}>
                Search Bus Time Table
            </h3>

            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                gap: "20px"
            }}>

                <div>
                    <label>From *</label>
                    <select required={True} style={{
                        "width": "100%",
                        "padding": "10px",
                        "borderRadius": "4px",
                        "border": "1px solid #ccc",
                        "fontSize": "0.9rem",
                }} value={from_city_name} onChange={lambda e:any -> None { setFromCityName(e.target.value);}}>
                        <option value="" disabled={True}>Select Start</option>
                        <option value="Colombo">Colombo</option>
                        <option value="Jaffna">Jaffna</option>
                    </select>
                </div>

                <div>
                    <label>To *</label>
                    <select required={True} style={{
                        "width": "100%",
                        "padding": "10px",
                        "borderRadius": "4px",
                        "border": "1px solid #ccc",
                        "fontSize": "0.9rem",
                }} value={to_city_name} onChange={lambda e:any -> None { setToCityName(e.target.value);}}>
                        <option value="" disabled={True}>Select Destination</option>
                        <option value="Colombo">Colombo</option>
                        <option value="Jaffna">Jaffna</option>
                        <option value="Kandy">Kandy</option>
                    </select>
                </div>

                <div>
                    <label>Time Range:Start Time</label>
                    <select required={True} style={{
                        "width": "100%",
                        "padding": "10px",
                        "borderRadius": "4px",
                        "border": "1px solid #ccc",
                        "fontSize": "0.9rem",
                }} value={start_time} onChange={lambda e:any -> None { setStartTime(e.target.value);}}>
                        <option value="" disabled={True}>Select Start Time</option>
                        <option value="00:00">00:00</option>
                        <option value="01:00">01:00</option>
                        <option value="02:00">02:00</option>
                        <option value="03:00">03:00</option>
                        <option value="04:00">04:00</option>
                        <option value="05:00">05:00</option>
                        <option value="06:00">06:00</option>
                        <option value="07:00">07:00</option>
                        <option value="08:00">08:00</option>
                        <option value="09:00">09:00</option>
                        <option value="10:00">10:00</option>
                        <option value="11:00">11:00</option>
                        <option value="12:00">12:00</option>
                        <option value="13:00">13:00</option>
                        <option value="14:00">14:00</option>
                        <option value="15:00">15:00</option>
                        <option value="16:00">16:00</option>
                        <option value="17:00">17:00</option>
                        <option value="18:00">18:00</option>
                        <option value="19:00">19:00</option>
                        <option value="20:00">20:00</option>
                        <option value="21:00">21:00</option>
                        <option value="22:00">22:00</option>
                        <option value="23:00">23:00</option>
                    </select>
                </div>

                <div>
                    <label>Time Range:End Time</label>
                    <select required={True} style={{
                        "width": "100%",
                        "padding": "10px",
                        "borderRadius": "4px",
                        "border": "1px solid #ccc",
                        "fontSize": "0.9rem",
                }} value={end_time} onChange={lambda e:any -> None { setEndTime(e.target.value);}}>
                        <option value="" disabled={True}>Select End Time</option>
                        <option value="00:00">00:00</option>
                        <option value="01:00">01:00</option>
                        <option value="02:00">02:00</option>
                        <option value="03:00">03:00</option>
                        <option value="04:00">04:00</option>
                        <option value="05:00">05:00</option>
                        <option value="06:00">06:00</option>
                        <option value="07:00">07:00</option>
                        <option value="08:00">08:00</option>
                        <option value="09:00">09:00</option>
                        <option value="10:00">10:00</option>
                        <option value="11:00">11:00</option>
                        <option value="12:00">12:00</option>
                        <option value="13:00">13:00</option>
                        <option value="14:00">14:00</option>
                        <option value="15:00">15:00</option>
                        <option value="16:00">16:00</option>
                        <option value="17:00">17:00</option>
                        <option value="18:00">18:00</option>
                        <option value="19:00">19:00</option>
                        <option value="20:00">20:00</option>
                        <option value="21:00">21:00</option>
                        <option value="22:00">22:00</option>
                        <option value="23:00">23:00</option>
                    </select>
                </div>

                <div style={{
                    display: "flex",
                    alignItems: "flex-end"
                }}>
                    <button style={{
                        "background": "#ff7f32",
                        "border": "none",
                        "padding": "10px 25px",
                        "borderRadius": "4px",
                        "cursor": "pointer",
                        "fontSize": "1rem",
                        "fontWeight": "600",
                        "color": "white",
                        "width": "100%"
                    }} onClick={handleClick} disabled={clicked}>
                        Search
                    </button>
                </div>

            </div>
            {(<div style={{"display":"flex","flexDirection":"column","padding":"20px 20px"}}>
                <div style={{"display":"flex","justifyContent":"flex-end","marginBottom":"15px"}}>
                    <button style={{
                        "background": "#ff3232ff",
                        "border": "none",
                        "padding": "10px 25px",
                        "borderRadius": "4px",
                        "cursor": "pointer",
                        "fontSize": "1rem",
                        "fontWeight": "600",
                        "color": "white",
                        "width": "100px",
                        "height":"40px",
                        "textAlign":"center"
                    }} onClick={handleRefresh}>
                        Refresh
                    </button>
                </div>
                
                <div style={{"overflowX":"auto"}}>
                    <table style={{ width: "100%", borderCollapse: "collapse", backgroundColor: "rgba(255,255,255,0.05)" }}>
                        <thead>
                            <tr style={{ backgroundColor: "rgba(255,127,50,0.1)", borderBottom: "2px solid #ff7f32" }}>
                                <th style={{ borderBottom: "2px solid #ff7f32", padding: "12px", textAlign: "left", color: "#ff7f32", fontWeight: "600" }}>Bus ID</th>
                                <th style={{ borderBottom: "2px solid #ff7f32", padding: "12px", textAlign: "left", color: "#ff7f32", fontWeight: "600" }}>Bus Type</th>
                                <th style={{ borderBottom: "2px solid #ff7f32", padding: "12px", textAlign: "left", color: "#ff7f32", fontWeight: "600" }}>Start Time</th>
                                <th style={{ borderBottom: "2px solid #ff7f32", padding: "12px", textAlign: "left", color: "#ff7f32", fontWeight: "600" }}>End Time</th>
                                <th style={{ borderBottom: "2px solid #ff7f32", padding: "12px", textAlign: "left", color: "#ff7f32", fontWeight: "600" }}>Fare (LKR)</th>
                                <th style={{ borderBottom: "2px solid #ff7f32", padding: "12px", textAlign: "left", color: "#ff7f32", fontWeight: "600" }}>Intermediate Stops</th>
                            </tr>
                        </thead>

                        <tbody>
                            {buses.map(lambda bus:any -> any {
                                return <tr key={bus.bus_id} style={{"borderBottom":"1px solid rgba(255,255,255,0.1)","backgroundColor":"rgba(255,255,255,0.02)","transition":"backgroundColor 0.2s"}}>
                                    <td style={{"padding":"12px","color":"#fff"}}>{bus.bus_id}</td>
                                    <td style={{"padding":"12px","color":"#ffffffff","fontWeight":"600"}}>{bus.bus_type}</td>
                                    <td style={{"padding":"12px","color":"#fff"}}>{bus.start_time}</td>
                                    <td style={{"padding":"12px","color":"#fff"}}>{bus.end_time}</td>
                                    <td style={{"padding":"12px","color":"#4ade80","fontWeight":"600"}}>Rs. {bus.fare.toFixed(2)}</td>
                                    <td style={{"padding":"12px","color":"#fff","fontSize":"0.9rem"}}>{bus.intermediate_stops.join(", ")}</td>
                                </tr>;
                            })}
                        </tbody>
                    </table>
                </div>
              </div>)if clicked 
            else(<div style={{"height":"auto","display":"flex","alignItems":"center","justifyContent":"center","minheight":"200px"}}>
            <h1 style={{"textAlign":"center","fontSize":"1rem","padding":"2px 2px"}}>Search some buses!!!</h1></div>)}
        </div>;
        }

    def HeroSection(){
        return <div style={{
                "display": "flex",
                "flexDirection": "column",
                "alignItems": "center",
                "justifyContent": "center",
                "height": "100vh",
                "padding":"20px 20px",
                "background": "linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)",
                "color": "white",
                "textAlign": "center",
                "position": "relative",
                "overflow": "hidden"
            }}
        >
            
            <div style={{
                "position": "absolute",
                "top": "20%",
                "left": "10%",
                "width": "100px",
                "height": "100px",
                "background": "linear-gradient(45deg, #667eea, #764ba2)",
                "borderRadius": "50%",
                "opacity": "0.1",
                "animation": "float 6s ease-in-out infinite"
            }}></div>
            <div style={{
                "position": "absolute",
                "top": "60%",
                "right": "15%",
                "width": "150px",
                "height": "150px",
                "background": "linear-gradient(45deg, #ff6b6b, #ee5a24)",
                "borderRadius": "30%",
                "opacity": "0.08",
                "animation": "float 8s ease-in-out infinite reverse"
            }}></div>

            <div style={{
                "maxWidth": "900px",
                "animation": "slideInUp 0.8s ease-out",
                "zIndex": 1
            }}>
                
                <div style={{
                    "display": "inline-block",
                    "background": "rgba(255, 255, 255, 0.1)",
                    "backdropFilter": "blur(20px)",
                    "border": "1px solid rgba(255, 255, 255, 0.2)",
                    "borderRadius": "50px",
                    "padding": "8px 20px",
                    "fontSize": "0.9rem",
                    "marginBottom": "2rem",
                    "fontWeight": "500",
                    "letterSpacing": "0.5px"
                }}>
                    ✨ Smart Transportation Solution
                </div>

                <h1 style={{
                    "fontSize": "4rem",
                    "fontWeight": "800",
                    "marginBottom": "1.5rem",
                    "background": "linear-gradient(135deg, #ffffff 0%, #e0e7ff 100%)",
                    "WebkitBackgroundClip": "text",
                    "WebkitTextFillColor": "transparent",
                    "letterSpacing": "-0.02em",
                    "lineHeight": "1.1"
                }}>
                    Route-Go<br/>
                    <span style={{
                        "fontSize": "3rem",
                        "background": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                        "WebkitBackgroundClip": "text",
                        "WebkitTextFillColor": "transparent"
                    }}>Sri Lanka</span>
                </h1>
                
                <p style={{
                    "fontSize": "1.3rem",
                    "marginBottom": "3rem",
                    "opacity": "0.8",
                    "lineHeight": "1.7",
                    "fontWeight": "300",
                    "maxWidth": "600px",
                    "margin": "0 auto 3rem auto"
                }}>
                    Discover optimal bus routes across all 25 districts with real-time filtering and intelligent path finding
                </p>

                
                <div style={{
                    "display": "flex",
                    "gap": "1rem",
                    "justifyContent": "center",
                    "marginBottom": "4rem",
                    "flexWrap": "wrap"
                }}>
                    <button 
                        onClick={SearchBusTable}
                        style={{
                        "background": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                        "color": "white",
                        "border": "none",
                        "padding": "16px 32px",
                        "fontSize": "1.1rem",
                        "borderRadius": "12px",
                        "cursor": "pointer",
                        "fontWeight": "600",
                        "boxShadow": "0 8px 32px rgba(102, 126, 234, 0.3)",
                        "transition": "all 0.3s ease",
                        "transform": "translateY(0)",
                        "minWidth": "180px"
                    }}
                    >
                        🚀 Start Browsing
                    </button>
                </div>

                
                <div style={{
                    "display": "grid",
                    "gridTemplateColumns": "repeat(auto-fit, minmax(200px, 1fr))",
                    "gap": "1.5rem",
                    "maxWidth": "700px",
                    "margin": "0 auto"
                }}>
                    <div style={{
                        "background": "rgba(255, 255, 255, 0.05)",
                        "backdropFilter": "blur(20px)",
                        "border": "1px solid rgba(255, 255, 255, 0.1)",
                        "borderRadius": "16px",
                        "padding": "2rem 1.5rem",
                        "textAlign": "center",
                        "transition": "all 0.3s ease"
                    }}
                    >
                        <div style={{ 
                            "fontSize": "2.5rem", 
                            "marginBottom": "1rem",
                            "background": "linear-gradient(135deg, #667eea, #764ba2)",
                            "borderRadius": "50%",
                            "width": "60px",
                            "height": "60px",
                            "display": "flex",
                            "alignItems": "center",
                            "justifyContent": "center",
                            "margin": "0 auto 1rem auto"
                        }}>🗺️</div>
                        <h4 style={{ "fontSize": "1.1rem", "marginBottom": "0.5rem", "fontWeight": "600" }}>25 Districts</h4>
                        <p style={{ "fontSize": "0.9rem", "opacity": "0.7", "margin": 0 }}>Complete coverage</p>
                    </div>

                    <div style={{
                        "background": "rgba(255, 255, 255, 0.05)",
                        "backdropFilter": "blur(20px)",
                        "border": "1px solid rgba(255, 255, 255, 0.1)",
                        "borderRadius": "16px",
                        "padding": "2rem 1.5rem",
                        "textAlign": "center",
                        "transition": "all 0.3s ease"
                    }}
                
                    >
                        <div style={{ 
                            "fontSize": "2.5rem", 
                            "marginBottom": "1rem",
                            "background": "linear-gradient(135deg, #ff6b6b, #ee5a24)",
                            "borderRadius": "50%",
                            "width": "60px",
                            "height": "60px",
                            "display": "flex",
                            "alignItems": "center",
                            "justifyContent": "center",
                            "margin": "0 auto 1rem auto"
                        }}>⏰</div>
                        <h4 style={{ "fontSize": "1.1rem", "marginBottom": "0.5rem", "fontWeight": "600" }}>Smart Timing</h4>
                        <p style={{ "fontSize": "0.9rem", "opacity": "0.7", "margin": 0 }}>Real-time filtering</p>
                    </div>

                    <div style={{
                        "background": "rgba(255, 255, 255, 0.05)",
                        "backdropFilter": "blur(20px)",
                        "border": "1px solid rgba(255, 255, 255, 0.1)",
                        "borderRadius": "16px",
                        "padding": "2rem 1.5rem",
                        "textAlign": "center",
                        "transition": "all 0.3s ease"
                    }}
                    >
                        <div style={{ 
                            "fontSize": "2.5rem", 
                            "marginBottom": "1rem",
                            "background": "linear-gradient(135deg, #00d2ff, #3a7bd5)",
                            "borderRadius": "50%",
                            "width": "60px",
                            "height": "60px",
                            "display": "flex",
                            "alignItems": "center",
                            "justifyContent": "center",
                            "margin": "0 auto 1rem auto"
                        }}>🚌</div>
                        <h4 style={{ "fontSize": "1.1rem", "marginBottom": "0.5rem", "fontWeight": "600" }}>Multi-Route</h4>
                        <p style={{ "fontSize": "0.9rem", "opacity": "0.7", "margin": 0 }}>Best connections</p>
                    </div>
                </div>
            </div>
        </div>;
    }

    def ChatWindow(props: any) -> any {
        let [messages, setMessages] = useState([
            {sender: "bot", text: "Hi! I'm RouteGo Assistant. How can I help you find buses today?", id: 0}
        ]);
        let [inputValue, setInputValue] = useState("");
        let [messageId, setMessageId] = useState(1);

        # useEffect(
        #     lambda -> None {},
        #     []
        # );

        async def handleSendMessage() -> None {
            if not inputValue {
                return;
            }

            results = root spawn computeBusTime(user_input=inputValue);

            let userMsg = {sender: "user", text: inputValue, id: messageId};
            let botMsg = {sender: "bot", text: results.reports[0].response, id: messageId + 1};
            
            setMessages(messages.concat([userMsg, botMsg]));
            setMessageId(messageId + 2);
            setInputValue("");
        }

        def handleInputChange(e: any) -> None {
            setInputValue(e.target.value);
        }

        def handleKeyPress(e: any) -> None {
            if e.key == "Enter" {
                e.preventDefault();
                handleSendMessage();
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
                    onClick={lambda -> None { props.closeChat(); }}
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
        return <div>
            <ChatWindow
                closeChat={lambda -> None { setIsChatOpen(false); }}
            />
            <button
                onClick={lambda -> None { setIsChatOpen(false); }}
                style={{
                    "position": "fixed",
                    "bottom": "100px",
                    "right": "20px",
                    "width": "100px",
                    "height": "200px",
                    "background": "white",
                    "borderRadius": "10px",
                    "boxShadow": "0 4px 12px rgba(0,0,0,0.2)",
                    "display": "flex",
                    "flexDirection": "column",
                    "zIndex": "999",
                    "position": "absolute",
                    "top": "0",
                    "opacity": "0",
                    "cursor":"pointer"
                }}
            >
            </button>
        </div>;
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






