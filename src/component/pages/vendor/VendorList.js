import React from "react";
import { scheduleData } from "../../../global-data/booking";
import DataTable from "react-data-table-component";
import "../../../styles/booking-history.css";
import { FaEye } from "react-icons/fa";
import { RxSlash } from "react-icons/rx";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function VendorList() {
  const Navigate = useNavigate();
  const navigateToProductPage = (row) => {
    Navigate("/vendor/vendor-products", {
      state: {
        row,
      },
    });
  };
  const columns = [
    {
      name: "Vendor Id",
      selector: (row, index) =>
        "EVTBX" + row._id?.substring(row._id.length - 6),
      sortable: true,
    },
    {
      name: "Vendor Name",
      selector: (row) => (
        <>
          <div
            style={
              {
                //   color: "black",
                //   fontWeight: "700",
                //   paddingBottom: "6px",
                //   cursor: "pointer",
              }
            }
            // onClick={() => handleOpeningCanvas(row)}
          >
            {row.name}
          </div>
        </>
      ),
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => "kiru@gmail.com",
      sortable: true,
    },
    {
      name: "Mobile",
      selector: (row) => "+91" + " " + row.mobileNumber,
      sortable: true,
    },
    {
      name: "Action",
      selector: (row) => (
        <>
          <div
            style={{
              display: "flex",
            }}
            onClick={() => navigateToProductPage(row)}
          >
            <div style={{ cursor: "pointer" }} title="View">
              <FaEye size={16} color="#2F4E9E" />
              &nbsp;Products
            </div>
            <div>
              <RxSlash size={16} />
            </div>
            <div style={{ cursor: "pointer" }} title="Delete">
              <MdDelete size={16} color="#E91E63" />
              &nbsp;Delete
            </div>
          </div>
        </>
      ),
      // sortable: true,
    },
  ];

  return (
    <div>
      <br />
      <DataTable
        columns={columns}
        data={scheduleData}
        //   defaultSortFieldId={1}
      />
    </div>
  );
}

export default VendorList;
