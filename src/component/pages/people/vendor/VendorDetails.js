import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { apiUrl } from "../../../../api-services/apiContents";
import moment from "moment";
// import VendorProductList from "./VendorProductList";
import axios from "axios";
import Switch from "react-switch";
import { Button, Modal } from "react-bootstrap";

function VendorDetails() {
  const location = useLocation();
  const vendor = location.state.vendor;
  const [showModal, setShowModal] = useState(false);
  const [reason, setReason] = useState("");
  const [commission, setCommission] = useState(
    vendor.commission_percentage || ""
  );
  console.log("vendor details in cendor det>>", vendor);

  const makeVendorApproval = async () => {
    try {
      const res = await axios.put(
        `${apiUrl.BASEURL}${apiUrl.VENDOR_APPROVE}${vendor._id}`
      );
      if (res.status === 200) {
        console.log(res.data);
        alert("Approved Successfully");
        window.location.assign("/vendor-list");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const openPop = () => setShowModal(true);

  const makeVendorDisapproval = async () => {
    try {
      if (!reason) {
        alert("Please provide a reason for disapproval.");
        return;
      }
      const res = await axios.put(
        `${apiUrl.BASEURL}${apiUrl.VENDOR_DISAPPROVE}${vendor._id}`,
        {
          reason_for_disapprove: reason,
        }
      );

      if (res.status === 200) {
        console.log(res.data);
        alert("Vendor is disapproved");
        window.location.assign("/vendor-list");
      }
    } catch (error) {
      if (error.response) {
        // Backend returned an error response
        console.error("Error Response:", error.response.data);
        alert(error.response.data.message || "Failed to disapprove vendor");
      } else {
        // Network error or other issues
        console.error("Error:", error);
        alert("An unexpected error occurred. Please try again.");
      }
    }
  };

  const toggleServiceStatus = async (id, currentStatus) => {
    try {
      const res = await axios.put(
        `${apiUrl.BASEURL}${apiUrl.UPDATE_VENDOR_STATUS}${id}`,
        {
          isActive: !currentStatus, // Toggle the current status
        }
      );
      if (res.status === 200) {
        alert(`Vendor is ${currentStatus ? "Inactivated" : "Activated"}`);
        window.location.assign("/vendor-list");
        // fetchVendors(); // Refresh the service list
      }
    } catch (error) {
      console.error("Error updating service status:", error);
    }
  };

  const addCommissions = async () => {
    try {
      const res = await axios.put(
        `${apiUrl.BASEURL}${apiUrl.ADD_COMMISSION}${vendor._id}`,
        {
          commission_percentage: commission,
          commission_tax: 18,
        }
      );
      if (res.status === 200) {
        alert("Commission Added Successfully");
        window.location.assign("/vendor-list");
      }
    } catch (error) {
      console.error("Error updating service status:", error);
    }
  };

  return (
    <div className="ps-3 pt-2 ">
      <div className="pb-3" style={{ display: "flex", fontSize: "14px" }}>
        <a
          href="/vendor-list"
          className="pe-1"
          style={{ color: "#7d8592", textDecoration: "none" }}
        >
          Vendor
        </a>{" "}
        <div className="pe-1">/</div> <div className="pe-1">Vendor Details</div>{" "}
      </div>
      <div>
        <div
          className="border-top-for-all-border"
          style={{
            backgroundColor: "white",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          <div className="col-md-3 mb-3">
            <lable style={styles.lable}>
              Status:{" "}
              <span
                style={{
                  color: vendor.is_approved ? "#35d482" : "red",
                  // fontSize: "20px",
                }}
              >
                {" "}
                {vendor.is_approved ? "Approved" : "Disapproved"}{" "}
              </span>{" "}
            </lable>
            <br />
            {vendor.is_approved && (
              <lable style={styles.lable}>
                Action:{" "}
                <span
                  style={{
                    color: vendor.isActive ? "#35d482" : "red",
                    // fontSize: "20px",
                  }}
                >
                  {vendor.isActive ? "Active" : "In Active"}{" "}
                </span>{" "}
                <span>
                  <Switch
                    className="mt-2"
                    onChange={() =>
                      toggleServiceStatus(vendor._id, vendor.isActive)
                    }
                    checked={vendor.isActive}
                    onColor="#080"
                    offHandleColor="#ddd"
                    onHandleColor="#ddd"
                    offColor="#888"
                    handleDiameter={20}
                    uncheckedIcon={false}
                    checkedIcon={false}
                    height={15}
                    width={35}
                  />
                </span>
              </lable>
            )}
            <br />
          </div>
          <div className="row">
            <div className="col-md-3 mb-3">
              <lable style={styles.lable}>Name</lable>
              <br />
              <input
                style={styles.input}
                disabled
                value={vendor.vendor_name ? vendor.vendor_name : "NA"}
              />
            </div>
            <div className="col-md-3 mb-3">
              <lable style={styles.lable}>Email</lable>
              <br />
              <input
                style={styles.input}
                disabled
                value={vendor.email ? vendor.email : "NA"}
              />
            </div>
            <div className="col-md-3 mb-3">
              <lable style={styles.lable}>Mobile Number</lable>
              <br />
              <input
                style={styles.input}
                disabled
                value={vendor.mobile_number ? vendor.mobile_number : "NA"}
              />
            </div>
            <div className="col-md-3 mb-3">
              <lable style={styles.lable}>Shop Name</lable>
              <br />
              <input
                style={styles.input}
                disabled
                value={vendor.shop_name ? vendor.shop_name : "NA"}
              />
            </div>
            <div className="col-md-3 mb-3">
              <lable style={styles.lable}>Professional</lable>
              <br />
              <input
                style={styles.input}
                disabled
                value={vendor.profession ? vendor.profession : "NA"}
              />
            </div>
            <div className="col-md-3 mb-3">
              <lable style={styles.lable}>Godown Name</lable>
              <br />
              <input
                style={styles.input}
                disabled
                value={vendor.godown_name ? vendor.godown_name : "NA"}
              />
            </div>
            <div className="col-md-3 mb-3">
              <lable style={styles.lable}>Godown pin</lable>
              <br />
              <input
                style={styles.input}
                disabled
                value={vendor.godown_pin ? vendor.godown_pin : "NA"}
              />
            </div>
            <div className="col-md-3 mb-3">
              <lable style={styles.lable}>GST Number</lable>
              <br />
              <input
                style={styles.input}
                disabled
                value={vendor.gst_number ? vendor.gst_number : "NA"}
              />
            </div>
            <div className="col-md-3 mb-3">
              <lable style={styles.lable}>PAN Number</lable>
              <br />
              <input
                style={styles.input}
                disabled
                value={vendor.pan_number ? vendor.pan_number : "NA"}
              />
            </div>
            <div className="col-md-3 mb-3">
              <lable style={styles.lable}>Vehicle</lable>
              <br />
              <input
                style={styles.input}
                disabled
                value={vendor.vehicle_by ? vendor.vehicle_by : "NA"}
              />
            </div>
            <div className="col-md-3 mb-3">
              <lable style={styles.lable}>Vehicle Name</lable>
              <br />
              <input
                style={styles.input}
                disabled
                value={vendor.vehicle_name ? vendor.vehicle_name : "NA"}
              />
            </div>
            <div className="col-md-3 mb-3">
              <lable style={styles.lable}>Number Plate</lable>
              <br />
              <input
                style={styles.input}
                disabled
                value={vendor.number_plate ? vendor.number_plate : "NA"}
              />
            </div>
            <div className="col-md-3 mb-3">
              <lable style={styles.lable}>Account Created At</lable>
              <br />
              <input
                style={styles.input}
                disabled
                value={moment(vendor.createdAt).format("DD-MM-YYYY")}
              />
            </div>{" "}
            <div className="col-md-3 mb-3">
              <lable style={styles.lable}>Shop Image </lable>
              <br />
              <input
                style={styles.input}
                disabled
                value={moment(vendor.createdAt).format("DD-MM-YYYY")}
              />
            </div>
            <div className="col-md-3 mb-3">
              <lable style={styles.lable}>Shop Image </lable>
              <br />
              <img
                src={`${apiUrl.IMAGEURL}${vendor.shop_image_or_logo}`}
                style={{ width: "50%", height: "50%" }}
              />
            </div>
            <div className="col-md-3 mb-3">
              <lable style={styles.lable}>Vehicle Image </lable>
              <br />
              <img
                src={`${apiUrl.IMAGEURL}${vendor.vehicle_image}`}
                style={{ width: "50%", height: "50%" }}
              />
            </div>
            <div className="col-md-3 mb-3">
              <lable style={styles.lable}>Commission % </lable>
              <br />
              <input
                style={styles.input}
                type="number"
                min={1}
                value={commission}
                onChange={(e) => setCommission(e.target.value)}
              />
            </div>
            <div className="col-md-3 mb-3">
              <lable style={styles.lable}>Commission Tax </lable>
              <br />
              <input style={styles.input} disabled value={18} />
            </div>
            <div className="col-md-3 mt-4">
              <Button onClick={addCommissions}>Add</Button>
            </div>
          </div>
          {/* <lable style={{ color: "#333", fontSize: "17px", fontWeight: "600" }}>
         Bank 
          </lable> */}
          <div className="row">
            <div className="col-md-3 mb-3">
              <lable style={styles.lable}>Bank Name</lable>
              <br />
              <input
                style={styles.input}
                // disabled
                // value={vendor.vendor_name ? vendor.vendor_name : "NA"}
              />
            </div>
            <div className="col-md-3 mb-3">
              <lable style={styles.lable}>Bank Account Holder</lable>
              <br />
              <input
                style={styles.input}
                // disabled
                // value={vendor.vendor_name ? vendor.vendor_name : "NA"}
              />
            </div>
            <div className="col-md-3 mb-3">
              <lable style={styles.lable}>Bank Account</lable>
              <br />
              <input
                style={styles.input}
                // disabled
                // value={vendor.vendor_name ? vendor.vendor_name : "NA"}
              />
            </div>
            <div className="col-md-3 mb-3">
              <lable style={styles.lable}>Bank IFSC</lable>
              <br />
              <input
                style={styles.input}
                // disabled
                // value={vendor.vendor_name ? vendor.vendor_name : "NA"}
              />
            </div>
            <div className="col-md-3 mb-3">
              <lable style={styles.lable}>Bank Branch</lable>
              <br />
              <input
                style={styles.input}
                // disabled
                // value={vendor.vendor_name ? vendor.vendor_name : "NA"}
              />
            </div>
            <div className="col-md-3 mt-4">
              <Button>Add Bank</Button>
            </div>
          </div>
          {/* <br />
          <lable style={{ color: "#333", fontSize: "17px", fontWeight: "600" }}>
            Product Listings
          </lable>
          <br />
          <br />
          <VendorProductList
            vendorID={vendor._id}
            vendorName={vendor.vendor_name}
          /> */}
          <div className="mt-2">
            {vendor.is_approved === false && (
              <Button
                style={{
                  border: 0,
                  fontSize: "14px",
                  backgroundColor: "#00968b",
                  color: "white",
                  borderRadius: "7px",
                  boxShadow: "0px 1px 3px 0px #5d5d5d",
                }}
                onClick={makeVendorApproval}
              >
                Approve
              </Button>
            )}
            {vendor.is_approved && (
              <Button
                style={{
                  border: 0,
                  fontSize: "14px",
                  backgroundColor: "#ff005d",
                  color: "white",
                  borderRadius: "7px",
                  boxShadow: "0px 1px 3px 0px #5d5d5d",
                }}
                onClick={openPop}
              >
                Disapprove
              </Button>
            )}
          </div>
        </div>
      </div>
      <Modal
        size="sm"
        centered
        onHide={() => setShowModal(false)}
        show={showModal}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Disapprove Vendor</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            Reason for disapproval
            <span style={{ color: "Red" }}> *</span>
            <textarea
              className="input-0-1-134 my-2 input-d21-0-1-1124 undefined"
              type="text"
              style={{ borderRadius: "7px" }}
              onChange={(e) => setReason(e.target.value)}
            />{" "}
            <Button
              style={{
                border: 0,
                fontSize: "14px",
                backgroundColor: "#ff005d",
                color: "white",
                borderRadius: "7px",
                boxShadow: "0px 1px 3px 0px #5d5d5d",
              }}
              onClick={makeVendorDisapproval}
            >
              Disapprove
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

const styles = {
  lable: {
    color: "#333",
    fontSize: "14px",
    fontWeight: "600",
  },
  input: {
    marginTop: "5px",
    padding: "6px",
    fontSize: "14px",
    border: "1px solid #ccc",
    width: "100%",
  },
};

export default VendorDetails;
