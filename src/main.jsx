import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  createRoutesFromElements,
} from "react-router-dom";
import Root from './routes/Root/Root.jsx';
import BrowseListings from './routes/BrowseListings/BrowseListings.jsx'
import Cart from './routes/Cart/Cart.jsx'
import FAQs from './routes/FAQ/FAQ.jsx'
import Home from './routes/Home/Home.jsx'
import Listing from './routes/Listing/Listing.jsx'
import Login from './routes/Login/Login.jsx'
import PaymentDetails from './routes/PaymentDetails/PaymentDetails.jsx'
import ShippingDetails from './routes/ShippingDetails/ShippingDetails.jsx'
import ShippingPolicy from './routes/ShippingPolicy/ShippingPolicy.jsx'
import TermsAndConditions from './routes/TermsAndConditions/TermsAndConditions.jsx'
import Thankyou from './routes/ThankYou/ThankYou.jsx'
import UserAccount from './routes/UserAccount/UserAccount.jsx'

import './index.css'

// home page, category overview, category page, product page, login page, user account page, terms and condition page, 
// shipping policy page, FAQs page, cart page, shipping details page, payment details page, thank you page


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
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
    element: <FAQs/>,
  },
  {
    path: "/home",
    element: <Home/>,
  },
  {
    path: "/Listing/:listing_id",
    element: <Listing/>,
  },
  {
    path: "/login",
    element: <Login />,
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
    element: <TermsAndConditions/>,
  },
  {
    path: "/thank-you",
    element: <Thankyou/>,
  },
  {
    path: "/account",
    element: <UserAccount/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
