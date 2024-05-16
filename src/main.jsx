import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  createRoutesFromElements,
} from "react-router-dom";
import Root, {loader as rootLoader} from "./routes/Root/Root.jsx";
import Home from "./routes/Home/Home.jsx";
import BrowseListings from "./routes/BrowseListings/BrowseListings.jsx";
import Cart from "./routes/Cart/Cart.jsx";
import FAQs from "./routes/FAQ/FAQ.jsx";
import Listing, {loader as listingLoader} from "./routes/Listing/Listing.jsx";
import Login from "./routes/Login/Login.jsx";
import Logout from "./routes/Logout/Logout.jsx";
import PaymentDetails from "./routes/PaymentDetails/PaymentDetails.jsx";
import ShippingDetails from "./routes/ShippingDetails/ShippingDetails.jsx";
import ShippingPolicy from "./routes/ShippingPolicy/ShippingPolicy.jsx";
import TermsAndConditions from "./routes/TermsAndConditions/TermsAndConditions.jsx";
import Thankyou from "./routes/ThankYou/ThankYou.jsx";
import UserAccount from "./routes/UserAccount/UserAccount.jsx";
import About from "./routes/About/About.jsx";
import "./index.css";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: rootLoader,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/browse",
        element: <BrowseListings />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/FAQ",
        element: <FAQs />,
      },
      {
        path: "/listing/:listing_id",
        element: <Listing />,
        loader: listingLoader,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/logout",
        element: <Logout />,
      },
      {
        path: "/payment-details",
        element: <PaymentDetails />,
      },
      {
        path: "/shipping-details",
        element: <ShippingDetails />,
      },
      {
        path: "/shipping-policy",
        element: <ShippingPolicy />,
      },
      {
        path: "/terms-conditions",
        element: <TermsAndConditions />,
      },
      {
        path: "/thank-you",
        element: <Thankyou />,
      },
      {
        path: "/account",
        element: <UserAccount />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
