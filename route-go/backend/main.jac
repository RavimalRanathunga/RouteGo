import from byllm.lib {Model}
glob llm = Model(model_name = "gemini/gemini-2.0-flash")

def recommend_budget_bus(bus_info: str) -> str by llm();
    Budget_friendly_bus = [];
    for bus in available_buses {
        if bus.fare<= user_budget;
            Budget_friendly_bus.append(bus);
        }
    return
        f"Recommended Buses within budget Rs.{user_budget}:\n" +
        "\n".join([f"Bus {bus.bus_id}: {bus.bus_type}, Fare Rs.{bus.fare}, Time: {bus.starting_time}-{bus.reach_time}" for bus in Budget_friendly_bus]);
    }

def analyze_price_comparison(bus_list: str, budget: float) -> str by llm(method='Reason');


enum cityType
{
    start = "start",
    end = "end",
}

enum busType
{   
    normal = "normal",
    semi_luxury = "semi-luxury",
    luxury = "luxury",
}

enum busedgeType
{
    direct = "direct",
    via = "via",
}



node city
{
    has city_type: cityType;
    has name: str;
}

node bus
{
    has bus_type: busType;
    has bus_id: str;
    has starting_time: str;
    has reach_time:str;
    has fare: float;
    has intermidiate_stops: list[str];
}

edge busRoute
{
    has route_no: str;
}

edge busedge
{
    has bus_edge_type: busedgeType;
} 

walker createGraph
{
    can create with `root entry
    {
        start_node_1 = root++>city(city_type=cityType.start, name = "Jaffna");
        start_node_2 = root++>city(city_type=cityType.start, name = "Colombo");
        start_node_3 = root++>city(city_type=cityType.start, name = "Colombo");

        end_node_1 = start_node_1+>:busRoute(route_no = "57"):+>city(city_type=cityType.end, name = "Colombo");
        end_node_2 = start_node_1+>:busRoute(route_no = "87"):+>city(city_type=cityType.end, name = "Colombo");
        end_node_3 = start_node_2+>:busRoute(route_no = "57"):+>city(city_type=cityType.end, name = "Jaffna");
        end_node_4 = start_node_2+>:busRoute(route_no = "87"):+>city(city_type=cityType.end, name = "Jaffna");
        end_node_5 = start_node_3+>:busRoute(route_no = "01"):+>city(city_type=cityType.end, name = "Kandy");

        bus_1 = end_node_1+>:busedge(bus_edge_type = busedgeType.direct)+>:bus(bus_type = busType.normal, bus_id = "AB1234", starting_time = "06:30", reach_time = "12.30", fare = 1500.0, intermidiate_stops = ["Vavuniya", "Kurunagala"]);
        bus_2 = end_node_1+>:busedge(bus_edge_type = busedgeType.direct)+>:bus(bus_type = busType.luxury, bus_id = "CD5678", starting_time = "08:00", reach_time = "13.00", fare = 2800.0, intermidiate_stops = ["Vavuniya", "Kurunagala"]); 
        bus_3 = end_node_2+>:busedge(bus_edge_type = busedgeType.direct)+>:bus(bus_type = busType.semi_luxury, bus_id = "EF9012", starting_time = "09:00", reach_time = "15.00", fare = 2200.0, intermidiate_stops = ["Vavuniya", "Puttalam"]);
        bus_4 = end_node_2+>:busedge(bus_edge_type = busedgeType.direct)+>:bus(bus_type = busType.normal, bus_id = "GH3456", starting_time = "10:30", reach_time = "16.30", fare = 1600.0, intermidiate_stops = ["Vavuniya", "Puttalam"]);
        bus_5 = end_node_3+>:busedge(bus_edge_type = busedgeType.direct)+>:bus(bus_type = busType.luxury, bus_id = "IJ7890", starting_time = "16:00", reach_time = "02.00", fare = 3000.0, intermidiate_stops = ["Kurunagala", "Vavuniya"]);
        bus_6 = end_node_4+>:busedge(bus_edge_type = busedgeType.direct)+>:bus(bus_type = busType.normal, bus_id = "KL1234", starting_time = "14:00", reach_time = "22.00", fare = 1500.0, intermidiate_stops = ["Puttalam", "Vavuniya"]);
        bus_7 = end_node_4+>:busedge(bus_edge_type = busedgeType.via)+>:bus(bus_type = busType.semi_luxury, bus_id = "MN5678", starting_time = "07:30", reach_time = "10.30", fare = 1200.0, intermidiate_stops = ["Dehiwala","Colombo", "Puttalam"," Vavuniya"]);
        bus_8 = end_node_5+>:busedge(bus_edge_type = busedgeType.direct)+>:bus(bus_type = busType.normal, bus_id = "OP9012", starting_time = "12:00", reach_time = "15.00", fare = 800.0, intermidiate_stops = ["Kegalle", "Mawanella"]);
    }
}

walker filterRoutes
{
    
}

walker findResults
{
    has from_city: str;
    has to_city: str;
    has from_city_type: cityType;
    has to_city_type: cityType;
    has start_time: str;
    has end_time: str;
    has available_buses: list[bus] = [];

    can search with `root entry
    {
        start_cities = [root-->(`?city)(?city_type == from_city_type , name == from_city)];
        for start_city in start_cities {
            end_cities = [(?city_type == to_city_type , name == to_city)];
            for end_city in end_cities {
                buses_on_route = [end_city+>:busedge+>=(`?bus)];
                filtered_buses = buses_on_route(?starting_time >= start_time and starting_time <= end_time);
                available_buses += filtered_buses;
                for bus in filtered_buses {
                    print(f"Bus ID: {bus.bus_id}, Type: {bus.bus_type}, Departure: {bus.starting_time}, Arrival: {bus.reach_time}, Fare: Rs.{bus.fare}, Stops: {bus.intermidiate_stops}");
                }
            }
        }
    }
}

walker recommendBus
{
    has available_buses: list[bus];
    has user_budget: float;
    has recommendation: str = "";

    can recommend with `root entry
    {
        if (len(available_buses) == 0) {
            print("No buses available");
        }
        else {
            bus_list = "";
            for bus in available_buses {
                bus_list += f"Bus {bus.bus_id}: {bus.bus_type}, Fare Rs.{bus.fare}, Time: {bus.starting_time}-{bus.reach_time}\n";
            }

            # Call 1: LLM - Analyze buses and recommend budget-friendly option
            recommendation = recommend_budget_bus(bus_list);
            print(f"Budget Recommendation: {recommendation}");

            # Call 2: LLM with Reasoning - Get price comparison and best deal
            price_analysis = analyze_price_comparison(bus_list, user_budget);
            print(f"Price Analysis: {price_analysis}");
        }
    }
}