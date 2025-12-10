cl import from react{
    useState,
    useEffect
}

cl def SearchBusTable(){
            let [from_city_name,setFromCityName] = useState("");
            let [to_city_name,setToCityName] = useState("");
            let [start_time,setStartTime] = useState("");
            let [end_time,setEndTime] = useState("");
            let [clicked,setClick] = useState(False);
            let [buses,setBuses] = useState([]);
            let [bus_routes,setBusRoutes] = useState([]);
            let [selectedBusType,setSelectedBusType] = useState("all");
            let [selectedRouteType,setSelectedRouteType] = useState("all");
            let [selectedRoute,setSelectedRoute] = useState("all");

            def handleRefresh() -> None{
                setFromCityName("");
                setToCityName("");
                setStartTime("");
                setEndTime("");
                setBuses([]);
                setClick(not clicked);
                setBusRoutes([]);
                setSelectedBusType("all");
                setSelectedRouteType("all");
            }
            
            async def handleFilters() -> None{
                results = root spawn filterBuses(
                        from_city_name=from_city_name,
                        to_city_name=to_city_name,
                        start_time=start_time,
                        end_time=end_time,
                        route_no= selectedRoute if selectedRoute != "all" else "",
                        bus_type= selectedBusType if selectedBusType != "all" else "",
                        bus_edge_type= selectedRouteType if selectedRouteType != "all" else ""
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
                    }
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

                    results = root spawn filterBuses(
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
        <div id="bustable"style={{
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
                        <option value="colombo">Colombo</option>
                        <option value="jaffna">Jaffna</option>
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
                        <option value="colombo">Colombo</option>
                        <option value="jaffna">Jaffna</option>
                        <option value="kandy">Kandy</option>
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
                    <button style={{"background":"#ff3232ff","border":"none","padding":"10px 10px","borderRadius":"4px","cursor":"pointer","fontSize":"1rem","fontWeight":"600","color":"white","width":"100px","height":"40px","textAlign":"center"}} onClick={handleRefresh}>
                        Refresh
                    </button>
                </div>

                <div style={{"display":"grid","gridTemplateColumns":"repeat(auto-fit, minmax(200px, 1fr))","gap":"15px","marginBottom":"20px","padding":"15px","backgroundColor":"rgba(255,255,255,0.05)","borderRadius":"8px"}}>
                    <div>
                        <label style={{"display":"block","marginBottom":"8px","fontSize":"0.9rem","fontWeight":"600","color":"#ff7f32"}}>Filter by Bus Type</label>
                        <select style={{"width":"100%","padding":"10px","borderRadius":"4px","border":"1px solid #ff7f32","fontSize":"0.9rem","backgroundColor":"rgba(255,255,255,0.1)","color":"white"}} value={selectedBusType} onChange={lambda e: any -> None { setSelectedBusType(e.target.value); }} required={True}>
                            <option value="all" style={{"color":"black"}} disabled={True}>All Bus Types</option>
                            <option value="normal" style={{"color":"black"}}>Normal</option>
                            <option value="semi_luxury" style={{"color":"black"}}>Semi Luxury</option>
                            <option value="luxury" style={{"color":"black"}}>Luxury</option>
                        </select>
                    </div>

                    <div>
                        <label style={{"display":"block","marginBottom":"8px","fontSize":"0.9rem","fontWeight":"600","color":"#ff7f32"}}>Filter by Route Type</label>
                        <select style={{"width":"100%","padding":"10px","borderRadius":"4px","border":"1px solid #ff7f32","fontSize":"0.9rem","backgroundColor":"rgba(255,255,255,0.1)","color":"white"}} value={selectedRouteType} onChange={lambda e: any -> None { setSelectedRouteType(e.target.value); }} required={True}>
                            <option value="all" style={{"color":"black"}} disabled={True}>All Route Types</option>
                            <option value="direct" style={{"color":"black"}}>Direct</option>
                            <option value="via" style={{"color":"black"}}>Via (Intermediate)</option>
                        </select>
                    </div>

                    <div>
                        <label style={{"display":"block","marginBottom":"8px","fontSize":"0.9rem","fontWeight":"600","color":"#ff7f32"}}>Filter by Route</label>
                        <select style={{"width":"100%","padding":"10px","borderRadius":"4px","border":"1px solid #ff7f32","fontSize":"0.9rem","backgroundColor":"rgba(255,255,255,0.1)","color":"white"}} value={selectedRoute} onChange={lambda e: any -> None { setSelectedRoute(e.target.value); }} required={True}>
                            <option value="all" style={{"color":"black"}} disabled={True}>All Types</option>
                            {bus_routes.map(lambda route:any -> any {
                                return <option key={route} value={route} style={{"color":"black"}}>{route}</option>;
                            })}
                        </select>
                    </div>

                    <div style={{"display":"flex","alignItems":"flex-end"}}>
                        <button style={{"background":"#667eea","border":"none","padding":"10px 20px","borderRadius":"4px","cursor":"pointer","fontSize":"0.9rem","fontWeight":"600","color":"white","width":"100%"}} onClick={handleFilters}>
                            Filter Results
                        </button>
                    </div>
                </div>
                
                <div style={{"overflowX":"auto"}}>
                    <table style={{ "width": "100%", "borderCollapse": "collapse", "backgroundColor": "rgba(255,255,255,0.05)" }}>
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
            </div>)if (clicked and buses.length > 0) 
            else((<div style={{"height":"auto","display":"flex","alignItems":"center","justifyContent":"center","minheight":"200px"}}>
                <h1 style={{"textAlign":"center","fontSize":"1rem","padding":"2px 2px"}}>Search some buses!!!</h1>
                </div>) if not clicked else (<div style={{"height":"auto","display":"flex","alignItems":"center","justifyContent":"center","minheight":"200px","columnGap":"50px","padding":"10px","flexDirection":"column"}}>
                <h1 style={{"textAlign":"center","fontSize":"1rem","padding":"2px 2px"}}>No buses found for the given criteria.</h1>
                <div style={{"display":"flex","justifyContent":"flex-end","marginBottom":"15px"}}>
                    <button style={{"background":"#ff3232ff","border":"none","padding":"10px 10px","borderRadius":"4px","cursor":"pointer","fontSize":"1rem","fontWeight":"600","color":"white","width":"100px","height":"40px","textAlign":"center"}} onClick={handleRefresh}>
                        Refresh
                    </button>
                </div>
            </div>
            ))}
        </div>;
        }