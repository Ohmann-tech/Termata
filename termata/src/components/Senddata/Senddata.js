import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




const SenddataComponent = () => {

  return (
    
    <div className='app'>
       
  <Container>
    <h1>Möchten Sie folgende Daten an <b>Autohaus Franke</b> übermitteln?</h1>
      <Row>
        <Col>First name:</Col>
        <Col>Max</Col>
      </Row>
      <Row>
        <Col>Name:</Col>
        <Col>Mustermann</Col>
      </Row>
      <Row>
        <Col>Gender:</Col>
        <Col>Male</Col>
      </Row>
      <Row>
        <Col>Email:</Col>
        <Col>Max@mustermann.de</Col>
      </Row>
      <Row>
        <Col>Adress:</Col>
        <Col>Musterstraße 3</Col>
      </Row>
      <Row>
        <Col>City:</Col>
        <Col>60487 Frankfurt(Main)</Col>
      </Row>
      <Row>
        <Col>Chassis number:</Col>
        <Col>SB164ABN1PE082986</Col>
      </Row>
      <Row>
        <Col>Manufacturer:</Col>
        <Col>Musterwagen</Col>
      </Row>
      <Row>
        <Col>Model:</Col>
        <Col>Git-wagen</Col>
      </Row>
      <Row>
        <Col>Initial registration:</Col>
        <Col>26.03.2018</Col>
      </Row>
      <Row>
        <Col><Button variant="success">Accept</Button>{' '}</Col>
        <Col><Button variant="danger">Deny</Button>{' '}</Col>
      </Row>
    </Container>

      
    </div>
  );
}

export default SenddataComponent;