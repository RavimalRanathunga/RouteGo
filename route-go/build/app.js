import { __jacJsx, __jacSpawn } from "@jac-client/utils";
import { useState, useEffect } from "react";
function HeroSection() {
  return __jacJsx("div", {
    "style": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      color: "white",
      textAlign: "center",
      padding: "0 20px"
    }
  }, [__jacJsx("div", {
    "style": {
      maxWidth: "800px",
      animation: "fadeInUp 1s ease-out"
    }
  }, [__jacJsx("h1", {
    "style": {
      fontSize: "3.5rem",
      fontWeight: "700",
      marginBottom: "1rem",
      textShadow: "2px 2px 4px rgba(0,0,0,0.3)"
    }
  }, ["🚌 Route-Go Sri Lanka"]), __jacJsx("p", {
    "style": {
      fontSize: "1.4rem",
      marginBottom: "2rem",
      opacity: "0.9",
      lineHeight: "1.6"
    }
  }, ["Find the perfect bus route across all 25 districts of Sri Lanka"]), __jacJsx("div", {
    "style": {
      backgroundColor: "rgba(255,255,255,0.1)",
      backdropFilter: "blur(10px)",
      borderRadius: "15px",
      padding: "2rem",
      marginBottom: "2rem",
      border: "1px solid rgba(255,255,255,0.2)"
    }
  }, [__jacJsx("h3", {
    "style": {
      marginBottom: "1rem",
      fontSize: "1.2rem"
    }
  }, ["🎯 Smart Route Planning"]), __jacJsx("p", {
    "style": {
      fontSize: "1rem",
      opacity: "0.8"
    }
  }, ["Whether you're traveling from Vavuniya to Colombo or any district to another, ", "we'll find direct buses and connecting routes that pass through your route."])]), __jacJsx("button", {
    "style": {
      backgroundColor: "#ff6b6b",
      color: "white",
      border: "none",
      padding: "15px 30px",
      fontSize: "1.1rem",
      borderRadius: "50px",
      cursor: "pointer",
      fontWeight: "600",
      boxShadow: "0 8px 20px rgba(255, 107, 107, 0.3)",
      transition: "all 0.3s ease",
      transform: "translateY(0)"
    }
  }, ["🚀 Plan Your Journey"]), __jacJsx("div", {
    "style": {
      marginTop: "3rem",
      display: "flex",
      justifyContent: "space-around",
      flexWrap: "wrap",
      gap: "1rem"
    }
  }, [__jacJsx("div", {
    "style": {
      backgroundColor: "rgba(255,255,255,0.1)",
      padding: "1rem",
      borderRadius: "10px",
      minWidth: "150px"
    }
  }, [__jacJsx("div", {
    "style": {
      fontSize: "2rem",
      marginBottom: "0.5rem"
    }
  }, ["🗺️"]), __jacJsx("div", {
    "style": {
      fontSize: "0.9rem"
    }
  }, ["25 Districts"])]), __jacJsx("div", {
    "style": {
      backgroundColor: "rgba(255,255,255,0.1)",
      padding: "1rem",
      borderRadius: "10px",
      minWidth: "150px"
    }
  }, [__jacJsx("div", {
    "style": {
      fontSize: "2rem",
      marginBottom: "0.5rem"
    }
  }, ["⏰"]), __jacJsx("div", {
    "style": {
      fontSize: "0.9rem"
    }
  }, ["Time Filtering"])]), __jacJsx("div", {
    "style": {
      backgroundColor: "rgba(255,255,255,0.1)",
      padding: "1rem",
      borderRadius: "10px",
      minWidth: "150px"
    }
  }, [__jacJsx("div", {
    "style": {
      fontSize: "2rem",
      marginBottom: "0.5rem"
    }
  }, ["🚌"]), __jacJsx("div", {
    "style": {
      fontSize: "0.9rem"
    }
  }, ["Multiple Routes"])])])])]);
}
function app() {
  return __jacJsx("div", {}, [__jacJsx(HeroSection, {}, [])]);
}
export { HeroSection, app };