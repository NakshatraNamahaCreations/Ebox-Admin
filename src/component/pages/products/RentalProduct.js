import axios from "axios";
import React, { useEffect, useState } from "react";
import { apiUrl } from "../../../api-services/apiContents";
import Loader from "../../loader/Loader";
import { useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import DataTable from "react-data-table-component";
import { Badge } from "react-bootstrap";

function RentalProduct() {
  const [allRentalProduct, setAllRentalProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const Navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const productRes = await axios.get(
          `${apiUrl.BASEURL}${apiUrl.ALL_PRODUCT}`
        );
        if (productRes.status === 200) {
          const rentalProductRes = productRes.data?.filter(
            (item) => item.product_type === "rental"
          );
          setAllRentalProduct(rentalProductRes);
        }
      } catch (error) {
        console.log("error", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const navigateToDetailedPage = (row) => {
    Navigate("/product/product-details", {
      state: {
        prooduct: row,
      },
    });
  };

  const columns = [
    {
      name: "Product Name",
      selector: (row) => row.product_name,
      sortable: true,
    },
    // {
    //   name: "Image",
    //   selector: (row) => {
    //     const imageUrl =
    //       row.product_image && row.product_image.length > 0
    //         ? `${apiUrl.IMAGEURL}${row.product_image[0]}`
    //         : "placeholder.jpg";

    //     return (
    //       <div style={{ padding: "5px" }}>
    //         <img src={imageUrl} alt="Product" style={{ width: "45px" }} />
    //       </div>
    //     );
    //   },
    //   sortable: false,
    // },
    // {
    //   name: "Price",
    //   selector: (row) => "₹" + row.product_price,
    //   sortable: true,
    // },
    {
      name: "Vendor Name",
      selector: (row) => row.vendor_name,
      sortable: true,
    },
    {
      name: "Shop/Business Name",
      selector: (row) => row.shop_name,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => (
        <Badge
          className="ms-2"
          bg={row.approval_status ? "success" : "warning"}
        >
          {row.approval_status ? "Approved" : "Pending"}
        </Badge>
      ),
    },
    {
      name: "Action",
      selector: (row) => (
        <>
          <div
            style={{
              cursor: "pointer",
              backgroundColor: "#2f4e9e",
              padding: "7px 13px",
            }}
            title="View"
            onClick={() => navigateToDetailedPage(row)}
          >
            {/* <div style={{ cursor: "pointer" }} title="View"> */}
            <FaEye size={16} color="white" />
            {/* </div> */}
          </div>
        </>
      ),
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
              placeholder="🔍 Search product/vendor/shop..."
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
            data={allRentalProduct}
            pagination
            //   defaultSortFieldId={1}
          />
        </div>
      )}
    </div>
  );
}

export default RentalProduct;
