"""Main entry point for route-go-new."""

# Client-side imports (useState is auto-injected when using `has` variables)
cl import from react { useEffect, useState }
cl import from .components.HeroSection { HeroSection }
cl import from .components.SearchBusTable { SearchBusTable }
cl import from .components.ChatBot { ChatBot }

#Server-side imports
sv {
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
}

cl {

    def:pub app() -> any {

        useEffect(
            lambda -> None
            {
                async def creategraph() -> None
                {
                    is_graph_created = root spawn findGraph();
                    console.log("Graph exists:", is_graph_created.reports[0].data);
                    if (is_graph_created.reports[0].data == False){
                        result = root spawn createGraph();
                    }
                }
            creategraph();
            },
            []
        );

        return <div style={{"width":"100%"}}>
            <HeroSection />
            <SearchBusTable />
            <ChatBot />
        </div>;
    }

}
