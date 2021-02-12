import {useState, useEffect, useRef} from 'react';
import Head from 'next/head'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import Menu from '../components/Menu'
import Header from '../components/Header'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import CheckinsList from '../components/CheckinsList'
import dynamic from 'next/dynamic'
const QrReader = dynamic(() => import('react-qr-reader'), {
  ssr: false})
import Media from 'react-bootstrap/Media'
import axios from 'axios'


toast.configure()

function Home() {
  
  
  // const [email, setEmail] = useState('');
  // const insertToken = (e) =>{
  //   e.preventDefault();
  //   axios.post('/api/insert', {email});
  // }
  const qrRef = useRef(null)
  const [scanResultFile, setScanResultFile] = useState('');
  const [token, setToken] = useState('');
  const [emailSubmit, setEmailSubmit] = useState(false);
  const [message, setMessage] = useState(false)
  const insertToken = (e) =>{
    e.preventDefault();
    console.log("parte1");
    axios.post('/api/validate', {token})
    .then(res => {
      if(res.data.length !== 0){
        if(res.data[0].checkin === true){
          toast.warn("Token already validated", {position: toast.POSITION.TOP_CENTER_CENTER})
          setToken('')
        }else{       
        axios.post('/api/update', {token})
        setEmailSubmit(true)
        toast.success("Token Validated!", {position: toast.POSITION.TOP_CENTER_CENTER})
        setToken('')
      }
      }else{
        toast.error('Invalid Token', {position: toast.POSITION.TOP_CENTER_CENTER})
        setToken('');
      }
      console.log(res.data)
      console.log("parte2");
    
    })
    .catch(err => {
      console.log(err)
    })
    
  }
  
  const [checkins, setCheckins] = useState([])
  const [loading, setLoading] = useState(false)  
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

  const handleErrorFile = (error) =>{
    console.log(error)
  }
  const handleScanFile = (result) => {
    if(result){
      setScanResultFile(result)
    }
  }
  const onScanFile = () =>{
    qrRef.current.openImageDialog();
  }
  return (
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
            
            <Menu>
              
            </Menu>

          </Col>
          <Col className="col-12 col-md-9  pt-3 main">
          <Header></Header>
          <h3>Codigo escaneado: {scanResultFile}</h3>
              <Form onSubmit={insertToken} >
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Token Validator</Form.Label>
                  <Form.Control type="text" placeholder="Please enter a token" value={token} onChange={(e) => setToken(e.target.value)} />

                </Form.Group>
                <Button variant="primary" type="submit" >
                  Check
                </Button>
                <Button variant="primary" onClick={onScanFile}>
                Scan  QrCode
                </Button>
                <QrReader
                  ref={qrRef}
                  delay={300}
                  style={{width:'100%'}}
                  onError={handleErrorFile}
                  onScan={handleScanFile}
                  
                />
              </Form>
          
          <hr></hr>
          
         
    

     
      <h3 className="title">LAST CHECK-IN'S</h3>

      {loading ? (
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
      ) : (
        <CheckinsList checkins={checkins}/>
      ) }
     
          
            

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


