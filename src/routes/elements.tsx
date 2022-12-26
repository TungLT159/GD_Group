import { Suspense, lazy, ElementType } from "react";
// components
import LoadingScreen from "../components/loading-screen";

// ----------------------------------------------------------------------

const Loadable = (Component: ElementType) => (props: any) =>
  (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
export const Page404 = Loadable(lazy(() => import("../pages/Page404")));

// DASHBOARD: GENERAL
export const GeneralAppPage = Loadable(
  lazy(() => import("../pages/dashboard/GeneralAppPage"))
);
export const GeneralEcommercePage = Loadable(
  lazy(() => import("../pages/dashboard/GeneralEcommercePage"))
);
export const GeneralAnalyticsPage = Loadable(
  lazy(() => import("../pages/dashboard/GeneralAnalyticsPage"))
);
export const GeneralBankingPage = Loadable(
  lazy(() => import("../pages/dashboard/GeneralBankingPage"))
);
export const GeneralBookingPage = Loadable(
  lazy(() => import("../pages/dashboard/GeneralBookingPage"))
);
export const GeneralFilePage = Loadable(
  lazy(() => import("../pages/dashboard/GeneralFilePage"))
);

// DASHBOARD: ECOMMERCE
export const EcommerceShopPage = Loadable(
  lazy(() => import("../pages/dashboard/EcommerceShopPage"))
);
export const EcommerceProductDetailsPage = Loadable(
  lazy(() => import("../pages/dashboard/EcommerceProductDetailsPage"))
);
export const EcommerceProductListPage = Loadable(
  lazy(() => import("../pages/dashboard/EcommerceProductListPage"))
);
export const EcommerceProductCreatePage = Loadable(
  lazy(() => import("../pages/dashboard/EcommerceProductCreatePage"))
);
export const EcommerceProductEditPage = Loadable(
  lazy(() => import("../pages/dashboard/EcommerceProductEditPage"))
);
export const EcommerceCheckoutPage = Loadable(
  lazy(() => import("../pages/dashboard/EcommerceCheckoutPage"))
);

// DASHBOARD: INVOICE
export const InvoiceListPage = Loadable(
  lazy(() => import("../pages/dashboard/InvoiceListPage"))
);
export const InvoiceDetailsPage = Loadable(
  lazy(() => import("../pages/dashboard/InvoiceDetailsPage"))
);
export const InvoiceCreatePage = Loadable(
  lazy(() => import("../pages/dashboard/InvoiceCreatePage"))
);
export const InvoiceEditPage = Loadable(
  lazy(() => import("../pages/dashboard/InvoiceEditPage"))
);

// DASHBOARD: USER
export const UserProfilePage = Loadable(
  lazy(() => import("../pages/dashboard/UserProfilePage"))
);
export const UserCardsPage = Loadable(
  lazy(() => import("../pages/dashboard/UserCardsPage"))
);
export const UserListPage = Loadable(
  lazy(() => import("../pages/dashboard/UserListPage"))
);
export const UserAccountPage = Loadable(
  lazy(() => import("../pages/dashboard/UserAccountPage"))
);
export const UserCreatePage = Loadable(
  lazy(() => import("../pages/dashboard/UserCreatePage"))
);
export const UserEditPage = Loadable(
  lazy(() => import("../pages/dashboard/UserEditPage"))
);

// DASHBOARD: BLOG
export const BlogPostsPage = Loadable(
  lazy(() => import("../pages/dashboard/BlogPostsPage"))
);

export const BlogNewPostPage = Loadable(
  lazy(() => import("../pages/dashboard/BlogNewPostPage"))
);

// DASHBOARD: FILE MANAGER
export const FileManagerPage = Loadable(
  lazy(() => import("../pages/dashboard/FileManagerPage"))
);

// DASHBOARD: APP
export const MailPage = Loadable(
  lazy(() => import("../pages/dashboard/MailPage"))
);
export const CalendarPage = Loadable(
  lazy(() => import("../pages/dashboard/CalendarPage"))
);


// TEST RENDER PAGE BY ROLE
export const PermissionDeniedPage = Loadable(
  lazy(() => import("../pages/dashboard/PermissionDeniedPage"))
);

// BLANK PAGE
export const BlankPage = Loadable(
  lazy(() => import("../pages/dashboard/BlankPage"))
);
