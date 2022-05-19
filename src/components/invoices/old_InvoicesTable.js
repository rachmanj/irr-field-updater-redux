import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { useDispatch, useSelector } from 'react-redux';

import {
  getOldInvoicesAction,
  getInvoiceByIdAction,
} from 'store/actions/invoices.action';

import { Table, Button } from 'react-bootstrap';

const InvoicesTable = () => {
  const invoices = useSelector(state => state.invoices.oldInvoices);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOldInvoicesAction());
  }, [dispatch]);

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No</th>
            <th>ID</th>
            <th>Receive Date</th>
            <th>Finish Date</th>
            <th>Days</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {invoices ? (
            invoices.map((item, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{item.inv_id}</td>
                <td>
                  <Moment format="DD-MMM-YYYY">{item.receive_date}</Moment>
                </td>
                <td>
                  <Moment format="DD-MMM-YYYY">{item.mailroom_bpn_date}</Moment>
                </td>
                <td>{item.days}</td>
                <td>
                  <Link to={`/invoices/edit/${item.inv_id}`}>
                    <Button variant="primary" size="xs">
                      Edit
                    </Button>
                  </Link>
                </td>
              </tr>
            ))
          ) : (
            <h6>No Data Found</h6>
          )}
        </tbody>
      </Table>
    </>
  );
};

export default InvoicesTable;
