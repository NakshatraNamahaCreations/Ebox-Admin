import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./component/pages/panel/Dashboard";
import Layout from "./component/structure/Layout";
import UserList from "./component/pages/people/user/UserList";
import Header from "./component/structure/Header";
import BookingHistory from "./component/pages/bookings/user/BookingHistory";
import BookingDetails from "./component/pages/bookings/user/BookingDetails";
// import InvoiceFormat from "./component/pages/bookings/user/InvoiceFormat";
import VendorList from "./component/pages/people/vendor/VendorList";
import Banner from "./component/pages/panel/Banner";
// import VendorProductList from "./component/pages/people/vendor/VendorProductList";
import Schedules from "./component/pages/bookings/user/Schedules";
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
import Invoice from "./component/pages/bookings/user/Invoice";
import SellingProduct from "./component/pages/products/SellingProduct";
import RentalProduct from "./component/pages/products/RentalProduct";
import TicketListing from "./component/pages/tickets/TicketListing";
import TicketDetails from "./component/pages/tickets/TicketDetails";
import Payouts from "./component/pages/bookings/user/Payouts";
import AddFaq from "./component/pages/More/AddFaq";
import FAQList from "./component/pages/More/FAQList";
import AddTC from "./component/pages/More/AddTC";
import TCList from "./component/pages/More/TCList";
import PayoutInvoice from "./component/pages/bookings/user/PayoutInvoice";
import EditFaq from "./component/pages/More/EditFaq";
import PayoutDetails from "./component/pages/bookings/user/PayoutDetails";
import State from "./component/pages/master/State";
import City from "./component/pages/master/City";
import Address from "./component/pages/master/Address";
import Youtube from "./component/pages/More/Youtube";
import Calculator from "./component/pages/bookings/user/Calculator";

// https://github.com/NakshatraNamahaCreations/eventboxadmin.git

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Login />} /> */}
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
        <Route
          path="/spotlight-banner"
          element={
            <Layout
              children={
                <>
                  <Header />
                  <Banner />
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
          path="/state"
          element={
            <Layout
              children={
                <>
                  <Header />
                  <State />
                </>
              }
            />
          }
        />
        <Route
          path="/city"
          element={
            <Layout
              children={
                <>
                  <Header />
                  <City />
                </>
              }
            />
          }
        />
        <Route
          path="/address"
          element={
            <Layout
              children={
                <>
                  <Header />
                  <Address />
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
                  {/* <InvoiceFormat /> */}
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
        {/* <Route
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
        /> */}

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
          path="/booking/user-bookings"
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
          path="/calculator"
          element={
            <Layout
              children={
                <>
                  <Header />
                  <Calculator />
                </>
              }
            />
          }
        />
        <Route
          path="/payouts"
          element={
            <Layout
              children={
                <>
                  <Header />
                  <Payouts />
                </>
              }
            />
          }
        />
        <Route
          path="/payouts-details"
          element={
            <Layout
              children={
                <>
                  <Header />
                  <PayoutDetails />
                </>
              }
            />
          }
        />
        <Route
          path="/payout-invoice"
          element={
            <Layout
              children={
                <>
                  <Header />
                  <PayoutInvoice />
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
        <Route
          path="/product/selling"
          element={
            <Layout
              children={
                <>
                  <Header />
                  <SellingProduct />
                </>
              }
            />
          }
        />
        <Route
          path="/product/rentals"
          element={
            <Layout
              children={
                <>
                  <Header />
                  <RentalProduct />
                </>
              }
            />
          }
        />
        <Route
          path="/product/product-details"
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
          path="/ticketing-system"
          element={
            <Layout
              children={
                <>
                  <Header />
                  <TicketListing />
                </>
              }
            />
          }
        />
        <Route
          path="/ticketing-details"
          element={
            <Layout
              children={
                <>
                  <Header />
                  <TicketDetails />
                </>
              }
            />
          }
        />
        <Route
          path="/add-faq"
          element={
            <Layout
              children={
                <>
                  <Header />
                  <AddFaq />
                </>
              }
            />
          }
        />
        <Route
          path="/faq-list"
          element={
            <Layout
              children={
                <>
                  <Header />
                  <FAQList />
                </>
              }
            />
          }
        />
        <Route
          path="/edit-faq"
          element={
            <Layout
              children={
                <>
                  <Header />
                  <EditFaq />
                </>
              }
            />
          }
        />
        <Route
          path="/add-terms&condition"
          element={
            <Layout
              children={
                <>
                  <Header />
                  <AddTC />
                </>
              }
            />
          }
        />
        <Route
          path="/terms-and-condition-list"
          element={
            <Layout
              children={
                <>
                  <Header />
                  <TCList />
                </>
              }
            />
          }
        />
        <Route
          path="/youtube-video"
          element={
            <Layout
              children={
                <>
                  <Header />
                  <Youtube />
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
