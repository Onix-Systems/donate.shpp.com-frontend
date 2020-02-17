import { useState, useEffect } from 'react';
import Router from 'next/router';
import {
  Button, Col, Container, Form, Row,
} from 'react-bootstrap';
import Page from '../../layout/admin/Page';

const Login = () => {
  const [pass, setPass] = useState('');
  const [error, setError] = useState();

  useEffect(() => {
    if (sessionStorage.getItem('token')) {
      Router.push('/admin/projects');
    }
  }, []);

  const handleChange = ({ target }) => {
    setPass(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pass === process.env.PASS) {
      sessionStorage.setItem('token', process.env.AUTH_TOKEN);
      Router.push('/admin/projects');
    } else {
      setError(true);
    }
  };
  return (
    <Page>
      <Container className="mt-5 col-md-6 ">
        <Row>
          <Col className="col-6 mx-auto text-center">
            <h1>Вхід</h1>
            <Form
              onSubmit={handleSubmit}
            >
              <Form.Group>
                <Form.Control
                  isInvalid={error}
                  name="password"
                  type="password"
                  placeholder="пароль..."
                  onChange={handleChange}
                />
              </Form.Group>
              <Button className="btn-success" type="submit">Увійти</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Page>
  );
};

export default Login;
