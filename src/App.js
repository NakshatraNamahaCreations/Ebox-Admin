import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./component/pages/Dashboard";
import Layout from "./component/structure/Layout";
import UserList from "./component/pages/UserList";
import Header from "./component/structure/Header";
import BookingHistory from "./component/pages/BookingHistory";
import BookingDetails from "./component/pages/BookingDetails";
import Invoice from "./component/pages/Invoice";
import VendorList from "./component/pages/vendor/VendorList";
import SpotlightBanner from "./component/pages/SpotlightBanner";
import VendorProductList from "./component/pages/vendor/VendorProductList";
import Schedules from "./component/pages/Schedules";
import Cart from "./stateManagement/Cart";
import Add_Product from "./component/Add_Product";
import Login from "./component/pages/controls/Login";
import VendorDetails from "./component/pages/vendor/VendorDetails";

// https://github.com/NakshatraNamahaCreations/eventboxadmin.git

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout
              children={
                <>
                  <Header />
                  <Dashboard />
                </>
              }
            />
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/spotlight-banner"
          element={
            <Layout
              children={
                <>
                  <Header />
                  <SpotlightBanner />
                </>
              }
            />
          }
        />
        <Route
          path="/booking/booking-history/:date"
          element={
            <Layout
              children={
                <>
                  <Header />
                  <BookingHistory />
                </>
              }
            />
          }
        />
        <Route
          path="/booking/booking-details"
          element={
            <Layout
              children={
                <>
                  <Header />
                  <BookingDetails />
                </>
              }
            />
          }
        />
        <Route
          path="/booking/invoice"
          element={
            <Layout
              children={
                <>
                  <Header />
                  <Invoice />
                </>
              }
            />
          }
        />
        <Route
          path="/user-list"
          element={
            <Layout
              children={
                <>
                  <Header />
                  <UserList />
                </>
              }
            />
          }
        />
        <Route
          path="/vendor-list"
          element={
            <Layout
              children={
                <>
                  <Header />
                  <VendorList />
                </>
              }
            />
          }
        />
        <Route
          path="/vendor/vendor-profile"
          element={
            <Layout
              children={
                <>
                  <Header />
                  <VendorDetails />
                </>
              }
            />
          }
        />
        <Route
          path="/vendor/vendor-products"
          element={
            <Layout
              children={
                <>
                  <Header />
                  <VendorProductList />
                </>
              }
            />
          }
        />
        <Route
          path="/booking/booking-schedules"
          element={
            <Layout
              children={
                <>
                  <Header />
                  <Schedules />
                </>
              }
            />
          }
        />
        <Route
          path="/add-product"
          element={
            <Layout
              children={
                <>
                  <Header />
                  <Add_Product />
                </>
              }
            />
          }
        />
        <Route
          path="cart"
          element={
            <Layout
              children={
                <>
                  <Header />
                  <Cart />
                </>
              }
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
