import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { LiaRupeeSignSolid } from "react-icons/lia";
import axios from "axios";
import { apiUrl } from "../../../../api-services/apiContents";
import Loader from "../../../loader/Loader";

function BookingDetails() {
  const Navigate = useNavigate();
  let location = useLocation();
  let bookingData = location.state?.row || null;
  console.log("bookingData", bookingData);
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const navigateToInvoice = () => {
    Navigate("/booking/invoice", {
      state: {
        invoice: bookingData,
        userData: userData,
      },
    });
  };

  const fetchList = async () => {
    setIsLoading(true);
    try {
      const userRes = await axios.get(
        `${apiUrl.BASEURL}${apiUrl.GET_PARTICULAR_USER}${bookingData.user_id}`
      );
      if (userRes.status === 200) {
        // console.log("userRes", userRes);
        setUserData(userRes.data);
      }
    } catch (error) {
      console.error("Failed to fetch list:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  console.log("userRes", userData);

  function getRandomColor() {
    // Generate random RGB values
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    // Convert to hexadecimal color code
    let color = "#" + r.toString(16) + g.toString(16) + b.toString(16);
    // console.log("color:", color);
    return color;
  }
  const [chatColors, setChatColors] = useState(
    Array.from({ length: 5 }, () => getRandomColor())
  );
  return (
    <div className="mt-2">
      {isLoading && <Loader />}
      <div className="p-5" style={{ backgroundColor: "white" }}>
        <table
          className="table border-top-for-all-border"
          style={{
            backgroundColor: "white",
            border: "1px solid #f4f4f4",
            borderTopLeftRadius: "5px",
            borderTopRightRadius: "5px",
          }}
        >
          <tr style={styles.tableRow}>
            <th style={styles.tableHeader}>Booking ID</th>
            <td style={styles.tableData}>
              NE
              {bookingData._id
                .substring(bookingData._id.length - 4)
                .toUpperCase()}
            </td>
          </tr>

          <tr style={styles.tableRow}>
            <th style={styles.tableHeader}>Event Date/Time</th>
            <td style={styles.tableData}>
              {bookingData.event_date} - {bookingData.event_start_time}{" "}
            </td>
          </tr>
          <tr style={styles.tableRow}>
            <th style={styles.tableHeader}>User Name</th>
            <td style={styles.tableData}>{userData.username} </td>
          </tr>
          <tr style={styles.tableRow}>
            <th style={styles.tableHeader}>Mobile</th>
            <td style={styles.tableData}>{userData.mobilenumber} </td>
          </tr>
          <tr style={styles.tableRow}>
            <th style={styles.tableHeader}>Email</th>
            <td style={styles.tableData}>{userData.email} </td>
          </tr>
          <tr style={styles.tableRow}>
            <th style={styles.tableHeader}>Company Name</th>
            <td style={styles.tableData}>
              {userData && userData?.company_profile?.length > 0
                ? userData?.company_profile[0]?.company_name
                : ""}
            </td>
          </tr>
          <tr style={styles.tableRow}>
            <th style={styles.tableHeader}>Event Name</th>
            <td style={styles.tableData}>{bookingData.event_name} </td>
          </tr>
          {/* <tr style={styles.tableRow}>
            <th style={styles.tableHeader}>No of Person</th>
            <td style={styles.tableData}>{bookingData.noOfPerson} </td>
          </tr> */}
          {/* <tr style={styles.tableRow}>
            <th style={styles.tableHeader}>Celebrity</th>
            <td style={styles.tableData}>Sridhar Vembu </td>
          </tr> */}
          <tr style={styles.tableRow}>
            <th style={styles.tableHeader}>Venue Name</th>
            <td style={styles.tableData}>{bookingData.venue_name} </td>
          </tr>
          <tr style={styles.tableRow}>
            <th style={styles.tableHeader}>Address</th>
            <td style={styles.tableData}>{bookingData.event_location}</td>
          </tr>
          {bookingData.product_data.length > 0 && (
            <tr style={styles.tableRow}>
              <th style={styles.tableHeader}>Products</th>
              <td style={styles.tableData}>
                <div className="row">
                  {bookingData.product_data.map((ele, index) => (
                    <div className="col-md-3 mb-2">
                      <div
                        className="card"
                        style={{
                          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                          border: 0,
                        }}
                      >
                        <div className="p-2">
                          <div>
                            <label
                              style={{
                                backgroundColor: "#f39c12",
                                color: "white",
                                padding: "0.2em 0.3em",
                                borderRadius: "5px",
                              }}
                            >
                              #{index + 1}
                            </label>
                          </div>
                          <div>
                            <span style={styles.itemsHead}> Item Name : </span>{" "}
                            {ele.productName.length > 30
                              ? ele.productName.substring(0, 30) + "..."
                              : ele.productName}
                          </div>
                          <div>
                            <span style={styles.itemsHead}> Vendor : </span>{" "}
                            {ele.store}
                          </div>
                          <div>
                            <span style={styles.itemsHead}> Quantity : </span>
                            {ele.quantity}
                          </div>
                          <div>
                            <span style={styles.itemsHead}> Price : </span>{" "}
                            {ele.productPrice.toFixed(2)}
                          </div>
                          <div
                            style={{ borderBottom: "1px dashed #186f65" }}
                          ></div>
                          <div>
                            <span style={styles.itemsHead}>
                              {" "}
                              Subtotal(
                              <LiaRupeeSignSolid />) :
                            </span>{" "}
                            {ele.totalPrice.toFixed(2)}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </td>
            </tr>
          )}
          {bookingData.service_data.length > 0 && (
            <tr style={styles.tableRow}>
              <th style={styles.tableHeader}>Service</th>
              <td style={styles.tableData}>
                <div className="row">
                  {bookingData.service_data.map((ele, index) => (
                    <div className="col-md-3 mb-2">
                      <div
                        className="card"
                        style={{
                          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                          border: 0,
                        }}
                      >
                        <div className="p-2">
                          <div>
                            <label
                              style={{
                                backgroundColor: "#f39c12",
                                color: "white",
                                padding: "0.2em 0.3em",
                                borderRadius: "5px",
                              }}
                            >
                              #{index + 1}
                            </label>
                          </div>
                          <div>
                            <span style={styles.itemsHead}>
                              {" "}
                              Business/Shop Name :{" "}
                            </span>{" "}
                            {ele.shopName}
                          </div>
                          <div>
                            <span style={styles.itemsHead}> Vendor : </span>{" "}
                            {ele.vendorName}
                          </div>
                          <div>
                            <span style={styles.itemsHead}> Price : </span>{" "}
                            {ele.pricing.toFixed(2)}
                          </div>
                          <div
                            style={{ borderBottom: "1px dashed #186f65" }}
                          ></div>
                          <div>
                            <span style={styles.itemsHead}>
                              {" "}
                              Subtotal(
                              <LiaRupeeSignSolid />) :
                            </span>{" "}
                            {ele.totalPrice.toFixed(2)}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </td>
            </tr>
          )}
          <tr style={styles.tableRow}>
            <th style={styles.tableHeader}>CGST(₹)</th>
            <td style={styles.tableData}>
              {(bookingData.gst_applied_value / 2).toFixed(2)}
            </td>
          </tr>
          <tr style={styles.tableRow}>
            <th style={styles.tableHeader}>SGST(₹)</th>
            <td style={styles.tableData}>
              {(bookingData.gst_applied_value / 2).toFixed(2)}
            </td>
          </tr>
          <tr style={styles.tableRow}>
            <th style={styles.tableHeader}>Total(₹)</th>
            <td style={styles.tableData}>
              {bookingData.paid_amount.toFixed(2)}
            </td>
          </tr>
        </table>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button
            style={styles.buttonForEveything}
            onClick={() => navigateToInvoice()}
          >
            {/* <i className="fa fa-download"></i> */}
            Generate Invoice
          </button>
        </div>
      </div>
    </div>
  );
}
const styles = {
  tableRow: {
    borderBottom: "1px solid #f4f4f4",
  },
  tableData: {
    borderLeft: "1px solid #f4f4f4",
    padding: "8px",
    fontSize: "14px",
  },
  tableHeader: {
    width: "150px",
    color: "#333",
    fontWeight: "600",
    fontSize: "14px",
    padding: "8px",
  },
  itemsHead: {
    color: "#333",
    fontWeight: "600",
    fontSize: "14px",
  },
  buttonForEveything: {
    backgroundColor: "#90e447",
    border: "#7ac539",
    color: "black",
    borderRadius: "3px",
    fontSize: "14px",
    padding: "5px 10px",
  },
};
export default BookingDetails;
