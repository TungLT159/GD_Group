import {
  Grid,
  Typography,
  Divider,
  Stack,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Card from "./components/Card";
import Carroussel from "./components/Carousel";
import { ChevronRight } from "@mui/icons-material";

function Activity() {
  const [type, setType] = useState(1);

  let cards = [
    {
      key: uuidv4(),
      content: (
        <Card image="https://updates.theme-fusion.com/wp-content/uploads/2017/12/convertplus_thumbnail.jpg" />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card image="https://updates.theme-fusion.com/wp-content/uploads/2017/12/acf_pro.png" />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card image="https://updates.theme-fusion.com/wp-content/uploads/2017/12/layer_slider_plugin_thumb.png" />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card image="https://updates.theme-fusion.com/wp-content/uploads/2016/08/slider_revolution-1.png" />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card image="https://updates.theme-fusion.com/wp-content/uploads/2019/01/pwa_880_660.jpg" />
      ),
    },
  ];
  return (
    <>
      {/* Desktop */}
      <Grid
        container
        sx={{
          margin: "157px 0 100px 0",
          display: { xs: "none", sm: "none", md: "none", lg: "flex" },
        }}>
        <Grid item lg={6} sx={{ paddingRight: "238px" }}>
          <Typography
            variant="h4"
            sx={{ fontSize: "40px", fontWeight: 600, marginBottom: "20px" }}>
            Phạm vi kinh doanh & Loại hình hoạt động
          </Typography>
          <Typography
            variant="body1"
            sx={{ lineHeight: { lg: "28px" }, fontSize: "15px" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quo
            expedita magnam voluptatum culpa ratione officia atque doloremque
            sapiente ut.
          </Typography>
          <List>
            <Divider sx={{ marginTop: "26px", width: "100%" }} />
            <ListItem disablePadding sx={{ width: "100%" }}>
              <ListItemButton onClick={() => setType(1)}>
                <ListItemText>Cấp học</ListItemText>
                <ChevronRight />
              </ListItemButton>
            </ListItem>
            <Divider sx={{ width: "100%" }} />
            <ListItem disablePadding sx={{ width: "100%" }}>
              <ListItemButton onClick={() => setType(2)}>
                <ListItemText>Nhóm sản phẩm</ListItemText>
                <ChevronRight />
              </ListItemButton>
            </ListItem>
            <Divider sx={{ width: "100%" }} />
            <ListItem disablePadding sx={{ width: "100%" }}>
              <ListItemButton onClick={() => setType(3)}>
                <ListItemText>Loại hình hoạt động</ListItemText>
                <ChevronRight />
              </ListItemButton>
            </ListItem>
            <Divider sx={{ width: "100%" }} />
          </List>
          <Grid item container sx={{ padding: "35px 20px" }}>
            {type === 1 && (
              <>
                <Grid item lg={6}>
                  <Stack spacing={3}>
                    <Typography>Mầm non</Typography>
                    <Typography>Tiểu học</Typography>
                  </Stack>
                </Grid>
                <Grid item lg={6}>
                  <Stack spacing={3}>
                    <Typography>Trung học cơ sở</Typography>
                    <Typography>Trung học phổ thông</Typography>
                  </Stack>
                </Grid>
              </>
            )}
            {type === 2 && (
              <>
                <Grid item lg={6}>
                  <Stack spacing={3}>
                    <Typography>Sách tham khảo</Typography>
                    <Typography>Sách giáo khoa</Typography>
                  </Stack>
                </Grid>
                <Grid item lg={6}>
                  <Stack spacing={3}>
                    <Typography>Dụng cụ dạy học</Typography>
                    <Typography>Lớp học thông minh</Typography>
                  </Stack>
                </Grid>
              </>
            )}
            {type === 3 && (
              <>
                <Grid item lg={6}>
                  <Stack spacing={3}>
                    <Typography>Trực tiếp</Typography>
                    <Typography>Online</Typography>
                  </Stack>
                </Grid>
                <Grid item lg={6}>
                  <Stack spacing={3}>
                    <Typography>Qua email</Typography>
                    <Typography>Qua điện thoại</Typography>
                  </Stack>
                </Grid>
              </>
            )}
          </Grid>
        </Grid>
        <Grid item lg={6}>
          <Carroussel
            cards={cards}
            height="550px"
            width="40%"
            margin="0 auto"
            offset={2}
            // showArrows={true}
          />
        </Grid>
      </Grid>
      {/* Mobile */}
      <Grid
        container
        sx={{
          margin: "80px 0",
          display: { xs: "block", sm: "block", md: "block", lg: "none" },
        }}>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          sx={{ marginBottom: { xs: "unset", sm: "60px", md: "60px" } }}>
          <Carroussel
            cards={cards}
            height="550px"
            width="40%"
            margin="0 auto"
            offset={2}
            // showArrows={true}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: "28px", sm: "40px" },
              fontWeight: 600,
              marginBottom: "20px",
              marginTop: { xs: "30px", sm: "30px", md: "30px" },
            }}>
            Phạm vi kinh doanh & Loại hình hoạt động
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: { xs: "13px", sm: "unset" } }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quo
            expedita magnam voluptatum culpa ratione officia atque doloremque
            sapiente ut.
          </Typography>
          <List>
            <Divider sx={{ marginTop: "26px" }} />
            <ListItem disablePadding>
              <ListItemButton
                sx={{ padding: "7px 0 7px 7px" }}
                onClick={() => setType(1)}>
                <ListItemText>
                  <Typography sx={{ fontSize: { xs: "13px", sm: "unset" } }}>
                    Cấp học
                  </Typography>
                </ListItemText>
                <ChevronRight />
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
              <ListItemButton
                sx={{ padding: "7px 0 7px 7px" }}
                onClick={() => setType(2)}>
                <ListItemText>
                  <Typography sx={{ fontSize: { xs: "13px", sm: "unset" } }}>
                    Nhóm sản phẩm
                  </Typography>
                </ListItemText>
                <ChevronRight />
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
              <ListItemButton
                sx={{ padding: "7px 0 7px 7px" }}
                onClick={() => setType(3)}>
                <ListItemText>
                  <Typography sx={{ fontSize: { xs: "13px", sm: "unset" } }}>
                    Loại hình hoạt động
                  </Typography>
                </ListItemText>
                <ChevronRight />
              </ListItemButton>
            </ListItem>
            <Divider />
          </List>
          <Grid item container sx={{ padding: "35px 20px 0 20px" }}>
            {type === 1 && (
              <>
                <Grid item xs={6}>
                  <Stack spacing={3}>
                    <Typography sx={{ fontSize: { xs: "13px", sm: "unset" } }}>
                      Mầm non
                    </Typography>
                    <Typography sx={{ fontSize: { xs: "13px", sm: "unset" } }}>
                      Tiểu học
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={6}>
                  <Stack spacing={3}>
                    <Typography sx={{ fontSize: { xs: "13px", sm: "unset" } }}>
                      Trung học cơ sở
                    </Typography>
                    <Typography sx={{ fontSize: { xs: "13px", sm: "unset" } }}>
                      Trung học phổ thông
                    </Typography>
                  </Stack>
                </Grid>
              </>
            )}
            {type === 2 && (
              <>
                <Grid item xs={6}>
                  <Stack spacing={3}>
                    <Typography sx={{ fontSize: { xs: "13px", sm: "unset" } }}>
                      Sách tham khảo
                    </Typography>
                    <Typography sx={{ fontSize: { xs: "13px", sm: "unset" } }}>
                      Sách giáo khoa
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={6}>
                  <Stack spacing={3}>
                    <Typography sx={{ fontSize: { xs: "13px", sm: "unset" } }}>
                      Thiết bị dạy học
                    </Typography>
                    <Typography sx={{ fontSize: { xs: "13px", sm: "unset" } }}>
                      Lớp học thông minh
                    </Typography>
                  </Stack>
                </Grid>
              </>
            )}
            {type === 3 && (
              <>
                <Grid item xs={6}>
                  <Stack spacing={3}>
                    <Typography sx={{ fontSize: { xs: "13px", sm: "unset" } }}>
                      Trực tiếp
                    </Typography>
                    <Typography sx={{ fontSize: { xs: "13px", sm: "unset" } }}>
                      Online
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={6}>
                  <Stack spacing={3}>
                    <Typography sx={{ fontSize: { xs: "13px", sm: "unset" } }}>
                      Qua email
                    </Typography>
                    <Typography sx={{ fontSize: { xs: "13px", sm: "unset" } }}>
                      Qua điện thoại
                    </Typography>
                  </Stack>
                </Grid>
              </>
            )}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Activity;
