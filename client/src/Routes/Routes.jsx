import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Dashboard from "pages/Dashboard/Dashboard";
import Categories from "pages/Categories/Categories";
import Schools from "pages/Schools/Schools";
import Orders from "pages/Orders/Orders";
import AddProduct from "pages/AddProduct/AddProduct";
import OrderDetails from "pages/Orders/OrderDetails";
const TaskViews = React.lazy(() => import("pages/TaskViews"));
const RFID = React.lazy(() => import("pages/RFID"));
const LoyaltySystem = React.lazy(() => import("pages/LoyaltySystem"));
const ProjectsTracking = React.lazy(() => import("pages/ProjectsTracking"));
const ReviewApproval = React.lazy(() => import("pages/ReviewApproval"));
const RequestManagement = React.lazy(() => import("pages/RequestManagement"));
const Review = React.lazy(() => import("pages/Review"));
const FreeCredits = React.lazy(() => import("pages/FreeCredits"));
const EnableLinkedAccounts = React.lazy(
  () => import("pages/EnableLinkedAccounts"),
);
const ExpressDelivery = React.lazy(() => import("pages/ExpressDelivery"));
const ExpenseTracking = React.lazy(() => import("pages/ExpenseTracking"));
const OrderTracking = React.lazy(() => import("pages/OrderTracking"));
const CustomisedOrderStatus = React.lazy(
  () => import("pages/CustomisedOrderStatus"),
);
const BaslineReporting = React.lazy(() => import("pages/BaslineReporting"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      {/* <Router> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/schools" element={<Schools />} />
          <Route path="/orders" element={<Orders/>} />
          <Route path="/orderDetails" element={<OrderDetails/>} />
          <Route path="/addProduct" element={<AddProduct/>} />
          <Route path="/baslinereporting" element={<BaslineReporting />} />
          <Route
            path="/customisedorderstatus"
            element={<CustomisedOrderStatus />}
          />
          <Route path="/ordertracking" element={<OrderTracking />} />
          <Route path="/expensetracking" element={<ExpenseTracking />} />
          <Route path="/expressdelivery" element={<ExpressDelivery />} />
          <Route
            path="/enablelinkedaccounts"
            element={<EnableLinkedAccounts />}
          />
          <Route path="/freecredits" element={<FreeCredits />} />
          <Route path="/review" element={<Review />} />
          <Route path="/requestmanagement" element={<RequestManagement />} />
          <Route path="/reviewapproval" element={<ReviewApproval />} />
          <Route path="/projectstracking" element={<ProjectsTracking />} />
          <Route path="/loyaltysystem" element={<LoyaltySystem />} />
          <Route path="/rfid" element={<RFID />} />
          <Route path="/taskviews" element={<TaskViews />} />
        </Routes>
      {/* </Router> */}
    </React.Suspense>
  );
};
export default ProjectRoutes;
