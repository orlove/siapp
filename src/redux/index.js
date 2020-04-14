/**
 * Определение хранилища состояния приложения
 * Работает через Redux Persist (хранит состояние в AsyncStorage)
 */
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
// defaults to localStorage for web and AsyncStorage for react-native
import storage from 'redux-persist/lib/storage';

import rootReducer from './reducers';

const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer);

export const persistor = persistStore(store);
