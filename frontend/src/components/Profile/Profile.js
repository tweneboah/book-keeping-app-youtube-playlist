import React, { useEffect } from 'react';
import './Profile.css';
import pic from '../../assets/img/bookpic.jpg';

import { Link } from 'react-router-dom';

const Profile = ({ history }) => {
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col mt-5'>
            <div className='card m-auto ' style={{ width: '50%' }}>
              <img src={pic} className='card-img-top' alt='...' />
              <div className='card-body'>
                <h5 className='card-title'>email</h5>
                <p className='card-text'>name</p>
                <Link to='/user-update' className='btn btn-primary'>
                  Update your profile
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Table */}
      <table className='table table-hover'>
        <thead>
          <tr>
            <th scope='col'>Author</th>
            <th scope='col'>Book Name</th>
            <th scope='col'>Delete</th>
            <th scope='col'>Update</th>
          </tr>
        </thead>
        <tbody>
          <tr className='table-dark'>
            <th scope='row'>author</th>
            <td>Title</td>
            <td>Delete</td>
            <td>Update</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Profile;
