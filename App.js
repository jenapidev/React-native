import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './store';
import Loader from './src/sections/components/loader';
import AppLayout from './src/app';
// const store = createStore(videos, {});

type Props = {};
export default class App extends React.Component<Props> {
	render() {
		return (
			<Provider store={store}>
				<PersistGate loading={<Loader />} persistor={persistor}>
					<AppLayout />
				</PersistGate>
			</Provider>
		);
	}
}
