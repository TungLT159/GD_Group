import {
  PersonOutline,
  SearchOutlined,
  Login,
  // AppRegistration,
  DescriptionOutlined,
  PhoneOutlined,
} from "@mui/icons-material";
import {
  Box,
  Toolbar,
  styled,
  InputBase,
  Button,
  Stack,
  Typography,
  AppBar,
  Menu,
  MenuItem,
  Container,
} from "@mui/material";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { useTheme } from "@mui/material/styles";

import { useState, cloneElement } from "react";
import useOffSetTop from "../../../hooks/useOffSetTop";
import { Link } from "react-router-dom";
import "./style1/style.css";
import { HEADER } from "../../../config";
import { PATH_AUTH } from "../../../routes/paths";
import NavDesktop from "./desktop/NavDesktop";
import navConfig from "../config";
import { bgBlur } from "../../../utils/cssStyles";

const Image = styled("img")(({ theme }) => ({
  width: "125px",
  height: "70px",
}));
const Search = styled("div")(({ theme }) => ({
  display: "flex",
  backgroundColor: "#fff",
  border: "1px solid #CDCFD0",
  padding: "5px 5px",
  borderRadius: "10px",
  width: "45%",
}));
// const Nav = styled("nav")(({ theme }) => ({
//   display: "inline-block",
//   margin: 0,
//   padding: "0 160px 0 180px",
//   color: "inherit",
//   boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
//   textAlign: "left",
//   fontSize: "15px",
//   width: "100%",
// }));
// const NavLink = styled("a")(({ theme }) => ({
//   display: "block",
//   padding: "0 16px",
//   lineHeight: "inherit",
//   cursor: "pointer",
// }));
// const NavMenu = styled("ul")(({ theme }) => ({
//   lineHeight: "45px",
//   fontWeight: "700",
// }));
// const NavItem = styled("li")(({ theme }) => ({
//   display: "inline-block",
//   position: "relative",
//   zIndex: 10,
// }));
interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

function ElevationScroll(props: Props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}
function DesktopNav() {
  // const carouselRef = useRef(null);
  const isOffset = useOffSetTop(HEADER.H_MAIN_DESKTOP);
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const open: boolean = Boolean(anchorEl);
  const handleClick = (event: any): void => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (): void => {
    setAnchorEl(null);
  };

  return (
    <ElevationScroll>
      <AppBar
        position="sticky"
        color="transparent"
        sx={{
          maxWidth: "100vw",
          background: theme.palette.mode,
          backdropFilter: "blur(10px)",
          display: { xs: "none", md: "none", lg: "block" },
        }}>
        <Toolbar sx={{ padding: "10px 0!important" }}>
          <Box flex={0.5} sx={{ width: "40%", paddingLeft: "190px" }}>
            <Link to="/">
              <Image
                src="https://file.hstatic.net/200000407521/file/logofooter_625dc0d6f45f4f04861760f1b5eb9135.png"
                alt="logo"
              />
            </Link>
          </Box>
          <Search>
            <InputBase
              placeholder="Tìm kiếm..."
              sx={{ width: "100%", padding: "0 10px" }}
            />
            <Button
              variant="contained"
              sx={
                {
                  // backgroundColor: "rgba(201,33,39,1)",
                  // "&:hover": {
                  //   backgroundColor: "rgba(201,33,39,0.8)",
                  // },
                }
              }>
              <SearchOutlined color="inherit" />
            </Button>
          </Search>
          <Box flex={1} sx={{ paddingLeft: "40px" }}>
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}>
              <Stack
                sx={{
                  fontSize: "14px",
                  textTransform: "none",
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                <PersonOutline sx={{ color: theme.palette.text.primary }} />
                <Typography sx={{ fontSize: "12px" }} color="text.primary">
                  Tài khoản
                </Typography>
              </Stack>
            </Button>
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}>
              <Stack
                sx={{
                  fontSize: "14px",
                  textTransform: "none",
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                <DescriptionOutlined
                  sx={{ color: theme.palette.text.primary }}
                />
                <Typography sx={{ fontSize: "12px" }} color="text.primary">
                  Báo giá nhanh
                </Typography>
              </Stack>
            </Button>
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}>
              <Stack
                sx={{
                  fontSize: "14px",
                  textTransform: "none",
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                <PhoneOutlined sx={{ color: theme.palette.text.primary }} />
                <Typography sx={{ fontSize: "12px" }} color="text.primary">
                  Liên hệ
                </Typography>
              </Stack>
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}>
              <Link to={PATH_AUTH.login}>
                <MenuItem onClick={handleClose}>
                  <Login fontSize="small" sx={{ marginRight: "4px" }} /> Admin
                </MenuItem>
              </Link>
              {/* <Link to={PATH_AUTH.register}>
                <MenuItem onClick={handleClose}>
                  <AppRegistration
                    fontSize="small"
                    sx={{ marginRight: "4px" }}
                  />{" "}
                  Đăng ký
                </MenuItem>
              </Link> */}
            </Menu>
          </Box>
        </Toolbar>
        {/* <Nav>
          <NavMenu>
            <NavItem>
              <NavLink href="/#">Trang chủ</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/#">Cty Song Phương</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/#">Cty GD Việt Nam</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/#">Cty Mekong</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/#">Cty Cửu Long</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/#">
                Các Cty miền */}
        {/* <ExpandMore className="Nav-icon" fontSize="small" /> */}
        {/* </NavLink>
              <Submenu>
                <ul className="nav__submenu">
                  <li className="nav__submenu-item ">
                    <NavLink href="/#">Cty Cổ phần GD miền Đông</NavLink>
                  </li>
                  <Divider />
                  <li className="nav__submenu-item ">
                    <NavLink href="/#">Cty Cổ phần GD Trung bộ</NavLink>
                  </li>
                  <Divider />
                  <li className="nav__submenu-item ">
                    <NavLink href="/#">Cty Cổ phần GD Bắc bộ</NavLink>
                  </li>
                </ul>
              </Submenu>
            </NavItem> */}
        {/* <li className="nav__menu-item">
            <a href="#">LIÊN HỆ</a>
          </li> */}
        {/* </NavMenu>
        </Nav> */}
        <Toolbar
          disableGutters
          sx={{
            height: {
              xs: HEADER.H_MOBILE,
              md: HEADER.H_MAIN_DESKTOP,
            },
            transition: theme.transitions.create(
              ["height", "background-color"],
              {
                easing: theme.transitions.easing.easeInOut,
                duration: theme.transitions.duration.shorter,
              }
            ),
            ...(isOffset && {
              ...bgBlur({ color: theme.palette.background.default }),
              height: {
                md: HEADER.H_MAIN_DESKTOP - 16,
              },
            }),
          }}>
          <Container
            disableGutters
            sx={{
              display: "flex",
              padding: 0,
              alignItems: "center",
              width: "100%",
              justifyContent: "space-between",
            }}>
            <NavDesktop isOffset={isOffset} data={navConfig} />
          </Container>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
}

export default DesktopNav;
