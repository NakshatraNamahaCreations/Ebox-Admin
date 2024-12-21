import moment from "moment";
import React from "react";
import { Table } from "react-bootstrap";
import { useLocation } from "react-router-dom";
// import { invoiceData } from "../../../../global-data/booking";

function Invoice() {
  let location = useLocation();
  let invoice = location.state?.invoice || null;
  let user = location.state?.userData || null;
  console.log("invoice=====", invoice);
  console.log("user=====", user);

  const bookingId = invoice._id?.slice(-4);
  const userId = user._id?.slice(-4);
  const invoiceNumber = String(userId + bookingId);
  console.log("invoiceNumber", invoiceNumber);

  const invoiceInfo = [
    {
      id: 1,
      head: "Invoice #",
      // value: `INV`,
      value: `INV${invoiceNumber.toUpperCase()}`,
    },
    {
      id: 2,
      head: "Ordered Date",
      value: moment(invoice.ordered_date).format("YYYY-MM-DD"),
    },
    {
      id: 3,
      head: "Venue Name",
      value: invoice.venue_name,
    },
    {
      id: 4,
      head: "Venue Location",
      value: invoice.event_location,
    },
    {
      id: 5,
      head: "Venue Available Time",
      value: invoice.venue_open_time,
    },
    {
      id: 6,
      head: "Event Date/Time",
      value: `${invoice.event_date}/${invoice.event_start_time}`,
    },
    {
      id: 7,
      head: "No of Days",
      value: invoice.number_of_days,
    },
  ];

  const billingDetails = [
    {
      id: 1,
      title: "Total",
      value: `₹${invoice.sub_total.toFixed(2)}`,
      // value: `₹${invoice.cart_total.toFixed(2)}`,
    },
    // {
    //   id: 2,
    //   title: 'Total with No of Days',
    //   value: `₹${invoice.sub_total.toFixed(2)}`,
    // },
    {
      id: 2,
      title: "CGST 9%",
      value: `₹${(invoice.gst_applied_value / 2).toFixed(2)}`,
    },
    {
      id: 3,
      title: "SGST 9%",
      value: `₹${(invoice.gst_applied_value / 2).toFixed(2)}`,
    },
    {
      id: 4,
      title: "Grand Total",
      value: `₹${invoice.paid_amount.toFixed(2)}`,
    },
  ];

  return (
    <>
      <div className="mb-2">
        <button
          style={{
            color: "white",
            textDecoration: "none",
            display: "inline-block",
            fontSize: "14px",
            cursor: "pointer",
            backgroundColor: "#2F4E9E",
            padding: "0px 5px",
            borderRadius: "3px",
            // border: "1px solid #8080802b",
            // borderColor: "gray",
          }}
          onClick={() => window.print()}
        >
          <i className="fa-solid fa-print"></i> Print
        </button>
      </div>

      <div
        id="invoiceContent"
        style={{
          backgroundColor: "white",
          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
          border: "1px solid rgb(202, 202, 202)",
          padding: "10px",
        }}
      >
        <div
          className="row"
          style={{ alignItems: "center", justifyContent: "center" }}
        >
          <div className="col-md-6">
            <h4>Nithya Event</h4>
          </div>
          <div className="col-md-6">
            <div className="text-end">34 & 35, Venkatappa Road,</div>
            <div className="text-end">Taskar Town, Off. Queen Road,</div>
            <div className="text-end">Bangalore -560 051,</div>
            <div className="text-end">support@nithyaevent.com</div>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-md-6 col-sm-4">
            <div className="text-start">
              <b>To:</b>{" "}
            </div>
            <div className="text-start">{invoice.event_location}</div>
            <div className="text-start mt-3">
              GST:
              {user.company_profile?.length > 0
                ? user.company_profile[0]?.gst_number
                : "N/A"}
            </div>
            <div className="text-start ">
              Kind Atte {invoice.receiver_name}{" "}
            </div>
            <div className="text-start ">
              Mobile: +91 {invoice.receiver_mobilenumber}
            </div>
          </div>
          {/* <div className="col-md-4"></div> */}
          <div className="col-md-6 col-sm-8">
            <div className="text-end">
              <b>TEC GSTIN: 29AADPI4078B1ZW</b>{" "}
            </div>
            <div className="text-end">
              <b>SAC CODE: 998387</b>{" "}
            </div>
            <div style={{ border: "1px solid black" }}>
              {invoiceInfo.map((ele, index) => (
                <>
                  <div className="row p-1">
                    <div className=" col-md-6">
                      <b>{ele.head}</b>
                    </div>
                    <div className=" col-md-6">{ele.value}</div>
                  </div>
                  <div
                    style={{
                      borderBottom:
                        invoiceInfo.length - 1 === index
                          ? null
                          : "1px solid black",
                    }}
                  ></div>
                </>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-5">
          <Table style={{ border: "1px solid black" }}>
            <thead>
              <tr>
                <th style={{ backgroundColor: "#c9c9c9" }}>Product</th>
                <th style={{ backgroundColor: "#c9c9c9" }}>Size</th>
                <th style={{ backgroundColor: "#c9c9c9" }}>Qty</th>
                <th style={{ backgroundColor: "#c9c9c9" }}>Price</th>
                <th style={{ backgroundColor: "#c9c9c9" }}>Days</th>
                <th style={{ backgroundColor: "#c9c9c9" }}>Amount</th>
              </tr>
            </thead>
            <tbody>
              {invoice.product_data.length > 0 && (
                <tr>
                  <td style={{ backgroundColor: "yellow" }}></td>
                  <td style={{ backgroundColor: "yellow" }} colSpan={1}>
                    <b>Product</b>
                  </td>
                  <td style={{ backgroundColor: "yellow" }}></td>

                  <td style={{ backgroundColor: "yellow" }}></td>

                  <td style={{ backgroundColor: "yellow" }}></td>
                  <td style={{ backgroundColor: "yellow" }}></td>
                </tr>
              )}
              {invoice.product_data.map((item) => (
                <tr>
                  <td style={{ width: "500px" }}>
                    {/* {item.productName.length > 20
                      ? item.productName.substring(0, 20) + "..."
                      : */}
                    {item.productName}{" "}
                  </td>
                  <td style={{ width: "300px" }}>{item.productDimension}</td>
                  <td style={{ width: "100px" }}>{item.quantity}</td>
                  <td style={{ width: "200px" }}>₹{item.totalPrice}</td>
                  <td style={{ width: "50px" }}>{invoice.number_of_days}</td>
                  <td style={{ width: "200px" }}>
                    ₹{item.totalPrice * invoice.number_of_days}
                  </td>
                </tr>
              ))}

              {invoice.service_data.length > 0 && (
                <tr>
                  <td style={{ backgroundColor: "yellow" }}></td>
                  <td style={{ backgroundColor: "yellow" }} colSpan={1}>
                    <b>Service</b>
                  </td>
                  <td style={{ backgroundColor: "yellow" }}></td>
                  <td style={{ backgroundColor: "yellow" }}></td>

                  <td style={{ backgroundColor: "yellow" }}></td>
                  <td style={{ backgroundColor: "yellow" }}></td>
                </tr>
              )}
              {invoice.service_data.map((item) => (
                <tr>
                  <td style={{ width: "500px" }}>
                    {/* {item.productName.length > 20
                      ? item.productName.substring(0, 20) + "..."
                      : */}
                    {item.shopName}{" "}
                  </td>
                  <td style={{ width: "300px" }}>-</td>
                  <td style={{ width: "100px" }}>-</td>
                  <td style={{ width: "200px" }}>₹{item.totalPrice}</td>
                  <td style={{ width: "50px" }}>{invoice.number_of_days}</td>
                  <td style={{ width: "200px" }}>
                    ₹{item.totalPrice * invoice.number_of_days}
                  </td>
                </tr>
              ))}
            </tbody>
            <tbody className="mt-3" style={{ border: "2px solid black" }}>
              {billingDetails.map((ele) => (
                <tr>
                  <td>
                    <b>{ele.title}</b>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    {" "}
                    <b>{ele.value}</b>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div className="mt-3">
            <div>
              <b>Terms & Conditions</b>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
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
    paddingTop: "8px",
    // backgroundColor: "#2F4E9E",
  },
  invoiceTotal: {
    color: "#333",
    fontWeight: "600",
    fontSize: "16px",
    padding: "2px",
  },
  invoiceTextTable: {
    padding: "10px",
    fontSize: "14px",
  },
  invoiceAddress: {
    fontSize: "14px",
  },
  invoiceText: {
    fontSize: "16px",
    padding: "2px",
  },
};

export default Invoice;
