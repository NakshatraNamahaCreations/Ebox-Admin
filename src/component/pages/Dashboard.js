import React from "react";
import "../../styles/dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard mt-2">
      <div className="row">
        <div className="col-md-3">
          <div className="small-box bg-aqua">
            <div className="inner">
              <h3>1503</h3>
              <p>Bookings</p>
            </div>
            <div className="icon">
              <i className="fa-solid fa-check-double"></i>
            </div>
            <a href="/booking/booking-schedules" className="small-box-footer">
              More info <i className="fa fa-arrow-circle-right"></i>
            </a>
          </div>
        </div>
        <div className="col-md-3">
          <div className="small-box bg-yellow">
            <div className="inner">
              <h3>1503</h3>
              <p>Vendor</p>
            </div>
            <div className="icon">
              <i className="fa-solid fa-users"></i>
            </div>
            <a href="/vendor-list" className="small-box-footer">
              More info <i className="fa fa-arrow-circle-right"></i>
            </a>
          </div>
        </div>
        <div className="col-md-3">
          <div className="small-box bg-red">
            <div className="inner">
              <h3>503</h3>
              <p>Seller</p>
            </div>
            <div className="icon">
              <i className="fa-solid fa-user-tag"></i>
            </div>
            <a href="#" className="small-box-footer">
              More info <i className="fa fa-arrow-circle-right"></i>
            </a>
          </div>
        </div>
        <div className="col-md-3">
          <div className="small-box bg-green">
            <div className="inner">
              <h3>1503</h3>
              <p>Revenue</p>
            </div>
            <div className="icon">
              <i className="fa-solid fa-sack-dollar"></i>
            </div>
            <a href="#" className="small-box-footer">
              More info <i className="fa fa-arrow-circle-right"></i>
            </a>
          </div>
        </div>       
      </div>
    </div>
  );
}

export default Dashboard;
