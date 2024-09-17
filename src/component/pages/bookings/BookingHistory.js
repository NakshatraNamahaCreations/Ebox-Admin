import React from "react";
import DataTable from "react-data-table-component";
import "../../../styles/booking-history.css";
import { FaEye } from "react-icons/fa";
import { RxSlash } from "react-icons/rx";
import { MdDelete } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import { scheduleData } from "../../../global-data/booking";
import moment from "moment";

function BookingHistory() {
  const { date } = useParams();
  const bookingData = scheduleData.filter((item) => item.date === date);
  console.log("date", date);
  const Navigate = useNavigate();
  const navigateToDetailedPage = (row) => {
    Navigate("/booking/booking-details", {
      state: {
        row,
      },
    });
  };
  const columns = [
    {
      name: "Booking No",
      selector: (row, index) =>
        "EVTBX" + row._id?.substring(row._id.length - 6),
      sortable: true,
    },
    {
      name: "U.Name",
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
      name: "Mobile",
      selector: (row) => "+91" + " " + row.mobileNumber,
      sortable: true,
    },
    {
      name: "Org.Name",
      selector: (row) => row.organizationName,
      sortable: true,
    },
    {
      name: "Event",
      selector: (row) => row.eventType,
      sortable: true,
    },
    {
      name: "Celebrity",
      selector: (row) => row.celebrity,
      sortable: true,
    },
    // {
    //   name: "No Of Person",
    //   selector: (row) => row.noOfPerson,
    //   sortable: true,
    // },
    {
      name: "Action",
      selector: (row) => (
        <>
          <div
            style={{
              display: "flex",
            }}
            onClick={() => navigateToDetailedPage(row)}
          >
            <div style={{ cursor: "pointer" }} title="View">
              <FaEye size={16} color="#2F4E9E" />
              &nbsp;View
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
      <div>
        <div className="headerTitle-0-1-70">Booking History</div>

        <div
          style={{ fontSize: "14px", marginTop: "10px", marginBottom: "5px" }}
        >
          History of {moment(date).format("DD/MM/YYYY")}
        </div>
      </div>

      <DataTable
        columns={columns}
        data={bookingData}
        //   defaultSortFieldId={1}
      />
    </div>
  );
}

export default BookingHistory;
