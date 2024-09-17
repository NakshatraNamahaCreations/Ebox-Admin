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

function AddSubService() {
  const [serviceName, setServiceName] = useState("");
  const [serviceSubCategory, setServiceSubCategory] = useState("");
  const [serviceId, setServiceId] = useState("");
  const [serviceListData, setServiceListData] = useState([]);
  const [subServiceListData, setSubServiceListData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [file, setFile] = useState(null);

  const fetchList = async () => {
    setIsLoading(true);
    try {
      const serviceRes = await axios.get(
        `${apiUrl.LOCALURL}${apiUrl.GET_ALL_SERVICE}`
      );
      if (serviceRes.status === 200) {
        setServiceListData(serviceRes.data.data);
      }
      const subServiceRes = await axios.get(
        `${apiUrl.LOCALURL}${apiUrl.GET_ALL_SUB_SERVICE}`
      );
      if (serviceRes.status === 200) {
        setSubServiceListData(subServiceRes.data.data);
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

  const handleService = (e) => {
    let data = e.target.value;
    let serviceList = serviceListData.find((ele) => ele._id === data);
    // console.log("serviceList", serviceList);
    setServiceName(serviceList.service_name);
    setServiceId(serviceList._id);
  };

  const addSubService = async () => {
    if (!serviceName || !serviceSubCategory) {
      alert("Please fill all fields");
    } else {
      try {
        const data = {
          service_name: serviceName,
          service_id: serviceId,
          sub_service_name: serviceSubCategory,
        };
        const res = await postData(`${apiUrl.ADD_SUB_SERVICE}`, data);
        if (res) {
          alert("Added");
          // console.log("res", res);
          setServiceName("");
          setServiceSubCategory("");
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
        `${apiUrl.LOCALURL}${apiUrl.DELETE_SUB_SERVICE}/${id}`
      );
      if (res.status === 200) {
        // alert("Service Deleted");
        fetchList();
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // const downloadExcel = () => {
  //   const worksheet = XLSX.utils.json_to_sheet([
  //     { Service_Name: "Service Name" },
  //   ]);
  //   const workbook = XLSX.utils.book_new();
  //   XLSX.utils.book_append_sheet(workbook, worksheet, "Service Name");
  //   XLSX.writeFile(workbook, "services-template.xlsx");
  // };

  // const uploadFile = (event) => {
  //   const uploadedFile = event.target.files[0];
  //   setFile(uploadedFile);
  // };

  // const addExcel = async () => {
  //   if (file === "") {
  //     alert("Please select a file");
  //   } else {
  //     if (file) {
  //       const reader = new FileReader();
  //       reader.onload = (e) => {
  //         const data = new Uint8Array(e.target.result);
  //         const workbook = XLSX.read(data, { type: "array" });
  //         const worksheet = workbook.Sheets[workbook.SheetNames[0]];
  //         const jsonData = XLSX.utils.sheet_to_json(worksheet);
  //         console.log("Raw Excel Data:", jsonData);
  //         // Ensure we map the Excel column "Service Name" to the backend expected "service_name"
  //         const jsonData1 = jsonData.map((item) => ({
  //           service_name: item["Service_Name"],
  //         }));

  //         console.log("Mapped Data:", jsonData1); // Check if data is properly mapped

  //         try {
  //           axios.post(
  //             `${apiUrl.LOCALURL}${apiUrl.ADD_SERVICE_VIA_EXCEL}`,
  //             jsonData1
  //           );
  //           alert("Service Added!!!");
  //           window.location.reload();
  //         } catch (error) {
  //           console.error("Error sending data to backend:", error);
  //         }
  //       };
  //       reader.readAsArrayBuffer(file);
  //     } else {
  //       alert("Please upload a file first.");
  //     }
  //   }
  // };

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
      name: "Sub category",
      selector: (row) => row.sub_service_name,
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
                  Select Service:
                </h6>

                <select
                  style={{ padding: "4px 7px", fontSize: "14px" }}
                  // value={serviceName}
                  onChange={handleService}
                >
                  <option value="">---Select Service---</option>
                  {serviceListData.map((ele) => (
                    <option value={ele._id}>{ele.service_name}</option>
                  ))}
                </select>
              </div>
              <div>
                <h6 className="mt-3" style={styles.header}>
                  Enter Subcategory
                </h6>

                <input
                  type="text"
                  value={serviceSubCategory}
                  placeholder="e.g. Catering Service"
                  onChange={(e) => setServiceSubCategory(e.target.value)}
                  style={{ fontSize: "14px", padding: "4px 7px" }}
                />
              </div>
              <div className="mt-3 mb-2">
                <button
                  onClick={addSubService}
                  style={styles.buttonForEveything}
                >
                  Add Service
                </button>
              </div>
              {/* <div
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
              </div> */}
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
                    data={subServiceListData}
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

export default AddSubService;
