import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, WebStorage } from 'redux-persist';
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';
import buynbuyReducer from './buynbuySlice';

export function createPersistStorage(): WebStorage {
  const isServer = typeof window === 'undefined';

  // Dummy storage for server
  if (isServer) {
    return {
      getItem: () => Promise.resolve(null),
      setItem: () => Promise.resolve(),
      removeItem: () => Promise.resolve(),
    };
  }
  return createWebStorage('local');
}

// Use the correct storage handling
const storage = typeof window !== 'undefined' ? createWebStorage('local') : createPersistStorage();

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, buynbuyReducer);

export const store = configureStore({
  reducer: {
    buynbuy: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
