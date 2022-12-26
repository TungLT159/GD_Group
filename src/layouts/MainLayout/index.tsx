import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

// type Props = {
//   children: React.ReactNode;
// };

function MainLayout() {
  return (
    <>
      <Helmet>
        <title>
          Hệ thống cung cấp Sách, Thiết bị giáo dục toàn quốc – GD GROUP
        </title>
      </Helmet>
      <Navbar />
      <Outlet />
      <Footer />
    </>
    // <>
    //   <Navbar />
    //   {children}
    //   <Footer />
    // </>
  );
}

export default MainLayout;
