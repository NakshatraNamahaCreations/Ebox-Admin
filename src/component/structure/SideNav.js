import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link, useLocation } from "react-router-dom";
// import { FaBarsStaggered, FaBookOpen } from "react-icons";
import { FaChartPie } from "react-icons/fa";
// import { FaUser } from "react-icons/fa";
import { LuBoxes } from "react-icons/lu";
import { BsFillPeopleFill } from "react-icons/bs";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaImage } from "react-icons/fa";
import { MdMiscellaneousServices } from "react-icons/md";
import { AiFillProduct } from "react-icons/ai";
import { FaTicketAlt } from "react-icons/fa";
import { GrServices } from "react-icons/gr";
import { DiRequirejs } from "react-icons/di";
// import { MdOutlinePayment } from "react-icons/md";
import { FaUsersCog } from "react-icons/fa";
import { FaStore } from "react-icons/fa";
import { MdSell } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";
import { MdOutlineQuestionMark } from "react-icons/md";
import { FaCreditCard } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaCity } from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa";

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
                fontSize: "20px",
                fontWeight: "bold",
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
              NITHYA EVENT
            </a>
          </div>
          {/* Dashboard===================== */}
          <MenuItem
            className="sidebar-font-menu"
            component={<Link to="/" />}
            icon={<FaChartPie className="sidebar-icons" />}
            style={{
              borderLeft: getBorderLeft("/"),
              color: getColor("/"),
            }}
          >
            Dashboard
          </MenuItem>
          <MenuItem
            className="sidebar-font-menu"
            component={<Link to="/spotlight-banner" />}
            icon={<FaImage className="sidebar-icons" />}
            style={{
              borderLeft: getBorderLeft("/spotlight-banner"),
              color: getColor("/spotlight-banner"),
            }}
          >
            Banners
          </MenuItem>
          {/* <SubMenu
            className="sidebar-font-menu"
            label="Service Management"
            icon={<MdMiscellaneousServices className="sidebar-icons" />}
          > */}
          <MenuItem
            className="sidebar-font-menu"
            component={<Link to="/service/addservice" />}
            style={{
              borderLeft: getBorderLeft("/service/addservice"),
              color: getColor("/service/addservice"),
            }}
            icon={<MdMiscellaneousServices className="sidebar-icons" />}
          >
            Service
          </MenuItem>
          <MenuItem
            className="sidebar-font-menu"
            component={<Link to="/service/subservice" />}
            style={{
              borderLeft: getBorderLeft("/service/subservice"),
              color: getColor("/service/subservice"),
            }}
            icon={<GrServices className="sidebar-icons" />}
          >
            Sub Services
          </MenuItem>
          <MenuItem
            className="sidebar-font-menu"
            component={<Link to="/service/requirements" />}
            style={{
              borderLeft: getBorderLeft("/service/requirements"),
              color: getColor("/service/requirements"),
            }}
            icon={<DiRequirejs className="sidebar-icons" />}
          >
            Requirements
          </MenuItem>
          <MenuItem
            className="sidebar-font-menu"
            component={<Link to="/state" />}
            style={{
              borderLeft: getBorderLeft("/state"),
              color: getColor("/state"),
            }}
            icon={<FaMapLocationDot className="sidebar-icons" />}
          >
            States
          </MenuItem>
          <MenuItem
            className="sidebar-font-menu"
            component={<Link to="/city" />}
            style={{
              borderLeft: getBorderLeft("/city"),
              color: getColor("/city"),
            }}
            icon={<FaCity className="sidebar-icons" />}
          >
            Cities
          </MenuItem>
          <MenuItem
            className="sidebar-font-menu"
            component={<Link to="/address" />}
            style={{
              borderLeft: getBorderLeft("/address"),
              color: getColor("/address"),
            }}
            icon={<FaAddressBook className="sidebar-icons" />}
          >
            Address
          </MenuItem>
          {/* </SubMenu> */}
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
          {/* <SubMenu
            className="sidebar-font-menu"
            label="Report"
            icon={<IoDocumentTextOutline className="sidebar-icons" />}
          > */}
          <MenuItem
            className="sidebar-font-menu"
            component={<Link to="/booking/user-bookings" />}
            style={{
              borderLeft: getBorderLeft("/booking/user-bookings"),
              color: getColor("/booking/user-bookings"),
            }}
            icon={<FaCreditCard className="sidebar-icons" />}
          >
            Payment Report's
          </MenuItem>
          <MenuItem
            className="sidebar-font-menu"
            component={<Link to="/payouts" />}
            style={{
              borderLeft: getBorderLeft("/payouts"),
              color: getColor("/payouts"),
            }}
            icon={<RiSecurePaymentLine className="sidebar-icons" />}
          >
            Payout's
          </MenuItem>
          <MenuItem
            className="sidebar-font-menu"
            component={<Link to="/calculator" />}
            style={{
              borderLeft: getBorderLeft("/calculator"),
              color: getColor("/calculator"),
            }}
            icon={<RiSecurePaymentLine className="sidebar-icons" />}
          >
            Calculator
          </MenuItem>
          <MenuItem
            className="sidebar-font-menu"
            component={<Link to="/user-list" />}
            style={{
              borderLeft: getBorderLeft("/user-list"),
              color: getColor("/user-list"),
            }}
            icon={<BsFillPeopleFill className="sidebar-icons" />}
          >
            User
          </MenuItem>
          <MenuItem
            className="sidebar-font-menu"
            component={<Link to="/vendor-list" />}
            style={{
              borderLeft: getBorderLeft("/vendor-list"),
              color: getColor("/vendor-list"),
            }}
            icon={<FaStore className="sidebar-icons" />}
          >
            Vendor
          </MenuItem>
          <MenuItem
            className="sidebar-font-menu"
            component={<Link to="/team/team-list" />}
            style={{
              borderLeft: getBorderLeft("/team/team-list"),
              color: getColor("/team/team-list"),
            }}
            icon={<FaUsersCog className="sidebar-icons" />}
          >
            Team
          </MenuItem>
          {/* </SubMenu> */}

          {/* <SubMenu
            className="sidebar-font-menu"
            label="Product Listings"
            icon={<AiFillProduct className="sidebar-icons" />}
          > */}
          <MenuItem
            className="sidebar-font-menu"
            component={<Link to="/product/rentals" />}
            style={{
              borderLeft: getBorderLeft("/product/rentals"),
              color: getColor("/product/rentals"),
            }}
            icon={<AiFillProduct className="sidebar-icons" />}
          >
            Rental Products
          </MenuItem>
          <MenuItem
            className="sidebar-font-menu"
            component={<Link to="/product/selling" />}
            style={{
              borderLeft: getBorderLeft("/product/selling"),
              color: getColor("/product/selling"),
            }}
            icon={<MdSell className="sidebar-icons" />}
          >
            Sell Products
          </MenuItem>
          {/* </SubMenu> */}
          <MenuItem
            className="sidebar-font-menu"
            component={<Link to="/ticketing-system" />}
            icon={<FaTicketAlt className="sidebar-icons" />}
            style={{
              borderLeft: getBorderLeft("/ticketing-system"),
              color: getColor("/ticketing-system"),
            }}
          >
            Tickets Raised
          </MenuItem>
          <MenuItem
            className="sidebar-font-menu"
            component={<Link to="/ticketing-system" />}
            icon={<FaTicketAlt className="sidebar-icons" />}
            style={{
              borderLeft: getBorderLeft("/ticketing-system"),
              color: getColor("/ticketing-system"),
            }}
          >
            Cancel Order
          </MenuItem>
          <MenuItem
            className="sidebar-font-menu"
            component={<Link to="/ticketing-system" />}
            icon={<FaTicketAlt className="sidebar-icons" />}
            style={{
              borderLeft: getBorderLeft("/ticketing-system"),
              color: getColor("/ticketing-system"),
            }}
          >
            Rescheduled Order
          </MenuItem>
          <MenuItem
            className="sidebar-font-menu"
            component={<Link to="/faq-list" />}
            icon={<MdOutlineQuestionMark className="sidebar-icons" />}
            style={{
              borderLeft: getBorderLeft("/faq-list"),
              color: getColor("/faq-list"),
            }}
          >
            FAQ
          </MenuItem>
          <MenuItem
            className="sidebar-font-menu"
            component={<Link to="/terms-and-condition-list" />}
            icon={<IoDocumentTextOutline className="sidebar-icons" />}
            style={{
              borderLeft: getBorderLeft("/terms-and-condition-list"),
              color: getColor("/terms-and-condition-list"),
            }}
          >
            Terms & Condition
          </MenuItem>
          <MenuItem
            className="sidebar-font-menu"
            component={<Link to="/youtube-video" />}
            icon={<IoDocumentTextOutline className="sidebar-icons" />}
            style={{
              borderLeft: getBorderLeft("/youtube-video"),
              color: getColor("/youtube-video"),
            }}
          >
            Youtube Videos
          </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
}

export default SideNav;
