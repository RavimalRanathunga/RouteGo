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
