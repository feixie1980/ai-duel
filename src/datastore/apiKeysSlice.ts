import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import CryptoJS from 'crypto-js';
import { ServiceType } from './services';

// Types
interface APIKey {
  service: ServiceType;
  encryptedKey: string;
}

interface APIKeysState {
  keys: APIKey[];
  loading: boolean;
  error: string | null;
}

// Encryption utilities
const STORAGE_KEY = 'api_keys';
const getEncryptionKey = () => {
  const key = import.meta.env.VITE_ENCRYPTION_KEY;
  if (!key) {
    throw new Error('Encryption key not found in environment variables');
  }
  return key;
};

const encryptKey = (plainText: string): string => {
  return CryptoJS.AES.encrypt(plainText, getEncryptionKey()).toString();
};

const decryptKey = (cipherText: string): string => {
  const bytes = CryptoJS.AES.decrypt(cipherText, getEncryptionKey());
  return bytes.toString(CryptoJS.enc.Utf8);
};

// LocalStorage utilities

/* 
  In real production app, api keys should not be stored on client because of
  security risk. We are using local storage just for convenience and testing
  purpose, becuase I don't want to write server yet~
*/

// TODO: change this to session storage, a tiny bit more secure.
const loadFromStorage = (): APIKey[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return [];
    return JSON.parse(stored);
  } catch (error) {
    console.error('Failed to load API keys from storage:', error);
    return [];
  }
};

const saveToStorage = (keys: APIKey[]): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(keys));
  } catch (error) {
    console.error('Failed to save API keys to storage:', error);
  }
};

// Initial state
const initialState: APIKeysState = {
  keys: loadFromStorage(),
  loading: false,
  error: null,
};

// Slice
const apiKeysSlice = createSlice({
  name: 'apiKeys',
  initialState,
  reducers: {
    addAPIKey: (
      state,
      action: PayloadAction<{
        service: ServiceType;
        key: string;
      }>
    ) => {
      const { service, key } = action.payload;
      const encryptedKey = encryptKey(key);

      // Remove existing key for the same service if it exists
      state.keys = state.keys.filter((k) => k.service !== service);

      // Add new key
      state.keys.push({ service, encryptedKey });
      saveToStorage(state.keys);
    },

    removeAPIKey: (state, action: PayloadAction<ServiceType>) => {
      state.keys = state.keys.filter((key) => key.service !== action.payload);
      saveToStorage(state.keys);
    },

    updateAPIKey: (
      state,
      action: PayloadAction<{
        service: ServiceType;
        key: string;
      }>
    ) => {
      const { service, key } = action.payload;
      const encryptedKey = encryptKey(key);

      const index = state.keys.findIndex((k) => k.service === service);
      if (index !== -1) {
        state.keys[index] = { service, encryptedKey };
        saveToStorage(state.keys);
      }
    },

    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

// Actions
export const { addAPIKey, removeAPIKey, updateAPIKey, setError } =
  apiKeysSlice.actions;

// Selectors
export const selectAPIKeys = (state: { apiKeys: APIKeysState }) =>
  state.apiKeys.keys;

export const selectAPIKeyByService =
  (service: ServiceType) => (state: { apiKeys: APIKeysState }) => {
    const key = state.apiKeys.keys.find((k) => k.service === service);
    if (!key) return null;

    try {
      const decryptedKey = decryptKey(key.encryptedKey);
      return decryptedKey;
    } catch (error) {
      console.error('Failed to decrypt API key:', error);
      return null;
    }
  };

export const selectError = (state: { apiKeys: APIKeysState }) =>
  state.apiKeys.error;

export default apiKeysSlice.reducer;
