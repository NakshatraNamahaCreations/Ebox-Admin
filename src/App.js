import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./component/pages/panel/Dashboard";
import Layout from "./component/structure/Layout";
import UserList from "./component/pages/people/user/UserList";
import Header from "./component/structure/Header";
import BookingHistory from "./component/pages/bookings/BookingHistory";
import BookingDetails from "./component/pages/bookings/BookingDetails";
import Invoice from "./component/pages/bookings/Invoice";
import VendorList from "./component/pages/people/vendor/VendorList";
import SpotlightBanner from "./component/pages/panel/SpotlightBanner";
import VendorProductList from "./component/pages/people/vendor/VendorProductList";
import Schedules from "./component/pages/bookings/Schedules";
import Cart from "./stateManagement/Cart";
import Add_Product from "./component/Add_Product";
import Login from "./component/pages/controls/Login";
import VendorDetails from "./component/pages/people/vendor/VendorDetails";
import ProductDetails from "./component/pages/people/vendor/ProductDetails";
import TeamList from "./component/pages/people/team/TeamList";
import CreateTeam from "./component/pages/people/team/CreateTeam";
import EditTeam from "./component/pages/people/team/EditTeam";
import AddService from "./component/pages/services/AddService";
import AddSubService from "./component/pages/services/AddSubService";
import Requirements from "./component/pages/services/Requirements";

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
          path="/service/addservice"
          element={
            <Layout
              children={
                <>
                  <Header />
                  <AddService />
                </>
              }
            />
          }
        />
        <Route
          path="/service/subservice"
          element={
            <Layout
              children={
                <>
                  <Header />
                  <AddSubService />
                </>
              }
            />
          }
        />
        <Route
          path="/service/requirements"
          element={
            <Layout
              children={
                <>
                  <Header />
                  <Requirements />
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
          path="/vendor/product"
          element={
            <Layout
              children={
                <>
                  <Header />
                  <ProductDetails />
                </>
              }
            />
          }
        />
        <Route
          path="/team/team-list"
          element={
            <Layout
              children={
                <>
                  <Header />
                  <TeamList />
                </>
              }
            />
          }
        />
        <Route
          path="/team/create-team"
          element={
            <Layout
              children={
                <>
                  <Header />
                  <CreateTeam />
                </>
              }
            />
          }
        />
        <Route
          path="/team/edit-user"
          element={
            <Layout
              children={
                <>
                  <Header />
                  <EditTeam />
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
