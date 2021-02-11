import {useState,useEffect} from 'react'
import Head from 'next/head'
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap'
import Media from 'react-bootstrap/Media'
import axios from 'axios'

const CheckinsList = ({checkins}) => {
  const locale = 'en-us'
  const option = {
    //year: 'numeric',
    month: ('short'),
    weekday: ('long' || 'short'),
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
   // second: 'numeric',
    //era: ('long' || 'short'),
    //timeZoneName: ('long' || 'short')
}
    return (
     
      <>
      <ul className="list-unstyled checkin-list">
              {
                 
                checkins?.map( check => (
              <Media as="li" className="media-list px-3 my-3 mr-4" key={check._id}>
                <div className='picture mr-3'>

                  <img
                    src={check.image}
                    alt="Generic placeholder"
                    className="img-fluid"
                  />
                </div>
                <Media.Body>
                  <h5>{check.name} <small className="text-mutted"><i>{new Date(check.checkinAt).toLocaleDateString(locale, option)}</i></small></h5>
                  <ul className="list-unstyled">                  
                  <li className="list-item"><img src="/fi-rr-gym.svg" width="17"/><strong> Activity: </strong> {check.activity} </li>
                  <li className="list-item"><img src="/fi-rr-ticket.svg" width="17"/><strong> Token: </strong> {check.token} </li>
                  </ul>
                </Media.Body>
              </Media>
              ))}
            </ul>
           
            </>
    )
}
export default CheckinsList