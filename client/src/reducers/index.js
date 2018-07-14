import { combineReducers } from 'redux';
import UserReducer from './User';
import NavigationReducer from './Navigation';

export default combineReducers({
  user: UserReducer,
  navigation: NavigationReducer,
});
