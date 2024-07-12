import React from 'react'
import Table from 'react-bootstrap/Table';
import { faArrowLeft, faHouse, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';


function Reportbloodrequest() {
  return (
    <>
    <div className='d-flex justify-content-center align-items-center p-3 mt-5 w-100 mb-5'>
    <h4 className='ms-md-5 '>All Blood Request Report</h4>
    <h5 className='ms-auto me-md-5'><Link to={'/request'} style={{color:'white', textDecoration:'none'}} > <span id='h'><FontAwesomeIcon icon= {faArrowLeft} beat className='me-2' />Back</span>  <FontAwesomeIcon icon={faHouse} className='ms-2' /> </Link></h5>
  </div>

  <div className='row w-100 mt-5'>
  <div className='col-md-2'></div>
  <div className='col-md-8'>

  <Table className='table table-bordered table-light'>
  <thead>
    <tr>
      <th className='text-center'>#</th>
      <th className='text-center'>Patient Name</th>
      <th className='text-center'>Blood Group</th>
      <th className='text-center'>Units Required</th>
      <th className='text-center'>Phone Number</th>
      <th className='text-center'>District</th>
      <th className='text-center'>Action</th>
    </tr>
  </thead>
  <tbody>
<tr>
      <td> 1 </td>
      <td> Manju  </td>
      <td> A+</td>
      <td> 975895678 </td>
      <td> manju456@gmail.com</td>
      <td> Palakkad</td>
      <td className='text-center'><button className='btn btn-danger'><FontAwesomeIcon icon={faTrashCan} /></button></td>
    </tr>
    
  </tbody>
</Table>

  </div>

  <div className='col-md-2'></div>

  </div>
  

  </>
  )
}

export default Reportbloodrequest
