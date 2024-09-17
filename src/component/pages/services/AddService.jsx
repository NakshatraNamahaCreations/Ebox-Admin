import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
// import { FaEye } from "react-icons/fa";
// import { RxSlash } from "react-icons/rx";
import { MdDelete } from "react-icons/md";
import { apiUrl } from "../../../api-services/apiContents";
import axios from "axios";
import { postData } from "../../../api-services/apiHelper";
import Loader from "../../loader/Loader";
import * as XLSX from "xlsx";

function AddService() {
  const [serviceName, setServiceName] = useState("");
  const [serviceListData, setServiceListData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [file, setFile] = useState(null);

  // Example Data
  const products = [
    { id: 1, name: "Product A", totalQuantity: 100 },
    { id: 2, name: "Product B", totalQuantity: 50 },
    // More products...
  ];

  const orders = [
    { id: 1, productId: 1, orderDate: "2024-09-04", appliedQuantity: 20 },
    { id: 2, productId: 1, orderDate: "2024-09-05", appliedQuantity: 100 },
    { id: 3, productId: 2, orderDate: "2024-09-04", appliedQuantity: 10 },
    // More orders...
  ];

  // Function to calculate available quantity for a product on a given date
  function calculateAvailableQuantity(product, orders, selectedDate) {
    // Filter orders by selected date and product ID
    const ordersForDate = orders.filter(
      (order) =>
        order.orderDate === selectedDate && order.productId === product.id
    );

    // Sum applied quantities for the selected date
    const totalAppliedQuantity = ordersForDate.reduce(
      (sum, order) => sum + order.appliedQuantity,
      0
    );

    // Calculate available quantity
    return product.totalQuantity - totalAppliedQuantity;
  }

  // Function to get available products for a selected date
  function getAvailableProducts(products, orders, selectedDate) {
    return products
      .map((product) => {
        const availableQuantity = calculateAvailableQuantity(
          product,
          orders,
          selectedDate
        );
        return {
          ...product,
          availableQuantity,
          isAvailable: availableQuantity > 0,
        };
      })
      .filter((product) => product.isAvailable);
  }

  // Example Usage
  const selectedDate = "2024-09-05";
  const availableProducts = getAvailableProducts(
    products,
    orders,
    selectedDate
  );

  const fetchList = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(
        `${apiUrl.LOCALURL}${apiUrl.GET_ALL_SERVICE}`
      );
      if (res.status === 200) {
        // console.log("res", res);

        setServiceListData(res.data.data);
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

  const addService = async () => {
    if (!serviceName) {
      alert("Service Name should not empty");
    } else {
      try {
        const data = {
          service_name: serviceName,
        };
        const res = await postData(`${apiUrl.ADD_SERVICE}`, data);
        if (res) {
          alert("Added");
          console.log("res", res);
          setServiceName("");
          fetchList();
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };
  const deleteService = async (id) => {
    try {
      const res = await axios.delete(
        `${apiUrl.LOCALURL}${apiUrl.DELETE_SERVICE}/${id}`
      );
      if (res.status === 200) {
        // alert("Service Deleted");
        fetchList();
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const downloadExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet([
      { Service_Name: "Service Name" },
    ]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Service Name");
    XLSX.writeFile(workbook, "services-template.xlsx");
  };

  const uploadFile = (event) => {
    const uploadedFile = event.target.files[0];
    setFile(uploadedFile);
  };

  const addExcel = async () => {
    if (file === "") {
      alert("Please select a file");
    } else {
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const data = new Uint8Array(e.target.result);
          const workbook = XLSX.read(data, { type: "array" });
          const worksheet = workbook.Sheets[workbook.SheetNames[0]];
          const jsonData = XLSX.utils.sheet_to_json(worksheet);
          console.log("Raw Excel Data:", jsonData);
          // Ensure we map the Excel column "Service Name" to the backend expected "service_name"
          const jsonData1 = jsonData.map((item) => ({
            service_name: item["Service_Name"],
          }));

          console.log("Mapped Data:", jsonData1); // Check if data is properly mapped

          try {
            axios.post(
              `${apiUrl.LOCALURL}${apiUrl.ADD_SERVICE_VIA_EXCEL}`,
              jsonData1
            );
            alert("Service Added!!!");
            window.location.reload();
          } catch (error) {
            console.error("Error sending data to backend:", error);
          }
        };
        reader.readAsArrayBuffer(file);
      } else {
        alert("Please upload a file first.");
      }
    }
  };

  const columns = [
    {
      name: "Sl.No",
      selector: (row, index) => index + 1,
    },

    {
      name: "Service Name",
      selector: (row) => row.service_name,
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
            // onClick={() => navigateToDetailedPage(row)}
          >
            {/* <div style={{ cursor: "pointer" }} title="View">
              <FaEye size={16} color="#00ade7" />
            </div>
            <div>
              <RxSlash size={16} />
            </div> */}
            <div
              style={{ cursor: "pointer" }}
              title="Delete"
              onClick={() => deleteService(row._id)}
            >
              <MdDelete size={16} color="#E91E63" />
            </div>
          </div>
        </>
      ),
      // sortable: true,
    },
  ];

  return (
    <div>
      {isLoading && <Loader />}

      <div className="row mt-2">
        <div className="col-md-6">
          <div
            className="border-top-for-all-border"
            style={{
              backgroundColor: "white",

              // rgb(95 95 95)
              borderRadius: "5px",
            }}
          >
            <div className="p-2">
              <div>
                <h6 className="mt-3" style={styles.header}>
                  Service Name:
                </h6>

                <input
                  type="text"
                  value={serviceName}
                  placeholder="e.g. Catering Service"
                  onChange={(e) => setServiceName(e.target.value)}
                  style={{ fontSize: "14px", padding: "4px 7px" }}
                />
              </div>
              <div className="mt-3 mb-2">
                <button onClick={addService} style={styles.buttonForEveything}>
                  Add Service
                </button>
              </div>
              <div
                style={{
                  borderBottom: "1px solid #f4f4f4",
                }}
              ></div>
              <p className="mt-1" style={{ fontSize: "12px", color: "blue" }}>
                <b>*Add multiple services through excel</b>
              </p>
              <div className="mb-2 d-flex">
                <button
                  className="me-2"
                  onClick={downloadExcel}
                  style={styles.buttonForEveything}
                >
                  Download excel
                </button>
                <input
                  type="file"
                  placeholder="Upload file"
                  onChange={uploadFile}
                />
                <button onClick={addExcel} style={styles.buttonForEveything}>
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
        {!isLoading && (
          <div className="col-md-6">
            <div
              className="border-top-for-all-border"
              style={{
                backgroundColor: "white",
                borderRadius: "5px",
              }}
            >
              <div className="p-2">
                <h3 style={styles.itemsHead}>Service List</h3>
                <div>
                  <DataTable
                    columns={columns}
                    data={serviceListData}
                    pagination
                    //   defaultSortFieldId={1}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
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
    backgroundColor: "#90e447",
    border: "#7ac536",
    color: "white",
    borderRadius: "3px",
    fontSize: "14px",
    padding: "5px 10px",
  },
};

export default AddService;
