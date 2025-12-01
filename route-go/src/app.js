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
  return __jacJsx("div", {"style": {"background": "linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)", "padding": "40px 20px", "borderRadius": "0px", "color": "white"}}, [__jacJsx("h3", {"style": {"marginBottom": "20px", "fontWeight": "600"}}, ["Search Bus Time Table"]), __jacJsx("div", {"style": {display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "20px"}}, [__jacJsx("div", {}, [__jacJsx("label", {}, ["From *"]), __jacJsx("select", {"required": true, "style": {"width": "100%", "padding": "10px", "borderRadius": "4px", "border": "1px solid #ccc", "fontSize": "0.9rem"}, "value": from_city_name, "onChange": e => {
    setFromCityName(e.target.value);
  }}, [__jacJsx("option", {"value": "", "disabled": true}, ["Select Start"]), __jacJsx("option", {"value": "Colombo"}, ["Colombo"]), __jacJsx("option", {"value": "Jaffna"}, ["Jaffna"])])]), __jacJsx("div", {}, [__jacJsx("label", {}, ["To *"]), __jacJsx("select", {"required": true, "style": {"width": "100%", "padding": "10px", "borderRadius": "4px", "border": "1px solid #ccc", "fontSize": "0.9rem"}, "value": to_city_name, "onChange": e => {
    setToCityName(e.target.value);
  }}, [__jacJsx("option", {"value": "", "disabled": true}, ["Select Destination"]), __jacJsx("option", {"value": "Colombo"}, ["Colombo"]), __jacJsx("option", {"value": "Jaffna"}, ["Jaffna"]), __jacJsx("option", {"value": "Kandy"}, ["Kandy"])])]), __jacJsx("div", {}, [__jacJsx("label", {}, ["Time Range:Start Time"]), __jacJsx("select", {"required": true, "style": {"width": "100%", "padding": "10px", "borderRadius": "4px", "border": "1px solid #ccc", "fontSize": "0.9rem"}, "value": start_time, "onChange": e => {
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
  })])]), __jacJsx("div", {"style": {"display": "flex", "alignItems": "flex-end"}}, [__jacJsx("button", {"style": {"background": "#667eea", "border": "none", "padding": "10px 20px", "borderRadius": "4px", "cursor": "pointer", "fontSize": "0.9rem", "fontWeight": "600", "color": "white", "width": "100%"}, "onClick": handleFilters}, ["Filter Results"])])]), __jacJsx("div", {"style": {"overflowX": "auto"}}, [__jacJsx("table", {"style": {width: "100%", borderCollapse: "collapse", backgroundColor: "rgba(255,255,255,0.05)"}}, [__jacJsx("thead", {}, [__jacJsx("tr", {"style": {backgroundColor: "rgba(255,127,50,0.1)", borderBottom: "2px solid #ff7f32"}}, [__jacJsx("th", {"style": {borderBottom: "2px solid #ff7f32", padding: "12px", textAlign: "left", color: "#ff7f32", fontWeight: "600"}}, ["Bus ID"]), __jacJsx("th", {"style": {borderBottom: "2px solid #ff7f32", padding: "12px", textAlign: "left", color: "#ff7f32", fontWeight: "600"}}, ["Bus Type"]), __jacJsx("th", {"style": {borderBottom: "2px solid #ff7f32", padding: "12px", textAlign: "left", color: "#ff7f32", fontWeight: "600"}}, ["Start Time"]), __jacJsx("th", {"style": {borderBottom: "2px solid #ff7f32", padding: "12px", textAlign: "left", color: "#ff7f32", fontWeight: "600"}}, ["End Time"]), __jacJsx("th", {"style": {borderBottom: "2px solid #ff7f32", padding: "12px", textAlign: "left", color: "#ff7f32", fontWeight: "600"}}, ["Fare (LKR)"]), __jacJsx("th", {"style": {borderBottom: "2px solid #ff7f32", padding: "12px", textAlign: "left", color: "#ff7f32", fontWeight: "600"}}, ["Intermediate Stops"])])]), __jacJsx("tbody", {}, [buses.map(bus => {
    return __jacJsx("tr", {"key": bus.bus_id, "style": {"borderBottom": "1px solid rgba(255,255,255,0.1)", "backgroundColor": "rgba(255,255,255,0.02)", "transition": "backgroundColor 0.2s"}}, [__jacJsx("td", {"style": {"padding": "12px", "color": "#fff"}}, [bus.bus_id]), __jacJsx("td", {"style": {"padding": "12px", "color": "#ffffffff", "fontWeight": "600"}}, [bus.bus_type]), __jacJsx("td", {"style": {"padding": "12px", "color": "#fff"}}, [bus.start_time]), __jacJsx("td", {"style": {"padding": "12px", "color": "#fff"}}, [bus.end_time]), __jacJsx("td", {"style": {"padding": "12px", "color": "#4ade80", "fontWeight": "600"}}, ["Rs. ", bus.fare.toFixed(2)]), __jacJsx("td", {"style": {"padding": "12px", "color": "#fff", "fontSize": "0.9rem"}}, [bus.intermediate_stops.join(", ")])]);
  })])])])]) : !clicked ? __jacJsx("div", {"style": {"height": "auto", "display": "flex", "alignItems": "center", "justifyContent": "center", "minheight": "200px"}}, [__jacJsx("h1", {"style": {"textAlign": "center", "fontSize": "1rem", "padding": "2px 2px"}}, ["Search some buses!!!"])]) : __jacJsx("div", {"style": {"height": "auto", "display": "flex", "alignItems": "center", "justifyContent": "center", "minheight": "200px", "columnGap": "50px", "padding": "10px", "flexDirection": "column"}}, [__jacJsx("h1", {"style": {"textAlign": "center", "fontSize": "1rem", "padding": "2px 2px"}}, ["No buses found for the given criteria."]), __jacJsx("div", {"style": {"display": "flex", "justifyContent": "flex-end", "marginBottom": "15px"}}, [__jacJsx("button", {"style": {"background": "#ff3232ff", "border": "none", "padding": "10px 10px", "borderRadius": "4px", "cursor": "pointer", "fontSize": "1rem", "fontWeight": "600", "color": "white", "width": "100px", "height": "40px", "textAlign": "center"}, "onClick": handleRefresh}, ["Refresh"])])])]);
}
function HeroSection() {
  return __jacJsx("div", {"style": {"display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent": "center", "height": "100vh", "padding": "20px 20px", "background": "linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)", "color": "white", "textAlign": "center", "position": "relative", "overflow": "hidden"}}, [__jacJsx("div", {"style": {"position": "absolute", "top": "20%", "left": "10%", "width": "100px", "height": "100px", "background": "linear-gradient(45deg, #667eea, #764ba2)", "borderRadius": "50%", "opacity": "0.1", "animation": "float 6s ease-in-out infinite"}}, []), __jacJsx("div", {"style": {"position": "absolute", "top": "60%", "right": "15%", "width": "150px", "height": "150px", "background": "linear-gradient(45deg, #ff6b6b, #ee5a24)", "borderRadius": "30%", "opacity": "0.08", "animation": "float 8s ease-in-out infinite reverse"}}, []), __jacJsx("div", {"style": {"maxWidth": "900px", "animation": "slideInUp 0.8s ease-out", "zIndex": 1}}, [__jacJsx("div", {"style": {"display": "inline-block", "background": "rgba(255, 255, 255, 0.1)", "backdropFilter": "blur(20px)", "border": "1px solid rgba(255, 255, 255, 0.2)", "borderRadius": "50px", "padding": "8px 20px", "fontSize": "0.9rem", "marginBottom": "2rem", "fontWeight": "500", "letterSpacing": "0.5px"}}, ["✨ Smart Transportation Solution"]), __jacJsx("h1", {"style": {"fontSize": "4rem", "fontWeight": "800", "marginBottom": "1.5rem", "background": "linear-gradient(135deg, #ffffff 0%, #e0e7ff 100%)", "WebkitBackgroundClip": "text", "WebkitTextFillColor": "transparent", "letterSpacing": "-0.02em", "lineHeight": "1.1"}}, ["Route-Go", __jacJsx("br", {}, []), __jacJsx("span", {"style": {"fontSize": "3rem", "background": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", "WebkitBackgroundClip": "text", "WebkitTextFillColor": "transparent"}}, ["Sri Lanka"])]), __jacJsx("p", {"style": {"fontSize": "1.3rem", "marginBottom": "3rem", "opacity": "0.8", "lineHeight": "1.7", "fontWeight": "300", "maxWidth": "600px", "margin": "0 auto 3rem auto"}}, ["Discover optimal bus routes across all 25 districts with real-time filtering and intelligent path finding"]), __jacJsx("div", {"style": {"display": "flex", "gap": "1rem", "justifyContent": "center", "marginBottom": "4rem", "flexWrap": "wrap"}}, [__jacJsx("button", {"onClick": SearchBusTable, "style": {"background": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", "color": "white", "border": "none", "padding": "16px 32px", "fontSize": "1.1rem", "borderRadius": "12px", "cursor": "pointer", "fontWeight": "600", "boxShadow": "0 8px 32px rgba(102, 126, 234, 0.3)", "transition": "all 0.3s ease", "transform": "translateY(0)", "minWidth": "180px"}}, ["🚀 Start Browsing"])]), __jacJsx("div", {"style": {"display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(200px, 1fr))", "gap": "1.5rem", "maxWidth": "700px", "margin": "0 auto"}}, [__jacJsx("div", {"style": {"background": "rgba(255, 255, 255, 0.05)", "backdropFilter": "blur(20px)", "border": "1px solid rgba(255, 255, 255, 0.1)", "borderRadius": "16px", "padding": "2rem 1.5rem", "textAlign": "center", "transition": "all 0.3s ease"}}, [__jacJsx("div", {"style": {"fontSize": "2.5rem", "marginBottom": "1rem", "background": "linear-gradient(135deg, #667eea, #764ba2)", "borderRadius": "50%", "width": "60px", "height": "60px", "display": "flex", "alignItems": "center", "justifyContent": "center", "margin": "0 auto 1rem auto"}}, ["🗺️"]), __jacJsx("h4", {"style": {"fontSize": "1.1rem", "marginBottom": "0.5rem", "fontWeight": "600"}}, ["25 Districts"]), __jacJsx("p", {"style": {"fontSize": "0.9rem", "opacity": "0.7", "margin": 0}}, ["Complete coverage"])]), __jacJsx("div", {"style": {"background": "rgba(255, 255, 255, 0.05)", "backdropFilter": "blur(20px)", "border": "1px solid rgba(255, 255, 255, 0.1)", "borderRadius": "16px", "padding": "2rem 1.5rem", "textAlign": "center", "transition": "all 0.3s ease"}}, [__jacJsx("div", {"style": {"fontSize": "2.5rem", "marginBottom": "1rem", "background": "linear-gradient(135deg, #ff6b6b, #ee5a24)", "borderRadius": "50%", "width": "60px", "height": "60px", "display": "flex", "alignItems": "center", "justifyContent": "center", "margin": "0 auto 1rem auto"}}, ["⏰"]), __jacJsx("h4", {"style": {"fontSize": "1.1rem", "marginBottom": "0.5rem", "fontWeight": "600"}}, ["Smart Timing"]), __jacJsx("p", {"style": {"fontSize": "0.9rem", "opacity": "0.7", "margin": 0}}, ["Real-time filtering"])]), __jacJsx("div", {"style": {"background": "rgba(255, 255, 255, 0.05)", "backdropFilter": "blur(20px)", "border": "1px solid rgba(255, 255, 255, 0.1)", "borderRadius": "16px", "padding": "2rem 1.5rem", "textAlign": "center", "transition": "all 0.3s ease"}}, [__jacJsx("div", {"style": {"fontSize": "2.5rem", "marginBottom": "1rem", "background": "linear-gradient(135deg, #00d2ff, #3a7bd5)", "borderRadius": "50%", "width": "60px", "height": "60px", "display": "flex", "alignItems": "center", "justifyContent": "center", "margin": "0 auto 1rem auto"}}, ["🚌"]), __jacJsx("h4", {"style": {"fontSize": "1.1rem", "marginBottom": "0.5rem", "fontWeight": "600"}}, ["Multi-Route"]), __jacJsx("p", {"style": {"fontSize": "0.9rem", "opacity": "0.7", "margin": 0}}, ["Best connections"])])])])]);
}
function ChatWindow(props) {
  let [messages, setMessages] = useState([{sender: "bot", text: "Hi! I'm RouteGo Assistant. How can I help you find buses today?", id: 0}]);
  let [inputValue, setInputValue] = useState("");
  let [messageId, setMessageId] = useState(1);
  async function handleSendMessage() {
    if (!inputValue) {
      return;
    }
    let results = await __jacSpawn("computeBusTime", "", {"user_input": inputValue});
    let userMsg = {sender: "user", text: inputValue, id: messageId};
    let botMsg = {sender: "bot", text: results.reports[0].response, id: messageId + 1};
    setMessages(messages.concat([userMsg, botMsg]));
    setMessageId(messageId + 2);
    setInputValue("");
  }
  function handleInputChange(e) {
    setInputValue(e.target.value);
  }
  function handleKeyPress(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSendMessage();
    }
  }
  return __jacJsx("div", {"style": {"position": "fixed", "bottom": "100px", "right": "20px", "width": "350px", "height": "500px", "background": "white", "borderRadius": "10px", "boxShadow": "0 4px 12px rgba(0,0,0,0.2)", "display": "flex", "flexDirection": "column", "zIndex": "999"}}, [__jacJsx("div", {"style": {"background": "#ff7f32", "color": "white", "padding": "15px", "borderRadius": "10px 10px 0 0", "display": "flex", "justifyContent": "space-between", "alignItems": "center"}}, [__jacJsx("h4", {"style": {"margin": "0", "fontSize": "1rem"}}, ["RouteGo Chat"]), __jacJsx("button", {"onClick": () => {
    props.closeChat();
  }, "style": {"background": "none", "border": "none", "color": "white", "fontSize": "1.5rem", "cursor": "pointer", "padding": "0"}}, ["×"])]), __jacJsx("div", {"id": "messages-container", "style": {"flex": "1", "overflowY": "auto", "padding": "15px", "background": "#f9f9f9", "display": "flex", "flexDirection": "column"}}, [messages.map(msg => {
    let justifyContent = "flex-start";
    let bgColor = "#e0e0e0";
    let textColor = "black";
    if (msg.sender === "user") {
      justifyContent = "flex-end";
      bgColor = "#ff7f32";
      textColor = "white";
    }
    return __jacJsx("div", {"key": msg.id, "style": {"marginBottom": "10px", "display": "flex", "justifyContent": justifyContent}}, [__jacJsx("div", {"style": {"maxWidth": "70%", "padding": "10px 15px", "borderRadius": "10px", "background": bgColor, "color": textColor, "wordWrap": "break-word", "fontSize": "0.95rem"}}, [msg.text])]);
  })]), __jacJsx("div", {"style": {"padding": "10px", "borderTop": "1px solid #ddd", "display": "flex", "gap": "10px"}}, [__jacJsx("input", {"type": "text", "value": inputValue, "onChange": e => {
    handleInputChange(e);
  }, "onKeyPress": e => {
    handleKeyPress(e);
  }, "placeholder": "Type your message...", "style": {"flex": "1", "padding": "10px", "borderRadius": "5px", "border": "1px solid #ddd", "fontSize": "0.9rem", "fontFamily": "Arial, sans-serif"}}, []), __jacJsx("button", {"onClick": () => {
    handleSendMessage();
  }, "style": {"background": "#ff7f32", "color": "white", "border": "none", "padding": "10px 15px", "borderRadius": "5px", "cursor": "pointer", "fontWeight": "600", "fontSize": "0.9rem"}}, ["Send"])])]);
}
function ChatBot() {
  let [isChatOpen, setIsChatOpen] = useState(false);
  if (isChatOpen) {
    return __jacJsx("div", {}, [__jacJsx(ChatWindow, {"closeChat": () => {
      setIsChatOpen(false);
    }}, []), __jacJsx("button", {"onClick": () => {
      setIsChatOpen(false);
    }, "style": {"position": "fixed", "bottom": "100px", "right": "20px", "width": "100px", "height": "200px", "background": "white", "borderRadius": "10px", "boxShadow": "0 4px 12px rgba(0,0,0,0.2)", "display": "flex", "flexDirection": "column", "zIndex": "999", "position": "absolute", "top": "0", "opacity": "0", "cursor": "pointer"}}, [])]);
  }
  return __jacJsx("div", {}, [__jacJsx("button", {"onClick": () => {
    setIsChatOpen(true);
  }, "style": {"position": "fixed", "bottom": "20px", "right": "20px", "width": "60px", "height": "60px", "borderRadius": "50%", "background": "#ff7f32", "color": "white", "border": "none", "fontSize": "1.8rem", "cursor": "pointer", "boxShadow": "0 4px 12px rgba(0,0,0,0.2)", "display": "flex", "alignItems": "center", "justifyContent": "center", "zIndex": "998"}}, ["💬"])]);
}
function app() {
  useEffect(() => {
    async function creategraph() {
      let is_graph_created = await __jacSpawn("findGraph", "", {});
      console.log("Graph exists:", is_graph_created.reports[0].data);
      if (is_graph_created.reports[0].data === false) {
        let result = await __jacSpawn("createGraph", "", {});
      }
    }
    creategraph();
  }, []);
  return __jacJsx("div", {"style": {"width": "100%"}}, [__jacJsx(HeroSection, {}, []), __jacJsx(SearchBusTable, {}, []), __jacJsx(ChatBot, {}, [])]);
}
export { ChatBot, ChatWindow, HeroSection, SearchBusTable, app };
