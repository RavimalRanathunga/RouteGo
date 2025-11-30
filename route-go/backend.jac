import from datetime {time}
import from datetime {datetime}

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
    has bus_route:list[str] = [];

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
                if([--> (`?Bus: start_time >= start_t, start_time <= end_t)]){
                    print("Buses found in route", here);

                    buses = [--> (`?Bus: start_time >= start_t, start_time <= end_t)];
                    report {"Buses": buses , "Route": self.bus_route };
                }
            }else{

                buses = [--> (`?Bus: start_time >= start_t or start_time <= end_t)];
                report {"Buses": buses , "Route": self.bus_route };
            }
        } else {
            end_results = [-->(`?City: name==self.to_city_name, city_type==self.to_city)];
            route_edges = [edge-->(`?City: name==self.to_city_name, city_type==self.to_city)];
            print("route_edges",route_edges);
            for edges in route_edges{
                self.bus_route.append(edges.route_number);
            }
            print("end_results",end_results);
            visit[-->end_results];
        }
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

walker findResults{

    has from_city_name: str;
    has to_city_name: str;
    has start_time: str;
    has end_time: str;
    has from_city: str =cityType.start.value;
    has to_city: str = cityType.end.value;
    has bus_route:list[str] = [];

    can search with `root entry{

        print("Searching buses from ", self.from_city_name, " to ", self.to_city_name);
        start_results = [-->(`?City: name==self.from_city_name, city_type==self.from_city)];
        print("start_results",start_results);
        visit[-->start_results];
    }

    can visit_cities with City entry{
        
        print("Now we are in",here);

            end_results = [-->(`?City: name==self.to_city_name, city_type==self.to_city)];
            route_edges = [edge-->(`?City: name==self.to_city_name, city_type==self.to_city)];
            print("route_edges",route_edges);
            for edges in route_edges{
                self.bus_route.append(edges.route_number);
            }
            print("end_results",end_results);
            visit[-->end_results];
    }
}





