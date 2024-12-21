import React, { useContext, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import "../../../../styles/booking-history.css";
import { FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { get } from "../../../../api-services/apiHelper";
import { apiUrl } from "../../../../api-services/apiContents";
import Loader from "../../../loader/Loader";
import GlobalContext from "../../../../hooks/GlobalProvider";
// import { FaUserAltSlash } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Badge } from "react-bootstrap";

function VendorList() {
  const Navigate = useNavigate();
  const [vendors, setVendors] = useState([]);
  // const [vendorsLength, setVendorsLength] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const { setGlobalData } = useContext(GlobalContext);

  const fetchVendors = async () => {
    setIsLoading(true);
    try {
      const data = await get(apiUrl.GET_ALL_VENDOR);
      setVendors(data.reverse());
      setGlobalData((prevData) => ({
        ...prevData,
        vendorsLength: data.length, // Set vendorsLength in globalData
      }));
    } catch (error) {
      console.error("Failed to fetch vendors:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchVendors();
  }, [setGlobalData]);

  console.log("vendors", vendors);

  const viewVendorDetails = (row) => {
    Navigate("/vendor/vendor-profile", {
      state: {
        vendor: row,
      },
    });
  };
  const columns = [
    {
      name: "Vendor Id",
      selector: (row, index) => row._id?.substring(row._id),
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
            {row.vendor_name}
          </div>
        </>
      ),
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Mobile",
      selector: (row) => "+91" + "-" + row.mobile_number,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => (
        // <div
        //   style={{
        //     backgroundColor: "#35cd3a",
        //     borderRadius: "5px",
        //     padding: "3px 7px",
        //     color: "white",
        //     borderRadius: "15px",
        //     // color: row.is_approved === true ? "green" : "red",
        //   }}
        // >
        <Badge bg={row.is_approved === true ? "success" : "danger"}>
          {row.is_approved === true ? "Approved" : "Not Approved"}
        </Badge>

        // </div>
      ),
      sortable: true,
    },
    {
      name: "Action",
      selector: (row) => (
        <div style={{ display: "flex" }}>
          <div
            style={{
              cursor: "pointer",
              backgroundColor: "#2f4e9e",
              padding: "7px 13px",
              // borderRadius: "3px",
              // borderLeftBottomRadius: "3px",
              // borderLeftTopRadius: "3px",
            }}
            title="View"
            onClick={() => viewVendorDetails(row)}
          >
            <FaEye size={16} color="#ffffff" />
          </div>
          <div
            style={{
              cursor: "pointer",
              backgroundColor: "#e91e63",
              padding: "7px 13px",
              // borderLeftBottomRadius: "3px",
              // borderLeftTopRadius: "3px",
            }}
            title="Delete"
          >
            <MdDelete size={16} color="white" />
          </div>
        </div>
      ),
      // sortable: true,
    },
  ];

  return (
    <div>
      {isLoading && <Loader />}
      {!isLoading && (
        <div>
          <div style={{ textAlign: "right" }}>
            <input
              type="search"
              // value={serviceName}
              placeholder="🔍 Search..."
              // onChange={(e) => setServiceName(e.target.value)}
              style={{
                fontSize: "14px",
                padding: "7px",
                border: "1px solid #ebedf2",
                outline: 0,
                width: "25%",
                borderRadius: "7px",
              }}
            />
            <br /> <br />
          </div>
          <DataTable
            columns={columns}
            data={vendors}
            pagination
            //   defaultSortFieldId={1}
          />
        </div>
      )}
    </div>
  );
}

export default VendorList;
