"""Main entry point for route-go-new."""

#Server-side imports
import from endpoints {
    createGraph,
    findGraph,
    computeIntermediateStops,
    computeBusTimeAgent,
    findRoutes,
    findRoutesAgent,
    filterBuses,
    filterBusesAgent,
    agentAI
}

# Client-side imports
cl import from .components.GraphBootstrap { GraphBootstrap }
cl import from .components.HeroSection { HeroSection }
cl import from .components.SearchBusTable { SearchBusTable }
cl import from .components.ChatBot { ChatBot }

def:pub app() -> JsxElement {
    return <div style={{"width":"100%"}}>
        <GraphBootstrap />
        <HeroSection />
        <SearchBusTable />
        <ChatBot />
    </div>;
}
