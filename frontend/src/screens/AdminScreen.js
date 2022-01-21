import React from "react";

function AdminScreen() {
  return (
    <div>
      <div className='content-wrapper'>
        <div className='container-fluid'>
          <div className='card mb-3'>
            <div className='card-body'>
              <div className='table-responsive'>
                <table
                  className='table table-bordered'
                  id='dataTable'
                  width='100%'
                  cellspacing='0'
                >
                  <thead>
                    <tr>
                      <th>Contact Id</th>
                      <th>Full Name</th>
                      <th>Email</th>
                      <th>Message</th>
                      <th>City</th>
                      <th>Start date</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>6300424767</td>
                      <td>Beesetty Benhin</td>
                      <td>bannybeesetty6@gmail.com</td>
                      <td>hello folks</td>
                      <td>Visakhaptnam</td>
                      <td>18/01/2022</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminScreen;
