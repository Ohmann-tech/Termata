import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './Calendar.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




const CalendarComponent = () => {
  const [date, setDate] = useState(new Date());

  return (
    
    <div className='app'>
       
  <Container>
  <Container>
      <Row>
        <Col>Monday</Col>
        <Col>Tuesday</Col>
        <Col>Wednesday</Col>
        <Col>Thursday</Col>
        <Col>Friday</Col>
        <Col>Saturday</Col>
        <Col>Sunday</Col>
      </Row>
      <Row>
        <Col><Button variant="primary">8:00</Button>{' '}</Col>
        <Col><Button variant="primary">8:00</Button>{' '}</Col>
        <Col><Button variant="danger">8:00</Button>{' '}</Col>
        <Col><Button variant="danger">8:00</Button>{' '}</Col>
        <Col><Button variant="danger">8:00</Button>{' '}</Col>
        <Col><Button variant="danger">8:00</Button>{' '}</Col>
        <Col><Button variant="primary">8:00</Button>{' '}</Col>
      </Row>
      <Row>
        <Col><Button variant="primary">9:00</Button>{' '}</Col>
        <Col><Button variant="danger">9:00</Button>{' '}</Col>
        <Col><Button variant="danger">9:00</Button>{' '}</Col>
        <Col><Button variant="danger">9:00</Button>{' '}</Col>
        <Col><Button variant="primary">9:00</Button>{' '}</Col>
        <Col><Button variant="danger">9:00</Button>{' '}</Col>
        <Col><Button variant="primary">9:00</Button>{' '}</Col>
      </Row>
      <Row>
        <Col><Button variant="primary">10:00</Button>{' '}</Col>
        <Col><Button variant="primary">10:00</Button>{' '}</Col>
        <Col><Button variant="primary">10:00</Button>{' '}</Col>
        <Col><Button variant="primary">10:00</Button>{' '}</Col>
        <Col><Button variant="primary">10:00</Button>{' '}</Col>
        <Col><Button variant="primary">10:00</Button>{' '}</Col>
        <Col><Button variant="primary">10:00</Button>{' '}</Col>

      </Row>
      <Row>
        <Col><Button variant="primary">11:00</Button>{' '}</Col>
        <Col><Button variant="primary">11:00</Button>{' '}</Col>
        <Col><Button variant="primary">11:00</Button>{' '}</Col>
        <Col><Button variant="primary">11:00</Button>{' '}</Col>
        <Col><Button variant="danger">11:00</Button>{' '}</Col>
        <Col><Button variant="primary">11:00</Button>{' '}</Col>
        <Col><Button variant="primary">11:00</Button>{' '}</Col>
      </Row>
      <Row>
        <Col><Button variant="primary">12:00</Button>{' '}</Col>
        <Col><Button variant="primary">12:00</Button>{' '}</Col>
        <Col><Button variant="danger">12:00</Button>{' '}</Col>
        <Col><Button variant="primary">12:00</Button>{' '}</Col>
        <Col><Button variant="primary">12:00</Button>{' '}</Col>
        <Col><Button variant="primary">12:00</Button>{' '}</Col>
        <Col><Button variant="danger">12:00</Button>{' '}</Col>
      </Row>
    </Container>

  </Container>  
      
    </div>
  );
}

export default CalendarComponent;