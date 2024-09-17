import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { LiaRupeeSignSolid } from "react-icons/lia";

function BookingDetails() {
  const Navigate = useNavigate();
  let location = useLocation();
  let bookingData = location.state?.row || null;
  console.log("bookingData", bookingData);

  const navigateToInvoice = () => {
    Navigate("/booking/invoice", {
      state: {
        invoice: bookingData,
      },
    });
  };

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
              {bookingData._id.substring(bookingData._id.length - 6)}
            </td>
          </tr>
          <tr style={styles.tableRow}>
            <th style={styles.tableHeader}>Event Date/Time</th>
            <td style={styles.tableData}>
              {bookingData.date} / {bookingData.time}{" "}
            </td>
          </tr>
          <tr style={styles.tableRow}>
            <th style={styles.tableHeader}>Organizer Name</th>
            <td style={styles.tableData}>{bookingData.name} </td>
          </tr>
          <tr style={styles.tableRow}>
            <th style={styles.tableHeader}>Mobile</th>
            <td style={styles.tableData}>{bookingData.mobileNumber} </td>
          </tr>
          <tr style={styles.tableRow}>
            <th style={styles.tableHeader}>Email</th>
            <td style={styles.tableData}>{bookingData.email} </td>
          </tr>
          <tr style={styles.tableRow}>
            <th style={styles.tableHeader}>Organization Name</th>
            <td style={styles.tableData}>{bookingData.organizationName} </td>
          </tr>
          <tr style={styles.tableRow}>
            <th style={styles.tableHeader}>Event</th>
            <td style={styles.tableData}>{bookingData.eventType} </td>
          </tr>
          {/* <tr style={styles.tableRow}>
            <th style={styles.tableHeader}>No of Person</th>
            <td style={styles.tableData}>{bookingData.noOfPerson} </td>
          </tr> */}
          <tr style={styles.tableRow}>
            <th style={styles.tableHeader}>Celebrity</th>
            <td style={styles.tableData}>Sridhar Vembu </td>
          </tr>
          <tr style={styles.tableRow}>
            <th style={styles.tableHeader}>Location</th>
            <td style={styles.tableData}>{bookingData.location} </td>
          </tr>
          <tr style={styles.tableRow}>
            <th style={styles.tableHeader}>Address</th>
            <td style={styles.tableData}>
              Premium Stage Decoration, HSR Layout
            </td>
          </tr>
          <tr style={styles.tableRow}>
            <th style={styles.tableHeader}>Items</th>
            <td style={styles.tableData}>
              <div className="row">
                {Array.from({ length: 6 }).map((ele, index) => (
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
                          <span style={styles.itemsHead}> Item Name:</span>{" "}
                          Banquet chair
                        </div>
                        <div>
                          <span style={styles.itemsHead}> Vendor:</span> Mani
                          Thiru
                        </div>
                        <div>
                          <span style={styles.itemsHead}> Quantity:</span> 50
                        </div>
                        <div>
                          <span style={styles.itemsHead}> Price:</span> 100
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
                          5000
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </td>
          </tr>
          <tr style={styles.tableRow}>
            <th style={styles.tableHeader}>
              Total
              <LiaRupeeSignSolid color="black" style={{ fontSize: "35px" }} />
            </th>
            <td style={styles.tableData}>50,000 </td>
          </tr>
        </table>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button
            style={styles.buttonForEveything}
            onClick={() => navigateToInvoice()}
          >
            <i className="fa fa-download"></i> Generate Invoice
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
    color: "white",
    borderRadius: "3px",
    fontSize: "14px",
    padding: "5px 10px",
  },
};
export default BookingDetails;
