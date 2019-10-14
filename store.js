import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';

import Reducer from './reducers/index';
//import storage from 'redux-persist/lib/storage';
//import AsyncStorage from '@react-native-community/async-storage';

// const persistConfig = {
// 	key: 'root',
// 	storage: AsyncStorage,
// 	blackList: ['selectedMovie', 'navigation'],
// };

// const AppReducer = persistReducer(persistConfig, Reducer);

const middleware = createReactNavigationReduxMiddleware(
	(state) => state.navigation,
);

const store = createStore(Reducer, applyMiddleware(middleware));
// const persistor = persistStore(store);

// const AppStore = { store, persistor };

export default store;
