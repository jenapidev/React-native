import { combineReducers } from 'redux';
import videos from './video';
import navigation from './navigation';

const Reducer = combineReducers({
	navigation,
	videos,
});

export default Reducer;
