import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import reducer from './reducers/index';
import { AsyncStorage } from 'react-native';
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';

// const store = createStore(reducer, {
//   suggestionList: [],
//   categoryList: [],
// })

const persistConfig = {
	key: 'root',
	storage: AsyncStorage,
	blacklist: ['navigation', 'selectedMovie'],
};

const persistedReducer = persistReducer(persistConfig, reducer);

<<<<<<< HEAD
const middleware = createReactNavigationReduxMiddleware(
	(state) => state.navigation,
);

const store = createStore(Reducer, applyMiddleware(middleware));
// const persistor = persistStore(store);
=======
const navigationMiddleware = createReactNavigationReduxMiddleware(
	(state) => state.navigation,
);

const store = createStore(
	persistedReducer,
	applyMiddleware(navigationMiddleware),
);
const persistor = persistStore(store);
>>>>>>> persistor

export { store, persistor };
