import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import GlobalContext from "../../hooks/GlobalProvider";

function Header() {
  const { globalData } = useContext(GlobalContext);
  const location = useLocation();
  const { pathname } = location;

  switch (pathname) {
    case "/dashboard":
      return (
        <div>
          <div className="headerTitle-0-1-70">Hi, Admin</div>
          <div className="headerDesc-0-1-71">
            <div>Welcome Back!</div>
          </div>
        </div>
      );
    case "/service/addservice":
      return (
        <div>
          <div className="headerTitle-0-1-70">Services</div>
        </div>
      );
    case "/service/subservice":
      return (
        <div>
          <div className="headerTitle-0-1-70">Sub Service</div>
        </div>
      );
    case "/service/requirements":
      return (
        <div>
          <div className="headerTitle-0-1-70">Requirements</div>
        </div>
      );
    case "/booking/booking-history":
      return (
        <div>
          <div className="headerTitle-0-1-70">Booking History</div>
        </div>
      );
    case "/booking/booking-details":
      return (
        <div className="d-flex" style={{ justifyContent: "space-between" }}>
          <div className="headerTitle-0-1-70">Booking Details</div>
          <div className="headerDesc-0-1-71">
            <a
              href="/booking/booking-history"
              style={{
                color: "#444",
                textDecoration: "none",
                display: "inline-block",
                fontSize: "14px",
                cursor: "pointer",
              }}
            >
              <IoIosArrowBack /> Back
            </a>
          </div>
        </div>
      );

    case "/booking/invoice":
      return (
        <div className="d-flex" style={{ justifyContent: "space-between" }}>
          <div className="headerTitle-0-1-70">Invoice</div>
          {/* <div className="headerDesc-0-1-71">
            <div
              // href="/booking/booking-details"
              style={{
                color: "#444",
                textDecoration: "none",
                display: "inline-block",
                fontSize: "14px",
                cursor: "pointer",
              }}
              onClick={() => navigate(-1)}
            >
              <IoIosArrowBack />
              Back
            </div>
          </div> */}
        </div>
      );
    case "/vendor-list":
      return (
        <div>
          <div className="headerTitle-0-1-70">
            Vendor List{" "}
            {globalData?.vendorsLength === 0 ? null : (
              <>({globalData?.vendorsLength})</>
            )}
          </div>
        </div>
      );
    case "/spotlight-banner":
      return (
        <div>
          <div className="headerTitle-0-1-70">Banners</div>
          {/* <div className="headerDesc-0-1-71">
              <div>Add / view content of your course</div>
            </div> */}
        </div>
      );
    case "/vendor/vendor-products":
      return (
        <div className="d-flex" style={{ justifyContent: "space-between" }}>
          <div className="headerTitle-0-1-70">Products</div>
          <div className="headerDesc-0-1-71">
            <a
              href="/vendor-list"
              style={{
                color: "#444",
                textDecoration: "none",
                display: "inline-block",
                fontSize: "14px",
                cursor: "pointer",
              }}
            >
              <IoIosArrowBack /> Back
            </a>
          </div>
        </div>
      );
    case "/booking/booking-schedules":
      return (
        <div>
          <div className="headerTitle-0-1-70">Booking Schedules </div>
        </div>
      );
    case "/team/team-list":
      return (
        <div>
          <div className="headerTitle-0-1-70">Manage Teams </div>
          <div className="headerDesc-0-1-71">
            <div className="mt-2">
              <button
                style={{
                  backgroundColor: "#90e447",
                  border: "#7ac536",
                  color: "white",
                  borderRadius: "3px",
                  fontSize: "15px",
                  padding: "5px 10px",
                }}
                onClick={() => window.location.assign("/team/create-team")}
              >
                Add Team Member
              </button>
            </div>
          </div>
        </div>
      );
    case "/team/create-team":
      return (
        <div>
          <div className="headerTitle-0-1-70">Create Teams</div>
        </div>
      );
    case "/campaigns/list":
      return (
        <div>
          <div className="headerTitle-0-1-70">Campaigns</div>
          <div className="headerDesc-0-1-71">
            <div>Create & manage campaigns</div>
          </div>
        </div>
      );
    case "/campaigns/create":
      return (
        <div>
          <div className="headerTitle-0-1-70">
            Create Your Marketing Campaign
          </div>
          <div className="headerDesc-0-1-71">
            <div>You can create Marketing Campaign for different usecases</div>
          </div>
        </div>
      );
    case "/campaigns/create/useractioncampaign/channel":
      return (
        <div>
          <div className="headerTitle-0-1-70">
            Create User Action Based Campaign
          </div>
          <div className="headerDesc-0-1-71">
            <div>
              Set campaign details, choose target audience and edit content
              before publishing campaign
            </div>
          </div>
        </div>
      );
    case "/people/users":
      return (
        <div>
          <div className="headerTitle-0-1-70">Users</div>
          <div className="headerDesc-0-1-71">
            <div>View, Filter & Manage all your users on site/app</div>
          </div>
        </div>
      );
    case "/people/team-members":
      return (
        <div>
          <div className="headerTitle-0-1-70">Team Members</div>
        </div>
      );
    case "/people/team-members/create":
      return (
        <div>
          <div className="headerTitle-0-1-70">Add Team Members</div>
        </div>
      );
    case "/chat":
      return (
        <div>
          <div className="headerTitle-0-1-70">Chat</div>
          <div className="headerDesc-0-1-71">
            <div>Send messages to your students on a daily basis</div>
          </div>
        </div>
      );
    default:
      return "";
  }
}

export default Header;
