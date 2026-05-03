import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Lendings.css";

const Lendings = () => {
  return (
    <div className="lendings-container">

      {/* Top Section */}
      <div className="card-box mb-4">
        <div className="d-flex justify-content-between align-items-center mb-2">
          
          <div className="search-box">
            <input type="text" placeholder="Search" />
            <button>🔍</button>
          </div>

          <h5 className="text-white m-0">Total Lendings</h5>

          <button className="btn btn-primary btn-sm">Filter</button>
        </div>

        <div className="table-responsive custom-scroll">
          <table className="table table-dark table-bordered">
            <thead>
              <tr>
                <th>Name</th>
                <th>NIC</th>
                <th>P. Number</th>
                <th>Address</th>
                <th>Amount</th>
              </tr>
            </thead>

            <tbody>
              {[...Array(8)].map((_, i) => (
                <tr key={i}>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="row">
        
        {/* Lendings */}
        <div className="col-md-6">
          <div className="card-box">
            <div className="d-flex justify-content-between mb-2">
              <h6 className="text-white">Lendings</h6>
              <div>
                <button className="mini-btn"></button>
                <button className="mini-btn"></button>
              </div>
            </div>

            <div className="table-responsive custom-scroll">
              <table className="table table-dark table-bordered">
                <thead>
                  <tr>
                    <th>NIC</th>
                    <th>Date</th>
                    <th>Amount</th>
                  </tr>
                </thead>

                <tbody>
                  {[...Array(8)].map((_, i) => (
                    <tr key={i}>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Repayments */}
        <div className="col-md-6">
          <div className="card-box">
            <div className="d-flex justify-content-between mb-2">
              <h6 className="text-white">Repayments</h6>
              <div>
                <button className="mini-btn"></button>
                <button className="mini-btn"></button>
              </div>
            </div>

            <div className="table-responsive custom-scroll">
              <table className="table table-dark table-bordered">
                <thead>
                  <tr>
                    <th>NIC</th>
                    <th>Date</th>
                    <th>Amount</th>
                  </tr>
                </thead>

                <tbody>
                  {[...Array(8)].map((_, i) => (
                    <tr key={i}>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Lendings;