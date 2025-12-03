function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
import { __jacJsx, __jacSpawn } from "@jac-client/utils";
import { useState, useEffect } from "react";
function ChatWindow(props) {
  var _useState = useState([{
      sender: "bot",
      text: "Hi! I'm RouteGo Assistant. How can I help you find buses today?",
      id: 0
    }]),
    _useState2 = _slicedToArray(_useState, 2),
    messages = _useState2[0],
    setMessages = _useState2[1];
  var _useState3 = useState(""),
    _useState4 = _slicedToArray(_useState3, 2),
    inputValue = _useState4[0],
    setInputValue = _useState4[1];
  var _useState5 = useState(1),
    _useState6 = _slicedToArray(_useState5, 2),
    messageId = _useState6[0],
    setMessageId = _useState6[1];
  function handleSendMessage() {
    return _handleSendMessage.apply(this, arguments);
  }
  function _handleSendMessage() {
    _handleSendMessage = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var input_val, userMsg, results, botMsg;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            input_val = inputValue;
            if (inputValue) {
              _context.n = 1;
              break;
            }
            return _context.a(2);
          case 1:
            setInputValue("");
            userMsg = {
              sender: "user",
              text: input_val,
              id: messageId
            };
            setMessages(messages.concat([userMsg]));
            _context.n = 2;
            return __jacSpawn("agentAI", "", {
              "user_input": input_val
            });
          case 2:
            results = _context.v;
            botMsg = {
              sender: "bot",
              text: results.reports[0].response,
              id: messageId + 1
            };
            setMessages(messages.concat([userMsg, botMsg]));
            setMessageId(messageId + 2);
          case 3:
            return _context.a(2);
        }
      }, _callee);
    }));
    return _handleSendMessage.apply(this, arguments);
  }
  function handleInputChange(e) {
    setInputValue(e.target.value);
  }
  function handleKeyPress(e) {
    if (e.key === "Enter") {
      handleSendMessage();
      e.preventDefault();
    }
  }
  return __jacJsx("div", {
    "style": {
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
    }
  }, [__jacJsx("div", {
    "style": {
      "background": "#ff7f32",
      "color": "white",
      "padding": "15px",
      "borderRadius": "10px 10px 0 0",
      "display": "flex",
      "justifyContent": "space-between",
      "alignItems": "center"
    }
  }, [__jacJsx("h4", {
    "style": {
      "margin": "0",
      "fontSize": "1rem"
    }
  }, ["RouteGo Chat"]), __jacJsx("button", {
    "onClick": function onClick() {
      props.closeChat();
    },
    "style": {
      "background": "none",
      "border": "none",
      "color": "white",
      "fontSize": "1.5rem",
      "cursor": "pointer",
      "padding": "0"
    }
  }, ["×"])]), __jacJsx("div", {
    "id": "messages-container",
    "style": {
      "flex": "1",
      "overflowY": "auto",
      "padding": "15px",
      "background": "#f9f9f9",
      "display": "flex",
      "flexDirection": "column"
    }
  }, [messages.map(function (msg) {
    var justifyContent = "flex-start";
    var bgColor = "#e0e0e0";
    var textColor = "black";
    if (msg.sender === "user") {
      justifyContent = "flex-end";
      bgColor = "#ff7f32";
      textColor = "white";
    }
    return __jacJsx("div", {
      "key": msg.id,
      "style": {
        "marginBottom": "10px",
        "display": "flex",
        "justifyContent": justifyContent
      }
    }, [__jacJsx("div", {
      "style": {
        "maxWidth": "70%",
        "padding": "10px 15px",
        "borderRadius": "10px",
        "background": bgColor,
        "color": textColor,
        "wordWrap": "break-word",
        "fontSize": "0.95rem"
      }
    }, [msg.text])]);
  })]), __jacJsx("div", {
    "style": {
      "padding": "10px",
      "borderTop": "1px solid #ddd",
      "display": "flex",
      "gap": "10px"
    }
  }, [__jacJsx("input", {
    "type": "text",
    "value": inputValue,
    "onChange": function onChange(e) {
      handleInputChange(e);
    },
    "onKeyPress": function onKeyPress(e) {
      handleKeyPress(e);
    },
    "placeholder": "Type your message...",
    "style": {
      "flex": "1",
      "padding": "10px",
      "borderRadius": "5px",
      "border": "1px solid #ddd",
      "fontSize": "0.9rem",
      "fontFamily": "Arial, sans-serif"
    }
  }, []), __jacJsx("button", {
    "onClick": function onClick() {
      handleSendMessage();
    },
    "style": {
      "background": "#ff7f32",
      "color": "white",
      "border": "none",
      "padding": "10px 15px",
      "borderRadius": "5px",
      "cursor": "pointer",
      "fontWeight": "600",
      "fontSize": "0.9rem"
    }
  }, ["Send"])])]);
}
function ChatBot() {
  var _useState7 = useState(false),
    _useState8 = _slicedToArray(_useState7, 2),
    isChatOpen = _useState8[0],
    setIsChatOpen = _useState8[1];
  if (isChatOpen) {
    return __jacJsx("div", {}, [__jacJsx(ChatWindow, {
      "closeChat": function closeChat() {
        setIsChatOpen(false);
      }
    }, []), __jacJsx("button", {
      "onClick": function onClick() {
        setIsChatOpen(false);
      },
      "style": _defineProperty(_defineProperty(_defineProperty(_defineProperty({
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
        "zIndex": "999"
      }, "position", "absolute"), "top", "0"), "opacity", "0"), "cursor", "pointer")
    }, [])]);
  }
  return __jacJsx("div", {}, [__jacJsx("button", {
    "onClick": function onClick() {
      setIsChatOpen(true);
    },
    "style": {
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
    }
  }, ["💬"])]);
}
export { ChatBot, ChatWindow };