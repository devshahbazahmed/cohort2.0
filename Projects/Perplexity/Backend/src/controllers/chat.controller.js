import { generateResponse, generateChatTitle } from '../services/ai.service.js';
import Chat from '../models/chat.model.js';
import Message from '../models/message.model.js';

export async function sendMessage(req, res) {
  const { message, chat: chatId } = req.body;

  let title = null,
    chat = null;

  if (!chatId) {
    title = await generateChatTitle(message);

    chat = await Chat.create({
      user: req.user.id,
      title,
    });
  }

  const userMessage = await Message.create({
    chat: chatId || chat._id,
    content: message,
    role: 'user',
  });

  const messages = await Message.find({ chat: chatId || chat._id });

  const result = await generateResponse(messages);

  const aiMessage = await Message.create({
    chat: chatId || chat._id,
    content: result,
    role: 'ai',
  });

  return res.status(201).json({
    title,
    chat,
    aiMessage,
  });
}

export async function getChats(req, res) {
  const user = req.user;

  const chats = await Chat.find({ user: user.id });

  return res.status(200).json({
    message: 'Chats retrieved successfully',
    chats,
  });
}

export async function getMessages(req, res) {
  const { chatId } = req.params;

  const chat = await Chat.findOne({ _id: chatId, user: req.user.id });

  if (!chat) {
    return res.status(404).json({
      message: 'Chat not found',
    });
  }

  const messages = await Message.find({ chat: chatId });

  return res.status(200).json({
    message: 'Messages retrieved successfully',
    messages,
  });
}

export async function deleteChat(req, res) {
  const { chatId } = req.params;

  const chat = await Chat.findOneAndDelete({
    _id: chatId,
  });

  await Message.deleteMany({
    chat: chatId,
  });

  if (!chat) {
    return res.status(404).json({
      message: 'Chat not found',
    });
  }

  return res.status(200).json({
    message: 'Chat deleted successfully',
  });
}
