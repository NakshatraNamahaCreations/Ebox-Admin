import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link, useLocation } from "react-router-dom";
// import { FaBarsStaggered, FaBookOpen } from "react-icons";
import { RiDashboardFill } from "react-icons/ri";
// import { FaUser } from "react-icons/fa";
import {
  FaUsers,
  FaGlobe,
  FaUserAlt,
  FaUserFriends,
  FaCalendar,
  FaServicestack,
} from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import {
  FaNoteSticky,
  FaMobileRetro,
  FaUniversalAccess,
  FaRegCalendarCheck,
} from "react-icons/fa6";
import { MdImage } from "react-icons/md";
import { SiGoogleanalytics } from "react-icons/si";
import { MdCampaign, MdOutlineElectricalServices } from "react-icons/md";
import { LiaServicestack } from "react-icons/lia";

function SideNav() {
  const location = useLocation();
  const { pathname } = location;
  const getColor = (path) => {
    return pathname === path ? "#ea5362" : "";
  };
  const getBorderLeft = (path) => {
    return pathname === path ? "2px solid #ea5362" : "";
  };

  return (
    <div>
      <Sidebar>
        <Menu>
          {/* 24px top */}
          <div style={{ padding: "14px 0px", textAlign: "center" }}>
            {/* <h3 style={{ color: "#00007c" }}>EVENT BOX</h3> */}
            <a
              href="/"
              style={{
                color: "#ea5362",
                textDecoration: "none",
                textShadow: "-2px 2px #ddd6cd",
                fontSize: "25px",
                fontWeight: "bold",
                letterSpacing: 1,
              }}
            >
              {/* <img
                src="../img/logo-color.png"
                alt="logo"
                style={{ width: "65%" }}
              /> */}
              EVENT BOX
            </a>
          </div>
          {/* Dashboard===================== */}
          <MenuItem
            className="sidebar-font-menu"
            component={<Link to="/" />}
            icon={<RiDashboardFill className="sidebar-icons" />}
            style={{
              borderLeft: getBorderLeft("/"),
              color: getColor("/"),
            }}
          >
            Dashboard
          </MenuItem>
          {/* Banner */}
          <MenuItem
            className="sidebar-font-menu"
            component={<Link to="/spotlight-banner" />}
            icon={<MdImage className="sidebar-icons" />}
            style={{
              borderLeft: getBorderLeft("/spotlight-banner"),
              color: getColor("/spotlight-banner"),
            }}
          >
            Spotlight Banners
          </MenuItem>
          {/* Booking */}
          <SubMenu
            className="sidebar-font-menu"
            label="Booking Management"
            icon={<FaRegCalendarCheck className="sidebar-icons" />}
          >
            <MenuItem
              className="sidebar-font-submenu"
              component={<Link to="/booking/booking-schedules" />}
              style={{
                borderLeft: getBorderLeft("/booking/booking-schedules"),
                color: getColor("/booking/booking-schedules"),
              }}
            >
              Booking Schedules
            </MenuItem>
            <MenuItem
              className="sidebar-font-submenu"
              component={<Link to="/user-list" />}
              style={{
                borderLeft: getBorderLeft("/user-list"),
                color: getColor("/user-list"),
              }}
            >
              User List
            </MenuItem>
          </SubMenu>
          {/* vendor -list*/}
          <SubMenu
            className="sidebar-font-menu"
            label="Service"
            icon={<FaServicestack className="sidebar-icons" />}
          >
            <MenuItem
              className="sidebar-font-menu"
              component={<Link to="/vendor-list" />}
              // icon={<FaUsers className="sidebar-icons" />}
              style={{
                borderLeft: getBorderLeft("/vendor-list"),
                color: getColor("/vendor-list"),
              }}
            >
              Vendor
            </MenuItem>
            <MenuItem
              className="sidebar-font-submenu"
              component={<Link to="#" />}
              style={{
                borderLeft: getBorderLeft("#"),
                color: getColor("#"),
              }}
            >
              People
            </MenuItem>
          </SubMenu>

          {/* <MenuItem
            className="sidebar-font-menu"
            component={<Link to="/schedule" />}
            icon={<SlCalender className="sidebar-icons" />}
            style={{
              borderLeft: getBorderLeft("/schedule"),
              color: getColor("/schedule"),
            }}
          >
            Booking History
          </MenuItem> */}
        </Menu>
      </Sidebar>
    </div>
  );
}

export default SideNav;
