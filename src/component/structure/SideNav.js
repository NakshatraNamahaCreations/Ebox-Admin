import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link, useLocation } from "react-router-dom";
// import { FaBarsStaggered, FaBookOpen } from "react-icons";
import { RiDashboardFill } from "react-icons/ri";
// import { FaUser } from "react-icons/fa";
import { LuBoxes } from "react-icons/lu";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { MdImage } from "react-icons/md";
import { MdMiscellaneousServices } from "react-icons/md";

function SideNav() {
  const location = useLocation();
  const { pathname } = location;
  const getColor = (path) => {
    return pathname === path ? "#90e447" : "";
  };
  const getBorderLeft = (path) => {
    return pathname === path ? "2px solid #90e447" : "";
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
                color: "black",
                textDecoration: "none",
                textShadow: "-1px 1px #ddd6cd",
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
              <LuBoxes
                size={25}
                color="#90e447"
                style={{ marginTop: "-7px" }}
              />{" "}
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
          <SubMenu
            className="sidebar-font-menu"
            label="Service Management"
            icon={<MdMiscellaneousServices className="sidebar-icons" />}
          >
            <MenuItem
              className="sidebar-font-submenu"
              component={<Link to="/service/addservice" />}
              style={{
                borderLeft: getBorderLeft("/service/addservice"),
                color: getColor("/service/addservice"),
              }}
            >
              Service
            </MenuItem>
            <MenuItem
              className="sidebar-font-submenu"
              component={<Link to="/service/subservice" />}
              style={{
                borderLeft: getBorderLeft("/service/subservice"),
                color: getColor("/service/subservice"),
              }}
            >
              Sub Services
            </MenuItem>
            <MenuItem
              className="sidebar-font-submenu"
              component={<Link to="/service/requirements" />}
              style={{
                borderLeft: getBorderLeft("/service/requirements"),
                color: getColor("/service/requirements"),
              }}
            >
              Requirements
            </MenuItem>
          </SubMenu>
          {/* Banner */}
          {/* <MenuItem
            className="sidebar-font-menu"
            component={<Link to="/spotlight-banner" />}
            icon={<MdImage className="sidebar-icons" />}
            style={{
              borderLeft: getBorderLeft("/spotlight-banner"),
              color: getColor("/spotlight-banner"),
            }}
          >
            Spotlight Banners
          </MenuItem> */}
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
          </SubMenu>
          {/* vendor -list*/}
          <SubMenu
            className="sidebar-font-menu"
            label="People"
            icon={<BsFillPeopleFill className="sidebar-icons" />}
          >
            <MenuItem
              className="sidebar-font-submenu"
              component={<Link to="/user-list" />}
              style={{
                borderLeft: getBorderLeft("/user-list"),
                color: getColor("/user-list"),
              }}
            >
              User
            </MenuItem>
            <MenuItem
              className="sidebar-font-submenu"
              component={<Link to="/vendor-list" />}
              style={{
                borderLeft: getBorderLeft("/vendor-list"),
                color: getColor("/vendor-list"),
              }}
            >
              Vendor
            </MenuItem>
            <MenuItem
              className="sidebar-font-submenu"
              component={<Link to="/team/team-list" />}
              style={{
                borderLeft: getBorderLeft("/team/team-list"),
                color: getColor("/team/team-list"),
              }}
            >
              Team
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
