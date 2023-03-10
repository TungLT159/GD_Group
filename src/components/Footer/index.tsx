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
                S??? 3, ???????ng s??? 9, KDC l?? s??? 8A , Khu ???? th??? Nam C???n Th??, P. H??ng
                Th???nh, Q. C??i R??ng, TP C???n Th??
              </Typography>
            </Box>
            <InputBase
              placeholder="Nh???p email c???a b???n..."
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
              ????ng k?? nh???n tin t???c
            </Button>
            <FormGroup sx={{ marginLeft: "5px" }}>
              <FormControlLabel
                control={<Checkbox />}
                sx={{ fontSize: { xs: "13px", sm: "unset" } }}
                label="?????ng ?? v???i ch??nh s??ch b???o m???t"
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
              H?????ng d???n
            </Typography>
            <List sx={{ padding: "20px 0", textAlign: "center" }}>
              <ListItem disablePadding>
                <ListItemText>
                  <Typography
                    variant="body1"
                    sx={{ fontSize: { xs: "13px", sm: "unset" } }}>
                    ?????t mua
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemText>
                  <Typography
                    variant="body1"
                    sx={{ fontSize: { xs: "13px", sm: "unset" } }}>
                    Thanh to??n
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemText>
                  <Typography
                    variant="body1"
                    sx={{ fontSize: { xs: "13px", sm: "unset" } }}>
                    Nh???n b??o gi??
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemText>
                  <Typography
                    variant="body1"
                    sx={{ fontSize: { xs: "13px", sm: "unset" } }}>
                    Ch???c n??ng d??? to??n
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemText>
                  <Typography
                    variant="body1"
                    sx={{ fontSize: { xs: "13px", sm: "unset" } }}>
                    T???i catalogue
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
              H??? tr???
            </Typography>
            <List sx={{ paddingTop: "20px" }}>
              <ListItem disablePadding>
                <ListItemText>
                  <Typography
                    variant="body1"
                    sx={{ fontSize: { xs: "13px", sm: "unset" } }}>
                    Qua ??i???n tho???i
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemText>
                  <Typography
                    variant="body1"
                    sx={{ fontSize: { xs: "13px", sm: "unset" } }}>
                    G???i email
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemText>
                  <Typography
                    variant="body1"
                    sx={{ fontSize: { xs: "13px", sm: "unset" } }}>
                    G???p tr???c ti???p
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemText>
                  <Typography
                    variant="body1"
                    sx={{ fontSize: { xs: "13px", sm: "unset" } }}>
                    Danh s??ch v??n ph??ng
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
              V??? doanh nghi???p
            </Typography>
            <List sx={{ paddingTop: "20px" }}>
              <ListItem disablePadding>
                <ListItemText>
                  <Typography
                    variant="body1"
                    sx={{ fontSize: { xs: "13px", sm: "unset" } }}>
                    Gi???i thi???u
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemText>
                  <Typography
                    variant="body1"
                    sx={{ fontSize: { xs: "13px", sm: "unset" } }}>
                    Th??ng tin c??ng ty
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemText>
                  <Typography
                    variant="body1"
                    sx={{ fontSize: { xs: "13px", sm: "unset" } }}>
                    C??c th??ng b??o
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemText>
                  <Typography
                    variant="body1"
                    sx={{ fontSize: { xs: "13px", sm: "unset" } }}>
                    Tin t???c m???i nh???t
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemText>
                  <Typography
                    variant="body1"
                    sx={{ fontSize: { xs: "13px", sm: "unset" } }}>
                    V??n b???n c??ng khai
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
              S???n ph???m, d???ch v???
            </Typography>
            <List sx={{ paddingTop: "20px" }}>
              <ListItem disablePadding>
                <ListItemText>
                  <Typography
                    variant="body1"
                    sx={{ fontSize: { xs: "13px", sm: "unset" } }}>
                    Danh m???c s???n ph???m
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemText>
                  <Typography
                    variant="body1"
                    sx={{ fontSize: { xs: "13px", sm: "unset" } }}>
                    C??c d???ch v???
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemText>
                  <Typography
                    variant="body1"
                    sx={{ fontSize: { xs: "13px", sm: "unset" } }}>
                    Ph???m vi ho???t ?????ng
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemText>
                  <Typography
                    variant="body1"
                    sx={{ fontSize: { xs: "13px", sm: "unset" } }}>
                    H??nh th???c kinh doanh
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
            ?? GDVN, Inc. 2022. Xem h???t l?? duy???t!
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
