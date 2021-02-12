import Head from 'next/head'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import Menu from '../components/Menu'
import Header from '../components/Header'
const Main = () =>{
  return(
    <Container >
      <Head>
        <title>Gympass - Partners Portal</title>
        <meta name="theme-color" content="#fc695a"/>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <Container className="md-container">
        <Row>
          <Col className="col-3 nav-box pt-3 d-none d-md-block">
            <h1 className="text-center">
              <img src="/gympass-for-partners-logo.svg" max-width="200" className="img-fluid"/>
            </h1>
            
            <Menu/>

          </Col>
          <Col className="col-12 col-md-9  pt-3 main">
          <div className="row">
        <div className="col-12 col-md-9">
          <h3>
            <small className="text-mutted">Welcome back,</small>
          </h3>
          <h1 className="section-title">
            Cobra Kai  <br></br>
            <small><i>(Karate Studio)</i></small>
          </h1>

        </div>
        <div className="col-12 mt-3 mt-md-0 col-md-3">
          <p className="text-center text-md-right"><img src="/fi-rr-bell.svg" width="26" className="ml-3" /><img src="/fi-rr-settings.svg" width="26" className="ml-3" /><img src="/fi-rr-sign-out.svg" width="26" className="ml-3" /></p>

        </div>

      </div>
          </Col>
        </Row>

      </Container>

      <footer className="cntr-footer">
        <a
          href="https://andreaugusto.com.br"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made with <img src="/fi-rr-heart.svg" width="18"/> by <br></br>          <img src="/andre-augusto-logo.webp" alt="André Augusto - Frontend Developer" className="sml-logo" />
        </a>
      </footer>
    </Container>
  )
}

export default Main