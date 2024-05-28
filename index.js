// https://js.langchain.com/v0.1/docs/integrations/llms/ollama/
import { Ollama } from "@langchain/community/llms/ollama";

const ollama = new Ollama({
  baseUrl: "http://localhost:11434",
  model: "llama3:8b",
  options: {
    temperature: 0.7,
  },
})

const stream = await ollama.stream(
  `Translate "I love programming" into German.`
);
const chunks = [];
for await (const chunk of stream) {
  chunks.push(chunk);
}
console.log(chunks.join(""));
