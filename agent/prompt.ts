import { pull } from "langchain/hub";
import { ChatPromptTemplate } from "@langchain/core/prompts";

// const queryPromptTemplate = await pull<ChatPromptTemplate>(
//   "langchain-ai/sql-query-system-prompt"
// );

async function getQueryPromptTemplate() {
    return await pull<ChatPromptTemplate>(
        "langchain-ai/sql-query-system-prompt"
    );
}

// queryPromptTemplate.promptMessages.forEach((message) => {
//   console.log(message.lc_kwargs.prompt.template);
// });

export default getQueryPromptTemplate;