import React from 'react'


function Donor() {
  const donors = [
    { id: 1, name: 'John Doe', bloodType: 'A+', donationDate: '2023-06-21', contact: 8590123690 , },
    { id: 2, name: 'Jane Smith', bloodType: 'O-', donationDate: '2023-07-14', contact: 8596331542 },
    { id: 3, name: 'Michael Johnson', bloodType: 'B+', donationDate: '2023-05-30', contact: 9012345689 },
    { id: 4, name: 'Emily Davis', bloodType: 'AB-', donationDate: '2023-06-02', contact: 9856541236 },
  ]
  return (
    <>
    <div style={{ padding: '20px' }}>
      <h1>Donor's List</h1>
      <table style={{ width: '50%', borderCollapse: 'collapse', margin: '20px 0' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f4f4f4' }}>ID</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f4f4f4' }}>Name</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f4f4f4' }}>Blood Type</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f4f4f4' }}>Donation Date</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f4f4f4' }}>Contact</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f4f4f4' }}>Download Certificate</th>
          </tr>
        </thead>
        <tbody>
          {donors.map(donor => (
            <tr key={donor.id}>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{donor.id}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{donor.name}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{donor.bloodType}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{donor.donationDate}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{donor.contact}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{donor.downloadcertificate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  )
}

export default Donor