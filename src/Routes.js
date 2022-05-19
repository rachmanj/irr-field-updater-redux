import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import MainLayout from 'hoc/mainLayout';
import Dashboard from 'components/dashboard';
import Header from 'components/navigation/Header';
import Footer from 'components/navigation/Footer';
import InvoicesPage from 'components/invoices';
import EditInvoice from 'components/invoices/edit';

const Routes = props => {
  return (
    <BrowserRouter className="App">
      <Header />
      <MainLayout>
        <Switch>
          <Route path="/invoices/edit/:id" component={EditInvoice} />
          <Route path="/invoices" component={InvoicesPage} />
          <Route path="/" component={Dashboard} />
        </Switch>
      </MainLayout>
      <Footer />
    </BrowserRouter>
  );
};

export default Routes;
