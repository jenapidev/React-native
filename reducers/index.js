import { combineReducers } from 'redux';
import videos from './video';
import navigation from './navigation';
import user from './user';

const Reducer = combineReducers({
	navigation,
	videos,
	user,
});

export default Reducer;
