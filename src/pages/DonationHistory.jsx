import React from 'react'

function DonationHistory() {
  return (
    <>
    <div className="row "style={{ marginTop: '2rem', textAlign: 'center' }} >
        <div className="col-md-1"></div>
        <div className="col-md-10 p-5 "style={{ margin: '0 auto', width: '50%' }}>
                <table className="table shadow-sm "style={{ width: '100%', marginTop: '5rem', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
                    <thead className='table-warning'>
                        <tr>
                            <th>#</th>
                            <th style={{ minWidth: '50px' }}>User Name</th>
                            <th style={{ minWidth: '50px' }}>Hospital</th>
                            <th style={{ minWidth: '50px' }}>Place</th>
                            <th style={{ minWidth: '50px' }}>Date </th>
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