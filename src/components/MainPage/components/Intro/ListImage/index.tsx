import {
  Box,
  Button,
  Grid,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
    title: "Bed",
  },
  {
    img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
    title: "Kitchen",
  },
  {
    img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    title: "Sink",
  },
];
function ListImage() {
  return (
    <>
      {/* Mobile */}
      <Box
        sx={{
          display: { xs: "flex", lg: "none" },
          gap: "13px",
          justifyContent: "center",
          width: "100%",
          marginBottom: { xs: "unset", sm: "56px" },
        }}>
        <Box
          sx={{
            width: { xs: "160px", sm: "270px", md: "270px" },
            height: { xs: "300px", sm: "450px", md: "450px" },
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            borderRadius: "10px",
            overflow: "hidden",
            transform: "translateY(-35px)",
          }}>
          <img
            src="https://images.unsplash.com/photo-1549388604-817d15aa0110"
            alt="img"
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "10px",
              overflow: "hidden",
            }}
          />
        </Box>
        <Box
          sx={{
            width: { xs: "160px", sm: "270px", md: "270px" },
            height: { xs: "300px", sm: "450px", md: "450px" },
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            borderRadius: "10px",
            overflow: "hidden",
          }}>
          <img
            src="https://images.unsplash.com/photo-1563298723-dcfebaa392e3"
            alt="img"
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "10px",
              overflow: "hidden",
            }}
          />
        </Box>
      </Box>
      <Grid container sx={{ marginBottom: { xs: "-50px", sm: "unset" } }}>
        <Grid md={12} lg={8} item>
          {/* Desktop */}
          <ImageList
            sx={{
              minWidth: { xs: 160, sm: 400, md: 50, lg: 500 },
              minHeight: { xs: 300, sm: 350, md: 500, lg: 450 },
              display: { xs: "none", lg: "grid" },
              overflow: "visible",
            }}
            variant="quilted"
            cols={3}
            gap={15}>
            {itemData.map((item) => (
              <ImageListItem
                key={item.img}
                sx={{
                  overflow: "hidden",
                  borderRadius: "10px",
                  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                  "&:nth-of-type(2)": {
                    transform: "translateY(48px)!important",
                  },
                }}>
                <img
                  src={`${item.img}?w=161&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  style={{
                    borderRadius: "10px",
                    overflow: "hidden",
                    objectFit: "cover",
                  }}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Grid>
        <Grid
          xs={12}
          lg={4}
          item
          sx={{
            padding: { xs: 0, lg: "0 50px" },
            marginTop: { xs: "56px", sm: "unset" },
          }}>
          <Box>
            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: "28px", sm: "40px" },
                marginBottom: { xs: "unset", sm: "57px" },
                fontWeight: "bold",
              }}>
              Giới thiệu đôi nét doanh nghiệp
            </Typography>
            <Typography
              variant="body1"
              sx={{
                display: "block",
                lineHeight: 1.8,
                marginBottom: { xs: "unset", sm: "30px" },
                fontSize: { xs: "13px", sm: "18px" },
                textAlign: "justify",
              }}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque
              aperiam voluptatum vitae doloremque sed molestias ut nulla
              veritatis quas natus sit a deleniti odio recusandae esse ab nemo
              quia repellendus, exercitationem perferendis aliquid velit
              quibusdam. Perferendis tempore voluptates odio non!
            </Typography>
            <Button
              variant="outlined"
              sx={{
                marginTop: "10px",
                padding: { xs: "0", sm: "8px 20px" },
                textTransform: "unset",
                fontSize: { xs: "10px", sm: "unset" },
                width: { xs: "94px", sm: "unset" },
                height: { xs: "29px", sm: "unset" },
              }}>
              Learn more
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default ListImage;
