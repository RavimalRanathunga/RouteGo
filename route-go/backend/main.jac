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
    has city_type: str;
    has name: str;
}

node bus
{
    has bus_type: str;
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
    has bus_edge_type: str;
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
    has route_no: str = "";
    has bus_type: str = "";
    has bus_edge_type:str = "";

    can filterRoutes with city entry
    {
        
    }
}

walker findResults
{
    has from_city: cityType;
    has from_city_name: str;
    has to_city: cityType;
    has to_city_name: str;
    has start_time: str;
    has end_time: str;

    can search with `root entry
    {
        start_results = [-->(`?city)](?city_type==self.from_city,name==self.from_city_name);
        visit[-->start_results];
        visit[-->(`?city)](?city_type==self.to_city,name==self.to_city_name);
        visit[-->(`?bus)]
    }

    can report_buses with bus entry
    {
        report here;
    }
}
