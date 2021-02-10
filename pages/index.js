import {useState, useEffect} from 'react';
import Head from 'next/head'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import Menu from '../components/Menu'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import CheckinsList from '../components/CheckinsList'
import Media from 'react-bootstrap/Media'
import axios from 'axios'


toast.configure()
const notifyError = () =>{
  toast.error('Invalid Token', {position: toast.POSITION.TOP_CENTER_CENTER})
}
function Home() {
  
  
  // const [email, setEmail] = useState('');
  // const insertToken = (e) =>{
  //   e.preventDefault();
  //   axios.post('/api/insert', {email});
  // }

  const [email, setEmail] = useState('');
  const [emailSubmit, setEmailSubmit] = useState(false);
  const [message, setMessage] = useState(false)
  const insertToken = (e) =>{
    e.preventDefault();
    console.log("parte1");
    axios.post('/api/validate', {email})
    .then(res => {
      if(res.data.length !== 0){
        console.log("Existe")
        setEmailSubmit(true)
      }else{
        //alert("Não existe!");
        notifyError()
      }
      console.log(res.data)
      console.log("parte2");
    
    })
    .catch(err => {
      console.log(err)
    })
    
  }

  const [checkins, setCheckins] = useState([])
  const [loading, setLoading] = useState([false])  
  useEffect(()=>{
    console.log("entrou no effect")
    setLoading(true)
    axios.get('/api/getCheckins')
    .then(res => {
      console.log(res)
      setCheckins(res.data)
      setLoading(false)
      setEmailSubmit(false)
    })
    .catch(err => {
      console.log(err)
    })
  },[emailSubmit])
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
             <h3>
           <small className="text-mutted">Welcome back,</small>
           </h3>
           <h1 className="section-title">
           Cobra Kai  <br></br>
           <small><i>(Karate Studio)</i></small>
          </h1>
         
          </div>
          <div className="col-3">
          <p className="text-right"><img src="/fi-rr-bell.svg" width="26" className="ml-3"/><img src="/fi-rr-settings.svg" width="26" className="ml-3"/><img src="/fi-rr-sign-out.svg" width="26" className="ml-3"/></p>
          </div>
          </div>
              <Form onSubmit={insertToken} >
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Token Validator</Form.Label>
                  <Form.Control type="text" placeholder="Please enter a token" value={email} onChange={(e) => setEmail(e.target.value)} />

                </Form.Group>
                <Button variant="primary" type="submit" >
                  Check
                </Button>
              </Form>
          
          <hr></hr>
          
          <>
      {loading && 
      <div className="loading mt-5" >
       <svg version="1.1" id="L9" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
       viewBox="0 0 100 100" enableBackground="new 0 0 0 0" >
         <rect x="20" y="50" width="4" height="10" fill="#fc695a">
           <animateTransform attributeType="xml"
             attributeName="transform" type="translate"
             values="0 0; 0 20; 0 0"
             begin="0" dur="0.6s" repeatCount="indefinite" />
         </rect>
         <rect x="30" y="50" width="4" height="10" fill="#fc695a">
           <animateTransform attributeType="xml"
             attributeName="transform" type="translate"
             values="0 0; 0 20; 0 0"
             begin="0.2s" dur="0.6s" repeatCount="indefinite" />
         </rect>
         <rect x="40" y="50" width="4" height="10" fill="#fc695a">
           <animateTransform attributeType="xml"
             attributeName="transform" type="translate"
             values="0 0; 0 20; 0 0"
             begin="0.4s" dur="0.6s" repeatCount="indefinite" />
         </rect>
     </svg>
     </div>
      }
      {!loading &&

      <>
      <h3 className="title">LAST CHECK-IN'S</h3>
            <ul className="list-unstyled checkin-list">
              {
                checkins.map( checkin => (
              <Media as="li" className="media-list px-3 my-3 mr-4" key={checkin._id}>
                <div className='picture mr-3'>

                  <img
                    src="/actress01.webp"
                    alt="Generic placeholder"
                    className="img-fluid"
                  />
                </div>
                <Media.Body>
                  <h5>{checkin.email} <small className="text-mutted"><i>07/02 às 16:41</i></small></h5>
                  <p>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                    ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                    tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                    fringilla. Donec lacinia congue felis in faucibus.
                  </p>
                </Media.Body>
              </Media>
              ))}
            </ul>
            </>
            }
            </>

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
} export default Home


