// @mui
import { Stack, Box, styled } from "@mui/material";
// config
import { NAV } from "../../../config";
// utils
import { hideScrollbarX } from "../../../utils/cssStyles";
// components
// import Logo from '../../../components/logo';
import { NavSectionMini } from "../../../components/nav-section";
//
import { Link } from "react-router-dom";
import navConfig from "./config";

// ----------------------------------------------------------------------

export default function NavMini() {
  const Image = styled("img")(({ theme }) => ({
    width: "78px",
    height: "50px",
    padding: "5px",
  }));
  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV.W_DASHBOARD_MINI },
      }}>
      <Stack
        sx={{
          pb: 2,
          height: 1,
          position: "fixed",
          width: NAV.W_DASHBOARD_MINI,
          borderRight: (theme) => `dashed 1px ${theme.palette.divider}`,
          ...hideScrollbarX,
        }}>
        <Link to="/">
          <Image
            src="https://file.hstatic.net/200000407521/file/logofooter_625dc0d6f45f4f04861760f1b5eb9135.png"
            alt="logo"
          />
        </Link>

        <NavSectionMini data={navConfig} />
      </Stack>
    </Box>
  );
}
