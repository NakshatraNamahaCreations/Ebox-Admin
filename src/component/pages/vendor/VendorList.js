import React, { useContext, useEffect, useState } from "react";
import { scheduleData } from "../../../global-data/booking";
import DataTable from "react-data-table-component";
import "../../../styles/booking-history.css";
import { FaEye } from "react-icons/fa";
import { RxSlash } from "react-icons/rx";
import { LuBoxes } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { get } from "../../../api-services/apiHelper";
import { apiUrl } from "../../../api-services/apiContents";
import Loader from "../../loader/Loader";
import GlobalContext from "../../../hooks/GlobalProvider";

function VendorList() {
  const Navigate = useNavigate();
  const [vendors, setVendors] = useState([]);
  // const [vendorsLength, setVendorsLength] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const { setGlobalData } = useContext(GlobalContext);

  useEffect(() => {
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

    fetchVendors();
  }, [setGlobalData]);
  // console.log("vendors", vendors);

  const navigateToProductPage = (row) => {
    Navigate("/vendor/vendor-products", {
      state: {
        vendorId: row._id,
        vendorName: row.vendor_name,
      },
    });
  };
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
      selector: (row) => "+91" + " " + row.mobile_number,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => "+91",
      sortable: true,
    },
    {
      name: "Action",
      selector: (row) => (
        <>
          <div
            style={{ cursor: "pointer" }}
            title="Delete"
            onClick={() => viewVendorDetails(row)}
          >
            <FaEye size={16} color="#2F4E9E" />
            &nbsp;View
          </div>
        </>
      ),
      // sortable: true,
    },
  ];

  return (
    <div>
      {isLoading && <Loader />}
      <br />
      {!isLoading && (
        <DataTable
          columns={columns}
          data={vendors}
          pagination
          //   defaultSortFieldId={1}
        />
      )}
    </div>
  );
}

export default VendorList;
