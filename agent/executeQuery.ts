import db from "@/utils/db";
import { QuerySqlTool } from "langchain/tools/sql";
import { StateAnnotation } from "./state";

const executeQuery = async (state: typeof StateAnnotation.State) => {
  const executeQueryTool = new QuerySqlTool(db);
  return { result: await executeQueryTool.invoke(state.query) };
};

export default executeQuery;
