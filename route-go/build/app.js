<<<<<<< HEAD
import { __jacJsx, __jacSpawn } from "@jac-client/utils";
import { useState, useEffect } from "react";
function SearchBusTable() {
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
    "style": {
      "width": "100%",
      "padding": "10px",
      "borderRadius": "4px",
      "border": "1px solid #ccc",
      "fontSize": "0.9rem"
    }
  }, [__jacJsx("option", {}, ["Select Start"]), __jacJsx("option", {}, ["Colombo"]), __jacJsx("option", {}, ["Jaffna"])])]), __jacJsx("div", {}, [__jacJsx("label", {}, ["To *"]), __jacJsx("select", {
    "style": {
      "width": "100%",
      "padding": "10px",
      "borderRadius": "4px",
      "border": "1px solid #ccc",
      "fontSize": "0.9rem"
    }
  }, [__jacJsx("option", {}, ["Select Destination"]), __jacJsx("option", {}, ["Colombo"]), __jacJsx("option", {}, ["Jaffna"]), __jacJsx("option", {}, ["Kandy"])])]), __jacJsx("div", {}, [__jacJsx("label", {}, ["Start Time"]), __jacJsx("select", {
    "style": {
      "width": "100%",
      "padding": "10px",
      "borderRadius": "4px",
      "border": "1px solid #ccc",
      "fontSize": "0.9rem"
    }
  }, [__jacJsx("option", {}, ["Select Start Time"]), __jacJsx("option", {}, ["00:00"]), __jacJsx("option", {}, ["01:00"]), __jacJsx("option", {}, ["02:00"]), __jacJsx("option", {}, ["03:00"]), __jacJsx("option", {}, ["04:00"]), __jacJsx("option", {}, ["05:00"]), __jacJsx("option", {}, ["06:00"]), __jacJsx("option", {}, ["07:00"]), __jacJsx("option", {}, ["08:00"]), __jacJsx("option", {}, ["09:00"]), __jacJsx("option", {}, ["10:00"]), __jacJsx("option", {}, ["11:00"]), __jacJsx("option", {}, ["12:00"]), __jacJsx("option", {}, ["13:00"]), __jacJsx("option", {}, ["14:00"]), __jacJsx("option", {}, ["15:00"]), __jacJsx("option", {}, ["16:00"]), __jacJsx("option", {}, ["17:00"]), __jacJsx("option", {}, ["18:00"]), __jacJsx("option", {}, ["19:00"]), __jacJsx("option", {}, ["20:00"]), __jacJsx("option", {}, ["21:00"]), __jacJsx("option", {}, ["22:00"]), __jacJsx("option", {}, ["23:00"])])]), __jacJsx("div", {}, [__jacJsx("label", {}, ["End Time"]), __jacJsx("select", {
    "style": {
      "width": "100%",
      "padding": "10px",
      "borderRadius": "4px",
      "border": "1px solid #ccc",
      "fontSize": "0.9rem"
    }
  }, [__jacJsx("option", {}, ["Select End Time"]), __jacJsx("option", {}, ["00:00"]), __jacJsx("option", {}, ["01:00"]), __jacJsx("option", {}, ["02:00"]), __jacJsx("option", {}, ["03:00"]), __jacJsx("option", {}, ["04:00"]), __jacJsx("option", {}, ["05:00"]), __jacJsx("option", {}, ["06:00"]), __jacJsx("option", {}, ["07:00"]), __jacJsx("option", {}, ["08:00"]), __jacJsx("option", {}, ["09:00"]), __jacJsx("option", {}, ["10:00"]), __jacJsx("option", {}, ["11:00"]), __jacJsx("option", {}, ["12:00"]), __jacJsx("option", {}, ["13:00"]), __jacJsx("option", {}, ["14:00"]), __jacJsx("option", {}, ["15:00"]), __jacJsx("option", {}, ["16:00"]), __jacJsx("option", {}, ["17:00"]), __jacJsx("option", {}, ["18:00"]), __jacJsx("option", {}, ["19:00"]), __jacJsx("option", {}, ["20:00"]), __jacJsx("option", {}, ["21:00"]), __jacJsx("option", {}, ["22:00"]), __jacJsx("option", {}, ["23:00"])])]), __jacJsx("div", {
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
    }
  }, ["Search"])])])]);
}
function HeroSection() {
  return __jacJsx("div", {
    "style": {
      "display": "flex",
      "flexDirection": "column",
      "alignItems": "center",
      "justifyContent": "center",
      "height": "100vh",
      "background": "linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)",
      "color": "white",
      "textAlign": "center",
      "padding": "0 20px",
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
  }, ["🚀 Start Planning"])]), __jacJsx("div", {
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
function app() {
  return __jacJsx("div", {}, [__jacJsx(HeroSection, {}, []), __jacJsx(SearchBusTable, {}, [])]);
}
export { HeroSection, SearchBusTable, app };
=======
import { __jacJsx, __jacSpawn } from "@jac-client/utils";
import { useState, useEffect } from "react";
function SearchBusTable() {
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
    "style": {
      "width": "100%",
      "padding": "10px",
      "borderRadius": "4px",
      "border": "1px solid #ccc",
      "fontSize": "0.9rem"
    }
  }, [__jacJsx("option", {}, ["Select Start"]), __jacJsx("option", {}, ["Colombo"]), __jacJsx("option", {}, ["Jaffna"])])]), __jacJsx("div", {}, [__jacJsx("label", {}, ["To *"]), __jacJsx("select", {
    "style": {
      "width": "100%",
      "padding": "10px",
      "borderRadius": "4px",
      "border": "1px solid #ccc",
      "fontSize": "0.9rem"
    }
  }, [__jacJsx("option", {}, ["Select Destination"]), __jacJsx("option", {}, ["Colombo"]), __jacJsx("option", {}, ["Jaffna"]), __jacJsx("option", {}, ["Kandy"])])]), __jacJsx("div", {}, [__jacJsx("label", {}, ["Start Time"]), __jacJsx("select", {
    "style": {
      "width": "100%",
      "padding": "10px",
      "borderRadius": "4px",
      "border": "1px solid #ccc",
      "fontSize": "0.9rem"
    }
  }, [__jacJsx("option", {}, ["Select Start Time"]), __jacJsx("option", {}, ["00:00"]), __jacJsx("option", {}, ["01:00"]), __jacJsx("option", {}, ["02:00"]), __jacJsx("option", {}, ["03:00"]), __jacJsx("option", {}, ["04:00"]), __jacJsx("option", {}, ["05:00"]), __jacJsx("option", {}, ["06:00"]), __jacJsx("option", {}, ["07:00"]), __jacJsx("option", {}, ["08:00"]), __jacJsx("option", {}, ["09:00"]), __jacJsx("option", {}, ["10:00"]), __jacJsx("option", {}, ["11:00"]), __jacJsx("option", {}, ["12:00"]), __jacJsx("option", {}, ["13:00"]), __jacJsx("option", {}, ["14:00"]), __jacJsx("option", {}, ["15:00"]), __jacJsx("option", {}, ["16:00"]), __jacJsx("option", {}, ["17:00"]), __jacJsx("option", {}, ["18:00"]), __jacJsx("option", {}, ["19:00"]), __jacJsx("option", {}, ["20:00"]), __jacJsx("option", {}, ["21:00"]), __jacJsx("option", {}, ["22:00"]), __jacJsx("option", {}, ["23:00"])])]), __jacJsx("div", {}, [__jacJsx("label", {}, ["End Time"]), __jacJsx("select", {
    "style": {
      "width": "100%",
      "padding": "10px",
      "borderRadius": "4px",
      "border": "1px solid #ccc",
      "fontSize": "0.9rem"
    }
  }, [__jacJsx("option", {}, ["Select End Time"]), __jacJsx("option", {}, ["00:00"]), __jacJsx("option", {}, ["01:00"]), __jacJsx("option", {}, ["02:00"]), __jacJsx("option", {}, ["03:00"]), __jacJsx("option", {}, ["04:00"]), __jacJsx("option", {}, ["05:00"]), __jacJsx("option", {}, ["06:00"]), __jacJsx("option", {}, ["07:00"]), __jacJsx("option", {}, ["08:00"]), __jacJsx("option", {}, ["09:00"]), __jacJsx("option", {}, ["10:00"]), __jacJsx("option", {}, ["11:00"]), __jacJsx("option", {}, ["12:00"]), __jacJsx("option", {}, ["13:00"]), __jacJsx("option", {}, ["14:00"]), __jacJsx("option", {}, ["15:00"]), __jacJsx("option", {}, ["16:00"]), __jacJsx("option", {}, ["17:00"]), __jacJsx("option", {}, ["18:00"]), __jacJsx("option", {}, ["19:00"]), __jacJsx("option", {}, ["20:00"]), __jacJsx("option", {}, ["21:00"]), __jacJsx("option", {}, ["22:00"]), __jacJsx("option", {}, ["23:00"])])]), __jacJsx("div", {
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
    }
  }, ["Search"])])])]);
}
function HeroSection() {
  return __jacJsx("div", {
    "style": {
      "display": "flex",
      "flexDirection": "column",
      "alignItems": "center",
      "justifyContent": "center",
      "height": "100vh",
      "background": "linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)",
      "color": "white",
      "textAlign": "center",
      "padding": "0 20px",
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
  }, ["🚀 Start Planning"])]), __jacJsx("div", {
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
function app() {
  return __jacJsx("div", {}, [__jacJsx(HeroSection, {}, []), __jacJsx(SearchBusTable, {}, [])]);
}
export { HeroSection, SearchBusTable, app };
>>>>>>> 144eea30a19c5135bf6127f19924e8f4faabfb19
