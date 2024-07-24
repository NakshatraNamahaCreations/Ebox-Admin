import React from "react";
import DataTable from "react-data-table-component";
import { bannerData } from "../../../global-data/booking";
import { MdDelete } from "react-icons/md";

function VendorProductList() {
  const columns = [
    {
      name: "Sl.No",
      selector: (row, index) => index + 1,
      sortable: true,
    },
    {
      name: "Product ID",
      selector: (row, index) => index + 1,
      sortable: true,
    },
    {
      name: "Product Name",
      selector: (row, index) =>
        "Philips Audio MMS2625B 32W 2.1 Channel Wireless Bluetooth, Wired Multimedia Computer Speaker - Black",
      sortable: true,
    },
    {
      name: "Brand Name",
      selector: (row) => "JBL",
      sortable: true,
    },
    {
      name: "Image",
      selector: (row) => (
        <>
          <div
            style={{
              padding: "5px",
            }}
          >
            <img src={row.bannerImage} alt="" style={{ width: "45px" }} />
          </div>
        </>
      ),
      sortable: true,
    },
    {
      name: "Price",
      selector: (row, index) => "4990",
      sortable: true,
    },
    {
      name: "Discount Price",
      selector: (row, index) => "3409",
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => (
        <>
          <div
            style={{
              display: "flex",
            }}
            // onClick={() => navigateToDetailedPage(row)}
          >
            <div
              style={{
                backgroundColor: "#00a65a",
                color: "white",
                padding: "3px 6px",
                borderRadius: "5px",
                fontWeight: "500",
                fontSize: "12px",
                // cursor: "pointer"
              }}
              title="Delete"
            >
              Approved
            </div>
          </div>
        </>
      ),
    },
    {
      name: "Action",
      selector: (row) => (
        <>
          <div
            style={{
              display: "flex",
            }}
            // onClick={() => navigateToDetailedPage(row)}
          >
            <div style={{ cursor: "pointer" }} title="Delete">
              <MdDelete size={16} color="#E91E63" /> Delete
            </div>
          </div>
        </>
      ),
    },
  ];
  return (
    <div className="mt-3">
      <div
        style={{
          backgroundColor: "white",
          borderTop: "3px solid #2F4E9E",
          borderRadius: "5px",
        }}
      >
        <div className="p-2">
          <h3 style={styles.itemsHead}>Product List</h3>
          <div
            style={{
              borderBottom: "1px solid #f4f4f4",
            }}
          ></div>
          <div>
            <DataTable
              columns={columns}
              data={bannerData}
              //   defaultSortFieldId={1}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
const styles = {
  itemsHead: {
    color: "#333",
    fontWeight: "500",
    fontSize: "17px",
  },
  header: {
    color: "#333",
    fontSize: "14px",
  },
  selector: {
    color: "#555",
    width: "100%",
    padding: "6px 12px",
    border: "1px solid #ccc",
  },
  buttonForEveything: {
    backgroundColor: "#014c8d",
    border: "#014c8d",
    color: "white",
    borderRadius: "3px",
    fontSize: "14px",
    padding: "5px 10px",
  },
};
export default VendorProductList;
