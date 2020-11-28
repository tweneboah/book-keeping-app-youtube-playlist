import React from 'react';

const Books = () => {
  return (
    <div>
      <div className='row'>
        <div className='col'>
          <table className='table table-hover'>
            <thead>
              <tr>
                <th scope='col'>Author</th>
                <th scope='col'>Book Name</th>
                <th scope='col'>Action</th>
                <th scope='col'>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* Map through here */}
              <tr className='table-dark'>
                <th scope='row'>title</th>
                <td>author</td>
                <td>
                  <i
                    className='fas fa-trash '
                    style={{ color: 'red', cursor: 'progress' }}></i>
                </td>
                <td>
                  <i
                    className='far fa-edit'
                    style={{
                      color: 'yellow',
                      cursor: 'progress',
                    }}></i>
                </td>
              </tr>
              {/* End of map through */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Books;
