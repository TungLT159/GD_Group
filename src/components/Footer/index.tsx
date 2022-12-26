import { FacebookOutlined, Twitter, YouTube } from "@mui/icons-material";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  InputBase,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        // background: "#d9d9d9",

        boxShadow:
          "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px",
        background: "rgba(0,0,0,0.1)",
        backdropFilter: "blur(10px)",
        minHeight: "200px",
        padding: "40px 30px 20px",
      }}>
      <Grid
        container
        sx={{
          borderBottom: "1px solid #646464",
        }}>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={4}
          sx={{
            padding: { xs: "0 0 20px 0", sm: 0, md: "20px 100px 20px 30px" },
            borderBottom: { xs: "1px solid #000", sm: "unset" },
          }}>
          <Box>
            <img
              src="https://file.hstatic.net/200000407521/file/logofooter_625dc0d6f45f4f04861760f1b5eb9135.png"
              alt="logo"
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              // color: "#646464",
            }}>
            <Box sx={{ display: "flex", flexDirection: "column" }} mt={2}>
              <Typography
                gutterBottom
                variant="body1"
                sx={{ fontSize: { xs: "13px", sm: "unset" } }}>
                0939865544
              </Typography>
              <Typography
                gutterBottom
                mb={2}
                variant="body1"
                sx={{ fontSize: { xs: "13px", sm: "unset" } }}>
                mekong@giaoducgroup.com.vn
              </Typography>
              <Typography
                gutterBottom
                mb={2}
                variant="body1"
                sx={{ fontSize: { xs: "13px", sm: "unset" } }}>
                Số 3, Đường số 9, KDC lô số 8A , Khu đô thị Nam Cần Thơ, P. Hưng
                Thạnh, Q. Cái Răng, TP Cần Thơ
              </Typography>
            </Box>
            <InputBase
              placeholder="Nhập email của bạn..."
              sx={{
                background: "#fff",
                padding: "5px 10px",
                width: "100%",
                borderRadius: "7px",
              }}
            />
            <Button
              variant="contained"
              sx={{
                margin: "10px 0",
                borderRadius: "999px",
                // backgroundColor: "rgba(201,33,39,1)",
                // "&:hover": {
                //   backgroundColor: "rgba(201,33,39,0.7)",
                // },
              }}>
              Đăng ký nhận tin tức
            </Button>
            <FormGroup sx={{ marginLeft: "5px" }}>
              <FormControlLabel
                control={<Checkbox />}
                sx={{ fontSize: { xs: "13px", sm: "unset" } }}
                label="Đồng ý với chính sách bảo mật"
              />
            </FormGroup>
          </Box>
        </Grid>
        <Grid
          container
          item
          sm={12}
          md={12}
          lg={8}
          sx={{ padding: "20px 30px" }}>
          <Grid item xs={12} sm={3} lg={3}>
            <Typography
              variant="body1"
              sx={{
                // color: "black",
                fontSize: { xs: "15px", sm: "unset" },
                fontWeight: "bold",
              }}>
              Hướng dẫn
            </Typography>
            <List sx={{ padding: "20px 0", textAlign: "center" }}>
              <ListItem disablePadding>
                <ListItemText>
                  <Typography
                    variant="body1"
                    sx={{ fontSize: { xs: "13px", sm: "unset" } }}>
                    Đạt mua
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemText>
                  <Typography
                    variant="body1"
                    sx={{ fontSize: { xs: "13px", sm: "unset" } }}>
                    Thanh toán
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemText>
                  <Typography
                    variant="body1"
                    sx={{ fontSize: { xs: "13px", sm: "unset" } }}>
                    Nhận báo giá
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemText>
                  <Typography
                    variant="body1"
                    sx={{ fontSize: { xs: "13px", sm: "unset" } }}>
                    Chức năng dự toán
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemText>
                  <Typography
                    variant="body1"
                    sx={{ fontSize: { xs: "13px", sm: "unset" } }}>
                    Tải catalogue
                  </Typography>
                </ListItemText>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} sm={3} lg={3}>
            <Typography
              variant="body1"
              sx={{
                // color: "black",
                fontSize: { xs: "15px", sm: "unset" },
                fontWeight: "bold",
              }}>
              Hỗ trợ
            </Typography>
            <List sx={{ paddingTop: "20px" }}>
              <ListItem disablePadding>
                <ListItemText>
                  <Typography
                    variant="body1"
                    sx={{ fontSize: { xs: "13px", sm: "unset" } }}>
                    Qua điện thoại
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemText>
                  <Typography
                    variant="body1"
                    sx={{ fontSize: { xs: "13px", sm: "unset" } }}>
                    Gửi email
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemText>
                  <Typography
                    variant="body1"
                    sx={{ fontSize: { xs: "13px", sm: "unset" } }}>
                    Gặp trực tiếp
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemText>
                  <Typography
                    variant="body1"
                    sx={{ fontSize: { xs: "13px", sm: "unset" } }}>
                    Danh sách văn phòng
                  </Typography>
                </ListItemText>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} sm={3} lg={3}>
            <Typography
              variant="body1"
              sx={{
                // color: "black",
                fontSize: { xs: "15px", sm: "unset" },
                fontWeight: "bold",
              }}>
              Về doanh nghiệp
            </Typography>
            <List sx={{ paddingTop: "20px" }}>
              <ListItem disablePadding>
                <ListItemText>
                  <Typography
                    variant="body1"
                    sx={{ fontSize: { xs: "13px", sm: "unset" } }}>
                    Giới thiệu
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemText>
                  <Typography
                    variant="body1"
                    sx={{ fontSize: { xs: "13px", sm: "unset" } }}>
                    Thông tin công ty
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemText>
                  <Typography
                    variant="body1"
                    sx={{ fontSize: { xs: "13px", sm: "unset" } }}>
                    Các thông báo
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemText>
                  <Typography
                    variant="body1"
                    sx={{ fontSize: { xs: "13px", sm: "unset" } }}>
                    Tin tức mới nhất
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemText>
                  <Typography
                    variant="body1"
                    sx={{ fontSize: { xs: "13px", sm: "unset" } }}>
                    Văn bản công khai
                  </Typography>
                </ListItemText>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} sm={3} lg={3}>
            <Typography
              variant="body1"
              sx={{
                // color: "black",
                fontWeight: "bold",
              }}>
              Sản phẩm, dịch vụ
            </Typography>
            <List sx={{ paddingTop: "20px" }}>
              <ListItem disablePadding>
                <ListItemText>
                  <Typography
                    variant="body1"
                    sx={{ fontSize: { xs: "13px", sm: "unset" } }}>
                    Danh mục sản phẩm
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemText>
                  <Typography
                    variant="body1"
                    sx={{ fontSize: { xs: "13px", sm: "unset" } }}>
                    Các dịch vụ
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemText>
                  <Typography
                    variant="body1"
                    sx={{ fontSize: { xs: "13px", sm: "unset" } }}>
                    Phạm vi hoạt động
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemText>
                  <Typography
                    variant="body1"
                    sx={{ fontSize: { xs: "13px", sm: "unset" } }}>
                    Hình thức kinh doanh
                  </Typography>
                </ListItemText>
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Grid>
      <Box
        sx={{
          display: { xs: "block", sm: "flex" },
          justifyContent: "space-between",
          padding: { xs: "unset", md: "20px 30px" },
        }}>
        <Box
          sx={{
            color: "#646464",
            transform: "translateY(10px)",
            marginBottom: { xs: "10px", sm: "unset" },
          }}>
          <Typography sx={{ fontSize: { xs: "13px", sm: "unset" } }}>
            © GDVN, Inc. 2022. Xem hết là duyệt!
          </Typography>
        </Box>
        <Box
          sx={{ color: "#646464", marginBottom: { xs: "10px", sm: "unset" } }}>
          <Typography sx={{ fontSize: { xs: "13px", sm: "unset" } }}>
            Follow us:
            <FacebookOutlined
              color="primary"
              sx={{
                transform: { xs: "translateY(7px)", sm: "translateY(10px)" },
                marginLeft: "3px",
                fontSize: { xs: "25px", sm: "35px" },
              }}
            />
            <Twitter
              color="primary"
              fontSize="large"
              sx={{
                transform: { xs: "translateY(7px)", sm: "translateY(10px)" },
                marginLeft: "3px",
                fontSize: { xs: "25px", sm: "35px" },
              }}
            />
            <YouTube
              color="error"
              fontSize="large"
              sx={{
                transform: { xs: "translateY(7px)", sm: "translateY(10px)" },
                marginLeft: "3px",
                fontSize: { xs: "25px", sm: "35px" },
              }}
            />
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
