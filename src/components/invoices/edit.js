import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Form, Button } from 'react-bootstrap';
import { useFormik } from 'formik';
import Loader from 'utils/loader';

import { formValues, getValuesToEdit, validation } from './formValues';
import {
  getInvoiceByIdAction,
  upadateInvoice,
} from 'store/actions/invoices.action';
import { clearCurrentInvoice } from 'store/actions/index';

const EditInvoice = props => {
  const [values, setValues] = useState(formValues);
  const [loading, setLoading] = useState(false);
  const notifications = useSelector(state => state.notifications);
  const invoices = useSelector(state => state.invoices);
  const dispatch = useDispatch();

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: values,
    validationSchema: validation,
    onSubmit: values => {
      handleSubmit(values);
    },
  });

  const handleSubmit = values => {
    alert(values);
    setLoading(true);
    dispatch(upadateInvoice(values, props.match.params.id));
  };

  useEffect(() => {
    if (notifications) {
      setLoading(false);
    }
  }, [notifications]);

  useEffect(() => {
    const param = props.match.params.id;
    if (param) {
      dispatch(getInvoiceByIdAction(param));
    }
  }, [dispatch, props.match.params.id]);

  useEffect(() => {
    if (invoices && invoices.byId) {
      setValues(getValuesToEdit(invoices.byId));
    }
  }, [invoices]);

  useEffect(() => {
    return () => {
      dispatch(clearCurrentInvoice());
    };
  }, [dispatch]);

  return (
    <Container>
      {loading ? (
        <Loader />
      ) : (
        <>
          <h5>Edit Invoice</h5>
          <div className="col-md-6">
            <Form>
              <Form.Group>
                <Form.Label>ID</Form.Label>
                <Form.Control
                  type="text"
                  name="inv_id"
                  {...formik.getFieldProps('inv_id')}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Receive Date</Form.Label>
                <Form.Control
                  type="date"
                  name="receive_date"
                  {...formik.getFieldProps('receive_date')}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Processed Date</Form.Label>
                <Form.Control
                  type="date"
                  name="mailroom_bpn_date"
                  {...formik.getFieldProps('mailroom_bpn_date')}
                />
              </Form.Group>
              <hr className="mt-3 mb-3" />
              <Button type="submit">Save Change</Button>
            </Form>
          </div>
        </>
      )}
    </Container>
  );
};

export default EditInvoice;
