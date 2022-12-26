import { useRoutes, Navigate } from "react-router-dom";

import MainPage from "../components/MainPage";
// import AuthGuard from "../auth/AuthGuard";
import MainLayout from "../layouts/MainLayout";
import DashboardLayout from "../layouts/dashboard";
import { PATH_AFTER_LOGIN } from "../utils/config";

import Login from "../pages/auth/Login";
import {
  Page404,
  // Dashboard: General
  GeneralAppPage,
  GeneralFilePage,
  GeneralBankingPage,
  GeneralBookingPage,
  GeneralEcommercePage,
  GeneralAnalyticsPage,
  // Dashboard: User
  UserListPage,
  UserEditPage,
  UserCardsPage,
  UserCreatePage,
  UserProfilePage,
  UserAccountPage,
  // Dashboard: Ecommerce
  EcommerceShopPage,
  EcommerceCheckoutPage,
  EcommerceProductListPage,
  EcommerceProductEditPage,
  EcommerceProductCreatePage,
  EcommerceProductDetailsPage,
  // Dashboard: Invoice
  InvoiceListPage,
  InvoiceDetailsPage,
  InvoiceCreatePage,
  InvoiceEditPage,
  // Dashboard: Blog
  BlogPostsPage,
  BlogNewPostPage,
  // Dashboard: FileManager
  FileManagerPage,
  // Dashboard: App
  MailPage,
  CalendarPage,
  //
  BlankPage,
  PermissionDeniedPage,
} from "./elements";
import CompactLayout from "../layouts/compact";
import Register from "../pages/auth/Register";

// const MainRoute = [
//   {
//     path: "/",
//     components: MainPage,
//   },
// ];

// export default MainRoute;

export default function Router() {
  return useRoutes([
    // Auth
    {
      path: "auth",
      children: [
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "register",
          element: <Register />,
        },
      ],
    },
    {
      path: "dashboard",
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to={PATH_AFTER_LOGIN} replace />, index: true },
        { path: "app", element: <GeneralAppPage /> },
        { path: "ecommerce", element: <GeneralEcommercePage /> },
        { path: "analytics", element: <GeneralAnalyticsPage /> },
        { path: "banking", element: <GeneralBankingPage /> },
        { path: "booking", element: <GeneralBookingPage /> },
        { path: "file", element: <GeneralFilePage /> },
        {
          path: "e-commerce",
          children: [
            {
              element: <Navigate to="/dashboard/e-commerce/shop" replace />,
              index: true,
            },
            { path: "shop", element: <EcommerceShopPage /> },
            { path: "product/:name", element: <EcommerceProductDetailsPage /> },
            { path: "list", element: <EcommerceProductListPage /> },
            { path: "product/new", element: <EcommerceProductCreatePage /> },
            {
              path: "product/:name/edit",
              element: <EcommerceProductEditPage />,
            },
            { path: "checkout", element: <EcommerceCheckoutPage /> },
          ],
        },
        {
          path: "user",
          children: [
            {
              element: <Navigate to="/dashboard/user/profile" replace />,
              index: true,
            },
            { path: "profile", element: <UserProfilePage /> },
            { path: "cards", element: <UserCardsPage /> },
            { path: "list", element: <UserListPage /> },
            { path: "new", element: <UserCreatePage /> },
            { path: ":name/edit", element: <UserEditPage /> },
            { path: "account", element: <UserAccountPage /> },
          ],
        },
        {
          path: "invoice",
          children: [
            {
              element: <Navigate to="/dashboard/invoice/list" replace />,
              index: true,
            },
            { path: "list", element: <InvoiceListPage /> },
            { path: ":id", element: <InvoiceDetailsPage /> },
            { path: ":id/edit", element: <InvoiceEditPage /> },
            { path: "new", element: <InvoiceCreatePage /> },
          ],
        },
        {
          path: "blog",
          children: [
            {
              element: <Navigate to="/dashboard/blog/posts" replace />,
              index: true,
            },
            { path: "posts", element: <BlogPostsPage /> },
            { path: "new", element: <BlogNewPostPage /> },
          ],
        },
        { path: "files-manager", element: <FileManagerPage /> },
        {
          path: "mail",
          children: [
            {
              element: <Navigate to="/dashboard/mail/all" replace />,
              index: true,
            },
            { path: "label/:customLabel", element: <MailPage /> },
            { path: "label/:customLabel/:mailId", element: <MailPage /> },
            { path: ":systemLabel", element: <MailPage /> },
            { path: ":systemLabel/:mailId", element: <MailPage /> },
          ],
        },
        { path: "calendar", element: <CalendarPage /> },
        { path: "permission-denied", element: <PermissionDeniedPage /> },
        { path: "blank", element: <BlankPage /> },
      ],
    },

    // Main Routes
    {
      element: <MainLayout />,
      children: [{ element: <MainPage />, index: true }],
    },
    {
      element: <CompactLayout />,
      children: [{ path: "404", element: <Page404 /> }],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}
