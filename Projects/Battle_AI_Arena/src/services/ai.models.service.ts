import { ChatGoogle } from '@langchain/google';
import { ChatMistralAI } from '@langchain/mistralai';
import { ChatCohere } from '@langchain/cohere';
import apiConfig from '../config/config.js';

export const googleModel = new ChatGoogle({
  model: 'gemini-flash-latest',
  apiKey: apiConfig.GOOGLE_API_KEY,
});

export const mistralModel = new ChatMistralAI({
  model: 'mistral-small-latest',
  apiKey: apiConfig.MISTRAL_API_KEY,
});

export const cohereModel = new ChatCohere({
  model: 'command-a-03-2025',
  apiKey: apiConfig.COHERE_API_KEY,
});
