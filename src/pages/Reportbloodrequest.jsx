import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { faArrowLeft, faHouse, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';

import { getRequestReportApi } from "../services/allApi";

function Reportbloodrequest() {

  const [requestReport, setRequestReport] = useState([])

  const getReport = async()=>{
    const result = await getRequestReportApi();

    if(result.status >=200 && result.status <300){
      setRequestReport(result.data)
    }
  }

  console.log(requestReport);

  useEffect(()=>{
    getReport()
  },[])

  return (

    <>
    <div className='d-flex justify-content-center align-items-center p-3 mt-5 w-100 mb-5'>
    <h4 className='fs-2'>Blood Request Report</h4>
    
  </div>

  <div className='row w-100 mt-5'>
  <div className='col-md-2'></div>
  <div className='col-md-8'>

  {requestReport?.length>0?<Table className='table table-responsive table-bordered table-light'>
  <thead>
    <tr>
      <th className='text-center'>#</th>
      <th className='text-center'>Patient Name</th>
      <th className='text-center'>Blood Group</th>
      <th className='text-center'>Units Required</th>
      <th className='text-center'>Age</th>
      <th className='text-center'>Gender</th>
      <th className='text-center'>State</th>
      <th className='text-center'>District</th>
      <th className='text-center'>Phone Number</th>
      <th className='text-center'>Required Date</th>
    </tr>
  </thead>
  <tbody>
  { requestReport?.map((item, index)=>(<tr key={index}>
      <td> {index +1} </td>
      <td> {item?.userName} </td>
      <td> {item?.bloodGroup} </td>
      <td> {item?.unit} </td>
      <td> {item?.age} </td>
      <td> {item?.gender} </td>
      <td> {item?.state} </td>
      <td> {item?.district} </td>
      <td> {item?.phone} </td>
      <td> {item?.startDate} </td>
    </tr>))}
    
  </tbody>
</Table>
:
<p className='text-warning fs-5'>Report not available</p>}
  </div>

  <div className='col-md-2'></div>

  </div>
  

  </>
  )
}

export default Reportbloodrequest
