import 'dotenv/config';
import readline from 'readline/promises';
import { ChatMistralAI } from '@langchain/mistralai';
import { createAgent, HumanMessage, tool } from 'langchain';
import { sendEmail } from './mail.service.js';
import * as z from 'zod';

const emailTool = tool(sendEmail, {
  name: 'emailTool',
  description: 'Use this tool to send an email',
  schema: z.object({
    to: z.email().describe("The recipient's email address"),
    html: z.string().describe('The HTML content of the email'),
    subject: z.string().describe('The subject of the email'),
  }),
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// rl.question('What is your name? ', (name) => {
//   console.log(`Hello, ${name}`);
//   rl.close();
// });

const model = new ChatMistralAI({
  model: 'mistral-small-latest',
  apiKey: process.env.MISTRAL_API_KEY,
});

// const response = await model.invoke('What is the capital of India');

// console.log(response.text);

const agent = createAgent({
  model,
  tools: [emailTool],
});

const messages = [];

while (true) {
  const userInput = await rl.question('\x1b[32mYou:\x1b[0m');
  messages.push(new HumanMessage(userInput));
  const response = await agent.invoke({
    messages,
  });
  messages.push(response.messages[response.messages.length - 1]);
  console.log(response.messages[(response.messages, length - 1)].text);
  // console.log(`\x1b[34m[AI]:\x1b[0m ${response.content}`);
}

rl.close();
