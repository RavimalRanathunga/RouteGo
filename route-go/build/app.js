function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
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
function SearchBusTable() {
  var _useState = useState(""),
    _useState2 = _slicedToArray(_useState, 2),
    from_city_name = _useState2[0],
    setFromCityName = _useState2[1];
  var _useState3 = useState(""),
    _useState4 = _slicedToArray(_useState3, 2),
    to_city_name = _useState4[0],
    setToCityName = _useState4[1];
  var _useState5 = useState(""),
    _useState6 = _slicedToArray(_useState5, 2),
    start_time = _useState6[0],
    setStartTime = _useState6[1];
  var _useState7 = useState(""),
    _useState8 = _slicedToArray(_useState7, 2),
    end_time = _useState8[0],
    setEndTime = _useState8[1];
  var _useState9 = useState(false),
    _useState0 = _slicedToArray(_useState9, 2),
    clicked = _useState0[0],
    setClick = _useState0[1];
  var _useState1 = useState([]),
    _useState10 = _slicedToArray(_useState1, 2),
    buses = _useState10[0],
    setBuses = _useState10[1];
  var _useState11 = useState([]),
    _useState12 = _slicedToArray(_useState11, 2),
    bus_routes = _useState12[0],
    setBusRoutes = _useState12[1];
  function handleRefresh() {
    setFromCityName("");
    setToCityName("");
    setStartTime("");
    setEndTime("");
    setBuses([]);
    setClick(!clicked);
  }
  function handleClick() {
    return _handleClick.apply(this, arguments);
  }
  function _handleClick() {
    _handleClick = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var results, newBuses, _iterator, _step, _results, _iterator2, _step2, bus, routes;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            console.log("Button clicked!");
            if (!(from_city_name === "" || to_city_name === "" || start_time === "" || end_time === "")) {
              _context.n = 1;
              break;
            }
            alert("Please fill in all fields before searching.");
            return _context.a(2);
          case 1:
            console.log("From: ".concat(from_city_name, ", To: ").concat(to_city_name, ", Start Time: ").concat(start_time, ", End Time: ").concat(end_time));
            setClick(!clicked);
            setBuses([]);
            setBusRoutes([]);
            _context.n = 2;
            return __jacSpawn("findResults", "", {
              "from_city_name": from_city_name,
              "to_city_name": to_city_name,
              "start_time": start_time,
              "end_time": end_time
            });
          case 2:
            results = _context.v;
            console.log("Found ".concat(results.reports.length, " reports."));
            if (!(results.reports.length > 0)) {
              _context.n = 4;
              break;
            }
            newBuses = [];
            _iterator = _createForOfIteratorHelper(results.reports);
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                _results = _step.value;
                _iterator2 = _createForOfIteratorHelper(_results);
                try {
                  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                    bus = _step2.value;
                    console.log("Bus Found:", bus);
                    newBuses.push(bus);
                  }
                } catch (err) {
                  _iterator2.e(err);
                } finally {
                  _iterator2.f();
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
            setBuses(newBuses);
            _context.n = 3;
            return __jacSpawn("findRoutes", "", {
              "from_city_name": from_city_name,
              "to_city_name": to_city_name
            });
          case 3:
            routes = _context.v;
            console.log("Routes Found:", routes.reports[0].routes);
            setBusRoutes(bus_routes.concat(routes.reports[0].routes));
            console.log("Bus Routes:", bus_routes);
          case 4:
            console.log("Found ".concat(buses.length, " buses."));
            console.log(buses);
          case 5:
            return _context.a(2);
        }
      }, _callee);
    }));
    return _handleClick.apply(this, arguments);
  }
  return __jacJsx("div", {
    "style": {
      "background": "linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)",
      "padding": "40px 20px",
      "borderRadius": "0px",
      "color": "white"
    }
  }, [__jacJsx("h3", {
    "style": {
      "marginBottom": "20px",
      "fontWeight": "600"
    }
  }, ["Search Bus Time Table"]), __jacJsx("div", {
    "style": {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
      gap: "20px"
    }
  }, [__jacJsx("div", {}, [__jacJsx("label", {}, ["From *"]), __jacJsx("select", {
    "required": true,
    "style": {
      "width": "100%",
      "padding": "10px",
      "borderRadius": "4px",
      "border": "1px solid #ccc",
      "fontSize": "0.9rem"
    },
    "value": from_city_name,
    "onChange": function onChange(e) {
      setFromCityName(e.target.value);
    }
  }, [__jacJsx("option", {}, ["Select Start"]), __jacJsx("option", {
    "value": "Colombo"
  }, ["Colombo"]), __jacJsx("option", {
    "value": "Jaffna"
  }, ["Jaffna"])])]), __jacJsx("div", {}, [__jacJsx("label", {}, ["To *"]), __jacJsx("select", {
    "required": true,
    "style": {
      "width": "100%",
      "padding": "10px",
      "borderRadius": "4px",
      "border": "1px solid #ccc",
      "fontSize": "0.9rem"
    },
    "value": to_city_name,
    "onChange": function onChange(e) {
      setToCityName(e.target.value);
    }
  }, [__jacJsx("option", {}, ["Select Destination"]), __jacJsx("option", {
    "value": "Colombo"
  }, ["Colombo"]), __jacJsx("option", {
    "value": "Jaffna"
  }, ["Jaffna"]), __jacJsx("option", {
    "value": "Kandy"
  }, ["Kandy"])])]), __jacJsx("div", {}, [__jacJsx("label", {}, ["Time Range:Start Time"]), __jacJsx("select", {
    "required": true,
    "style": {
      "width": "100%",
      "padding": "10px",
      "borderRadius": "4px",
      "border": "1px solid #ccc",
      "fontSize": "0.9rem"
    },
    "value": start_time,
    "onChange": function onChange(e) {
      setStartTime(e.target.value);
    }
  }, [__jacJsx("option", {}, ["Select Start Time"]), __jacJsx("option", {
    "value": "00:00"
  }, ["00:00"]), __jacJsx("option", {
    "value": "01:00"
  }, ["01:00"]), __jacJsx("option", {
    "value": "02:00"
  }, ["02:00"]), __jacJsx("option", {
    "value": "03:00"
  }, ["03:00"]), __jacJsx("option", {
    "value": "04:00"
  }, ["04:00"]), __jacJsx("option", {
    "value": "05:00"
  }, ["05:00"]), __jacJsx("option", {
    "value": "06:00"
  }, ["06:00"]), __jacJsx("option", {
    "value": "07:00"
  }, ["07:00"]), __jacJsx("option", {
    "value": "08:00"
  }, ["08:00"]), __jacJsx("option", {
    "value": "09:00"
  }, ["09:00"]), __jacJsx("option", {
    "value": "10:00"
  }, ["10:00"]), __jacJsx("option", {
    "value": "11:00"
  }, ["11:00"]), __jacJsx("option", {
    "value": "12:00"
  }, ["12:00"]), __jacJsx("option", {
    "value": "13:00"
  }, ["13:00"]), __jacJsx("option", {
    "value": "14:00"
  }, ["14:00"]), __jacJsx("option", {
    "value": "15:00"
  }, ["15:00"]), __jacJsx("option", {
    "value": "16:00"
  }, ["16:00"]), __jacJsx("option", {
    "value": "17:00"
  }, ["17:00"]), __jacJsx("option", {
    "value": "18:00"
  }, ["18:00"]), __jacJsx("option", {
    "value": "19:00"
  }, ["19:00"]), __jacJsx("option", {
    "value": "20:00"
  }, ["20:00"]), __jacJsx("option", {
    "value": "21:00"
  }, ["21:00"]), __jacJsx("option", {
    "value": "22:00"
  }, ["22:00"]), __jacJsx("option", {
    "value": "23:00"
  }, ["23:00"])])]), __jacJsx("div", {}, [__jacJsx("label", {}, ["Time Range:End Time"]), __jacJsx("select", {
    "required": true,
    "style": {
      "width": "100%",
      "padding": "10px",
      "borderRadius": "4px",
      "border": "1px solid #ccc",
      "fontSize": "0.9rem"
    },
    "value": end_time,
    "onChange": function onChange(e) {
      setEndTime(e.target.value);
    }
  }, [__jacJsx("option", {}, ["Select End Time"]), __jacJsx("option", {
    "value": "00:00"
  }, ["00:00"]), __jacJsx("option", {
    "value": "01:00"
  }, ["01:00"]), __jacJsx("option", {
    "value": "02:00"
  }, ["02:00"]), __jacJsx("option", {
    "value": "03:00"
  }, ["03:00"]), __jacJsx("option", {
    "value": "04:00"
  }, ["04:00"]), __jacJsx("option", {
    "value": "05:00"
  }, ["05:00"]), __jacJsx("option", {
    "value": "06:00"
  }, ["06:00"]), __jacJsx("option", {
    "value": "07:00"
  }, ["07:00"]), __jacJsx("option", {
    "value": "08:00"
  }, ["08:00"]), __jacJsx("option", {
    "value": "09:00"
  }, ["09:00"]), __jacJsx("option", {
    "value": "10:00"
  }, ["10:00"]), __jacJsx("option", {
    "value": "11:00"
  }, ["11:00"]), __jacJsx("option", {
    "value": "12:00"
  }, ["12:00"]), __jacJsx("option", {
    "value": "13:00"
  }, ["13:00"]), __jacJsx("option", {
    "value": "14:00"
  }, ["14:00"]), __jacJsx("option", {
    "value": "15:00"
  }, ["15:00"]), __jacJsx("option", {
    "value": "16:00"
  }, ["16:00"]), __jacJsx("option", {
    "value": "17:00"
  }, ["17:00"]), __jacJsx("option", {
    "value": "18:00"
  }, ["18:00"]), __jacJsx("option", {
    "value": "19:00"
  }, ["19:00"]), __jacJsx("option", {
    "value": "20:00"
  }, ["20:00"]), __jacJsx("option", {
    "value": "21:00"
  }, ["21:00"]), __jacJsx("option", {
    "value": "22:00"
  }, ["22:00"]), __jacJsx("option", {
    "value": "23:00"
  }, ["23:00"])])]), __jacJsx("div", {
    "style": {
      display: "flex",
      alignItems: "flex-end"
    }
  }, [__jacJsx("button", {
    "style": {
      "background": "#ff7f32",
      "border": "none",
      "padding": "10px 25px",
      "borderRadius": "4px",
      "cursor": "pointer",
      "fontSize": "1rem",
      "fontWeight": "600",
      "color": "white",
      "width": "100%"
    },
    "onClick": handleClick,
    "disabled": clicked
  }, ["Search"])])]), clicked ? __jacJsx("div", {
    "style": {
      "display": "flex",
      "flexDirection": "column",
      "padding": "20px 20px"
    }
  }, [__jacJsx("div", {
    "style": {
      "display": "flex",
      "justifyContent": "flex-end",
      "marginBottom": "15px"
    }
  }, [__jacJsx("button", {
    "style": {
      "background": "#ff3232ff",
      "border": "none",
      "padding": "10px 25px",
      "borderRadius": "4px",
      "cursor": "pointer",
      "fontSize": "1rem",
      "fontWeight": "600",
      "color": "white",
      "width": "100px",
      "height": "40px",
      "textAlign": "center"
    },
    "onClick": handleRefresh
  }, ["Refresh"])]), __jacJsx("div", {
    "style": {
      "overflowX": "auto"
    }
  }, [__jacJsx("table", {
    "style": {
      width: "100%",
      borderCollapse: "collapse",
      backgroundColor: "rgba(255,255,255,0.05)"
    }
  }, [__jacJsx("thead", {}, [__jacJsx("tr", {
    "style": {
      backgroundColor: "rgba(255,127,50,0.1)",
      borderBottom: "2px solid #ff7f32"
    }
  }, [__jacJsx("th", {
    "style": {
      borderBottom: "2px solid #ff7f32",
      padding: "12px",
      textAlign: "left",
      color: "#ff7f32",
      fontWeight: "600"
    }
  }, ["Bus ID"]), __jacJsx("th", {
    "style": {
      borderBottom: "2px solid #ff7f32",
      padding: "12px",
      textAlign: "left",
      color: "#ff7f32",
      fontWeight: "600"
    }
  }, ["Bus Type"]), __jacJsx("th", {
    "style": {
      borderBottom: "2px solid #ff7f32",
      padding: "12px",
      textAlign: "left",
      color: "#ff7f32",
      fontWeight: "600"
    }
  }, ["Start Time"]), __jacJsx("th", {
    "style": {
      borderBottom: "2px solid #ff7f32",
      padding: "12px",
      textAlign: "left",
      color: "#ff7f32",
      fontWeight: "600"
    }
  }, ["End Time"]), __jacJsx("th", {
    "style": {
      borderBottom: "2px solid #ff7f32",
      padding: "12px",
      textAlign: "left",
      color: "#ff7f32",
      fontWeight: "600"
    }
  }, ["Fare (LKR)"]), __jacJsx("th", {
    "style": {
      borderBottom: "2px solid #ff7f32",
      padding: "12px",
      textAlign: "left",
      color: "#ff7f32",
      fontWeight: "600"
    }
  }, ["Intermediate Stops"])])]), __jacJsx("tbody", {}, [buses.map(function (bus) {
    return __jacJsx("tr", {
      "key": bus.bus_id,
      "style": {
        "borderBottom": "1px solid rgba(255,255,255,0.1)",
        "backgroundColor": "rgba(255,255,255,0.02)",
        "transition": "backgroundColor 0.2s"
      }
    }, [__jacJsx("td", {
      "style": {
        "padding": "12px",
        "color": "#fff"
      }
    }, [bus.bus_id]), __jacJsx("td", {
      "style": {
        "padding": "12px",
        "color": "#ffffffff",
        "fontWeight": "600"
      }
    }, [bus.bus_type]), __jacJsx("td", {
      "style": {
        "padding": "12px",
        "color": "#fff"
      }
    }, [bus.start_time]), __jacJsx("td", {
      "style": {
        "padding": "12px",
        "color": "#fff"
      }
    }, [bus.end_time]), __jacJsx("td", {
      "style": {
        "padding": "12px",
        "color": "#4ade80",
        "fontWeight": "600"
      }
    }, ["Rs. ", bus.fare.toFixed(2)]), __jacJsx("td", {
      "style": {
        "padding": "12px",
        "color": "#fff",
        "fontSize": "0.9rem"
      }
    }, [bus.intermediate_stops.join(", ")])]);
  })])])])]) : __jacJsx("div", {
    "style": {
      "height": "auto",
      "display": "flex",
      "alignItems": "center",
      "justifyContent": "center",
      "minheight": "200px"
    }
  }, [__jacJsx("h1", {
    "style": {
      "textAlign": "center",
      "fontSize": "1rem",
      "padding": "2px 2px"
    }
  }, ["Search some buses!!!"])])]);
}
function HeroSection() {
  return __jacJsx("div", {
    "style": {
      "display": "flex",
      "flexDirection": "column",
      "alignItems": "center",
      "justifyContent": "center",
      "height": "100vh",
      "padding": "20px 20px",
      "background": "linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)",
      "color": "white",
      "textAlign": "center",
      "position": "relative",
      "overflow": "hidden"
    }
  }, [__jacJsx("div", {
    "style": {
      "position": "absolute",
      "top": "20%",
      "left": "10%",
      "width": "100px",
      "height": "100px",
      "background": "linear-gradient(45deg, #667eea, #764ba2)",
      "borderRadius": "50%",
      "opacity": "0.1",
      "animation": "float 6s ease-in-out infinite"
    }
  }, []), __jacJsx("div", {
    "style": {
      "position": "absolute",
      "top": "60%",
      "right": "15%",
      "width": "150px",
      "height": "150px",
      "background": "linear-gradient(45deg, #ff6b6b, #ee5a24)",
      "borderRadius": "30%",
      "opacity": "0.08",
      "animation": "float 8s ease-in-out infinite reverse"
    }
  }, []), __jacJsx("div", {
    "style": {
      "maxWidth": "900px",
      "animation": "slideInUp 0.8s ease-out",
      "zIndex": 1
    }
  }, [__jacJsx("div", {
    "style": {
      "display": "inline-block",
      "background": "rgba(255, 255, 255, 0.1)",
      "backdropFilter": "blur(20px)",
      "border": "1px solid rgba(255, 255, 255, 0.2)",
      "borderRadius": "50px",
      "padding": "8px 20px",
      "fontSize": "0.9rem",
      "marginBottom": "2rem",
      "fontWeight": "500",
      "letterSpacing": "0.5px"
    }
  }, ["✨ Smart Transportation Solution"]), __jacJsx("h1", {
    "style": {
      "fontSize": "4rem",
      "fontWeight": "800",
      "marginBottom": "1.5rem",
      "background": "linear-gradient(135deg, #ffffff 0%, #e0e7ff 100%)",
      "WebkitBackgroundClip": "text",
      "WebkitTextFillColor": "transparent",
      "letterSpacing": "-0.02em",
      "lineHeight": "1.1"
    }
  }, ["Route-Go", __jacJsx("br", {}, []), __jacJsx("span", {
    "style": {
      "fontSize": "3rem",
      "background": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      "WebkitBackgroundClip": "text",
      "WebkitTextFillColor": "transparent"
    }
  }, ["Sri Lanka"])]), __jacJsx("p", {
    "style": {
      "fontSize": "1.3rem",
      "marginBottom": "3rem",
      "opacity": "0.8",
      "lineHeight": "1.7",
      "fontWeight": "300",
      "maxWidth": "600px",
      "margin": "0 auto 3rem auto"
    }
  }, ["Discover optimal bus routes across all 25 districts with real-time filtering and intelligent path finding"]), __jacJsx("div", {
    "style": {
      "display": "flex",
      "gap": "1rem",
      "justifyContent": "center",
      "marginBottom": "4rem",
      "flexWrap": "wrap"
    }
  }, [__jacJsx("button", {
    "onClick": SearchBusTable,
    "style": {
      "background": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      "color": "white",
      "border": "none",
      "padding": "16px 32px",
      "fontSize": "1.1rem",
      "borderRadius": "12px",
      "cursor": "pointer",
      "fontWeight": "600",
      "boxShadow": "0 8px 32px rgba(102, 126, 234, 0.3)",
      "transition": "all 0.3s ease",
      "transform": "translateY(0)",
      "minWidth": "180px"
    }
  }, ["🚀 Start Browsing"]), __jacJsx("button", {
    "style": {
      "background": "rgba(255, 255, 255, 0.1)",
      "color": "white",
      "border": "1px solid rgba(255, 255, 255, 0.2)",
      "padding": "16px 32px",
      "fontSize": "1.1rem",
      "borderRadius": "12px",
      "cursor": "pointer",
      "fontWeight": "600",
      "backdropFilter": "blur(20px)",
      "transition": "all 0.3s ease",
      "minWidth": "180px"
    }
  }, ["📱 Bus AI"])]), __jacJsx("div", {
    "style": {
      "display": "grid",
      "gridTemplateColumns": "repeat(auto-fit, minmax(200px, 1fr))",
      "gap": "1.5rem",
      "maxWidth": "700px",
      "margin": "0 auto"
    }
  }, [__jacJsx("div", {
    "style": {
      "background": "rgba(255, 255, 255, 0.05)",
      "backdropFilter": "blur(20px)",
      "border": "1px solid rgba(255, 255, 255, 0.1)",
      "borderRadius": "16px",
      "padding": "2rem 1.5rem",
      "textAlign": "center",
      "transition": "all 0.3s ease"
    }
  }, [__jacJsx("div", {
    "style": {
      "fontSize": "2.5rem",
      "marginBottom": "1rem",
      "background": "linear-gradient(135deg, #667eea, #764ba2)",
      "borderRadius": "50%",
      "width": "60px",
      "height": "60px",
      "display": "flex",
      "alignItems": "center",
      "justifyContent": "center",
      "margin": "0 auto 1rem auto"
    }
  }, ["🗺️"]), __jacJsx("h4", {
    "style": {
      "fontSize": "1.1rem",
      "marginBottom": "0.5rem",
      "fontWeight": "600"
    }
  }, ["25 Districts"]), __jacJsx("p", {
    "style": {
      "fontSize": "0.9rem",
      "opacity": "0.7",
      "margin": 0
    }
  }, ["Complete coverage"])]), __jacJsx("div", {
    "style": {
      "background": "rgba(255, 255, 255, 0.05)",
      "backdropFilter": "blur(20px)",
      "border": "1px solid rgba(255, 255, 255, 0.1)",
      "borderRadius": "16px",
      "padding": "2rem 1.5rem",
      "textAlign": "center",
      "transition": "all 0.3s ease"
    }
  }, [__jacJsx("div", {
    "style": {
      "fontSize": "2.5rem",
      "marginBottom": "1rem",
      "background": "linear-gradient(135deg, #ff6b6b, #ee5a24)",
      "borderRadius": "50%",
      "width": "60px",
      "height": "60px",
      "display": "flex",
      "alignItems": "center",
      "justifyContent": "center",
      "margin": "0 auto 1rem auto"
    }
  }, ["⏰"]), __jacJsx("h4", {
    "style": {
      "fontSize": "1.1rem",
      "marginBottom": "0.5rem",
      "fontWeight": "600"
    }
  }, ["Smart Timing"]), __jacJsx("p", {
    "style": {
      "fontSize": "0.9rem",
      "opacity": "0.7",
      "margin": 0
    }
  }, ["Real-time filtering"])]), __jacJsx("div", {
    "style": {
      "background": "rgba(255, 255, 255, 0.05)",
      "backdropFilter": "blur(20px)",
      "border": "1px solid rgba(255, 255, 255, 0.1)",
      "borderRadius": "16px",
      "padding": "2rem 1.5rem",
      "textAlign": "center",
      "transition": "all 0.3s ease"
    }
  }, [__jacJsx("div", {
    "style": {
      "fontSize": "2.5rem",
      "marginBottom": "1rem",
      "background": "linear-gradient(135deg, #00d2ff, #3a7bd5)",
      "borderRadius": "50%",
      "width": "60px",
      "height": "60px",
      "display": "flex",
      "alignItems": "center",
      "justifyContent": "center",
      "margin": "0 auto 1rem auto"
    }
  }, ["🚌"]), __jacJsx("h4", {
    "style": {
      "fontSize": "1.1rem",
      "marginBottom": "0.5rem",
      "fontWeight": "600"
    }
  }, ["Multi-Route"]), __jacJsx("p", {
    "style": {
      "fontSize": "0.9rem",
      "opacity": "0.7",
      "margin": 0
    }
  }, ["Best connections"])])])])]);
}
function ChatWindow(props) {
  var _useState13 = useState([{
      sender: "bot",
      text: "Hi! I'm RouteGo Assistant. How can I help you find buses today?",
      id: 0
    }]),
    _useState14 = _slicedToArray(_useState13, 2),
    messages = _useState14[0],
    setMessages = _useState14[1];
  var _useState15 = useState(""),
    _useState16 = _slicedToArray(_useState15, 2),
    inputValue = _useState16[0],
    setInputValue = _useState16[1];
  var _useState17 = useState(1),
    _useState18 = _slicedToArray(_useState17, 2),
    messageId = _useState18[0],
    setMessageId = _useState18[1];
  function handleSendMessage() {
    return _handleSendMessage.apply(this, arguments);
  }
  function _handleSendMessage() {
    _handleSendMessage = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
      var results, userMsg, botMsg;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            if (inputValue) {
              _context2.n = 1;
              break;
            }
            return _context2.a(2);
          case 1:
            _context2.n = 2;
            return __jacSpawn("computeBusTime", "", {
              "user_input": inputValue
            });
          case 2:
            results = _context2.v;
            userMsg = {
              sender: "user",
              text: inputValue,
              id: messageId
            };
            botMsg = {
              sender: "bot",
              text: results.reports[0].response,
              id: messageId + 1
            };
            setMessages(messages.concat([userMsg, botMsg]));
            setMessageId(messageId + 2);
            setInputValue("");
          case 3:
            return _context2.a(2);
        }
      }, _callee2);
    }));
    return _handleSendMessage.apply(this, arguments);
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
  var _useState19 = useState(false),
    _useState20 = _slicedToArray(_useState19, 2),
    isChatOpen = _useState20[0],
    setIsChatOpen = _useState20[1];
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
function app() {
  useEffect(function () {
    function creategraph() {
      return _creategraph.apply(this, arguments);
    }
    function _creategraph() {
      _creategraph = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var is_graph_created, result;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              _context3.n = 1;
              return __jacSpawn("findGraph", "", {});
            case 1:
              is_graph_created = _context3.v;
              console.log("Graph exists:", is_graph_created.reports[0].data);
              if (!(is_graph_created.reports[0].data === false)) {
                _context3.n = 3;
                break;
              }
              _context3.n = 2;
              return __jacSpawn("createGraph", "", {});
            case 2:
              result = _context3.v;
            case 3:
              return _context3.a(2);
          }
        }, _callee3);
      }));
      return _creategraph.apply(this, arguments);
    }
    creategraph();
  }, []);
  return __jacJsx("div", {
    "style": {
      "width": "100%"
    }
  }, [__jacJsx(HeroSection, {}, []), __jacJsx(SearchBusTable, {}, []), __jacJsx(ChatBot, {}, [])]);
}
export { ChatBot, ChatWindow, HeroSection, SearchBusTable, app };