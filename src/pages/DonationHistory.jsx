import React from 'react';

function DonationHistory() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-10 p-5">
          
            <table className="table table-bordered shadow-sm">
              <thead className="table-warning">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col" style={{ minWidth: '120px' }}>User Name</th>
                  <th scope="col" style={{ minWidth: '150px' }}>Hospital</th>
                  <th scope="col" style={{ minWidth: '100px' }}>Place</th>
                  <th scope="col" style={{ minWidth: '120px' }}>Date</th>
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
        </div>
        <div className="col-md-1"></div>
      </div>
    
  );
}

export default DonationHistory;
