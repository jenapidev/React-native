import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';

import Reducer from './reducers/index';

const persistConfig = {
	key: 'root',
	storage: AsyncStorage,
	blackList: ['selectedMovie', 'navigation'],
};

const AppReducer = persistReducer(persistConfig, Reducer);

const middleware = createReactNavigationReduxMiddleware(
	(state) => state.navigation,
	'root',
);

const store = createStore(AppReducer, applyMiddleware(middleware));
const persistor = persistStore(store);

const AppStore = { store, persistor };

export default AppStore;
