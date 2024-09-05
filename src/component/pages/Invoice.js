import React from "react";
import { Table } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { invoiceData } from "../../global-data/booking";

function Invoice() {
  let location = useLocation();
  let invoice = location.state?.invoice || null;
  console.log("invoice=====", invoice);

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
        }}
      >
        <div className="row pt-4">
          <div className="col-md-6 ps-5 pb-4 col-sm-6">
            <div
              style={{
                color: "black",
                textDecoration: "none",
                // textShadow: "-2px 2px #ddd6cd",
                fontSize: "30px",
                fontWeight: "bold",
              }}
            >
              EVENT BOX
              {/* <img
                src="../img/event-box-high-resolution-logo-transparent (3).png"
                alt="logo"
                style={{ width: "30%" }}
              /> */}
            </div>
            <div className="mt-1" style={styles.tableHeader}>
              Invoice Number : 1
            </div>
            <div style={styles.tableHeader}>Date : 20/04/2024</div>
          </div>
          <div
            className="col-md-6 ps-4 pb-4 d-flex col-sm-6"
            style={{ justifyContent: "center" }}
          >
            <img
              src="/img/invoice-removebg-preview-crop.png"
              alt="logo"
              style={{ width: "50%", height: "200px" }}
            />
          </div>
        </div>
        <div
          style={{
            borderBottom: "2px solid rgb(202, 202, 202)",
          }}
        ></div>
        <div className="row pt-4">
          <div className="col-md-6 ps-5 pb-4 col-sm-6">
            <div className="" style={styles.tableHeader}>
              Bill From
            </div>
            <div className="" style={styles.invoiceAddress}>
              Company Name
            </div>
            <div style={styles.invoiceAddress}>Street Name, Zip Code, </div>
            <div style={styles.invoiceAddress}>Phone Number </div>
          </div>
          <div
            className="col-md-6 ps-5 pb-4 d-flex col-sm-6"
            style={{ justifyContent: "center" }}
          >
            <div>
              <div className="" style={styles.tableHeader}>
                Bill To
              </div>
              <div className="" style={styles.invoiceAddress}>
                Customer Name
              </div>
              <div style={styles.invoiceAddress}>Street Name, Zip Code, </div>
              <div style={styles.invoiceAddress}>Phone Number </div>
            </div>
          </div>
        </div>
        <div
          style={{
            borderBottom: "2px solid rgb(202, 202, 202)",
          }}
        ></div>
        <div className="row px-5 py-2">
          <Table size="sm" bordered>
            <thead>
              <tr>
                <th style={styles.tableHeader}>Item</th>
                <th style={styles.tableHeader}>Quantity</th>
                <th style={styles.tableHeader}>Rate</th>
                <th style={styles.tableHeader}>Tax</th>
                <th style={styles.tableHeader}>Amount</th>
              </tr>
            </thead>
            <tbody>
              {invoiceData.map((ele) => (
                <tr>
                  <td style={styles.invoiceTextTable}>{ele.itemName}</td>
                  <td style={styles.invoiceTextTable}>{ele.quantity} </td>
                  <td style={styles.invoiceTextTable}>{ele.rate}</td>
                  <td style={styles.invoiceTextTable}>{ele.tax}</td>
                  <td style={styles.invoiceTextTable}>{ele.amount}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
        <div className="row pt-4">
          <div className="col-md-6 ps-5 pb-4 col-sm-6">
            <div className="" style={styles.tableHeader}>
              Terms & Condition
            </div>
            <div className="" style={styles.invoiceAddress}>
              All payments must be made in full before the commencement of any
              design work.
            </div>
          </div>
          <div
            className="col-md-6 ps-5 pb-4 d-flex col-sm-6"
            style={{ justifyContent: "center" }}
          >
            <div>
              <div className="row" style={{ width: "310px" }}>
                <div className="col-md-5 col-sm-5">
                  <div style={styles.invoiceTotal}>Subtotal</div>
                  <div style={styles.invoiceTotal}>Discount</div>
                  <div style={styles.invoiceTotal}>Tax</div>
                  <div style={styles.invoiceTotal}>Discount</div>
                  <div style={styles.invoiceTotal}>Paid</div>
                </div>
                <div className="col-md-1 col-sm-1">
                  {" "}
                  <div style={styles.invoiceTotal}>:</div>
                  <div style={styles.invoiceTotal}>:</div>
                  <div style={styles.invoiceTotal}>:</div>
                  <div style={styles.invoiceTotal}>:</div>
                  <div style={styles.invoiceTotal}>:</div>{" "}
                </div>
                <div className="col-md-5 col-sm-5">
                  <div style={styles.invoiceText}>₹ 6444534.00</div>
                  <div style={styles.invoiceText}>₹ 5455.00</div>
                  <div style={styles.invoiceText}>₹ 55353.00</div>
                  <div style={styles.invoiceText}>₹ 5353.00</div>
                  <div style={styles.invoiceText}>₹ 53535.00</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            borderBottom: "2px solid rgb(202, 202, 202)",
          }}
        ></div>
        <div className="row pt-4">
          <div className="col-md-6 col-sm-6"></div>
          <div
            className="col-md-6 col-sm-6 ps-5 pb-4 d-flex"
            style={{ justifyContent: "center" }}
          >
            <div
              className="d-flex"
              style={{
                backgroundColor: "#2F4E9E",
                padding: "10px",
                justifyContent: "space-evenly",
                color: "white",
                fontWeight: "500",
                fontSize: "19px",
                width: "215px",
              }}
            >
              <div>Total</div> <div>₹ 853748.00</div>
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
