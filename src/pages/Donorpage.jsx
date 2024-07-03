import React, { useState } from 'react'
import './Donorpage.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Donorpage() {
    



    const [formData, setFormData] = useState({
        date:'',
      });
    
      const [updatedData, setUpdatedData] = useState(null);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleUpdate = (e) => {
        e.preventDefault();
        setUpdatedData(formData);
        toast.success('Updated successfully!');
      };


    return (
    <>
     <div className="container mt-5">
        <div className="row justify-content-center mt-5">
          <div className="col-md-10 mt-5 ">
            <div className="form-container d-flex flex-column align-items-center">
              <h1>Have you donated blood recently?</h1>
              <form onSubmit={handleUpdate} className="w-75">
                <div className="form-group">
                  <label htmlFor="date">Date of Donation</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    className="form-control"
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary mt-3">Update</button>
              </form>
            </div>
          </div>
        </div>
        <div className="row ">
          <div className="col-md-8">
            <table className="table my-5  shadow">
              <thead>
                <tr>
                  <th>#</th>
                  <th>User Name</th>
                  <th>Hospital</th>
                  <th>Place</th>
                  <th>Blood Group</th>
                  <th>Date Needed</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>David Abhraham</td>
                  <td>Merry Matha Hospital</td>
                  <td>London</td>
                  <td>A+</td>
                  <td>20/07/2024</td>
                  <td style={{display: 'flex', justifyContent: 'space-between'}}>
                  <button className="btn btn-success me-2">Accept</button>
                  <button className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <ToastContainer />
      
    </>
  )
}

export default Donorpage



