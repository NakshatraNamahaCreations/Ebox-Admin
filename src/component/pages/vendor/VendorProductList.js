import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
// import { bannerData } from "../../../global-data/booking";
import { FaEye } from "react-icons/fa";
import { apiUrl } from "../../../api-services/apiContents";
import { useLocation } from "react-router-dom";
import { get } from "../../../api-services/apiHelper";
import Loader from "../../loader/Loader";

function VendorProductList() {
  const location = useLocation();
  const vendorID = location.state.vendorId;
  const vendorName = location.state.vendorName;
  // console.log("vendor if", vendorID);

  const [vendorProduct, setVendorProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchVendors = async () => {
      setIsLoading(true);
      try {
        const data = await get(
          `${apiUrl.BASEURL}${apiUrl.GET_PRODUCT_BY_VENDOR}${vendorID}`
        );
        setVendorProduct(data.products?.reverse());
      } catch (error) {
        console.error("Failed to fetch vendors:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchVendors();
  }, []);
  // console.log("vendorProduct in vendor product poage", vendorProduct);

  const columns = [
    {
      name: "Product ID",
      selector: (row) => `#${row._id?.slice(-3)}`,
      sortable: true,
    },
    {
      name: "Product Name",
      selector: (row) => row.product_name,
      sortable: true,
    },
    {
      name: "Brand Name",
      selector: (row) => row.brand,
      sortable: true,
    },
    {
      name: "Image",
      selector: (row) => {
        const imageUrl =
          row.product_image && row.product_image.length > 0
            ? `${apiUrl.IMAGEURL}${row.product_image[0]}`
            : "placeholder.jpg"; // You can replace this with a proper placeholder image path

        return (
          <div style={{ padding: "5px" }}>
            <img src={imageUrl} alt="Product" style={{ width: "45px" }} />
          </div>
        );
      },
      sortable: false, // Consider whether sorting should be enabled based on your use case
    },
    {
      name: "Price",
      selector: (row) => row.product_price,
      sortable: true,
    },
    {
      name: "MRP Price",
      selector: (row) => row.mrp_rate,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => (
        <>
          {row.approval_status === true && (
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
              >
                Approved
              </div>
            </div>
          )}
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
            <div style={{ cursor: "pointer" }} title="View">
              <FaEye size={16} color="#E91E63" /> View
            </div>
          </div>
        </>
      ),
    },
  ];
  return (
    <div className="mt-3">
      <div
        className="border-top-for-all-border"
        style={{
          backgroundColor: "white",
          borderRadius: "5px",
        }}
      >
        <div className="p-2">
          <h3 style={styles.itemsHead}>
            Currently you are viewing vendor "{vendorName}"{" "}
          </h3>
          {/* <div
            style={{
              borderBottom: "1px solid #f4f4f4",
            }}
          ></div> */}
          <div>
            {isLoading && <Loader />}
            <br />
            {!isLoading && (
              <DataTable
                columns={columns}
                data={vendorProduct}
                pagination
                //   defaultSortFieldId={1}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
const styles = {
  itemsHead: {
    color: "#ea5362",
    fontWeight: "500",
    fontSize: "14px",
    marginTop: "5px",
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
