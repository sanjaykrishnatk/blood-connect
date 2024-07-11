import React, { useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { retrieveDonorsApi } from '../services/allApi';


function Donor() {

    const[donorRequest, setDonorRequest] = useState({
        userName :"",
        bloodgrp :"",
        age :"",
        gender :"",
        address :"",
        state :"",
        district :"",
        email :"",
        phone : "",
    });

    const [startDate, setStartDate] = useState(new Date());
    const [donors, setDonors] = useState([]);

    useEffect(() => { 
      const fetchDonors = async () => {
        const response = await retrieveDonorsApi();
        setDonors(response.data);
      };
      fetchDonors();
    }, []);


    return (
     
      <div className='mt-5 d-flex justify-content-center align-items-center ' >
      <div className='bg-light p-5 rounded' style={{width:'850px'}} >
        <h1 className='text-danger'>Blood Donor Registration</h1>

<Form className='mt-5'>
      <Row className="mb-5">

        {/* <Form.Group className="mb-3" controlId="userName"> */}

        <Form.Group as={Col} controlId="username">
          <Form.Label>Donor Name : </Form.Label>
          <Form.Control type="text" placeholder="Enter your Name" 
          onChange={(event)=> {
          const value= event.target.value;
          console.log(value);
        setDonorRequest({...donorRequest, userName: value });
         } }/>

        </Form.Group>
      
        {/* <Form.Group className="mb-3" controlId="age"> */}
        <Form.Group as={Col} controlId="age">
          <Form.Label>Age :</Form.Label>
          <Form.Control type="text" placeholder=" "
          onChange={(event)=> {
            const value= event.target.value;
            console.log(value);
          setDonorRequest({...donorRequest, age: value });
           } } />

        </Form.Group>

        <Form.Group as={Col} controlId="date">
        <Form.Label>Blood Required Date : </Form.Label>
      <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />

      </Form.Group>
      </Row>

        <div className="row g-3">

        <div className="col-md-6">

        <Form.Label>Blood Group : </Form.Label>
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

</div>

    
 <div className="col-md-6">
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

</div>

</div>

    {/* <Form.Group className="mb-3" controlId="address">
          <Form.Label>Address :</Form.Label>
          <Form.Control type="text" placeholder="Address"
          onChange={(event)=> {
            const value= event.target.value;
            console.log(value);
          setDonorRequest({...donorRequest, address: value });
           } } />
        </Form.Group> */}


        <Row className="mb-3">
        <Form.Group as={Col} controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control onChange={(event)=> {
            const value= event.target.value;
            console.log(value);
          setDonorRequest({...donorRequest, address: value });
           } } />
        </Form.Group>

        <Form.Group as={Col} controlId="state">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose..." >
            <option>Choose...</option>
            <option>...</option> onChange={(event)=> {
            const value= event.target.value;
            console.log(value);
          setDonorRequest({...donorRequest, state: value });
           } }
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="district">
          <Form.Label>District</Form.Label>
          <Form.Control  onChange={(event)=> {
            const value= event.target.value;
            console.log(value);
          setDonorRequest({...donorRequest, district: value });
           } }/>
        </Form.Group>
      </Row>





        {/* <div className="row g-3">

        <div className="col-md-6">

        <Form.Group className="mb-3" controlId="state">
          <Form.Label>State :</Form.Label>
          <Form.Control type="text" placeholder="State" 
          onChange={(event)=> {
            const value= event.target.value;
            console.log(value);
          setDonorRequest({...donorRequest, state: value });
           } }/>
        </Form.Group>
        </div>

        <div className="col-md-6">

        <Form.Group className="mb-3" controlId="district">
          <Form.Label>District : </Form.Label>
          <Form.Control type="text" placeholder="District" 
          onChange={(event)=> {
            const value= event.target.value;
            console.log(value);
          setDonorRequest({...donorRequest, district: value });
           } }/>
        </Form.Group>
  </div>
  </div>
    */}

    <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email </Form.Label>
          <Form.Control type="text" placeholder="Enter your email id" 
          onChange={(event)=> {
            const value= event.target.value;
            console.log(value);
          setDonorRequest({...donorRequest, email: value });
           } }/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="phone">
          <Form.Label>Phone Number : </Form.Label>
          <Form.Control type="text" placeholder="" 
          onChange={(event)=> {
            const value= event.target.value;
            console.log(value);
          setDonorRequest({...donorRequest, phone: value });
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

export default Donor










// import React, { useState } from 'react'
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';

// function Donor() {

//     const[donorRequest, setDonorRequest] = useState({
//         userName :"",
//         bloodgrp :"",
//         age :"",
//         gender :"",
//         address :"",
//         state :"",
//         district :"",
//         email :"",
//         phone : ""
//     });


//     return (
     
//       <div className='mt-5 d-flex justify-content-center align-items-center ' style={{width:'100%', height:'100vh'}}>
//       <div className='bg-light p-5 rounded' style={{width:'500px'}} >
//         <h1 className='text-danger'>Blood Donor Registration</h1>

//       <Form className='mt-5'>
      
//       <div className="row g-3">
//       <div className="col-md-6">

//         <Form.Group className="mb-3" controlId="userName">
//           <Form.Label>Donor Name : </Form.Label>
//           <Form.Control type="text" placeholder="Enter your Name" 
//           onChange={(event)=> {
//           const value= event.target.value;
//           console.log(value);
//         setDonorRequest({...donorRequest, userName: value });
//          } }/>

//         </Form.Group>
//         </div>

//         <div className="col-md-6">
//         <Form.Group className="mb-3" controlId="age">
//           <Form.Label>Age :</Form.Label>
//           <Form.Control type="text" placeholder=" "
//           onChange={(event)=> {
//             const value= event.target.value;
//             console.log(value);
//           setDonorRequest({...donorRequest, age: value });
//            } } />

//         </Form.Group>
        
//         </div>
//         </div>


//         <div className="row g-3">

//         <div className="col-md-6">

//         <Form.Label>Blood Group : </Form.Label>
//         <Form.Select aria-label="Blood Group">
//       <option>A+</option>
//       <option value="A+">A+</option>
//       <option value="O+">O+</option>
//       <option value="B+">B+</option>
//       <option value="AB+">AB</option>
//       <option value="A-">A-</option>
//       <option value="O-">O-</option>
//       <option value="B-">B-</option>
//       <option value="AB-">AB-</option>
//     </Form.Select>

// </div>

    
//  <div className="col-md-6">
//         <Form.Label>Gender : </Form.Label>

//         {['radio'].map((type) => (
//         <div key={`inline-${type}`} className="mb-3">
//           <Form.Check
//             inline
//             label="male"
//             name="group1"
//             type={type}
//             id={`inline-${type}-male`}
//           />
//           <Form.Check
//             inline
//             label="female"
//             name="group1"
//             type={type}
//             id={`inline-${type}-female`}
//           />
//           <Form.Check
//             inline
//             label="Other"
//             type={type}
//             id={`inline-${type}-other`}
//           />
//         </div>
//       ))}

// </div>

// </div>

//     <Form.Group className="mb-3" controlId="address">
//           <Form.Label>Address :</Form.Label>
//           <Form.Control type="text" placeholder="Address"
//           onChange={(event)=> {
//             const value= event.target.value;
//             console.log(value);
//           setDonorRequest({...donorRequest, address: value });
//            } } />
//         </Form.Group>


//         <div className="row g-3">

//         <div className="col-md-6">

//         <Form.Group className="mb-3" controlId="state">
//           <Form.Label>State :</Form.Label>
//           <Form.Control type="text" placeholder="State" 
//           onChange={(event)=> {
//             const value= event.target.value;
//             console.log(value);
//           setDonorRequest({...donorRequest, state: value });
//            } }/>
//         </Form.Group>
//         </div>

//         <div className="col-md-6">

//         <Form.Group className="mb-3" controlId="district">
//           <Form.Label>District : </Form.Label>
//           <Form.Control type="text" placeholder="District" 
//           onChange={(event)=> {
//             const value= event.target.value;
//             console.log(value);
//           setDonorRequest({...donorRequest, district: value });
//            } }/>
//         </Form.Group>
//   </div>
//   </div>
   

//     <Form.Group className="mb-3" controlId="email">
//           <Form.Label>Email </Form.Label>
//           <Form.Control type="text" placeholder="Enter your email id" 
//           onChange={(event)=> {
//             const value= event.target.value;
//             console.log(value);
//           setDonorRequest({...donorRequest, email: value });
//            } }/>
//           <Form.Text className="text-muted">
//             We'll never share your email with anyone else.
//           </Form.Text>
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="phone">
//           <Form.Label>Phone Number : </Form.Label>
//           <Form.Control type="text" placeholder="" 
//           onChange={(event)=> {
//             const value= event.target.value;
//             console.log(value);
//           setDonorRequest({...donorRequest, phone: value });
//            } }/>
//         </Form.Group>

//         <Button variant="warning" type="submit">
//           Submit
//         </Button>

        
//       </Form>

//       </div>
//       </div>
//     );
//   }

// export default Donor