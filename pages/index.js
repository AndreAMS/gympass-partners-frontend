import {useState} from 'react';
import Head from 'next/head'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import Menu from '../components/Menu'
import CheckinsList from '../components/CheckinsList'
import axios from 'axios'



export default function Home() {
  
  const [email, setEmail] = useState('');
  const insertToken = (e) =>{
    e.preventDefault();
    axios.post('/api/insert', {email});
  }
  return (
    <Container >
      <Head>
        <title>Gympass - Partners Portal</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <Container className="md-container">
        <Row>
          <Col className="col-3 nav-box pt-3">
            <h1 className="text-center">
              <img src="/gympass-for-partners-logo.svg" width="200" />
            </h1>
            
            <Menu>
              
            </Menu>

          </Col>
          <Col className="col-9  pt-3 main">
           <div className="row">
             <div className="col-9">
          <h1>
           <small className="text-mutted">Welcome back,</small> <br></br>
           Cobra Kai <br></br>
         
          </h1>
          </div>
          <div className="col-3">
          <p className="text-right"><img src="/fi-rr-calendar.svg" width="32"/>   <img src="/fi-rr-calendar.svg" width="32"/>   <img src="/fi-rr-calendar.svg" width="32"/>   </p>
          </div>
          </div>
              <Form onSubmit={insertToken} >
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="text" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />

                </Form.Group>
                <Button variant="primary" type="submit">
                  Check
                </Button>
              </Form>
          
          <hr></hr>
            <CheckinsList>

            </CheckinsList>

          </Col>
        </Row>

      </Container>

      <footer className="cntr-footer">
        <a
          href="https://andreaugusto.com.br"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made with by <br></br>          <img src="/andre-augusto-logo.webp" alt="André Augusto - Frontend Developer" className="sml-logo" />
        </a>
      </footer>
    </Container>
  )
}
