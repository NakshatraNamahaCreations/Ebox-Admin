import React, { useEffect, useState } from "react";
import { apiUrl } from "../../../api-services/apiContents";
import Loader from "../../loader/Loader";
import axios from "axios";
import ChipInput from "./ChipInput";
import DataTable from "react-data-table-component";

function Requirements() {
  const [serviceListData, setServiceListData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [serviceId, setServiceId] = useState("");

  const fetchList = async () => {
    setIsLoading(true);
    try {
      const serviceRes = await axios.get(
        `${apiUrl.BASEURL}${apiUrl.GET_ALL_SERVICE}`
      );
      if (serviceRes.status === 200) {
        setServiceListData(serviceRes.data.data);
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
  const requimentsList = serviceListData.filter(
    (item) => item.requirement_fields.length > 0
  );
  // console.log("requiments", requimentsList);

  const columns = [
    {
      name: "Service Name",
      selector: (row) => row.service_name,
      sortable: true,
    },
    {
      name: "Requirement Fields",
      selector: (row) => (
        <>
          <ul>
            {row.requirement_fields.map((ele) => (
              <li
                style={{
                  listStyle: "none",
                  margin: "auto",
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr",
                  //  "1fr  / repeat(4, minmax(0, 10fr)) ",
                  gap: "10px",
                }}
              >
                {ele.parameter} - ({ele.field_type})
              </li>
            ))}
          </ul>
        </>
      ),
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
              padding: "10px 20px",
            }}
          >
            <div>
              <h6 className="mt-3" style={styles.header}>
                Select Service:
              </h6>

              <select
                style={{ padding: "5px 10px", fontSize: "14px" }}
                // value={serviceName}
                onChange={(e) => setServiceId(e.target.value)}
              >
                <option value="">---Select Service---</option>
                {serviceListData.map((ele) => (
                  <option value={ele._id}>{ele.service_name}</option>
                ))}
              </select>
            </div>
            <h6 className="mt-3" style={styles.header}>
              Add Requirements
            </h6>
            <ChipInput serviceId={serviceId} />
          </div>
        </div>
        <div className="col-md-6">
          <DataTable columns={columns} data={requimentsList} pagination />
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
    backgroundColor: "#90e447",
    border: "#7ac536",
    color: "white",
    borderRadius: "3px",
    fontSize: "14px",
    padding: "5px 10px",
  },
};
export default Requirements;
