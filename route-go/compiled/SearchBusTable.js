import {__jacJsx, __jacSpawn} from "@jac-client/utils";
import { useState, useEffect } from "react";
function SearchBusTable() {
  let [from_city_name, setFromCityName] = useState("");
  let [to_city_name, setToCityName] = useState("");
  let [start_time, setStartTime] = useState("");
  let [end_time, setEndTime] = useState("");
  let [clicked, setClick] = useState(false);
  let [buses, setBuses] = useState([]);
  let [bus_routes, setBusRoutes] = useState([]);
  let [selectedBusType, setSelectedBusType] = useState("all");
  let [selectedRouteType, setSelectedRouteType] = useState("all");
  let [selectedRoute, setSelectedRoute] = useState("all");
  function handleRefresh() {
    setFromCityName("");
    setToCityName("");
    setStartTime("");
    setEndTime("");
    setBuses([]);
    setClick(!clicked);
    setBusRoutes([]);
    setSelectedBusType("all");
    setSelectedRouteType("all");
  }
  async function handleFilters() {
    let results = await __jacSpawn("filterBuses", "", {"from_city_name": from_city_name, "to_city_name": to_city_name, "start_time": start_time, "end_time": end_time, "route_no": selectedRoute !== "all" ? selectedRoute : "", "bus_type": selectedBusType !== "all" ? selectedBusType : "", "bus_edge_type": selectedRouteType !== "all" ? selectedRouteType : ""});
    console.log(`Found ${results.reports.length} reports.`);
    if (results.reports.length > 0) {
      let newBuses = [];
      for (const results of results.reports) {
        for (const bus of results) {
          console.log("Bus Found:", bus);
          newBuses.push(bus);
        }
      }
      setBuses(newBuses);
    }
  }
  async function handleClick() {
    console.log("Button clicked!");
    if (from_city_name === "" || to_city_name === "" || start_time === "" || end_time === "") {
      alert("Please fill in all fields before searching.");
      return;
    } else {
      console.log(`From: ${from_city_name}, To: ${to_city_name}, Start Time: ${start_time}, End Time: ${end_time}`);
      setClick(!clicked);
      setBuses([]);
      setBusRoutes([]);
      let results = await __jacSpawn("filterBuses", "", {"from_city_name": from_city_name, "to_city_name": to_city_name, "start_time": start_time, "end_time": end_time});
      console.log(`Found ${results.reports.length} reports.`);
      if (results.reports.length > 0) {
        let newBuses = [];
        for (const results of results.reports) {
          for (const bus of results) {
            console.log("Bus Found:", bus);
            newBuses.push(bus);
          }
        }
        setBuses(newBuses);
        let routes = await __jacSpawn("findRoutes", "", {"from_city_name": from_city_name, "to_city_name": to_city_name});
        console.log("Routes Found:", routes.reports[0].routes);
        setBusRoutes(bus_routes.concat(routes.reports[0].routes));
        console.log("Bus Routes:", bus_routes);
      }
      console.log(`Found ${buses.length} buses.`);
      console.log(buses);
    }
  }
  return __jacJsx("div", {"id": "bustable", "style": {"background": "linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)", "padding": "40px 20px", "borderRadius": "0px", "color": "white"}}, [__jacJsx("h3", {"style": {"marginBottom": "20px", "fontWeight": "600"}}, ["Search Bus Time Table"]), __jacJsx("div", {"style": {display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "20px"}}, [__jacJsx("div", {}, [__jacJsx("label", {}, ["From *"]), __jacJsx("select", {"required": true, "style": {"width": "100%", "padding": "10px", "borderRadius": "4px", "border": "1px solid #ccc", "fontSize": "0.9rem"}, "value": from_city_name, "onChange": e => {
    setFromCityName(e.target.value);
  }}, [__jacJsx("option", {"value": "", "disabled": true}, ["Select Start"]), __jacJsx("option", {"value": "colombo"}, ["Colombo"]), __jacJsx("option", {"value": "jaffna"}, ["Jaffna"])])]), __jacJsx("div", {}, [__jacJsx("label", {}, ["To *"]), __jacJsx("select", {"required": true, "style": {"width": "100%", "padding": "10px", "borderRadius": "4px", "border": "1px solid #ccc", "fontSize": "0.9rem"}, "value": to_city_name, "onChange": e => {
    setToCityName(e.target.value);
  }}, [__jacJsx("option", {"value": "", "disabled": true}, ["Select Destination"]), __jacJsx("option", {"value": "colombo"}, ["Colombo"]), __jacJsx("option", {"value": "jaffna"}, ["Jaffna"]), __jacJsx("option", {"value": "kandy"}, ["Kandy"])])]), __jacJsx("div", {}, [__jacJsx("label", {}, ["Time Range:Start Time"]), __jacJsx("select", {"required": true, "style": {"width": "100%", "padding": "10px", "borderRadius": "4px", "border": "1px solid #ccc", "fontSize": "0.9rem"}, "value": start_time, "onChange": e => {
    setStartTime(e.target.value);
  }}, [__jacJsx("option", {"value": "", "disabled": true}, ["Select Start Time"]), __jacJsx("option", {"value": "00:00"}, ["00:00"]), __jacJsx("option", {"value": "01:00"}, ["01:00"]), __jacJsx("option", {"value": "02:00"}, ["02:00"]), __jacJsx("option", {"value": "03:00"}, ["03:00"]), __jacJsx("option", {"value": "04:00"}, ["04:00"]), __jacJsx("option", {"value": "05:00"}, ["05:00"]), __jacJsx("option", {"value": "06:00"}, ["06:00"]), __jacJsx("option", {"value": "07:00"}, ["07:00"]), __jacJsx("option", {"value": "08:00"}, ["08:00"]), __jacJsx("option", {"value": "09:00"}, ["09:00"]), __jacJsx("option", {"value": "10:00"}, ["10:00"]), __jacJsx("option", {"value": "11:00"}, ["11:00"]), __jacJsx("option", {"value": "12:00"}, ["12:00"]), __jacJsx("option", {"value": "13:00"}, ["13:00"]), __jacJsx("option", {"value": "14:00"}, ["14:00"]), __jacJsx("option", {"value": "15:00"}, ["15:00"]), __jacJsx("option", {"value": "16:00"}, ["16:00"]), __jacJsx("option", {"value": "17:00"}, ["17:00"]), __jacJsx("option", {"value": "18:00"}, ["18:00"]), __jacJsx("option", {"value": "19:00"}, ["19:00"]), __jacJsx("option", {"value": "20:00"}, ["20:00"]), __jacJsx("option", {"value": "21:00"}, ["21:00"]), __jacJsx("option", {"value": "22:00"}, ["22:00"]), __jacJsx("option", {"value": "23:00"}, ["23:00"])])]), __jacJsx("div", {}, [__jacJsx("label", {}, ["Time Range:End Time"]), __jacJsx("select", {"required": true, "style": {"width": "100%", "padding": "10px", "borderRadius": "4px", "border": "1px solid #ccc", "fontSize": "0.9rem"}, "value": end_time, "onChange": e => {
    setEndTime(e.target.value);
  }}, [__jacJsx("option", {"value": "", "disabled": true}, ["Select End Time"]), __jacJsx("option", {"value": "00:00"}, ["00:00"]), __jacJsx("option", {"value": "01:00"}, ["01:00"]), __jacJsx("option", {"value": "02:00"}, ["02:00"]), __jacJsx("option", {"value": "03:00"}, ["03:00"]), __jacJsx("option", {"value": "04:00"}, ["04:00"]), __jacJsx("option", {"value": "05:00"}, ["05:00"]), __jacJsx("option", {"value": "06:00"}, ["06:00"]), __jacJsx("option", {"value": "07:00"}, ["07:00"]), __jacJsx("option", {"value": "08:00"}, ["08:00"]), __jacJsx("option", {"value": "09:00"}, ["09:00"]), __jacJsx("option", {"value": "10:00"}, ["10:00"]), __jacJsx("option", {"value": "11:00"}, ["11:00"]), __jacJsx("option", {"value": "12:00"}, ["12:00"]), __jacJsx("option", {"value": "13:00"}, ["13:00"]), __jacJsx("option", {"value": "14:00"}, ["14:00"]), __jacJsx("option", {"value": "15:00"}, ["15:00"]), __jacJsx("option", {"value": "16:00"}, ["16:00"]), __jacJsx("option", {"value": "17:00"}, ["17:00"]), __jacJsx("option", {"value": "18:00"}, ["18:00"]), __jacJsx("option", {"value": "19:00"}, ["19:00"]), __jacJsx("option", {"value": "20:00"}, ["20:00"]), __jacJsx("option", {"value": "21:00"}, ["21:00"]), __jacJsx("option", {"value": "22:00"}, ["22:00"]), __jacJsx("option", {"value": "23:00"}, ["23:00"])])]), __jacJsx("div", {"style": {display: "flex", alignItems: "flex-end"}}, [__jacJsx("button", {"style": {"background": "#ff7f32", "border": "none", "padding": "10px 25px", "borderRadius": "4px", "cursor": "pointer", "fontSize": "1rem", "fontWeight": "600", "color": "white", "width": "100%"}, "onClick": handleClick, "disabled": clicked}, ["Search"])])]), clicked && buses.length > 0 ? __jacJsx("div", {"style": {"display": "flex", "flexDirection": "column", "padding": "20px 20px"}}, [__jacJsx("div", {"style": {"display": "flex", "justifyContent": "flex-end", "marginBottom": "15px"}}, [__jacJsx("button", {"style": {"background": "#ff3232ff", "border": "none", "padding": "10px 10px", "borderRadius": "4px", "cursor": "pointer", "fontSize": "1rem", "fontWeight": "600", "color": "white", "width": "100px", "height": "40px", "textAlign": "center"}, "onClick": handleRefresh}, ["Refresh"])]), __jacJsx("div", {"style": {"display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(200px, 1fr))", "gap": "15px", "marginBottom": "20px", "padding": "15px", "backgroundColor": "rgba(255,255,255,0.05)", "borderRadius": "8px"}}, [__jacJsx("div", {}, [__jacJsx("label", {"style": {"display": "block", "marginBottom": "8px", "fontSize": "0.9rem", "fontWeight": "600", "color": "#ff7f32"}}, ["Filter by Bus Type"]), __jacJsx("select", {"style": {"width": "100%", "padding": "10px", "borderRadius": "4px", "border": "1px solid #ff7f32", "fontSize": "0.9rem", "backgroundColor": "rgba(255,255,255,0.1)", "color": "white"}, "value": selectedBusType, "onChange": e => {
    setSelectedBusType(e.target.value);
  }, "required": true}, [__jacJsx("option", {"value": "all", "style": {"color": "black"}, "disabled": true}, ["All Bus Types"]), __jacJsx("option", {"value": "normal", "style": {"color": "black"}}, ["Normal"]), __jacJsx("option", {"value": "semi_luxury", "style": {"color": "black"}}, ["Semi Luxury"]), __jacJsx("option", {"value": "luxury", "style": {"color": "black"}}, ["Luxury"])])]), __jacJsx("div", {}, [__jacJsx("label", {"style": {"display": "block", "marginBottom": "8px", "fontSize": "0.9rem", "fontWeight": "600", "color": "#ff7f32"}}, ["Filter by Route Type"]), __jacJsx("select", {"style": {"width": "100%", "padding": "10px", "borderRadius": "4px", "border": "1px solid #ff7f32", "fontSize": "0.9rem", "backgroundColor": "rgba(255,255,255,0.1)", "color": "white"}, "value": selectedRouteType, "onChange": e => {
    setSelectedRouteType(e.target.value);
  }, "required": true}, [__jacJsx("option", {"value": "all", "style": {"color": "black"}, "disabled": true}, ["All Route Types"]), __jacJsx("option", {"value": "direct", "style": {"color": "black"}}, ["Direct"]), __jacJsx("option", {"value": "via", "style": {"color": "black"}}, ["Via (Intermediate)"])])]), __jacJsx("div", {}, [__jacJsx("label", {"style": {"display": "block", "marginBottom": "8px", "fontSize": "0.9rem", "fontWeight": "600", "color": "#ff7f32"}}, ["Filter by Route"]), __jacJsx("select", {"style": {"width": "100%", "padding": "10px", "borderRadius": "4px", "border": "1px solid #ff7f32", "fontSize": "0.9rem", "backgroundColor": "rgba(255,255,255,0.1)", "color": "white"}, "value": selectedRoute, "onChange": e => {
    setSelectedRoute(e.target.value);
  }, "required": true}, [__jacJsx("option", {"value": "all", "style": {"color": "black"}, "disabled": true}, ["All Types"]), bus_routes.map(route => {
    return __jacJsx("option", {"key": route, "value": route, "style": {"color": "black"}}, [route]);
  })])]), __jacJsx("div", {"style": {"display": "flex", "alignItems": "flex-end"}}, [__jacJsx("button", {"style": {"background": "#667eea", "border": "none", "padding": "10px 20px", "borderRadius": "4px", "cursor": "pointer", "fontSize": "0.9rem", "fontWeight": "600", "color": "white", "width": "100%"}, "onClick": handleFilters}, ["Filter Results"])])]), __jacJsx("div", {"style": {"overflowX": "auto"}}, [__jacJsx("table", {"style": {"width": "100%", "borderCollapse": "collapse", "backgroundColor": "rgba(255,255,255,0.05)"}}, [__jacJsx("thead", {}, [__jacJsx("tr", {"style": {backgroundColor: "rgba(255,127,50,0.1)", borderBottom: "2px solid #ff7f32"}}, [__jacJsx("th", {"style": {borderBottom: "2px solid #ff7f32", padding: "12px", textAlign: "left", color: "#ff7f32", fontWeight: "600"}}, ["Bus ID"]), __jacJsx("th", {"style": {borderBottom: "2px solid #ff7f32", padding: "12px", textAlign: "left", color: "#ff7f32", fontWeight: "600"}}, ["Bus Type"]), __jacJsx("th", {"style": {borderBottom: "2px solid #ff7f32", padding: "12px", textAlign: "left", color: "#ff7f32", fontWeight: "600"}}, ["Start Time"]), __jacJsx("th", {"style": {borderBottom: "2px solid #ff7f32", padding: "12px", textAlign: "left", color: "#ff7f32", fontWeight: "600"}}, ["End Time"]), __jacJsx("th", {"style": {borderBottom: "2px solid #ff7f32", padding: "12px", textAlign: "left", color: "#ff7f32", fontWeight: "600"}}, ["Fare (LKR)"]), __jacJsx("th", {"style": {borderBottom: "2px solid #ff7f32", padding: "12px", textAlign: "left", color: "#ff7f32", fontWeight: "600"}}, ["Intermediate Stops"])])]), __jacJsx("tbody", {}, [buses.map(bus => {
    return __jacJsx("tr", {"key": bus.bus_id, "style": {"borderBottom": "1px solid rgba(255,255,255,0.1)", "backgroundColor": "rgba(255,255,255,0.02)", "transition": "backgroundColor 0.2s"}}, [__jacJsx("td", {"style": {"padding": "12px", "color": "#fff"}}, [bus.bus_id]), __jacJsx("td", {"style": {"padding": "12px", "color": "#ffffffff", "fontWeight": "600"}}, [bus.bus_type]), __jacJsx("td", {"style": {"padding": "12px", "color": "#fff"}}, [bus.start_time]), __jacJsx("td", {"style": {"padding": "12px", "color": "#fff"}}, [bus.end_time]), __jacJsx("td", {"style": {"padding": "12px", "color": "#4ade80", "fontWeight": "600"}}, ["Rs. ", bus.fare.toFixed(2)]), __jacJsx("td", {"style": {"padding": "12px", "color": "#fff", "fontSize": "0.9rem"}}, [bus.intermediate_stops.join(", ")])]);
  })])])])]) : !clicked ? __jacJsx("div", {"style": {"height": "auto", "display": "flex", "alignItems": "center", "justifyContent": "center", "minheight": "200px"}}, [__jacJsx("h1", {"style": {"textAlign": "center", "fontSize": "1rem", "padding": "2px 2px"}}, ["Search some buses!!!"])]) : __jacJsx("div", {"style": {"height": "auto", "display": "flex", "alignItems": "center", "justifyContent": "center", "minheight": "200px", "columnGap": "50px", "padding": "10px", "flexDirection": "column"}}, [__jacJsx("h1", {"style": {"textAlign": "center", "fontSize": "1rem", "padding": "2px 2px"}}, ["No buses found for the given criteria."]), __jacJsx("div", {"style": {"display": "flex", "justifyContent": "flex-end", "marginBottom": "15px"}}, [__jacJsx("button", {"style": {"background": "#ff3232ff", "border": "none", "padding": "10px 10px", "borderRadius": "4px", "cursor": "pointer", "fontSize": "1rem", "fontWeight": "600", "color": "white", "width": "100px", "height": "40px", "textAlign": "center"}, "onClick": handleRefresh}, ["Refresh"])])])]);
}
export { SearchBusTable };
