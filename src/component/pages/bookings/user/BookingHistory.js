import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import "../../../../styles/booking-history.css";
import { FaEye } from "react-icons/fa";
import { RxSlash } from "react-icons/rx";
import { MdDelete } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
// import { scheduleData } from "../../../../global-data/booking";
import moment from "moment";
import Loader from "../../../loader/Loader";
import { apiUrl } from "../../../../api-services/apiContents";
import axios from "axios";

function BookingHistory() {
  const { date } = useParams();
  console.log("date", date);
  const Navigate = useNavigate();
  const [scheduleData, setScheduleData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchList = async () => {
    setIsLoading(true);
    try {
      const serviceRes = await axios.get(
        `${apiUrl.BASEURL}${apiUrl.GET_ALL_ORDER}`
      );
      if (serviceRes.status === 200) {
        // console.log("serviceRes", serviceRes);
        setScheduleData(serviceRes.data);
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

  const bookingData = scheduleData.filter(
    (item) => moment(item.createdAt).format("YYYY-MM-DD") === date
  );
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
        "NE" + row._id?.substring(row._id.length - 4).toUpperCase(),
      sortable: true,
    },
    {
      name: "User Name",
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
            {row.user_name}
          </div>
        </>
      ),
      sortable: true,
    },
    {
      name: "Event Name",
      selector: (row) => row.event_name,
      sortable: true,
    },
    {
      name: "Event Date & Time",
      selector: (row) => (
        <div>
          <div style={{ color: "black", paddingBottom: "6px" }}>
            {row.event_date}
          </div>
          <div style={{ color: "black", paddingBottom: "6px" }}>
            {row.event_start_time}
          </div>
        </div>
      ),
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
            onClick={() => navigateToDetailedPage(row)}
          >
            <div style={{ cursor: "pointer" }} title="View">
              <FaEye size={16} color="#2F4E9E" />
              &nbsp;View
            </div>
            {/* <div>
              <RxSlash size={16} />
            </div>
            <div style={{ cursor: "pointer" }} title="Delete">
              <MdDelete size={16} color="#E91E63" />
              &nbsp;Delete
            </div> */}
          </div>
        </>
      ),
      // sortable: true,
    },
  ];
  console.log("bookingData", bookingData);

  return (
    <div>
      {isLoading && <Loader />}
      <div>
        <div className="headerTitle-0-1-70">
          Payment History of {moment(date).format("DD/MM/YYYY")}
        </div>
        <br />
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
