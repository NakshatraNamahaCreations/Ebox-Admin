import React, { useState } from "react";
import "../controls/login.css";
import { LuBoxes } from "react-icons/lu";
import axios from "axios";
import { apiUrl } from "../../../api-services/apiContents";

function Login() {
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!mobileNumber || !password) {
      alert("Mobile and Password are required");
      return;
    }
    setLoading(true);
    try {
      const config = {
        url: apiUrl.TEAM_USER_LOGIN,
        method: "post",
        baseURL: apiUrl.BASEURL,
        headers: { "Content-Type": "application/json" },
        data: {
          mobile_number: mobileNumber,
          password: password,
        },
      };
      const response = await axios(config);
      if (response.status === 200) {
        alert(response.data.message || "Login Success");
        console.log("login details", response.data.user);
        sessionStorage.setItem("user", JSON.stringify(response.data.user));
        window.location.assign("/dashboard");
      }
    } catch (error) {
      setLoading(false);
      const errorMessage = error.response?.data?.message || "Login failed";
      console.log("catch error:", error.response?.data?.message);
      alert(errorMessage);
    }
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
            <LuBoxes size={25} color="#609ecc" /> Nithya Events
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
              <label for="exampleInputEmail1">Mobile Number :</label>
              <input
                type="tel"
                className="form-control"
                value={mobileNumber}
                required=""
                maxLength={10}
                onChange={(e) => setMobileNumber(e.target.value)}
              />
            </div>
            <div className="form-group" style={{ marginBottom: "15px" }}>
              <label for="exampleInputEmail1">Password :</label>
              <input
                // type="password"
                className="form-control"
                value={password}
                required=""
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="box-footer">
              <button className="btn btn-info pull-left" onClick={handleLogin}>
                {loading ? "Loging in..." : "Login"}
              </button>
              {/* <a
                href="forgot-password.php"
                className="pull-right"
                style={{ fontSize: "14px" }}
              >
                Forgot Password?
              </a> */}
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4"></div>
    </div>
  );
}

export default Login;
