import {__jacJsx, __jacSpawn} from "@jac-client/utils";
import { HeroSection } from "./HeroSection.js";
import { ChatBot } from "./chatBot.js";
import { SearchBusTable } from "./SearchBusTable.js";
import { useState, useEffect } from "react";
function app() {
  useEffect(() => {
    async function creategraph() {
      let is_graph_created = await __jacSpawn("findGraph", "", {});
      console.log("Graph exists:", is_graph_created.reports[0].data);
      if (is_graph_created.reports[0].data === false) {
        let result = await __jacSpawn("createGraph", "", {});
      }
    }
    creategraph();
  }, []);
  return __jacJsx("div", {"style": {"width": "100%"}}, [__jacJsx(HeroSection, {}, []), __jacJsx(SearchBusTable, {}, []), __jacJsx(ChatBot, {}, [])]);
}
export { app };
