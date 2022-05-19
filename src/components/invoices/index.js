import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { getOldInvoicesAction } from 'store/actions/invoices.action';

import InvoicesTable from './invoicesTable';

const InvoicesPage = () => {
  const invoices = useSelector(state => state.invoices);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOldInvoicesAction());
  }, [dispatch]);
  return (
    <>
      <Container>
        <h4>Invoices</h4>
        <InvoicesTable inv={invoices.oldInvoices} />
      </Container>
    </>
  );
};

export default InvoicesPage;
