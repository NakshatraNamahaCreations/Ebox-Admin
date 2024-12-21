import React, { useContext, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { MdDelete, MdBlock } from "react-icons/md";
import { bannerData } from "../../../../global-data/booking";
import { apiUrl } from "../../../../api-services/apiContents";
import GlobalContext from "../../../../hooks/GlobalProvider";
import { get } from "../../../../api-services/apiHelper";
import Loader from "../../../loader/Loader";
import axios from "axios";
import { RiDashboardFill } from "react-icons/ri";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaRegCalendarCheck, FaUser } from "react-icons/fa6";
import { MdImage } from "react-icons/md";
import { FaUserTie } from "react-icons/fa";
import { CgUnblock } from "react-icons/cg";
import { MdEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function TeamList() {
  const Navigate = useNavigate();
  const [teamMembers, setTeamMembers] = useState([]);
  // const [vendorsLength, setVendorsLength] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const { setGlobalData } = useContext(GlobalContext);

  const fetchTeams = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(`${apiUrl.BASEURL}${apiUrl.GET_ALL_TEAM}`);
      if (res.status === 200) {
        // console.log("res", res);

        setTeamMembers(res.data.team.reverse());
        setGlobalData((prevData) => ({
          ...prevData,
          teamsLength: res.length,
        }));
      }
    } catch (error) {
      console.error("Failed to fetch teams:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTeams();
  }, [setGlobalData]);

  console.log("teamMembers", teamMembers);

  const blockUser = async (id) => {
    try {
      const res = await axios.put(
        `${apiUrl.BASEURL}${apiUrl.BLOCK_USER}/${id}`
      );
      if (res.status === 200) {
        console.log("user blocked");
        alert("User blocked");
        fetchTeams();
      } else {
        console.log(`Failed to block user: ${res.statusText}`);
      }
    } catch (error) {
      if (error.response) {
        console.error("Error blocking user:", error.response.data.message);
      } else {
        console.error("Network error:", error.message);
      }
    }
  };
  const unblockUser = async (id) => {
    try {
      const res = await axios.put(
        `${apiUrl.BASEURL}${apiUrl.UNBLOCK_USER}/${id}`
      );
      if (res.status === 200) {
        console.log("user unblocked");
        alert("User unblocked");
        fetchTeams();
      } else {
        console.log(`Failed to unblock user: ${res.statusText}`);
      }
    } catch (error) {
      if (error.response) {
        console.error("Error unblocking user:", error.response.data.message);
      } else {
        console.error("Network error:", error.message);
      }
    }
  };
  const editTeam = (row) => {
    Navigate("/team/edit-user", {
      state: {
        userId: row,
      },
    });
  };

  const deleteBanners = async (ele) => {
    try {
      const res = await axios.delete(
        `${apiUrl.BASEURL}${apiUrl.DELETE_TEAM_USER}${ele._id}`
      );
      if (res.status === 200) {
        console.log("deletevres", res);

        alert(res.data.success || "User Deleted");
        window.location.reload();
      }
    } catch (error) {
      console.error("Error:", error);
      alert(Error, "Something went wrong! Try again");
    }
  };

  const columns = [
    {
      name: "Name",
      selector: (row) => row.member_name,
      sortable: true,
    },
    {
      name: "Mobile Number",
      selector: (row) => `+91-${row.mobile_number}`,
      sortable: true,
    },
    {
      name: "Password",
      selector: (row) => row.password,
      sortable: true,
    },
    {
      name: "Permissions",
      selector: (row) => (
        // <div style={styles.root01698}>
        //   <div style={styles.iconCont0199}>
        //     <RiDashboardFill
        //       size={20}
        //       color={row.dashboard ? "#34a32d" : "#E0E0E0"}
        //       title="Dashboard"
        //     />
        //   </div>
        //   <div style={styles.iconCont0199}>
        //     <MdImage
        //       size={20}
        //       color={row.banner ? "#34a32d" : "#E0E0E0"}
        //       title="Banner"
        //     />
        //   </div>
        //   <div style={styles.iconCont0199}>
        //     <FaRegCalendarCheck
        //       size={17}
        //       color={row.booking_management ? "#34a32d" : "#E0E0E0"}
        //       title="Bookings"
        //     />
        //   </div>

        //   <div style={styles.iconCont0199}>
        //     <FaUser
        //       size={17}
        //       color={row.user_management ? "#34a32d" : "#E0E0E0"}
        //       title="User"
        //     />
        //   </div>
        //   <div style={styles.iconCont0199}>
        //     <FaUserTie
        //       size={17}
        //       color={row.vendor_management ? "#34a32d" : "#E0E0E0"}
        //       title="Vendor Management"
        //     />
        //   </div>
        //   <div style={styles.iconCont0199}>
        //     <BsFillPeopleFill
        //       size={20}
        //       color={row.team_management ? "#34a32d" : "#E0E0E0"}
        //       title="Team Management"
        //     />
        //   </div>
        //   {/* <div style={styles.iconCont0199}>
        //     <PiPathDuotone
        //       size={20}
        //       color={row.selfService ? "#34a32d" : "#E0E0E0"}
        //       title="Self Service"
        //     />
        //   </div> */}
        // </div>
        <div>
          <div
            style={{ color: row.dashboard_management ? "black" : "#E0E0E0" }}
          >
            Dashboard
          </div>
          <div style={{ color: row.banner_management ? "black" : "#E0E0E0" }}>
            Banner
          </div>
          <div style={{ color: row.service_management ? "black" : "#E0E0E0" }}>
            Service
          </div>
          <div
            style={{ color: row.subservice_management ? "black" : "#E0E0E0" }}
          >
            Sub Service
          </div>
          <div
            style={{
              color: row.requirement_management ? "black" : "#E0E0E0",
            }}
          >
            Requirements
          </div>
          <div
            style={{
              color: row.userbooking_management ? "black" : "#E0E0E0",
            }}
          >
            User Bookings
          </div>
          <div
            style={{
              color: row.vendororder_management ? "black" : "#E0E0E0",
            }}
          >
            Vendor Orders
          </div>
          <div style={{ color: row.manage_user ? "black" : "#E0E0E0" }}>
            User's
          </div>
          <div style={{ color: row.manage_vendor ? "black" : "#E0E0E0" }}>
            Vendor's
          </div>
          <div style={{ color: row.manage_teammemebrs ? "black" : "#E0E0E0" }}>
            Team's
          </div>
          <div
            style={{ color: row.manage_rentalproducts ? "black" : "#E0E0E0" }}
          >
            Rental
          </div>
          <div style={{ color: row.manage_sellproducts ? "black" : "#E0E0E0" }}>
            Sell
          </div>
        </div>
      ),
      sortable: true,
    },
    {
      name: "Action",
      selector: (row) => (
        <>
          <div style={{ display: "flex" }}>
            <div
              style={{
                backgroundColor: "#ffa534",
                padding: "7px 13px",
                cursor: "pointer",
              }}
              onClick={() => editTeam(row._id)}
              title="Edit"
            >
              <MdEdit size={16} color="white" />
            </div>
            {row.isBlocked === true ? (
              <div
                style={{
                  backgroundColor: "#35cd3a",
                  padding: "7px 13px",
                  cursor: "pointer",
                }}
                title="Unblock"
                onClick={() => unblockUser(row._id)}
              >
                <CgUnblock size={16} color="white" />
              </div>
            ) : (
              <div
                title="Block"
                style={{
                  backgroundColor: "#2f4e9e",
                  padding: "7px 13px",
                  cursor: "pointer",
                }}
                onClick={() => blockUser(row._id)}
              >
                <MdBlock size={16} color="white" />
              </div>
            )}
            <div
              style={{
                backgroundColor: "#E91E63",
                padding: "7px 13px",
                cursor: "pointer",
              }}
              onClick={() => deleteBanners(row)}
              title="Delete"
            >
              <MdDelete size={16} color="white" />
            </div>
          </div>
          {/* <div
            style={{
              display: "flex",
            }}
          >
            <div
              style={{
                cursor: "pointer",
                backgroundColor: "#e91e63",
                padding: "7px 13px",
              }}
              onClick={() => unblockUser(row._id)}
            >
              {row.isBlocked === true ? (
                <>
                  <CgUnblock title="Unblock" size={16} color="#E91E63" />
                </>
              ) : (
                <div
                  style={{
                    cursor: "pointer",
                    backgroundColor: "#e91e63",
                    padding: "7px 13px",
                  }}
                >
                  <MdBlock
                    title="Block"
                    size={16}
                    color="#E91E63"
                    onClick={() => blockUser(row._id)}
                  />
                </div>
              )}{" "}
            </div>
            <MdDelete
              title="Delete"
              size={16}
              color="#E91E63"
              onClick={() => deleteBanners(row)}
            />{" "}
            |{" "}
              <MdEdit
                title="Edit"
                size={16}
                color="#E91E63"
                onClick={() => editTeam(row._id)}
              />{" "}
          </div> */}
        </>
      ),
      // sortable: true,
    },
  ];

  return (
    <div>
      {isLoading && <Loader />}
      {!isLoading && (
        <>
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
          <DataTable columns={columns} data={teamMembers} pagination />
        </>
      )}
    </div>
  );
}

const styles = {
  inputStyle: {
    width: "20em",
    border: "1px solid rgb(216, 224, 240)",
    borderRadius: "16px",
    fontSize: "16px",
    backgroundColor: "white",
    outline: "none",
    backgroundPosition: "10px 10px",
    backgroundRepeat: "no-repeat",
    padding: "12px 18px 11px 44px",
    lineHeight: "24px",
    // boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
  },
  createCourseBtn: {
    padding: "12px 20px",
    borderRadius: "16px",
    fontWeight: "600",
    fontSize: "18px",
    lineHeight: "24px",
    cursor: "pointer",
    border: "none",
    // width: "135px",
    color: "00007c",
    backgroundColor: "#9797ff61",
  },
  root01698: {
    // width: "256px",
    margin: "auto",
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr",
    //  "1fr  / repeat(4, minmax(0, 10fr)) ",
    gap: "10px",
    // gridTemplateColumns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  },
  iconCont0199: {
    // width: "32px",
    cursor: "pointer",
    // height: "32px",
    // display: "flex",
    alignItems: "center",
    // borderRadius: "20px",
    justifyContent: "center",
  },
};

export default TeamList;
