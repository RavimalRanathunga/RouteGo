def HeroSection(){
        return <div style={{
                "display": "flex",
                "flexDirection": "column",
                "alignItems": "center",
                "justifyContent": "center",
                "height": "100vh",
                "padding":"20px 20px",
                "background": "linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)",
                "color": "white",
                "textAlign": "center",
                "position": "relative",
                "overflow": "hidden"
            }}
        >
            
            <div style={{
                "position": "absolute",
                "top": "20%",
                "left": "10%",
                "width": "100px",
                "height": "100px",
                "background": "linear-gradient(45deg, #667eea, #764ba2)",
                "borderRadius": "50%",
                "opacity": "0.1",
                "animation": "float 6s ease-in-out infinite"
            }}></div>
            <div style={{
                "position": "absolute",
                "top": "60%",
                "right": "15%",
                "width": "150px",
                "height": "150px",
                "background": "linear-gradient(45deg, #ff6b6b, #ee5a24)",
                "borderRadius": "30%",
                "opacity": "0.08",
                "animation": "float 8s ease-in-out infinite reverse"
            }}></div>

            <div style={{
                "maxWidth": "900px",
                "animation": "slideInUp 0.8s ease-out",
                "zIndex": 1
            }}>
                
                <div style={{
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
                }}>
                    ✨ Smart Transportation Solution
                </div>

                <h1 style={{
                    "fontSize": "4rem",
                    "fontWeight": "800",
                    "marginBottom": "1.5rem",
                    "background": "linear-gradient(135deg, #ffffff 0%, #e0e7ff 100%)",
                    "WebkitBackgroundClip": "text",
                    "WebkitTextFillColor": "transparent",
                    "letterSpacing": "-0.02em",
                    "lineHeight": "1.1"
                }}>
                    Route-Go<br/>
                    <span style={{
                        "fontSize": "3rem",
                        "background": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                        "WebkitBackgroundClip": "text",
                        "WebkitTextFillColor": "transparent"
                    }}>Sri Lanka</span>
                </h1>
                
                <p style={{
                    "fontSize": "1.3rem",
                    "marginBottom": "3rem",
                    "opacity": "0.8",
                    "lineHeight": "1.7",
                    "fontWeight": "300",
                    "maxWidth": "600px",
                    "margin": "0 auto 3rem auto"
                }}>
                    Discover optimal bus routes across all 25 districts with real-time filtering and intelligent path finding
                </p>

                
                <div style={{
                    "display": "flex",
                    "gap": "1rem",
                    "justifyContent": "center",
                    "marginBottom": "4rem",
                    "flexWrap": "wrap"
                }}>
                    <button 
                        onClick={SearchBusTable}
                        style={{
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
                    }}
                    >
                        🚀 Start Browsing
                    </button>

                    <button style={{
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
                    }}
                    >
                        📱 Bus AI
                    </button>
                </div>

                
                <div style={{
                    "display": "grid",
                    "gridTemplateColumns": "repeat(auto-fit, minmax(200px, 1fr))",
                    "gap": "1.5rem",
                    "maxWidth": "700px",
                    "margin": "0 auto"
                }}>
                    <div style={{
                        "background": "rgba(255, 255, 255, 0.05)",
                        "backdropFilter": "blur(20px)",
                        "border": "1px solid rgba(255, 255, 255, 0.1)",
                        "borderRadius": "16px",
                        "padding": "2rem 1.5rem",
                        "textAlign": "center",
                        "transition": "all 0.3s ease"
                    }}
                    >
                        <div style={{ 
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
                        }}>🗺️</div>
                        <h4 style={{ "fontSize": "1.1rem", "marginBottom": "0.5rem", "fontWeight": "600" }}>25 Districts</h4>
                        <p style={{ "fontSize": "0.9rem", "opacity": "0.7", "margin": 0 }}>Complete coverage</p>
                    </div>

                    <div style={{
                        "background": "rgba(255, 255, 255, 0.05)",
                        "backdropFilter": "blur(20px)",
                        "border": "1px solid rgba(255, 255, 255, 0.1)",
                        "borderRadius": "16px",
                        "padding": "2rem 1.5rem",
                        "textAlign": "center",
                        "transition": "all 0.3s ease"
                    }}
                
                    >
                        <div style={{ 
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
                        }}>⏰</div>
                        <h4 style={{ "fontSize": "1.1rem", "marginBottom": "0.5rem", "fontWeight": "600" }}>Smart Timing</h4>
                        <p style={{ "fontSize": "0.9rem", "opacity": "0.7", "margin": 0 }}>Real-time filtering</p>
                    </div>

                    <div style={{
                        "background": "rgba(255, 255, 255, 0.05)",
                        "backdropFilter": "blur(20px)",
                        "border": "1px solid rgba(255, 255, 255, 0.1)",
                        "borderRadius": "16px",
                        "padding": "2rem 1.5rem",
                        "textAlign": "center",
                        "transition": "all 0.3s ease"
                    }}
                    >
                        <div style={{ 
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
                        }}>🚌</div>
                        <h4 style={{ "fontSize": "1.1rem", "marginBottom": "0.5rem", "fontWeight": "600" }}>Multi-Route</h4>
                        <p style={{ "fontSize": "0.9rem", "opacity": "0.7", "margin": 0 }}>Best connections</p>
                    </div>
                </div>
            </div>
        </div>;
    }