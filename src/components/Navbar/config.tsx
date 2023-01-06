// routes
// import { PATH_AUTH, PATH_DOCS, PATH_PAGE } from '../../../routes/paths';
// // config
// import { PATH_AFTER_LOGIN } from '../../../config';
// components
import Iconify from "../iconify";

// ----------------------------------------------------------------------

const navConfig = [
  {
    title: "Trang chủ",
    icon: <Iconify icon="eva:home-fill" />,
    path: "/",
  },
  {
    title: "Cty Song Phương",
    icon: <Iconify icon="ic:round-grain" />,
    path: "#",
  },
  {
    title: "Cty GD Việt Nam",
    icon: <Iconify icon="ic:round-grain" />,
    path: "#",
  },
  {
    title: "Cty Mekong",
    icon: <Iconify icon="ic:round-grain" />,
    path: "#",
  },
  {
    title: "Cty Cửu Long",
    icon: <Iconify icon="ic:round-grain" />,
    path: "#",
  },
  {
    title: "Các Cty miền",
    path: "/pages",
    icon: <Iconify icon="eva:file-fill" />,
    children: [
      {
        subheader: "Other",
        items: [
          { title: "About us", path: "#" },
          { title: "Contact us", path: "#" },
          { title: "FAQs", path: "#" },
          { title: "Pricing", path: "#" },
          { title: "Payment", path: "#" },
          { title: "Maintenance", path: "#" },
          { title: "Coming Soon", path: "#" },
        ],
      },
      {
        subheader: "Authentication",
        items: [
          { title: "Login", path: "#" },
          { title: "Register", path: "#" },
          { title: "Reset password", path: "#" },
          { title: "Verify code", path: "#" },
        ],
      },
      {
        subheader: "Error",
        items: [
          { title: "Page 403", path: "#" },
          { title: "Page 404", path: "#" },
          { title: "Page 500", path: "#" },
        ],
      },
      {
        subheader: "Dashboard",
        items: [{ title: "Dashboard", path: "#" }],
      },
    ],
  }
];

export default navConfig;
