import {useState,useEffect} from 'react'
import Head from 'next/head'
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap'
import Media from 'react-bootstrap/Media'
import axios from 'axios'

const CheckinsList = () => {
    const [checkins, setCheckins] = useState([])
    const [loading, setLoading] = useState([false])  
    useEffect(()=>{
      setLoading(true)
      axios.get('/api/getCheckins')
      .then(res => {
        console.log(res)
        setCheckins(res.data)
        setLoading(false)

      })
      .catch(err => {
        console.log(err)
      })
    },[])
    return (
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
    )
}
export default CheckinsList