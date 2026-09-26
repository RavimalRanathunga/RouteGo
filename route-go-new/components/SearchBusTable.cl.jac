# filterBuses/findRoutes are deliberately NOT imported here: importing a walker
# into a client-inferred file breaks the Vite bundle (it emits an ES import for
# a name the compiled server stub never exports), even though it resolves the
# `jac check` warnings on `results.reports`. Registration happens via main.jac.
cl def:pub SearchBusTable() -> JsxElement {
            has from_city_name: str = "";
            has to_city_name: str = "";
            has start_time: str = "";
            has end_time: str = "";
            has clicked: bool = False;
            has buses: list[any] = [];
            has bus_routes: list[str] = [];
            has selectedBusType: str = "all";
            has selectedRouteType: str = "all";
            has selectedRoute: str = "all";

            def handle_from_city(e: ChangeEvent) { from_city_name = e.target.value; }
            def handle_to_city(e: ChangeEvent) { to_city_name = e.target.value; }
            def handle_start_time(e: ChangeEvent) { start_time = e.target.value; }
            def handle_end_time(e: ChangeEvent) { end_time = e.target.value; }
            def handle_bus_type(e: ChangeEvent) { selectedBusType = e.target.value; }
            def handle_route_type(e: ChangeEvent) { selectedRouteType = e.target.value; }
            def handle_route(e: ChangeEvent) { selectedRoute = e.target.value; }

            def handle_refresh(_e: MouseEvent) {
                from_city_name = "";
                to_city_name = "";
                start_time = "";
                end_time = "";
                buses = [];
                clicked = not clicked;
                bus_routes = [];
                selectedBusType = "all";
                selectedRouteType = "all";
            }

            async def handle_filters() -> None {
                results = root spawn filterBuses(
                        from_city_name=from_city_name,
                        to_city_name=to_city_name,
                        start_time=start_time,
                        end_time=end_time,
                        route_no= selectedRoute if selectedRoute != "all" else "",
                        bus_type= selectedBusType if selectedBusType != "all" else "",
                        bus_edge_type= selectedRouteType if selectedRouteType != "all" else ""
                    );

                console.log(f"Found {len(results.reports)} reports.");

                if (len(results.reports) > 0){
                    newBuses = [];
                    for result in results.reports{
                        for bus in result{
                            console.log("Bus Found:", bus);
                            newBuses = newBuses + [bus];
                        }
                    }
                    buses = newBuses;
                }
            }

            async def handle_click() -> None {
                console.log("Button clicked!");

                if (from_city_name == "" or to_city_name == "" or start_time == "" or end_time == ""){
                    alert("Please fill in all fields before searching.");
                    return;
                }
                else{
                    console.log(f"From: {from_city_name}, To: {to_city_name}, Start Time: {start_time}, End Time: {end_time}");

                    clicked = not clicked;
                    buses = [];
                    bus_routes = [];

                    results = root spawn filterBuses(
                        from_city_name=from_city_name,
                        to_city_name=to_city_name,
                        start_time=start_time,
                        end_time=end_time
                    );

                    console.log(f"Found {len(results.reports)} reports.");

                    if (len(results.reports) > 0){
                        newBuses = [];
                        for result in results.reports{
                            for bus in result{
                                console.log("Bus Found:", bus);
                                newBuses = newBuses + [bus];
                            }
                        }
                        buses = newBuses;

                        routes = root spawn findRoutes(
                            from_city_name=from_city_name,
                            to_city_name=to_city_name
                        );

                        console.log("Routes Found:", routes.reports[0].routes);
                        bus_routes = bus_routes + routes.reports[0].routes;

                        console.log("Bus Routes:", bus_routes);
                    }

                    console.log(f"Found {len(buses)} buses.");
                    console.log(buses);
                }
            }

            return
        <div id="bustable"style={{
                "background": "linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)",
                "padding": "40px 20px",
                "borderRadius": "0px",
                "color": "white",
        }}>

            <h3 style={{
                "marginBottom": "20px",
                "fontWeight": "600"
                }}>
                Search Bus Time Table
            </h3>

            <div style={{
                "display": "grid",
                "gridTemplateColumns": "repeat(auto-fit, minmax(180px, 1fr))",
                "gap": "20px"
            }}>

                <div>
                    <label>From *</label>
                    <select required={True} style={{
                        "width": "100%",
                        "padding": "10px",
                        "borderRadius": "4px",
                        "border": "1px solid #ccc",
                        "fontSize": "0.9rem",
                }} value={from_city_name} onChange={handle_from_city}>
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
                }} value={to_city_name} onChange={handle_to_city}>
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
                }} value={start_time} onChange={handle_start_time}>
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
                }} value={end_time} onChange={handle_end_time}>
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
                    "display": "flex",
                    "alignItems": "flex-end"
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
                    }} onClick={handle_click} disabled={clicked}>
                        Search
                    </button>
                </div>

            </div>
            {if clicked and len(buses) > 0 {
                <div style={{"display":"flex","flexDirection":"column","padding":"20px 20px"}}>
                    <div style={{"display":"flex","justifyContent":"flex-end","marginBottom":"15px"}}>
                        <button style={{"background":"#ff3232ff","border":"none","padding":"10px 10px","borderRadius":"4px","cursor":"pointer","fontSize":"1rem","fontWeight":"600","color":"white","width":"100px","height":"40px","textAlign":"center"}} onClick={handle_refresh}>
                            Refresh
                        </button>
                    </div>

                    <div style={{"display":"grid","gridTemplateColumns":"repeat(auto-fit, minmax(200px, 1fr))","gap":"15px","marginBottom":"20px","padding":"15px","backgroundColor":"rgba(255,255,255,0.05)","borderRadius":"8px"}}>
                        <div>
                            <label style={{"display":"block","marginBottom":"8px","fontSize":"0.9rem","fontWeight":"600","color":"#ff7f32"}}>Filter by Bus Type</label>
                            <select style={{"width":"100%","padding":"10px","borderRadius":"4px","border":"1px solid #ff7f32","fontSize":"0.9rem","backgroundColor":"rgba(255,255,255,0.1)","color":"white"}} value={selectedBusType} onChange={handle_bus_type} required={True}>
                                <option value="all" style={{"color":"black"}} disabled={True}>All Bus Types</option>
                                <option value="normal" style={{"color":"black"}}>Normal</option>
                                <option value="semi_luxury" style={{"color":"black"}}>Semi Luxury</option>
                                <option value="luxury" style={{"color":"black"}}>Luxury</option>
                            </select>
                        </div>

                        <div>
                            <label style={{"display":"block","marginBottom":"8px","fontSize":"0.9rem","fontWeight":"600","color":"#ff7f32"}}>Filter by Route Type</label>
                            <select style={{"width":"100%","padding":"10px","borderRadius":"4px","border":"1px solid #ff7f32","fontSize":"0.9rem","backgroundColor":"rgba(255,255,255,0.1)","color":"white"}} value={selectedRouteType} onChange={handle_route_type} required={True}>
                                <option value="all" style={{"color":"black"}} disabled={True}>All Route Types</option>
                                <option value="direct" style={{"color":"black"}}>Direct</option>
                                <option value="via" style={{"color":"black"}}>Via (Intermediate)</option>
                            </select>
                        </div>

                        <div>
                            <label style={{"display":"block","marginBottom":"8px","fontSize":"0.9rem","fontWeight":"600","color":"#ff7f32"}}>Filter by Route</label>
                            <select style={{"width":"100%","padding":"10px","borderRadius":"4px","border":"1px solid #ff7f32","fontSize":"0.9rem","backgroundColor":"rgba(255,255,255,0.1)","color":"white"}} value={selectedRoute} onChange={handle_route} required={True}>
                                <option value="all" style={{"color":"black"}} disabled={True}>All Types</option>
                                {for route in bus_routes {
                                    <option key={route} value={route} style={{"color":"black"}}>{route}</option>
                                }}
                            </select>
                        </div>

                        <div style={{"display":"flex","alignItems":"flex-end"}}>
                            <button style={{"background":"#667eea","border":"none","padding":"10px 20px","borderRadius":"4px","cursor":"pointer","fontSize":"0.9rem","fontWeight":"600","color":"white","width":"100%"}} onClick={handle_filters}>
                                Filter Results
                            </button>
                        </div>
                    </div>

                    <div style={{"overflowX":"auto"}}>
                        <table style={{ "width": "100%", "borderCollapse": "collapse", "backgroundColor": "rgba(255,255,255,0.05)" }}>
                            <thead>
                                <tr style={{ "backgroundColor": "rgba(255,127,50,0.1)", "borderBottom": "2px solid #ff7f32" }}>
                                    <th style={{ "borderBottom": "2px solid #ff7f32", "padding": "12px", "textAlign": "left", "color": "#ff7f32", "fontWeight": "600" }}>Bus ID</th>
                                    <th style={{ "borderBottom": "2px solid #ff7f32", "padding": "12px", "textAlign": "left", "color": "#ff7f32", "fontWeight": "600" }}>Bus Type</th>
                                    <th style={{ "borderBottom": "2px solid #ff7f32", "padding": "12px", "textAlign": "left", "color": "#ff7f32", "fontWeight": "600" }}>Start Time</th>
                                    <th style={{ "borderBottom": "2px solid #ff7f32", "padding": "12px", "textAlign": "left", "color": "#ff7f32", "fontWeight": "600" }}>End Time</th>
                                    <th style={{ "borderBottom": "2px solid #ff7f32", "padding": "12px", "textAlign": "left", "color": "#ff7f32", "fontWeight": "600" }}>Fare (LKR)</th>
                                    <th style={{ "borderBottom": "2px solid #ff7f32", "padding": "12px", "textAlign": "left", "color": "#ff7f32", "fontWeight": "600" }}>Intermediate Stops</th>
                                </tr>
                            </thead>

                            <tbody>
                                {for bus in buses {
                                    <tr key={bus.bus_id} style={{"borderBottom":"1px solid rgba(255,255,255,0.1)","backgroundColor":"rgba(255,255,255,0.02)","transition":"backgroundColor 0.2s"}}>
                                        <td style={{"padding":"12px","color":"#fff"}}>{bus.bus_id}</td>
                                        <td style={{"padding":"12px","color":"#ffffffff","fontWeight":"600"}}>{bus.bus_type}</td>
                                        <td style={{"padding":"12px","color":"#fff"}}>{bus.start_time}</td>
                                        <td style={{"padding":"12px","color":"#fff"}}>{bus.end_time}</td>
                                        <td style={{"padding":"12px","color":"#4ade80","fontWeight":"600"}}>Rs. {f"{(bus.fare as float):.2f}"}</td>
                                        <td style={{"padding":"12px","color":"#fff","fontSize":"0.9rem"}}>{", ".join(bus.intermediate_stops)}</td>
                                    </tr>
                                }}
                            </tbody>
                        </table>
                    </div>
                </div>
            } elif not clicked {
                <div style={{"height":"auto","display":"flex","alignItems":"center","justifyContent":"center","minheight":"200px"}}>
                    <h1 style={{"textAlign":"center","fontSize":"1rem","padding":"2px 2px"}}>Search some buses!!!</h1>
                </div>
            } else {
                <div style={{"height":"auto","display":"flex","alignItems":"center","justifyContent":"center","minheight":"200px","columnGap":"50px","padding":"10px","flexDirection":"column"}}>
                    <h1 style={{"textAlign":"center","fontSize":"1rem","padding":"2px 2px"}}>No buses found for the given criteria.</h1>
                    <div style={{"display":"flex","justifyContent":"flex-end","marginBottom":"15px"}}>
                        <button style={{"background":"#ff3232ff","border":"none","padding":"10px 10px","borderRadius":"4px","cursor":"pointer","fontSize":"1rem","fontWeight":"600","color":"white","width":"100px","height":"40px","textAlign":"center"}} onClick={handle_refresh}>
                            Refresh
                        </button>
                    </div>
                </div>
            }}
        </div>;
}
