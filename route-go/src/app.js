<<<<<<< HEAD
import {__jacJsx, __jacSpawn} from "@jac-client/utils";
import { useState, useEffect } from "react";
import { Router, Routes, Route, Link, Navigate, useNavigate, jacSignup, jacLogin, jacLogout, jacIsLoggedIn } from "@jac-client/utils";
function Navigation() {
  let isLoggedIn = jacIsLoggedIn();
  let navigate = useNavigate();
  function handleLogout(e) {
    e.preventDefault();
    jacLogout();
    navigate("/login");
  }
  if (isLoggedIn) {
    return __jacJsx("nav", {"style": {"padding": "12px 24px", "background": "#3b82f6", "color": "#ffffff", "display": "flex", "justifyContent": "space-between"}}, [__jacJsx("div", {"style": {"fontWeight": "600"}}, ["Todo App"]), __jacJsx("div", {"style": {"display": "flex", "gap": "16px"}}, [__jacJsx(Link, {"to": "/todos", "style": {"color": "#ffffff", "textDecoration": "none"}}, ["Todos"]), __jacJsx("button", {"onClick": handleLogout, "style": {"background": "none", "color": "#ffffff", "border": "1px solid #ffffff", "padding": "2px 10px", "borderRadius": "4px", "cursor": "pointer"}}, ["Logout"])])]);
  }
  return __jacJsx("nav", {"style": {"padding": "12px 24px", "background": "#3b82f6", "color": "#ffffff", "display": "flex", "justifyContent": "space-between"}}, [__jacJsx("div", {"style": {"fontWeight": "600"}}, ["Todo App"]), __jacJsx("div", {"style": {"display": "flex", "gap": "16px"}}, [__jacJsx(Link, {"to": "/login", "style": {"color": "#ffffff", "textDecoration": "none"}}, ["Login"]), __jacJsx(Link, {"to": "/signup", "style": {"color": "#ffffff", "textDecoration": "none"}}, ["Sign Up"])])]);
}
function LoginPage() {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [error, setError] = useState("");
  let navigate = useNavigate();
  async function handleLogin(e) {
    e.preventDefault();
    setError("");
    if (!username || !password) {
      setError("Please fill in all fields");
      return;
    }
    let success = await jacLogin(username, password);
    if (success) {
      navigate("/todos");
    } else {
      setError("Invalid credentials");
    }
  }
  function handleUsernameChange(e) {
    setUsername(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }
  let errorDisplay = null;
  if (error) {
    errorDisplay = __jacJsx("div", {"style": {"color": "#dc2626", "fontSize": "14px", "marginBottom": "10px"}}, [error]);
  }
  return __jacJsx("div", {"style": {"minHeight": "calc(100vh - 48px)", "display": "flex", "alignItems": "center", "justifyContent": "center", "background": "#f5f5f5"}}, [__jacJsx("div", {"style": {"background": "#ffffff", "padding": "30px", "borderRadius": "8px", "width": "280px", "boxShadow": "0 2px 4px rgba(0,0,0,0.1)"}}, [__jacJsx("h2", {"style": {"marginBottom": "20px"}}, ["Login"]), __jacJsx("form", {"onSubmit": handleLogin}, [__jacJsx("input", {"type": "text", "value": username, "onChange": handleUsernameChange, "placeholder": "Username", "style": {"width": "100%", "padding": "8px", "marginBottom": "10px", "border": "1px solid #ddd", "borderRadius": "4px", "boxSizing": "border-box"}}, []), __jacJsx("input", {"type": "password", "value": password, "onChange": handlePasswordChange, "placeholder": "Password", "style": {"width": "100%", "padding": "8px", "marginBottom": "10px", "border": "1px solid #ddd", "borderRadius": "4px", "boxSizing": "border-box"}}, []), errorDisplay, __jacJsx("button", {"type": "submit", "style": {"width": "100%", "padding": "8px", "background": "#3b82f6", "color": "#ffffff", "border": "none", "borderRadius": "4px", "cursor": "pointer", "fontWeight": "600"}}, ["Login"])]), __jacJsx("p", {"style": {"textAlign": "center", "marginTop": "12px", "fontSize": "14px"}}, ["Need an account?", __jacJsx(Link, {"to": "/signup"}, ["Sign up"])])])]);
}
function SignupPage() {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [error, setError] = useState("");
  let navigate = useNavigate();
  async function handleSignup(e) {
    e.preventDefault();
    setError("");
    if (!username || !password) {
      setError("Please fill in all fields");
      return;
    }
    let result = await jacSignup(username, password);
    if (result["success"]) {
      navigate("/todos");
    } else {
      setError(result["error"] ? result["error"] : "Signup failed");
    }
  }
  function handleUsernameChange(e) {
    setUsername(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }
  let errorDisplay = null;
  if (error) {
    errorDisplay = __jacJsx("div", {"style": {"color": "#dc2626", "fontSize": "14px", "marginBottom": "10px"}}, [error]);
  }
  return __jacJsx("div", {"style": {"minHeight": "calc(100vh - 48px)", "display": "flex", "alignItems": "center", "justifyContent": "center", "background": "#f5f5f5"}}, [__jacJsx("div", {"style": {"background": "#ffffff", "padding": "30px", "borderRadius": "8px", "width": "280px", "boxShadow": "0 2px 4px rgba(0,0,0,0.1)"}}, [__jacJsx("h2", {"style": {"marginBottom": "20px"}}, ["Sign Up"]), __jacJsx("form", {"onSubmit": handleSignup}, [__jacJsx("input", {"type": "text", "value": username, "onChange": handleUsernameChange, "placeholder": "Username", "style": {"width": "100%", "padding": "8px", "marginBottom": "10px", "border": "1px solid #ddd", "borderRadius": "4px", "boxSizing": "border-box"}}, []), __jacJsx("input", {"type": "password", "value": password, "onChange": handlePasswordChange, "placeholder": "Password", "style": {"width": "100%", "padding": "8px", "marginBottom": "10px", "border": "1px solid #ddd", "borderRadius": "4px", "boxSizing": "border-box"}}, []), errorDisplay, __jacJsx("button", {"type": "submit", "style": {"width": "100%", "padding": "8px", "background": "#3b82f6", "color": "#ffffff", "border": "none", "borderRadius": "4px", "cursor": "pointer", "fontWeight": "600"}}, ["Sign Up"])]), __jacJsx("p", {"style": {"textAlign": "center", "marginTop": "12px", "fontSize": "14px"}}, ["Have an account?", __jacJsx(Link, {"to": "/login"}, ["Login"])])])]);
}
function TodosPage() {
  if (!jacIsLoggedIn()) {
    return __jacJsx(Navigate, {"to": "/login"}, []);
  }
  let [todos, setTodos] = useState([]);
  let [input, setInput] = useState("");
  let [filter, setFilter] = useState("all");
  useEffect(() => {
    async function loadTodos() {
      let result = await __jacSpawn("read_todos", "", {});
      setTodos(result.reports ? result.reports : []);
    }
    loadTodos();
  }, []);
  async function addTodo() {
    if (!input.trim()) {
      return;
    }
    let result = await __jacSpawn("create_todo", "", {"text": input.trim()});
    setTodos(todos.concat([result.reports[0][0]]));
    setInput("");
  }
  async function toggleTodo(id) {
    await __jacSpawn("toggle_todo", id, {});
    setTodos(todos.map(todo => {
      if (todo._jac_id === id) {
        return {"_jac_id": todo._jac_id, "text": todo.text, "done": !todo.done};
      }
      return todo;
    }));
  }
  async function deleteTodo(id) {
    setTodos(todos.filter(todo => {
      return todo._jac_id !== id;
    }));
  }
  function getFilteredTodos() {
    if (filter === "active") {
      return todos.filter(todo => {
        return !todo.done;
      });
    } else if (filter === "completed") {
      return todos.filter(todo => {
        return todo.done;
      });
    }
    return todos;
  }
  let filteredTodos = getFilteredTodos();
  let activeCount = todos.filter(todo => {
    return !todo.done;
  }).length;
  return __jacJsx("div", {"style": {"maxWidth": "600px", "margin": "20px auto", "padding": "20px", "background": "#ffffff", "borderRadius": "8px", "boxShadow": "0 2px 4px rgba(0,0,0,0.1)"}}, [__jacJsx("h1", {"style": {"marginBottom": "20px"}}, ["My Todos"]), __jacJsx("div", {"style": {"display": "flex", "gap": "8px", "marginBottom": "16px"}}, [__jacJsx("input", {"type": "text", "value": input, "onChange": e => {
    setInput(e.target.value);
  }, "onKeyPress": e => {
    if (e.key === "Enter") {
      addTodo();
    }
  }, "placeholder": "What needs to be done?", "style": {"flex": "1", "padding": "8px", "border": "1px solid #ddd", "borderRadius": "4px"}}, []), __jacJsx("button", {"onClick": addTodo, "style": {"padding": "8px 16px", "background": "#3b82f6", "color": "#ffffff", "border": "none", "borderRadius": "4px", "cursor": "pointer", "fontWeight": "600"}}, ["Add"])]), __jacJsx("div", {"style": {"display": "flex", "gap": "8px", "marginBottom": "16px"}}, [__jacJsx("button", {"onClick": () => {
    setFilter("all");
  }, "style": {"padding": "6px 12px", "background": filter === "all" ? "#3b82f6" : "#e5e7eb", "color": filter === "all" ? "#ffffff" : "#000000", "border": "none", "borderRadius": "4px", "cursor": "pointer", "fontSize": "14px"}}, ["All"]), __jacJsx("button", {"onClick": () => {
    setFilter("active");
  }, "style": {"padding": "6px 12px", "background": filter === "active" ? "#3b82f6" : "#e5e7eb", "color": filter === "active" ? "#ffffff" : "#000000", "border": "none", "borderRadius": "4px", "cursor": "pointer", "fontSize": "14px"}}, ["Active"]), __jacJsx("button", {"onClick": () => {
    setFilter("completed");
  }, "style": {"padding": "6px 12px", "background": filter === "completed" ? "#3b82f6" : "#e5e7eb", "color": filter === "completed" ? "#ffffff" : "#000000", "border": "none", "borderRadius": "4px", "cursor": "pointer", "fontSize": "14px"}}, ["Completed"])]), __jacJsx("div", {}, [filteredTodos.length === 0 ? __jacJsx("div", {"style": {"padding": "20px", "textAlign": "center", "color": "#999"}}, ["No todos yet. Add one above!"]) : filteredTodos.map(todo => {
    return __jacJsx("div", {"key": todo._jac_id, "style": {"display": "flex", "alignItems": "center", "gap": "10px", "padding": "10px", "borderBottom": "1px solid #e5e7eb"}}, [__jacJsx("input", {"type": "checkbox", "checked": todo.done, "onChange": () => {
      toggleTodo(todo._jac_id);
    }, "style": {"cursor": "pointer"}}, []), __jacJsx("span", {"style": {"flex": "1", "textDecoration": todo.done ? "line-through" : "none", "color": todo.done ? "#999" : "#000"}}, [todo.text]), __jacJsx("button", {"onClick": () => {
      deleteTodo(todo._jac_id);
    }, "style": {"padding": "4px 8px", "background": "#ef4444", "color": "#ffffff", "border": "none", "borderRadius": "4px", "cursor": "pointer", "fontSize": "12px"}}, ["Delete"])]);
  })]), todos.length > 0 ? __jacJsx("div", {"style": {"marginTop": "16px", "padding": "10px", "background": "#f9fafb", "borderRadius": "4px", "fontSize": "14px", "color": "#666"}}, [activeCount, " ", activeCount === 1 ? "item" : "items", " left"]) : null]);
}
function HomePage() {
  if (jacIsLoggedIn()) {
    return __jacJsx(Navigate, {"to": "/todos"}, []);
  }
  return __jacJsx(Navigate, {"to": "/login"}, []);
}
function app() {
  return __jacJsx(Router, {}, [__jacJsx("div", {"style": {"fontFamily": "system-ui, sans-serif"}}, [__jacJsx(Navigation, {}, []), __jacJsx(Routes, {}, [__jacJsx(Route, {"path": "/", "element": __jacJsx(HomePage, {}, [])}, []), __jacJsx(Route, {"path": "/login", "element": __jacJsx(LoginPage, {}, [])}, []), __jacJsx(Route, {"path": "/signup", "element": __jacJsx(SignupPage, {}, [])}, []), __jacJsx(Route, {"path": "/todos", "element": __jacJsx(TodosPage, {}, [])}, [])])])]);
}
export { HomePage, LoginPage, Navigation, SignupPage, TodosPage, app };
=======
import {__jacJsx, __jacSpawn} from "@jac-client/utils";
import { useState, useEffect } from "react";
function SearchBusTable() {
  return __jacJsx("div", {"style": {"background": "linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)", "padding": "40px 20px", "borderRadius": "0px", "color": "white"}}, [__jacJsx("h3", {"style": {"marginBottom": "20px", "fontWeight": "600"}}, ["Search Bus Time Table"]), __jacJsx("div", {"style": {display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "20px"}}, [__jacJsx("div", {}, [__jacJsx("label", {}, ["From *"]), __jacJsx("select", {"style": {"width": "100%", "padding": "10px", "borderRadius": "4px", "border": "1px solid #ccc", "fontSize": "0.9rem"}}, [__jacJsx("option", {}, ["Select Start"]), __jacJsx("option", {}, ["Colombo"]), __jacJsx("option", {}, ["Jaffna"])])]), __jacJsx("div", {}, [__jacJsx("label", {}, ["To *"]), __jacJsx("select", {"style": {"width": "100%", "padding": "10px", "borderRadius": "4px", "border": "1px solid #ccc", "fontSize": "0.9rem"}}, [__jacJsx("option", {}, ["Select Destination"]), __jacJsx("option", {}, ["Colombo"]), __jacJsx("option", {}, ["Jaffna"]), __jacJsx("option", {}, ["Kandy"])])]), __jacJsx("div", {}, [__jacJsx("label", {}, ["Start Time"]), __jacJsx("select", {"style": {"width": "100%", "padding": "10px", "borderRadius": "4px", "border": "1px solid #ccc", "fontSize": "0.9rem"}}, [__jacJsx("option", {}, ["Select Start Time"]), __jacJsx("option", {}, ["00:00"]), __jacJsx("option", {}, ["01:00"]), __jacJsx("option", {}, ["02:00"]), __jacJsx("option", {}, ["03:00"]), __jacJsx("option", {}, ["04:00"]), __jacJsx("option", {}, ["05:00"]), __jacJsx("option", {}, ["06:00"]), __jacJsx("option", {}, ["07:00"]), __jacJsx("option", {}, ["08:00"]), __jacJsx("option", {}, ["09:00"]), __jacJsx("option", {}, ["10:00"]), __jacJsx("option", {}, ["11:00"]), __jacJsx("option", {}, ["12:00"]), __jacJsx("option", {}, ["13:00"]), __jacJsx("option", {}, ["14:00"]), __jacJsx("option", {}, ["15:00"]), __jacJsx("option", {}, ["16:00"]), __jacJsx("option", {}, ["17:00"]), __jacJsx("option", {}, ["18:00"]), __jacJsx("option", {}, ["19:00"]), __jacJsx("option", {}, ["20:00"]), __jacJsx("option", {}, ["21:00"]), __jacJsx("option", {}, ["22:00"]), __jacJsx("option", {}, ["23:00"])])]), __jacJsx("div", {}, [__jacJsx("label", {}, ["End Time"]), __jacJsx("select", {"style": {"width": "100%", "padding": "10px", "borderRadius": "4px", "border": "1px solid #ccc", "fontSize": "0.9rem"}}, [__jacJsx("option", {}, ["Select End Time"]), __jacJsx("option", {}, ["00:00"]), __jacJsx("option", {}, ["01:00"]), __jacJsx("option", {}, ["02:00"]), __jacJsx("option", {}, ["03:00"]), __jacJsx("option", {}, ["04:00"]), __jacJsx("option", {}, ["05:00"]), __jacJsx("option", {}, ["06:00"]), __jacJsx("option", {}, ["07:00"]), __jacJsx("option", {}, ["08:00"]), __jacJsx("option", {}, ["09:00"]), __jacJsx("option", {}, ["10:00"]), __jacJsx("option", {}, ["11:00"]), __jacJsx("option", {}, ["12:00"]), __jacJsx("option", {}, ["13:00"]), __jacJsx("option", {}, ["14:00"]), __jacJsx("option", {}, ["15:00"]), __jacJsx("option", {}, ["16:00"]), __jacJsx("option", {}, ["17:00"]), __jacJsx("option", {}, ["18:00"]), __jacJsx("option", {}, ["19:00"]), __jacJsx("option", {}, ["20:00"]), __jacJsx("option", {}, ["21:00"]), __jacJsx("option", {}, ["22:00"]), __jacJsx("option", {}, ["23:00"])])]), __jacJsx("div", {"style": {display: "flex", alignItems: "flex-end"}}, [__jacJsx("button", {"style": {"background": "#ff7f32", "border": "none", "padding": "10px 25px", "borderRadius": "4px", "cursor": "pointer", "fontSize": "1rem", "fontWeight": "600", "color": "white", "width": "100%"}}, ["Search"])])])]);
}
function HeroSection() {
  return __jacJsx("div", {"style": {"display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent": "center", "height": "100vh", "background": "linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)", "color": "white", "textAlign": "center", "padding": "0 20px", "position": "relative", "overflow": "hidden"}}, [__jacJsx("div", {"style": {"position": "absolute", "top": "20%", "left": "10%", "width": "100px", "height": "100px", "background": "linear-gradient(45deg, #667eea, #764ba2)", "borderRadius": "50%", "opacity": "0.1", "animation": "float 6s ease-in-out infinite"}}, []), __jacJsx("div", {"style": {"position": "absolute", "top": "60%", "right": "15%", "width": "150px", "height": "150px", "background": "linear-gradient(45deg, #ff6b6b, #ee5a24)", "borderRadius": "30%", "opacity": "0.08", "animation": "float 8s ease-in-out infinite reverse"}}, []), __jacJsx("div", {"style": {"maxWidth": "900px", "animation": "slideInUp 0.8s ease-out", "zIndex": 1}}, [__jacJsx("div", {"style": {"display": "inline-block", "background": "rgba(255, 255, 255, 0.1)", "backdropFilter": "blur(20px)", "border": "1px solid rgba(255, 255, 255, 0.2)", "borderRadius": "50px", "padding": "8px 20px", "fontSize": "0.9rem", "marginBottom": "2rem", "fontWeight": "500", "letterSpacing": "0.5px"}}, ["✨ Smart Transportation Solution"]), __jacJsx("h1", {"style": {"fontSize": "4rem", "fontWeight": "800", "marginBottom": "1.5rem", "background": "linear-gradient(135deg, #ffffff 0%, #e0e7ff 100%)", "WebkitBackgroundClip": "text", "WebkitTextFillColor": "transparent", "letterSpacing": "-0.02em", "lineHeight": "1.1"}}, ["Route-Go", __jacJsx("br", {}, []), __jacJsx("span", {"style": {"fontSize": "3rem", "background": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", "WebkitBackgroundClip": "text", "WebkitTextFillColor": "transparent"}}, ["Sri Lanka"])]), __jacJsx("p", {"style": {"fontSize": "1.3rem", "marginBottom": "3rem", "opacity": "0.8", "lineHeight": "1.7", "fontWeight": "300", "maxWidth": "600px", "margin": "0 auto 3rem auto"}}, ["Discover optimal bus routes across all 25 districts with real-time filtering and intelligent path finding"]), __jacJsx("div", {"style": {"display": "flex", "gap": "1rem", "justifyContent": "center", "marginBottom": "4rem", "flexWrap": "wrap"}}, [__jacJsx("button", {"onClick": SearchBusTable, "style": {"background": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", "color": "white", "border": "none", "padding": "16px 32px", "fontSize": "1.1rem", "borderRadius": "12px", "cursor": "pointer", "fontWeight": "600", "boxShadow": "0 8px 32px rgba(102, 126, 234, 0.3)", "transition": "all 0.3s ease", "transform": "translateY(0)", "minWidth": "180px"}}, ["🚀 Start Planning"])]), __jacJsx("div", {"style": {"display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(200px, 1fr))", "gap": "1.5rem", "maxWidth": "700px", "margin": "0 auto"}}, [__jacJsx("div", {"style": {"background": "rgba(255, 255, 255, 0.05)", "backdropFilter": "blur(20px)", "border": "1px solid rgba(255, 255, 255, 0.1)", "borderRadius": "16px", "padding": "2rem 1.5rem", "textAlign": "center", "transition": "all 0.3s ease"}}, [__jacJsx("div", {"style": {"fontSize": "2.5rem", "marginBottom": "1rem", "background": "linear-gradient(135deg, #667eea, #764ba2)", "borderRadius": "50%", "width": "60px", "height": "60px", "display": "flex", "alignItems": "center", "justifyContent": "center", "margin": "0 auto 1rem auto"}}, ["🗺️"]), __jacJsx("h4", {"style": {"fontSize": "1.1rem", "marginBottom": "0.5rem", "fontWeight": "600"}}, ["25 Districts"]), __jacJsx("p", {"style": {"fontSize": "0.9rem", "opacity": "0.7", "margin": 0}}, ["Complete coverage"])]), __jacJsx("div", {"style": {"background": "rgba(255, 255, 255, 0.05)", "backdropFilter": "blur(20px)", "border": "1px solid rgba(255, 255, 255, 0.1)", "borderRadius": "16px", "padding": "2rem 1.5rem", "textAlign": "center", "transition": "all 0.3s ease"}}, [__jacJsx("div", {"style": {"fontSize": "2.5rem", "marginBottom": "1rem", "background": "linear-gradient(135deg, #ff6b6b, #ee5a24)", "borderRadius": "50%", "width": "60px", "height": "60px", "display": "flex", "alignItems": "center", "justifyContent": "center", "margin": "0 auto 1rem auto"}}, ["⏰"]), __jacJsx("h4", {"style": {"fontSize": "1.1rem", "marginBottom": "0.5rem", "fontWeight": "600"}}, ["Smart Timing"]), __jacJsx("p", {"style": {"fontSize": "0.9rem", "opacity": "0.7", "margin": 0}}, ["Real-time filtering"])]), __jacJsx("div", {"style": {"background": "rgba(255, 255, 255, 0.05)", "backdropFilter": "blur(20px)", "border": "1px solid rgba(255, 255, 255, 0.1)", "borderRadius": "16px", "padding": "2rem 1.5rem", "textAlign": "center", "transition": "all 0.3s ease"}}, [__jacJsx("div", {"style": {"fontSize": "2.5rem", "marginBottom": "1rem", "background": "linear-gradient(135deg, #00d2ff, #3a7bd5)", "borderRadius": "50%", "width": "60px", "height": "60px", "display": "flex", "alignItems": "center", "justifyContent": "center", "margin": "0 auto 1rem auto"}}, ["🚌"]), __jacJsx("h4", {"style": {"fontSize": "1.1rem", "marginBottom": "0.5rem", "fontWeight": "600"}}, ["Multi-Route"]), __jacJsx("p", {"style": {"fontSize": "0.9rem", "opacity": "0.7", "margin": 0}}, ["Best connections"])])])])]);
}
function app() {
  return __jacJsx("div", {}, [__jacJsx(HeroSection, {}, []), __jacJsx(SearchBusTable, {}, [])]);
}
export { HeroSection, SearchBusTable, app };
>>>>>>> 0bd80e2228311001530bc21eb1b01e13f24f15cd
