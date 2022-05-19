import * as actions from './index';
import axios from 'axios';

axios.defaults.headers.post['Content-Type'] = 'application/json';

export const getOldInvoicesAction = () => {
  return async dispatch => {
    try {
      const invoices = await axios.get(`/api/invoices/oldinvoices`);
      dispatch(actions.getOldInvoices(invoices.data));
    } catch (error) {
      dispatch(actions.errorGlobal(error.response.data.message));
    }
  };
};

export const getInvoiceByIdAction = id => {
  return async dispatch => {
    try {
      const invoice = await axios.get(`/api/invoices/${id}`);
      dispatch(actions.getInvoiceById(invoice.data));
    } catch (error) {
      dispatch(actions.errorGlobal(error.response.data.message));
    }
  };
};

export const upadateInvoice = (values, id) => {
  return async dispatch => {
    try {
      await axios.patch(`/api/invoices/${id}`, values);
      dispatch(actions.successGlobal('Update done !!'));
    } catch (error) {
      dispatch(actions.errorGlobal(error.response.data.message));
    }
  };
};
