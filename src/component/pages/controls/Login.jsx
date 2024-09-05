import React from "react";
import "../controls/login.css";
import { LuBoxes } from "react-icons/lu";

function Login() {
  const handleLogin = async () => {
    window.location.assign("/");
  };

  return (
    <div className="row me-0" style={{ marginTop: "80px" }}>
      <div className="col-md-4"></div>
      <div className="col-md-4">
        <div className="text-center">
          {/* <img
            src="http://ecartvendor.wrteam.co.in/dist/img/logo.png"
            height="110"
          /> */}
          <h3 style={{ fontSize: "30px" }}>
            {" "}
            <LuBoxes size={25} color="#90e447" /> Event Box
          </h3>
          <h3 style={{ fontSize: "22px" }}>Multiuser - Dashboard</h3>
        </div>
        <div className="box box-info">
          <div className="box-header with-border">
            <h3 className="box-title">Administrator Login</h3>
            <center>
              <div className="msg"></div>
            </center>
          </div>

          <div className="box-body">
            <div className="form-group" style={{ marginBottom: "15px" }}>
              <label for="exampleInputEmail1">Username :</label>
              <input
                type="text"
                name="username"
                className="form-control"
                value="admin"
                required=""
              />
            </div>
            <div className="form-group" style={{ marginBottom: "15px" }}>
              <label for="exampleInputEmail1">Password :</label>
              <input
                type="password"
                className="form-control"
                name="password"
                value="admin123"
                required=""
              />
            </div>
            <div className="box-footer">
              <button
                //   name="btnLogin"
                // style={{ color: "white" }}
                className="btn btn-info pull-left"
                onClick={handleLogin}
              >
                Login
              </button>
              <a
                href="forgot-password.php"
                className="pull-right"
                style={{ fontSize: "14px" }}
              >
                Forgot Password?
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4"></div>
    </div>
  );
}

export default Login;
