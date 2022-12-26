import {
  AppRegistration,
  Close,
  DescriptionOutlined,
  Login,
  Menu as MenuIcon,
  PersonOutline,
  PhoneOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import {
  AppBar,
  Button,
  Toolbar,
  styled,
  Box,
  Menu,
  MenuItem,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  InputBase,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import { Link } from "react-router-dom";
import { PATH_AUTH } from "../../../routes/paths";

const Image = styled("img")(({ theme }) => ({
  maxHeight: "60px",
  maxWidth: "105px",
}));
const Search = styled("div")(({ theme }) => ({
  display: "flex",
  backgroundColor: "#fff",
  border: "1px solid #CDCFD0",
  padding: "5px 5px",
  borderRadius: "10px",
}));
function MobileNav() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [toggle, setToggle] = useState(false);
  const theme = useTheme();
  const open = Boolean(anchorEl);
  const handleClick = (event: any): void => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (): void => {
    setAnchorEl(null);
  };

  const toggleDrawer = () => (event: any) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setToggle(!toggle);
  };
  return (
    <AppBar
      position="static"
      sx={{
        maxWidth: "100vw",
        background: "rgba(255,255,255,0.1)",
        backdropFilter: "blur(10px)",
        height: "135px",
        color: "rgba(201,33,39,1)",
        display: { xs: "flex", md: "flex", lg: "none" },
      }}>
      <Toolbar
        sx={{
          display: "flex",
          height: "100%",
          justifyContent: { xs: "space-between", sm: "space-around" },
        }}>
        <Button onClick={toggleDrawer()}>
          <MenuIcon
            sx={{ color: theme.palette.primary.main, fontSize: "36px" }}
          />
        </Button>
        <SwipeableDrawer
          open={toggle}
          onClose={toggleDrawer()}
          onOpen={toggleDrawer()}>
          <Box
            sx={{
              background: theme.palette.primary.main,
              height: "100vh",
              width: { xs: "70vw", md: "50vw" },
              color: "#fff",
              padding: "20px",
            }}>
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="Sách tham khảo" />
                </ListItemButton>
              </ListItem>
              <Divider />
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="Thiết bị công nghệ cao" />
                </ListItemButton>
              </ListItem>
              <Divider />
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="Thiết bị tối thiểu/cơ bản" />
                </ListItemButton>
              </ListItem>
              <Divider />
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="Phòng học chuyên dụng" />
                </ListItemButton>
              </ListItem>
              <Divider />
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="Nội thất học đường" />
                </ListItemButton>
              </ListItem>
              <Divider />
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="Phần mềm giáo dục" />
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton
                  onClick={toggleDrawer()}
                  sx={{ justifyContent: "center" }}>
                  <Box
                    sx={{
                      backgroundColor: "#fff",
                      padding: "10px",
                      borderRadius: "50%",
                      width: "45px",
                      height: "45px",
                    }}>
                    <Close color="action" />
                  </Box>
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </SwipeableDrawer>
        <Link to="/">
          <Image
            src="https://file.hstatic.net/200000407521/file/logofooter_625dc0d6f45f4f04861760f1b5eb9135.png"
            sx={{
              width: "100%",
              height: "100%",
              transform: { xs: "translateX(0)", sm: "translateX(66px)" },
              flexGrow: { xs: 1, sm: "unset" },
              marginLeft: { xs: "60px", sm: "unset" },
            }}
            alt="logo"
          />
        </Link>
        <Box
          sx={{
            paddingLeft: "40px",
            marginRight: "-5px",
            display: { xs: "none", sm: "block" },
          }}>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            sx={{
              color: "#646464",
              padding: 0,
            }}>
            <PersonOutline fontSize="large" />
          </Button>
          <Button
            sx={{
              color: "#646464",
              padding: 0,
            }}>
            <DescriptionOutlined fontSize="large" />
          </Button>
          <Button
            sx={{
              color: "#646464",
              padding: 0,
            }}>
            <PhoneOutlined fontSize="large" />
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
                <Login fontSize="small" sx={{ marginRight: "4px" }} /> Đăng nhập
              </MenuItem>
            </Link>
            <Link to={PATH_AUTH.register}>
              <MenuItem onClick={handleClose}>
                <AppRegistration fontSize="small" sx={{ marginRight: "4px" }} />{" "}
                Đăng ký
              </MenuItem>
            </Link>
          </Menu>
        </Box>
        <Box
          sx={{
            paddingLeft: "40px",
            marginRight: "-5px",
            display: { xs: "block", sm: "none" },
          }}>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            sx={{
              color: "#646464",
              padding: 0,
            }}>
            <PersonOutline fontSize="large" />
          </Button>
        </Box>
      </Toolbar>
      <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
        <Search sx={{ width: { xs: "100%", sm: "80%", md: "80%" } }}>
          <InputBase
            placeholder="Tìm kiếm..."
            sx={{ width: "100%", padding: "0 10px" }}
          />
          <Button sx={{ padding: "0" }}>
            <SearchOutlined sx={{ color: "#000" }} />
          </Button>
        </Search>
      </Toolbar>
    </AppBar>
  );
}

export default MobileNav;
