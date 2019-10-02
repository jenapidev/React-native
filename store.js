import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { AsyncStorage } from 'react-native';

import videos from './reducers/video';
//import storage from 'redux-persist/lib/storage';
//import AsyncStorage from '@react-native-community/async-storage';

const persistConfig = {
	key: 'root',
	storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, videos);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };
