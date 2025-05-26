import { ChatOpenAI } from "@langchain/openai";

const openai = new ChatOpenAI({
  modelName: "gpt-4o-mini",
  apiKey: process.env.OPENAI_API_KEY,
  temperature: 0.4,
});

export default openai;
