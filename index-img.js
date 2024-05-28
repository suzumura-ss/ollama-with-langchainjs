// https://js.langchain.com/v0.1/docs/integrations/llms/ollama/
import { Ollama } from "@langchain/community/llms/ollama";
import * as fs from "node:fs/promises";

const imageData = await fs.readFile("./cat.jpg");
const ollamaImg = new Ollama({
  baseUrl: "http://localhost:11434",
  model: "llava",
}).bind({
  images: [ imageData.toString("base64") ],
})

const res = await ollamaImg.invoke("What's in this image?");
console.log(res);

const res2 = await(new Ollama({
  baseUrl: "http://localhost:11434",
  model: "llama3:8b",
}).invoke(`"${res}" を日本語に翻訳してください。`));
console.log(res2);
