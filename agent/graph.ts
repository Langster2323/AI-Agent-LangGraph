import { StateGraph } from "@langchain/langgraph";
import { StateAnnotation } from "./state";
import writeQuery from "./writeQuery";
import executeQuery from "./executeQuery";
import generateAnswer from "./generateAnswer";

export function createAgentGraph() {
  const graphBuilder = new StateGraph({
    stateSchema: StateAnnotation,
  })
    .addNode("writeQuery", writeQuery)
    .addNode("executeQuery", executeQuery)
    .addNode("generateAnswer", generateAnswer)
    .addEdge("__start__", "writeQuery")
    .addEdge("writeQuery", "executeQuery")
    .addEdge("executeQuery", "generateAnswer")
    .addEdge("generateAnswer", "__end__");

  return graphBuilder.compile();
}

// Export a singleton instance for convenience
export const agentGraph = createAgentGraph();

export default agentGraph;