import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import {
  Box,
  Button,
  Card,
  CardContent,
  // CardHeader,
  Container,
  Grid,
  // styled,
} from "@mui/material";
import { CarouselThumbnail } from "../../../../sections/_examples/extra/carousel";
import {
  AssignmentTurnedInOutlined,
  AutoStoriesOutlined,
  BorderColorOutlined,
} from "@mui/icons-material";
const slideImages = [
  {
    url: "https://file.hstatic.net/200000407521/file/giaiphap_gd_336ee799759646fba828427a0e5d71f5.jpg",
    description: "Slide 1",
  },
  {
    url: "https://file.hstatic.net/200000407521/file/gdgroup_6d9454db00454426b42ce6de3bb1a268.jpg",
    description: "Slide 2",
  },
  {
    url: "https://file.hstatic.net/200000407521/file/thietbigiaoductoithieu_gd_ef16c1c16ee644178eb5079cda4d429a.jpg",
    description: "Slide 3",
  },
  {
    url: "https://file.hstatic.net/200000407521/file/lyhoasinh_gd_2cc0a2ecae424e1599f9cfc052f50bb3.jpg",
    description: "Slide 4",
  },
];

// const BannerImg = styled("div")(({ theme }) => ({
//   maxWidth: "1680px",
//   //   maxHeight: "234px",
//   maxHeight: "525px",
//   overflow: "hidden!",
//   borderRadius: "10px!important",
// }));
function Banner() {
  return (
    <>
      {/* banner mobile */}
      <Slide
        duration={3000}
        arrows={false}
        easing="cubic-out"
        // style={{
        //   overflow: "hidden!important",
        //   borderRadius: "10px!important",
        //   // boxShadow: "rgba(0, 0, 0, 0.15) 0px 2px 8px",
        // }}
        autoplay={true}>
        {slideImages.map((slideImage, index) => (
          <div
            className="each-slide"
            key={index}
            style={{
              overflow: "hidden!important",
              borderRadius: "10px",
            }}>
            <Box
              sx={{
                display: { xs: "block", sm: "none" },
                minWidth: "382px",
                minHeight: "274px",
              }}>
              <img
                src={slideImage.url}
                alt={slideImage.description}
                style={{
                  width: "100%",
                  height: "274px",
                  boxShadow: "rgba(0, 0, 0, 0.15) 0px 2px 8px",
                }}
              />
            </Box>
          </div>
        ))}
      </Slide>
      <Container maxWidth="xl" sx={{ padding: "0 20px", marginTop: "40px" }}>
        <Card sx={{ display: { xs: "none", sm: "block" } }}>
          {/* <CardHeader title="Carousel Thumbnail" /> */}
          <CardContent>
            <CarouselThumbnail
              // data={_carouselsExample}
              data={slideImages}
            />
          </CardContent>
        </Card>
        {/* <Slide
          duration={3000}
          arrows={false}
          easing="cubic-out"
          // style={{
          //   overflow: "hidden!important",
          //   borderRadius: "10px!important",
          // }}
          autoplay={true}>
          {slideImages.map((slideImage, index) => (
            <div
              className="each-slide"
              key={index}
              style={{
                overflow: "hidden!important",
                borderRadius: "10px",
              }}>
              <BannerImg
                sx={{
                  display: { xs: "none", sm: "block", marginTop: "40px" },
                }}>
                <img
                  src={slideImage.url}
                  alt={slideImage.description}
                  style={{
                    width: "100%",
                    height: "100%",
                    boxShadow: "rgba(0, 0, 0, 0.15) 0px 2px 8px",
                    borderRadius: "10px",
                    overflow: "hidden!important",
                  }}
                />
              </BannerImg>
            </div>
          ))}
        </Slide> */}
        {/* Mobile */}
        <Grid
          container
          sx={{
            display: { xs: "block", sm: "block", md: "block", lg: "none" },
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "20px!important",
            marginBottom: "0!important",
          }}>
          <Grid item sm={12} md={12}>
            <Button
              variant="contained"
              sx={{
                boxShadow:
                  "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
                width: "100%",
                marginBottom: "10px",
                fontSize: { xs: "14px", sm: "18px" },
              }}>
              <AutoStoriesOutlined
                sx={{
                  fontSize: { xs: "20px", sm: "30px" },
                  marginRight: "7px",
                }}
              />
              Catalogue online
            </Button>
          </Grid>
          <Grid item sm={12} md={12}>
            <Button
              variant="contained"
              sx={{
                boxShadow:
                  "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
                width: "100%",
                marginBottom: "10px",
                fontSize: { xs: "14px", sm: "18px" },
              }}>
              <AssignmentTurnedInOutlined
                sx={{
                  fontSize: { xs: "20px", sm: "30px" },
                  marginRight: "7px",
                }}
              />
              Báo giá
            </Button>
          </Grid>
          <Grid item sm={12} md={12}>
            <Button
              variant="contained"
              sx={{
                boxShadow:
                  "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
                width: "100%",
                marginBottom: "10px",
                fontSize: { xs: "14px", sm: "18px" },
              }}>
              <BorderColorOutlined
                sx={{
                  fontSize: { xs: "20px", sm: "30px" },
                  marginRight: "7px",
                }}
              />
              Xây dựng dự toán
            </Button>
          </Grid>
          <hr style={{ margin: "12px 0 32px 0" }} />
        </Grid>

        {/* Desktop */}
        <Box
          sx={{
            display: { xs: "none", sm: "none", md: "none", lg: "flex" },
            marginTop: "40px",
            paddingBottom: "40px",
            justifyContent: "space-between",
            borderBottom: "1px solid #ccc",
          }}>
          <Button
            variant="contained"
            sx={{
              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
              maxWidth: "400px",
              width: "400px",
              fontSize: "18px",
            }}>
            <AutoStoriesOutlined />
            Catalogue online
          </Button>
          <Button
            variant="contained"
            sx={{
              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
              maxWidth: "400px",
              width: "400px",

              fontSize: "18px",
            }}>
            <AssignmentTurnedInOutlined />
            Báo giá
          </Button>
          <Button
            variant="contained"
            sx={{
              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
              maxWidth: "400px",
              width: "400px",
              fontSize: "18px",
            }}>
            <BorderColorOutlined />
            Xây dựng dự toán
          </Button>
        </Box>
      </Container>
    </>
  );
}

export default Banner;
