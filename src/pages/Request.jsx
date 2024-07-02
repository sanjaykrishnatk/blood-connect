import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Request() { 

    const[bloodRequest, setBloodRequest] = useState({
        userName :"",
        bloodgrp :"",
        unit :"",
        age :"",
        gender :"",
        address :"",
        state :"",
        district :"",
        phone : ""
    });

      
    return (
     
      <div className='mt-5 d-flex justify-content-center align-items-center ' style={{width:'100%', height:'100vh'}}>
      <div className='bg-light p-5 rounded' style={{width:'500px'}} >
        <h1 className='text-danger'>Blood Request Form</h1>

      <Form className='mt-5'>
      
        <Form.Group className="mb-3" controlId="userName">
          <Form.Label>Patient's Name : </Form.Label>
          <Form.Control type="text" placeholder="Enter your Name" 
          onChange={(event)=> {
          const value= event.target.value;
          console.log(value);
        setBloodRequest({...bloodRequest, userName: value });
         } }/>

        </Form.Group>

        <Form.Label>Required Blood Group : </Form.Label>
        <Form.Select aria-label="Blood Group">
        <option>A+</option>
      <option value="A+">A+</option>
      <option value="O+">O+</option>
      <option value="B+">B+</option>
      <option value="AB+">AB</option>
      <option value="A-">A-</option>
      <option value="O-">O-</option>
      <option value="B-">B-</option>
      <option value="AB-">AB-</option>
    </Form.Select>

    <Form.Group className="mb-3" controlId="unit">
          <Form.Label>Units required :</Form.Label>
          <Form.Control type="number" placeholder="Units"
          onChange={(event)=> {
            const value= event.target.value;
            console.log(value);
            setBloodRequest({...bloodRequest, unit: value });
           } } />
        </Form.Group>

        <Form.Group className="mb-3" controlId="age">
          <Form.Label>Patient's Age :</Form.Label>
          <Form.Control type="number" placeholder=" "
          onChange={(event)=> {
            const value= event.target.value;
            console.log(value);
            setBloodRequest({...bloodRequest, age: value });
           } } />

        </Form.Group>
        

        <Form.Label>Gender : </Form.Label>

        {['radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            label="male"
            name="group1"
            type={type}
            id={`inline-${type}-male`}
          />
          <Form.Check
            inline
            label="female"
            name="group1"
            type={type}
            id={`inline-${type}-female`}
          />
          <Form.Check
            inline
            label="Other"
            type={type}
            id={`inline-${type}-other`}
          />
        </div>
      ))}

    <Form.Group className="mb-3" controlId="address">
          <Form.Label>Address :</Form.Label>
          <Form.Control type="text" placeholder="Address"
          onChange={(event)=> {
            const value= event.target.value;
            console.log(value);
            setBloodRequest({...bloodRequest, address: value });
           } } />
        </Form.Group>

        <Form.Group className="mb-3" controlId="state">
          <Form.Label>State :</Form.Label>
          <Form.Control type="text" placeholder="state" 
          onChange={(event)=> {
            const value= event.target.value;
            console.log(value);
            setBloodRequest({...bloodRequest, state: value });
           } }/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="district">
          <Form.Label>District : </Form.Label>
          <Form.Control type="text" placeholder="District" 
          onChange={(event)=> {
            const value= event.target.value;
            console.log(value);
            setBloodRequest({...bloodRequest, district: value });
           } }/>
        </Form.Group>


        <Form.Group className="mb-3" controlId="phone">
          <Form.Label>Phone Number : </Form.Label>
          <Form.Control type="number" placeholder="" 
          onChange={(event)=> {
            const value= event.target.value;
            console.log(value);
            setBloodRequest({...bloodRequest, phone: value });
           } }/>
        </Form.Group>

        <Button variant="warning" type="submit">
          Submit
        </Button>

      </Form>

      </div>
      </div>
    );
  }
  
export default Request