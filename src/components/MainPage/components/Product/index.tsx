import {
  Box,
  Button,
  Container,
  Grid,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";

import Slider from "./Slider";
type dataType = {
  img: string;
  title: string;
  cols?: number;
  rows?: number;
};
type dataMobile = {
  img: string;
  title: string;
  cols?: number;
  rows?: number;
};
const itemData: dataType[] = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    cols: 2,
  },
];
const itemDataMobile: dataMobile[] = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    rows: 1,
    cols: 2,
  },
];

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}
function Product() {
  return (
    <Container
      maxWidth="xl"
      sx={{
        padding: {
          xs: "50px 25px",
          sm: "50px 30px",
          md: "50px 30px",
          lg: "100px 30px!important",
        },
        marginBottom: { xs: "-315px", sm: "-130px" },
      }}>
      <Box>
        <Typography
          variant="h3"
          sx={{ fontWeight: 600, fontSize: { xs: "28px", sm: "40px" } }}>
          Các nhóm sản phẩm chính
        </Typography>
        <Grid container sx={{ padding: "12px 0" }}>
          <Grid item lg={6}>
            <Typography
              variant="body1"
              sx={{ lineHeight: 1.6, fontSize: { xs: "13px", sm: "unset" } }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatem perspiciatis esse voluptas adipisci labore quisquam
              dolorum impedit vel quidem eos?
            </Typography>
          </Grid>
          <Grid
            item
            lg={6}
            sx={{
              textAlign: "right",
              margin: {
                xs: "12px 0 30px 0",
                sm: "12px 0 30px 0",
                md: "12px 0 30px 0",
                lg: "unset",
              },
            }}>
            <Button
              variant="outlined"
              sx={{
                // color: "#000",
                // border: "1px solid #000",
                width: { xs: "92px", sm: "unset" },
                height: { xs: "28px", sm: "unset" },
                padding: { xs: "0", sm: "5px 15px" },
                fontSize: { xs: "10px", sm: "12px", md: "unset" },
                // "&:hover": { background: "unset", borderColor: "unset" },
              }}>
              Xem tất cả
            </Button>
          </Grid>
        </Grid>
        {/* Desktop */}
        <ImageList
          sx={{
            width: "100%",
            height: "100%",
            gap: "20px!important",
            display: { xs: "none", sm: "none", md: "none", lg: "grid" },
            "&:first-of-type": {
              height: "820px",
            },
          }}
          variant="quilted"
          cols={4}
          rowHeight={400}>
          {itemData.map((item) => (
            <ImageListItem
              sx={{
                overflow: "hidden",
                borderRadius: "10px",
                transition: "all .3s",
                position: "relative",
                "&:hover": {
                  transform: "scale(1.05)",
                  cursor: "pointer",
                  "&::after": {
                    content: "'Xem thêm'",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#fff",
                    fontSize: "28px",
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    height: "100%",
                    width: "100%",
                    transform: "translate(-50%,-50%)",
                    backgroundColor: "rgba(0,0,0,0.7)",
                  },
                },
                "&:first-of-type": {
                  height: "820px!important",
                },
              }}
              key={item.img}
              cols={item.cols || 1}
              rows={item.rows || 1}>
              <img
                {...srcset(item.img, 121, item.rows, item.cols)}
                alt={item.title}
                style={{
                  borderRadius: "10px",
                }}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
        {/* Mobile */}
        <ImageList
          sx={{
            width: "100%",
            display: { xs: "grid", sm: "grid", md: "grid", lg: "none" },
            height: "fit-content",
            gap: "15px!important",
          }}
          variant="quilted"
          cols={2}
          rowHeight={200}>
          {itemDataMobile.map((item) => (
            <ImageListItem
              sx={{
                overflow: "hidden",
                borderRadius: "10px",
                transition: "all .3s",
                position: "relative",
                "&:hover": {
                  height: "100%",
                  width: "100%",
                  transform: "scale(1.05)",
                  cursor: "pointer",
                  "&::after": {
                    content: "'Xem thêm'",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#fff",
                    fontSize: "28px",
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    height: "100%",
                    width: "100%",
                    transform: "translate(-50%,-50%)",
                    backgroundColor: "rgba(0,0,0,0.7)",
                  },
                },
              }}
              key={item.img}
              cols={item.cols || 1}
              rows={item.rows || 1}>
              <img
                {...srcset(item.img, 121, item.rows, item.cols)}
                alt={item.title}
                style={{ borderRadius: "10px" }}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
      <Box>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 600,
            fontSize: { xs: "28px", sm: "40px" },
            marginTop: { xs: "40px", sm: "40px", md: "80px", lg: "100px" },
          }}>
          Tin tức và bài viết
        </Typography>
        <Grid container sx={{ padding: "12px 0" }}>
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <Typography
              variant="body1"
              sx={{ lineHeight: 1.6, fontSize: { xs: "13px", sm: "unset" } }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatem perspiciatis esse voluptas adipisci labore quisquam
              dolorum impedit vel quidem eos?
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={6}
            sx={{
              textAlign: { lg: "right" },
              margin: { xs: "12px 0", sm: "12px 0", md: "12px 0", lg: "unset" },
            }}>
            <Button
              variant="outlined"
              sx={{
                // color: "#000",
                // border: "1px solid #000",
                width: { xs: "92px", sm: "unset" },
                height: { xs: "28px", sm: "unset" },
                padding: { xs: "0", sm: "5px 15px" },
                fontSize: { xs: "10px", sm: "12px", md: "unset" },
                // "&:hover": { background: "unset", borderColor: "unset" },
              }}>
              Xem tất cả
            </Button>
          </Grid>
        </Grid>
        <Slider />
      </Box>
    </Container>
  );
}

export default Product;
