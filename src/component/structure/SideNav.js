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
import { RiSecurePaymentLine, RiSecurePaymentFill } from "react-icons/ri";
import { MdOutlineQuestionMark } from "react-icons/md";
import { FaCreditCard } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaCity } from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa";
import { TbFlagCancel } from "react-icons/tb";
import { FaRegCalendarCheck } from "react-icons/fa";
import { FaCalculator } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { SiAudiotechnica } from "react-icons/si";

function SideNav() {
  const location = useLocation();
  const { pathname } = location;
  const getColor = (path) => {
    return pathname === path ? "#609ecc" : "";
  };
  const getBorderLeft = (path) => {
    return pathname === path ? "2px solid #609ecc" : "";
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
              // style={{
              //   color: "black",
              //   textDecoration: "none",
              //   textShadow: "-1px 1px #ddd6cd",
              //   fontSize: "20px",
              //   fontWeight: "bold",
              // }}
            >
              <img
                src="../../../../logo.png"
                // src="../img/logo-color.png"
                alt="logo"
                style={{ width: "65%" }}
              />
              {/* <LuBoxes
                size={25}
                color="#609ecc"
                style={{ marginTop: "-7px" }}
              />{" "} */}
              {/* NITHYA EVENT */}
            </a>
          </div>
          {/* Dashboard===================== */}
          <MenuItem className="ms-3" style={{ fontSize: "12px" }}>
            <b>ADMIN</b>
          </MenuItem>
          {/* <MenuItem
            className="sidebar-font-menu"
            component={<Link to="/" />}
            icon={<FaChartPie size={15} className="sidebar-icons" />}
            style={{
              borderLeft: getBorderLeft("/"),
              color: getColor("/"),
              fontSize: "15px",
            }}
          >
            Dashboard
          </MenuItem> */}
          <MenuItem
            className="sidebar-font-menu"
            component={<Link to="/" />}
            icon={<FaChartPie size={15} className="sidebar-icons" />}
            style={{
              borderLeft: getBorderLeft("/"),
              color: getColor("/"),
              fontSize: "15px",
            }}
          >
            Profile
          </MenuItem>
          <MenuItem
            className="sidebar-font-menu"
            component={<Link to="/team/team-list" />}
            style={{
              borderLeft: getBorderLeft("/team/team-list"),
              color: getColor("/team/team-list"),
              fontSize: "15px",
            }}
            icon={<FaUsersCog size={15} className="sidebar-icons" />}
          >
            Team
          </MenuItem>
          {/* <MenuItem
            className="sidebar-font-menu"
            component={<Link to="/technicians/technicians-list" />}
            style={{
              borderLeft: getBorderLeft("/technicians/technicians-list"),
              color: getColor("/technicians/technicians-list"),
              fontSize: "15px",
            }}
            icon={<SiAudiotechnica size={15} className="sidebar-icons" />}
          >
            Technicians
          </MenuItem> */}
          <MenuItem className="ms-3" style={{ fontSize: "12px" }}>
            <b>MASTERS</b>
          </MenuItem>
          <MenuItem
            className="sidebar-font-menu"
            component={<Link to="/spotlight-banner" />}
            icon={<FaImage size={15} className="sidebar-icons" />}
            style={{
              borderLeft: getBorderLeft("/spotlight-banner"),
              color: getColor("/spotlight-banner"),
              fontSize: "15px",
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
              fontSize: "15px",
            }}
            icon={
              <MdMiscellaneousServices size={15} className="sidebar-icons" />
            }
          >
            Service
          </MenuItem>
          <MenuItem
            className="sidebar-font-menu"
            component={<Link to="/service/subservice" />}
            style={{
              borderLeft: getBorderLeft("/service/subservice"),
              color: getColor("/service/subservice"),
              fontSize: "15px",
            }}
            icon={<GrServices size={15} className="sidebar-icons" />}
          >
            Sub Services
          </MenuItem>
          <MenuItem
            className="sidebar-font-menu"
            component={<Link to="/service/requirements" />}
            style={{
              borderLeft: getBorderLeft("/service/requirements"),
              color: getColor("/service/requirements"),
              fontSize: "15px",
            }}
            icon={<DiRequirejs size={15} className="sidebar-icons" />}
          >
            Requirements
          </MenuItem>
          <MenuItem
            className="sidebar-font-menu"
            component={<Link to="/state" />}
            style={{
              borderLeft: getBorderLeft("/state"),
              color: getColor("/state"),
              fontSize: "15px",
            }}
            icon={<FaMapLocationDot size={15} className="sidebar-icons" />}
          >
            States
          </MenuItem>
          <MenuItem
            className="sidebar-font-menu"
            component={<Link to="/city" />}
            style={{
              borderLeft: getBorderLeft("/city"),
              color: getColor("/city"),
              fontSize: "15px",
            }}
            icon={<FaCity size={15} className="sidebar-icons" />}
          >
            Cities
          </MenuItem>
          <MenuItem
            className="sidebar-font-menu"
            component={<Link to="/address" />}
            style={{
              borderLeft: getBorderLeft("/address"),
              color: getColor("/address"),
              fontSize: "15px",
            }}
            icon={<FaAddressBook size={15} className="sidebar-icons" />}
          >
            Billing Address
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
            component={<Link to="/user-list" />}
            style={{
              borderLeft: getBorderLeft("/user-list"),
              color: getColor("/user-list"),
              fontSize: "15px",
            }}
            icon={<BsFillPeopleFill size={15} className="sidebar-icons" />}
          >
            User
          </MenuItem>
          <MenuItem
            className="sidebar-font-menu"
            component={<Link to="/vendor-list" />}
            style={{
              borderLeft: getBorderLeft("/vendor-list"),
              color: getColor("/vendor-list"),
              fontSize: "15px",
            }}
            icon={<FaStore size={15} className="sidebar-icons" />}
          >
            Vendor
          </MenuItem>

          {/* </SubMenu> */}

          {/* <SubMenu
            className="sidebar-font-menu"
            label="Product Listings"
            icon={<AiFillProduct className="sidebar-icons" />}
          > */}
          <MenuItem className="ms-3" style={{ fontSize: "12px" }}>
            <b>PRODUCT LISTINGS</b>
          </MenuItem>
          <MenuItem
            className="sidebar-font-menu"
            component={<Link to="/product/rentals" />}
            style={{
              borderLeft: getBorderLeft("/product/rentals"),
              color: getColor("/product/rentals"),
              fontSize: "15px",
            }}
            icon={<AiFillProduct size={15} className="sidebar-icons" />}
          >
            Rental
          </MenuItem>
          {/* <MenuItem
            className="sidebar-font-menu"
            component={<Link to="/product/selling" />}
            style={{
              borderLeft: getBorderLeft("/product/selling"),
              color: getColor("/product/selling"),
              fontSize: "15px",
            }}
            icon={<MdSell size={15} className="sidebar-icons" />}
          >
            Sell Products
          </MenuItem> */}
          {/* </SubMenu> */}
          <MenuItem className="ms-3" style={{ fontSize: "12px" }}>
            <b>ACCOUNTS</b>
          </MenuItem>
          <MenuItem
            className="sidebar-font-menu"
            component={<Link to="/booking/user-bookings" />}
            style={{
              borderLeft: getBorderLeft("/booking/user-bookings"),
              color: getColor("/booking/user-bookings"),
              fontSize: "15px",
            }}
            icon={<FaCreditCard size={15} className="sidebar-icons" />}
          >
            Events Report
          </MenuItem>
          <MenuItem
            className="sidebar-font-menu"
            component={<Link to="/calculator" />}
            style={{
              borderLeft: getBorderLeft("/calculator"),
              color: getColor("/calculator"),
              fontSize: "15px",
            }}
            icon={<FaCalculator size={15} className="sidebar-icons" />}
          >
            Calculator
          </MenuItem>
          <MenuItem
            className="sidebar-font-menu"
            component={<Link to="/booking/user-cancel-events" />}
            icon={<TbFlagCancel size={15} className="sidebar-icons" />}
            style={{
              borderLeft: getBorderLeft("/booking/user-cancel-events"),
              color: getColor("/booking/user-cancel-events"),
              fontSize: "15px",
            }}
          >
            Cancel Events
          </MenuItem>
          <MenuItem
            className="sidebar-font-menu"
            component={<Link to="/booking/user-rescheduled-events" />}
            icon={<FaRegCalendarCheck size={15} className="sidebar-icons" />}
            style={{
              borderLeft: getBorderLeft("/booking/user-rescheduled-events"),
              color: getColor("/booking/user-rescheduled-events"),
              fontSize: "15px",
            }}
          >
            Rescheduled Events
          </MenuItem>
          <MenuItem
            className="sidebar-font-menu"
            component={<Link to="/ticketing-system" />}
            icon={<FaTicketAlt size={15} className="sidebar-icons" />}
            style={{
              borderLeft: getBorderLeft("/ticketing-system"),
              color: getColor("/ticketing-system"),
              fontSize: "15px",
            }}
          >
            Tickets Raised
          </MenuItem>
          <MenuItem className="ms-3" style={{ fontSize: "12px" }}>
            <b>PAYOUT'S</b>
          </MenuItem>
          <MenuItem
            className="sidebar-font-menu"
            component={<Link to="/payout-config" />}
            style={{
              borderLeft: getBorderLeft("/payout-config"),
              color: getColor("/payout-config"),
              fontSize: "15px",
            }}
            icon={<IoIosSettings size={15} className="sidebar-icons" />}
          >
            Payout Config
          </MenuItem>
          <MenuItem
            className="sidebar-font-menu"
            component={<Link to="/products-payouts" />}
            style={{
              borderLeft: getBorderLeft("/products-payouts"),
              color: getColor("/products-payouts"),
              fontSize: "15px",
            }}
            icon={<RiSecurePaymentLine size={15} className="sidebar-icons" />}
          >
            Product Payout's
          </MenuItem>
          <MenuItem
            className="sidebar-font-menu"
            component={<Link to="/service-payouts" />}
            style={{
              borderLeft: getBorderLeft("/service-payouts"),
              color: getColor("/service-payouts"),
              fontSize: "15px",
            }}
            icon={<RiSecurePaymentFill size={15} className="sidebar-icons" />}
          >
            Service Payout's
          </MenuItem>
          <MenuItem
            className="sidebar-font-menu"
            component={<Link to="/technician-payouts" />}
            style={{
              borderLeft: getBorderLeft("/technician-payouts"),
              color: getColor("/technician-payouts"),
              fontSize: "15px",
            }}
            icon={<RiSecurePaymentFill size={15} className="sidebar-icons" />}
          >
            Technician Payout's
          </MenuItem>
          <MenuItem className="ms-3" style={{ fontSize: "12px" }}>
            <b>PAGES</b>
          </MenuItem>
          <MenuItem
            className="sidebar-font-menu"
            component={<Link to="/faq-list" />}
            icon={<MdOutlineQuestionMark size={15} className="sidebar-icons" />}
            style={{
              borderLeft: getBorderLeft("/faq-list"),
              color: getColor("/faq-list"),
              fontSize: "15px",
            }}
          >
            FAQ
          </MenuItem>
          <MenuItem
            className="sidebar-font-menu"
            component={<Link to="/terms-and-condition-list" />}
            icon={<IoDocumentTextOutline size={15} className="sidebar-icons" />}
            style={{
              borderLeft: getBorderLeft("/terms-and-condition-list"),
              color: getColor("/terms-and-condition-list"),
              fontSize: "15px",
            }}
          >
            T&C{/* Terms & Condition */}
          </MenuItem>
          <MenuItem
            className="sidebar-font-menu"
            component={<Link to="/youtube-video" />}
            icon={<FaYoutube size={15} className="sidebar-icons" />}
            style={{
              borderLeft: getBorderLeft("/youtube-video"),
              color: getColor("/youtube-video"),
              fontSize: "15px",
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
