import {useState,useEffect} from 'react'
import Head from 'next/head'
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap'
import Media from 'react-bootstrap/Media'
import axios from 'axios'

const CheckinsList = () => {
    const [checkins, setCheckins] = useState([])

    useEffect(()=>{
      axios.get('/api/getCheckins')
      .then(res => {
        console.log(res)
        setCheckins(res.data)
      })
      .catch(err => {
        console.log(err)
      })
    },[])
    return (
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
    )
}
export default CheckinsList