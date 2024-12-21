import moment from "moment";
import { toWords } from "number-to-words";
import React from "react";
import { Table } from "react-bootstrap";
import { useLocation } from "react-router-dom";

function PayoutInvoice() {
  const location = useLocation();
  const product = location.state.product;
  console.log("payout Invoice", product);

  const cgst = product.totalPrice * 0.09;
  const sgst = product.totalPrice * 0.09;
  const remainingAmount = product.totalPrice - cgst - sgst;
  // console.log("remainingAmount", remainingAmount);

  return (
    <div className="m-5">
      <div
        className="p-3 "
        style={{
          backgroundColor: "white",
          boxShadow: "rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
        }}
      >
        <h5 className="text-3xl text-center font-bold">PAYOUT INVOICE</h5>
        <hr />
        <div style={{ display: "flex" }}>
          <div className="col-md-6">
            <h6>{product.sellerName}</h6>
          </div>
          <div className="col-md-6 text-center">
            <h6>PO{product.orderId}</h6>
            {/* <div className="text-center" style={{ width: "200px" }}>
              <hr />
            </div> */}
            <div>Invoice Date: {moment().format("LL")} </div>
          </div>
        </div>
        <div className="mt-3">
          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th style={{ textAlign: "center" }}>Order Date</th>
                <th>Order ID</th>
                <th>Order Total (A)</th>
                <th>Commission (B) </th>
                <th style={{ textAlign: "center" }}>Tax (C) </th>
                <th>Payout Amount A-(B+C) </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>{moment(product.ordered_date).format("LLL")}</td>
                <td style={{ textAlign: "center" }}>
                  {product.event_id?.slice(-6).toUpperCase()}
                </td>
                <td style={{ textAlign: "center" }}>
                  ₹{product.payment_amount?.toFixed(2)}{" "}
                </td>
                <td style={{ textAlign: "center" }}>
                  {product.commission_percentage?.toFixed(2)}% | ₹
                  {product.commission_amount?.toFixed(2)}
                </td>
                <td style={{ textAlign: "center" }}>
                  {product.commission_tax?.toFixed(2)}% | ₹
                  {product.tax_amount?.toFixed(2)}
                </td>
                <td style={{ textAlign: "center" }}>
                  ₹{product.payout_amount?.toFixed(2)}
                </td>
              </tr>
            </tbody>
          </Table>
          <div style={{ textAlign: "right" }}>
            {" "}
            <b>Total: ₹{product.payout_amount?.toFixed(2)}</b>
          </div>
          <hr />
          <div style={{ textAlign: "right" }}>
            {" "}
            <b>
              {" "}
              Rupees
              {/* {toWords(remainingAmount).replace(/,/g, "")}  */}
              only{" "}
            </b>
          </div>
          <hr />
          <div>
            <b>Remarks:</b>{" "}
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default PayoutInvoice;
// box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
