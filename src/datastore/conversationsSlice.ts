import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

type Persona = 'user' | 'llm';
type MessageStatus = 'pending' | 'completed' | 'error';

const STORAGE_KEY = 'conversations';

const loadFromStorage = (): Conversation[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return [];
    return JSON.parse(stored);
  } catch (error) {
    console.error('Failed to load conversations from storage:', error);
    return [];
  }
};

const saveToStorage = (conversations: Conversation[]): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(conversations));
  } catch (error) {
    console.error('Failed to save conversations to storage:', error);
  }
};

export interface ChatMessage {
  id: string;
  content: string;
  from: Persona;
  status: MessageStatus;
}

export interface Conversation {
  id: string;
  timestamp?: number;
  messages: ChatMessage[];
}

export interface ConversationsState {
  conversations: Conversation[];
  currentConversationId: string | undefined;
}

const initialState: ConversationsState = {
  conversations: loadFromStorage(),
  currentConversationId: undefined,
};

// slice
const conversationSlice = createSlice({
  name: 'conversations',
  initialState,
  reducers: {
    initEmptyConversation: (state) => {
      state.currentConversationId = undefined;
    },

    addConversation: (
      state,
      action: PayloadAction<{
        initialMessages: ChatMessage[];
      }>
    ) => {
      const newConversation: Conversation = {
        id: uuidv4(),
        timestamp: new Date().getTime(),
        messages: action.payload.initialMessages,
      };
      state.conversations.push(newConversation);
      state.currentConversationId = newConversation.id;

      saveToStorage(state.conversations);
    },

    addMessage: (
      state,
      action: PayloadAction<{
        conversationId: string;
        content: string;
        from: Persona;
      }>
    ) => {
      const { conversationId, content, from } = action.payload;
      if (!conversationId) {
        return;
      }
      const conversation = state.conversations.find(
        (conv) => conv.id === conversationId
      );
      if (!conversation) {
        throw `conversation with id ${conversationId} not found!`;
      }

      const noPending = !conversation.messages.some(
        (m) => m.status === 'pending'
      );

      if (!noPending) {
        // if there is a pending response from LLM provider, do not add the new message
        return;
      }

      conversation.messages.push({
        id: uuidv4(),
        content,
        from,
        status: from === 'user' ? 'completed' : 'pending',
      });

      saveToStorage(state.conversations);
    },

    updateMessage: (
      state,
      action: PayloadAction<{
        conversationId: string;
        messageId: string;
        content: string;
        status: MessageStatus;
      }>
    ) => {
      const { conversationId, messageId, content, status } = action.payload;
      if (!conversationId) {
        return;
      }
      const conversation = state.conversations.find(
        (conv) => conv.id === conversationId
      );
      if (!conversation) {
        throw `conversation with id ${conversationId} not found!`;
      }

      const message = conversation.messages.find((m) => m.id === messageId);
      if (!message) {
        throw `message with id ${messageId} not found in conversation with id ${conversationId}!`;
      }
      message.status = status;
      message.content = content;

      saveToStorage(state.conversations);
    },
  },
});

// Actions
export const { initEmptyConversation, addConversation, updateMessage } =
  conversationSlice.actions;

// Selectors
export const selectCoversations = (state: ConversationsState) =>
  state.conversations;

export const selectCurrentConversation = (state: ConversationsState) => {
  const { conversations, currentConversationId } = state;
  if (!currentConversationId) {
    return null;
  }
  return conversations.find((c) => c.id === currentConversationId);
};

export default conversationSlice.reducer;
