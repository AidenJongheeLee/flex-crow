import { combineReducers } from 'redux';
import UserReducer from './User';
import NavigationReducer from './Navigation';
import InoviceReducer from './Invoice';

export default combineReducers({
  user: UserReducer,
  navigation: NavigationReducer,
  invoice: InoviceReducer,
});
