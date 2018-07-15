import { combineReducers } from 'redux';
import UserReducer from './User';
import NavigationReducer from './Navigation';
import InvoiceReducer from './Invoice';
import InvoicesReducer from './Invoices';

export default combineReducers({
  user: UserReducer,
  navigation: NavigationReducer,
  invoice: InvoiceReducer,
  invoices: InvoicesReducer,
});
