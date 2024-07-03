import React from 'react'

function DonationHistory() {
  return (
    <>
    <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-10 p-5">
                <table className="table shadow-sm ">
                    <thead className='table-warning'>
                        <tr>
                            <th>#</th>
                            <th style={{ minWidth: '120px' }}>User Name</th>
                            <th style={{ minWidth: '130px' }}>Hospital</th>
                            <th style={{ minWidth: '120px' }}>Place</th>
                            <th style={{ minWidth: '120px' }}>Date </th>
                            </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>John</td>
                            <td>Boxco Hospital</td>
                            <td>Canada</td>
                            <td>20/02/2024</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Richard</td>
                            <td>Boxco Hospital</td>
                            <td>Canada</td>
                            <td>16/04/2024</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        
        <div className="col-md-1"></div>
    </div>
    </>
  )
}

export default DonationHistory