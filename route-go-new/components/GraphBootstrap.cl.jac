"""Mounts once to seed the bus-route graph; renders nothing.

Kept as its own component (rather than inline in main.jac's app()) so that
findGraph/createGraph are referenced only here, never imported. Importing a
walker into a client-inferred file breaks the Vite bundle (it emits an ES
import for a name the compiled server stub never exports); registration for
the RPC call still happens via main.jac's server-side import.
"""
cl def:pub GraphBootstrap() -> JsxElement {

    async can with entry {
        graph_status = root spawn findGraph();
        console.log("Graph exists:", graph_status.reports[0].data);
        if not graph_status.reports[0].data {
            root spawn createGraph();
        }
    }

    return <></>;
}
