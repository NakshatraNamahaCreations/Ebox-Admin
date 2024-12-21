import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { get } from "../../../../api-services/apiHelper";
import Loader from "../../../loader/Loader";
import { apiUrl } from "../../../../api-services/apiContents";
import axios from "axios";
import DataTable from "react-data-table-component";
import { Badge, Button, Modal } from "react-bootstrap";
import { MdDelete } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { MdBlock } from "react-icons/md";
import { CgUnblock } from "react-icons/cg";

function UserList() {
  // const Navigate = useNavigate();
  const [userList, setUserList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [rowData, setRowData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      // setIsLoading(true);
      try {
        const data = await axios.get(
          `${apiUrl.BASEURL}${apiUrl.GET_USERS_LIST}`
        );
        if (data.status === 200) {
          const resData = data.data;
          setUserList(resData.reverse());
        }
      } catch (error) {
        console.error("Failed to fetch vendors:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);
  // console.log("userList", userList);

  const showUserDetails = (row) => {
    setShowModal(true);
    setRowData(row);
  };

  const columns = [
    // {
    //   name: "ID",
    //   selector: (row, index) => row._id,
    //   sortable: true,
    // },
    {
      name: "User Name",
      selector: (row) => row.username,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Mobile Number",
      selector: (row) => row.mobilenumber,
      sortable: true,
    },
    {
      name: "Company Name",
      selector: (row) =>
        row.company_profile.length > 0
          ? row.company_profile[0]?.company_name
          : "-",
      sortable: true,
    },
    // {
    //   name: "Company Type",
    //   selector: (row) =>
    //     row.company_profile.length > 0
    //       ? row.company_profile[0]?.company_type
    //       : "-",
    //   sortable: true,
    // },
    // {
    //   name: "Designation",
    //   selector: (row) =>
    //     row.company_profile.length > 0
    //       ? row.company_profile[0]?.designation
    //       : "-",
    //   sortable: true,
    // },
    // {
    //   name: "GST",
    //   selector: (row) =>
    //     row.company_profile.length > 0
    //       ? row.company_profile[0]?.gst_number
    //       : "-",
    //   sortable: true,
    // },
    // {
    //   name: "PAN",
    //   selector: (row) =>
    //     row.company_profile.length > 0
    //       ? row.company_profile[0]?.pan_number
    //       : "-",
    //   sortable: true,
    // },
    {
      name: "Status",
      selector: (row) =>
        row.is_block ? (
          <Badge bg="warning">Unblock</Badge>
        ) : (
          <Badge bg="success">Block</Badge>
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
            }}
            title="View"
            onClick={() => showUserDetails(row)}
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
          <div
            style={{
              cursor: "pointer",
              backgroundColor: row.is_block ? "#ffa534" : "#35cd3a",
              padding: "7px 13px",
            }}
            title={row.is_block ? "User has been blocked" : "Block the user"}
          >
            {row.is_block ? (
              <CgUnblock size={16} color="white" />
            ) : (
              <MdBlock size={16} color="white" />
            )}
          </div>
        </div>
      ),
      // sortable: true,
    },
  ];
  console.log("userlist", userList);

  return (
    <div>
      <div className="headerTitle-0-1-70">User List({userList.length}) </div>
      {isLoading && <Loader />}
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
        data={userList}
        pagination
        //   defaultSortFieldId={1}
      />
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>User Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {rowData && (
            <div className="row">
              <div className="col-md-6">
                <div>
                  <b>{rowData.username || "N/A"}</b>
                </div>
                <div className="mt-2" style={{ fontSize: "13px" }}>
                  <span style={{ color: "black", fontWeight: "500" }}>
                    Email:{" "}
                  </span>
                  <span>{rowData.email || "N/A"}</span>
                </div>
                <div className="mt-2" style={{ fontSize: "13px" }}>
                  <span style={{ color: "black", fontWeight: "500" }}>
                    Mobile Number:{" "}
                  </span>
                  <span>{rowData.mobilenumber || "N/A"}</span>
                </div>
                <div className="mt-2" style={{ fontSize: "13px" }}>
                  <span style={{ color: "black", fontWeight: "500" }}>
                    Role:
                  </span>{" "}
                  <span>
                    {rowData.company_profile[0]?.designation || "N/A"}
                  </span>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mt-2" style={{ fontSize: "13px" }}>
                  <span style={{ color: "black", fontWeight: "500" }}>
                    Company Type:
                  </span>{" "}
                  <span>
                    {rowData.company_profile[0]?.company_type || "N/A"}
                  </span>
                </div>
                <div className="mt-2" style={{ fontSize: "13px" }}>
                  <span style={{ color: "black", fontWeight: "500" }}>
                    Company Name:
                  </span>{" "}
                  <span>
                    {rowData.company_profile[0]?.company_name || "N/A"}
                  </span>
                </div>
                <div className="mt-2" style={{ fontSize: "13px" }}>
                  <span style={{ color: "black", fontWeight: "500" }}>
                    GSTIN:
                  </span>{" "}
                  <span>{rowData.company_profile[0]?.gst_number || "NA"}</span>
                </div>
                <div className="mt-2" style={{ fontSize: "13px" }}>
                  <span style={{ color: "black", fontWeight: "500" }}>
                    PAN Number:
                  </span>{" "}
                  <span>{rowData.company_profile[0]?.pan_number || "NA"}</span>
                </div>
                <div className="mt-2" style={{ fontSize: "13px" }}>
                  <span style={{ color: "black", fontWeight: "500" }}>
                    CIN Number:
                  </span>{" "}
                  <span>{rowData.company_profile[0]?.cin_number || "NA"}</span>
                </div>
              </div>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          {rowData?.is_block ? (
            <Button variant="primary" onClick={() => setShowModal(false)}>
              <CgUnblock /> Unblock
            </Button>
          ) : (
            <Button variant="danger" onClick={() => setShowModal(false)}>
              <MdBlock /> Block User
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default UserList;
