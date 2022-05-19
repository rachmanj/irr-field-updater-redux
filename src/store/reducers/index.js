import { combineReducers } from 'redux';

import invoices from './invoices.reducer';
import notifications from './notifications.reducer';

const appReducers = combineReducers({
  invoices,
  notifications,
});

export default appReducers;
